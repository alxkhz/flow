use super::{Read, Reader};
use crate::materialize::ResponseStream;
use crate::{rocksdb::RocksDB, verify, LogHandler, Runtime};
use anyhow::Context;
use futures::{channel::mpsc, TryStreamExt};
use proto_flow::flow;
use proto_flow::materialize::{request, response, Request, Response};
use proto_flow::runtime::{self, materialize_request_ext};
use std::pin::Pin;

pub fn run_materialize<L: LogHandler>(
    reader: impl Reader,
    runtime: Runtime<L>,
    sessions: Vec<usize>,
    spec: &flow::MaterializationSpec,
    state: models::RawValue,
    state_dir: &std::path::Path,
    timeout: std::time::Duration,
) -> impl ResponseStream {
    let spec = spec.clone();
    let state_dir = state_dir.to_owned();
    let mut state: String = state.into();

    // TODO(johnny): extract from spec?
    let version = super::unique_version();

    coroutines::try_coroutine(move |mut co| async move {
        let (mut request_tx, request_rx) = mpsc::channel(crate::CHANNEL_BUFFER);
        let response_rx = runtime.serve_materialize(request_rx);
        tokio::pin!(response_rx);

        // Send Apply.
        let apply = Request {
            apply: Some(request::Apply {
                materialization: Some(spec.clone()),
                dry_run: false,
                version: version.clone(),
            }),
            ..Default::default()
        };
        request_tx.try_send(Ok(apply)).expect("sender is empty");

        // Receive Applied.
        match response_rx.try_next().await? {
            Some(applied) if applied.applied.is_some() => {
                () = co.yield_(applied).await;
            }
            response => return verify("runtime", "Applied").fail(response),
        }

        let state_dir = state_dir.to_str().context("tempdir is not utf8")?;
        let rocksdb_desc = Some(runtime::RocksDbDescriptor {
            rocksdb_env_memptr: 0,
            rocksdb_path: state_dir.to_owned(),
        });
        let open_ext = materialize_request_ext::Open {
            rocksdb_descriptor: rocksdb_desc.clone(),
        };

        for target_transactions in sessions {
            () = run_session(
                &mut co,
                &open_ext,
                reader.clone(),
                &mut request_tx,
                &mut response_rx,
                &spec,
                &mut state,
                target_transactions,
                timeout,
                &version,
            )
            .await?;
        }

        std::mem::drop(request_tx);
        verify("runtime", "EOF").is_eof(response_rx.try_next().await?)?;

        // Re-open RocksDB.
        let rocksdb = RocksDB::open(rocksdb_desc)?;

        tracing::debug!(
            checkpoint = ?::ops::DebugJson(rocksdb.load_checkpoint()?),
            "final runtime checkpoint",
        );

        // Extract and yield the final connector state
        let state = rocksdb.load_connector_state()?;
        () = co
            .yield_(Response {
                started_commit: Some(response::StartedCommit {
                    state: state.map(|updated_json| flow::ConnectorState {
                        updated_json,
                        merge_patch: false,
                    }),
                }),
                ..Default::default()
            })
            .await;

        Ok(())
    })
}

