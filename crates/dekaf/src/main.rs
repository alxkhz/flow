use anyhow::Context;
use dekaf::Session;
use futures::{FutureExt, TryStreamExt};
use tokio::io::AsyncWriteExt;
use tracing_subscriber::{filter::LevelFilter, EnvFilter};

async fn example_avro_schema_key() -> axum::Json<serde_json::Value> {
    let raw = serde_json::json!({
      "type": "record",
      "name": "test",
      "fields" : [
        {"name": "ak", "type": "long"},
        {"name": "bk", "type": "string"}
      ]
    })
    .to_string();

    serde_json::json!({
        "schema": raw
    })
    .into()
}

async fn example_avro_schema_value() -> axum::Json<serde_json::Value> {
    let raw = serde_json::json!({
      "type": "record",
      "name": "test",
      "fields" : [
        {"name": "aaa", "type": "long"},
        {"name": "bbb", "type": "string"}
      ]
    })
    .to_string();

    serde_json::json!({
        "schema": raw
    })
    .into()
}

async fn example_subjects(
    axum::TypedHeader(basic_auth): axum::TypedHeader<
        axum::headers::Authorization<axum::headers::authorization::Basic>,
    >,
) -> axum::Json<serde_json::Value> {
    let token = basic_auth.password();

    tracing::info!(?basic_auth, "GOT BASIC AUTH");

    // These appear to be collection names.
    serde_json::json!(["demo/wikipedia/recentchange-sampled"]).into()
}

async fn example_subjects_latest_key() -> axum::Json<serde_json::Value> {
    let raw = serde_json::json!({
      "type": "record",
      "name": "test",
      "fields" : [
        {"name": "ak", "type": "long"},
        {"name": "bk", "type": "string"}
      ]
    })
    .to_string();

    serde_json::json!({
        "id": 843207265,
        "schema": raw,
        "schemaType": "AVRO",
        "subject": "demo/wikipedia/recentchange-sampled-key",
        "version": 1,
    })
    .into()
}

async fn example_subjects_latest_value() -> axum::Json<serde_json::Value> {
    let raw = serde_json::json!({
      "type": "record",
      "name": "test",
      "fields" : [
        {"name": "aaa", "type": "long"},
        {"name": "bbb", "type": "string"}
      ]
    })
    .to_string();

    serde_json::json!({
        "id": 843207266,
        "schema": raw,
        "schemaType": "AVRO",
        "subject": "demo/wikipedia/recentchange-sampled-value",
        "version": 1,
    })
    .into()
}

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    let env_filter = EnvFilter::builder()
        .with_default_directive(LevelFilter::WARN.into()) // Otherwise it's ERROR.
        .from_env_lossy();

    tracing_subscriber::fmt::fmt()
        .with_env_filter(env_filter)
        .with_writer(std::io::stderr)
        .init();

    let mut stop = async {
        tokio::signal::ctrl_c()
            .await
            .expect("failed to listen for CTRL-C")
    }
    .shared();

    let client = postgrest::Postgrest::new(PUBLIC_ENDPOINT).insert_header("apikey", PUBLIC_TOKEN);

    let schema_router = axum::Router::new()
        .route(
            "/schemas/ids/843207265",
            axum::routing::get(example_avro_schema_key),
        )
        .route(
            "/schemas/ids/843207266",
            axum::routing::get(example_avro_schema_value),
        )
        .route("/subjects", axum::routing::get(example_subjects))
        .route(
            "/subjects/demo%2Fwikipedia%2Frecentchange-sampled-key/versions/latest",
            axum::routing::get(example_subjects_latest_key),
        )
        .route(
            "/subjects/demo%2Fwikipedia%2Frecentchange-sampled-value/versions/latest",
            axum::routing::get(example_subjects_latest_value),
        )
        .layer(tower_http::trace::TraceLayer::new_for_http());

    let kafka_listener = tokio::net::TcpListener::bind(format!("[::]:{ADVERTISE_KAFKA_PORT}"))
        .await
        .context("failed to bind server port")?;
    let schema_listener = std::net::TcpListener::bind(format!("[::]:{ADVERTISE_SCHEMA_PORT}"))
        .context("failed to bind server port")?;

    tracing::info!(ADVERTISE_KAFKA_PORT, ADVERTISE_SCHEMA_PORT, "now listening");

    let schema_task = axum::Server::from_tcp(schema_listener)
        .unwrap()
        .serve(schema_router.into_make_service());
    tokio::spawn(async move { schema_task.await.unwrap() });

    loop {
        tokio::select! {
            accept = kafka_listener.accept() => {
                let (socket, addr) = accept?;

                let session = Session::new(
                    client.clone(),
                    ADVERTISE_HOST.to_string(),
                    ADVERTISE_KAFKA_PORT,
                );
                tokio::spawn(serve(session, socket, addr, stop.clone()));
            }
            _ = &mut stop => break,
        }
    }

    Ok(())
}

#[tracing::instrument(level = "info", ret, err(level = "warn"), skip(dekaf, socket, _stop), fields(?addr))]
async fn serve(
    mut dekaf: Session,
    mut socket: tokio::net::TcpStream,
    addr: std::net::SocketAddr,
    _stop: impl futures::Future<Output = ()>, // TODO(johnny): stop.
) -> anyhow::Result<()> {
    tracing::info!("accepted client connection");

    socket.set_nodelay(true)?;
    let (r, mut w) = socket.split();

    let mut r = tokio_util::codec::FramedRead::new(
        r,
        tokio_util::codec::LengthDelimitedCodec::builder()
            .big_endian()
            .length_field_length(4)
            .max_frame_length(1 << 27) // 128 MiB
            .new_codec(),
    );

    let mut out = bytes::BytesMut::new();
    let mut raw_sasl_auth = false;
    while let Some(frame) = r.try_next().await? {
        () = dekaf::dispatch_request_frame(&mut dekaf, &mut raw_sasl_auth, frame, &mut out).await?;
        () = w.write_all(&mut out).await?;
        out.clear();
    }
    Ok(())
}

pub const PUBLIC_TOKEN: &str = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5cmNubXV6enlyaXlwZGFqd2RrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDg3NTA1NzksImV4cCI6MTk2NDMyNjU3OX0.y1OyXD3-DYMz10eGxzo1eeamVMMUwIIeOoMryTRAoco";
pub const PUBLIC_ENDPOINT: &str = "https://eyrcnmuzzyriypdajwdk.supabase.co/rest/v1";

pub const ADVERTISE_HOST: &str = "127.0.0.1";
pub const ADVERTISE_KAFKA_PORT: u16 = 9092;
pub const ADVERTISE_SCHEMA_PORT: u16 = 9093;
