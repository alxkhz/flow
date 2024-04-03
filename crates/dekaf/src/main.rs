use anyhow::Context;
use dekaf::Session;
use futures::{FutureExt, TryStreamExt};
use tokio::io::AsyncWriteExt;
use tracing_subscriber::{filter::LevelFilter, EnvFilter};

// on auth:
// - map refresh token to access token
// - refresh auth roles & collections but don't fetch partitions

// - on metadata
//   - if refresh time is > $interval, then refresh collections & auth roles.
//   - if partition count is 0, fetch partitions and store
//     as needed, obtain a DPG token for a covering auth role

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

    let listener = tokio::net::TcpListener::bind(format!("[::]:{ADVERTISE_PORT}"))
        .await
        .context("failed to bind server port")?;
    tracing::info!(ADVERTISE_PORT, "now listening");

    loop {
        tokio::select! {
            accept = listener.accept() => {
                let (socket, addr) = accept?;

                let session = Session::new(
                    client.clone(),
                    ADVERTISE_HOST.to_string(),
                    ADVERTISE_PORT,
                );
                tokio::spawn(serve_connection(session, socket, addr, stop.clone()));
            }
            _ = &mut stop => break,
        }
    }

    Ok(())
}

#[tracing::instrument(level = "info", ret, err(level = "warn"), skip(dekaf, socket, _stop), fields(?addr))]
async fn serve_connection(
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
pub const ADVERTISE_PORT: u16 = 9092;