async fn run_session(
    co: &mut coroutines::Suspend<Response, ()>,
    open_ext: &materialize_request_ext::Open,
    reader: impl Reader,
    request_tx: &mut mpsc::Sender<anyhow::Result<Request>>,
    response_rx: &mut Pin<&mut impl ResponseStream>,
    spec: &flow::MaterializationSpec,
    state: &mut String,
    target_transactions: usize,
    timeout: std::time::Duration,
    version: &str,
) -> anyhow::Result<()> {
    // Send Open.
    let open = Request {
        open: Some(request::Open {
            materialization: Some(spec.clone()),
            version: version.to_string(),
            range: Some(flow::RangeSpec {
                key_begin: 0,
                key_end: u32::MAX,
                r_clock_begin: 0,
                r_clock_end: u32::MAX,
            }),
            state_json: std::mem::take(state),
        }),
        ..Default::default()
    }
    .with_internal(|internal| {
        internal.open = Some(open_ext.clone());
    });
    request_tx.try_send(Ok(open)).expect("sender is empty");

    // Receive Opened.
    let verify_opened = verify("runtime", "Opened");
    let opened = verify_opened.not_eof(response_rx.try_next().await?)?;
    let Response {
        opened: Some(response::Opened { runtime_checkpoint }),
        ..
    } = &opened
    else {
        return verify_opened.fail(opened);
    };

    let checkpoint = runtime_checkpoint.clone().unwrap_or_default();
    () = co.yield_(opened).await;

    // Send initial Acknowledge of the session.
    request_tx
        .try_send(Ok(Request {
            acknowledge: Some(request::Acknowledge {}),
            ..Default::default()
        }))
        .expect("sender is empty");

    let read_rx = reader.start_for_materialization(&spec, checkpoint);
    tokio::pin!(read_rx);

    for _transaction in 0..target_transactions {
        let deadline = tokio::time::sleep(timeout);
        tokio::pin!(deadline);

        let mut started = false;
        let mut saw_acknowledged = false;

        // Read documents until a checkpoint.
        let checkpoint = loop {
            let read = tokio::select! {
                read = read_rx.try_next() => read?,
                () = deadline.as_mut(), if !started => {
                    tracing::info!(?timeout, "session ending upon reaching timeout");
                    return Ok(());
                },
            };
            started = true;

            match read {
                None => {
                    tracing::info!("session ending because reader returned EOF");
                    return Ok(());
                }
                Some(Read::Checkpoint(checkpoint)) => break checkpoint, // Commit below.
                Some(Read::Document { binding, doc }) => {
                    // Forward to the runtime as a Load document.
                    let request = Request {
                        load: Some(request::Load {
                            binding,
                            key_json: doc,
                            ..Default::default()
                        }),
                        ..Default::default()
                    };

                    () = crate::exchange(Ok(request), request_tx, response_rx)
                        .try_for_each(|response| {
                            futures::future::ready(if response.acknowledged.is_some() {
                                saw_acknowledged = true;
                                Ok(())
                            } else {
                                verify("runtime", "Acknowledged").fail(response)
                            })
                        })
                        .await?;

                    continue;
                }
            };
        };

        // Receive Acknowledged, if we haven't already.
        if !saw_acknowledged {
            match response_rx.try_next().await? {
                Some(response) if response.acknowledged.is_some() => (),
                response => return verify("runtime", "Acknowledged").fail(response),
            }
        }

        // Send Flush.
        let flush = Request {
            flush: Some(request::Flush {}),
            ..Default::default()
        };
        () = crate::exchange(Ok(flush), request_tx, response_rx)
            .try_for_each(|response| async { verify("runtime", "no response").fail(response) })
            .await?;

        // Receive Flushed.
        match response_rx.try_next().await? {
            Some(response) if response.flushed.is_some() => {
                () = co.yield_(response).await;
            }
            response => return verify("runtime", "Flushed").fail(response),
        }

        // Send StartCommit.
        request_tx
            .try_send(Ok(Request {
                start_commit: Some(request::StartCommit {
                    runtime_checkpoint: Some(checkpoint),
                }),
                ..Default::default()
            }))
            .expect("sender is empty");

        // Receive StartedCommit.
        match response_rx.try_next().await? {
            Some(response) if response.started_commit.is_some() => {
                () = co.yield_(response).await;
            }
            response => return verify("runtime", "StartedCommit").fail(response),
        }

        // Send Acknowledge.
        request_tx
            .try_send(Ok(Request {
                acknowledge: Some(request::Acknowledge {}),
                ..Default::default()
            }))
            .expect("sender is empty");
    }

    Ok(())
}
