pub use proto_gazette::broker;

pub mod journal;
pub mod uuid;

mod router;
pub use router::Router;

mod auth;
pub use auth::Auth;

#[derive(Debug, thiserror::Error)]
pub enum Error {
    #[error("invalid gRPC endpoint: '{0}'")]
    InvalidEndpoint(String),
    #[error(transparent)]
    Transport(#[from] tonic::transport::Error),
    #[error(transparent)]
    Grpc(#[from] tonic::Status),
    #[error("failed to fetch fragment from storage URL")]
    FetchFragment(#[source] reqwest::Error),
    #[error("failed to read fetched fragment from storage URL")]
    ReadFragment(#[source] std::io::Error),
    #[error("invalid bearer token")]
    BearerToken(#[source] tonic::metadata::errors::InvalidMetadataValue),
    #[error("unexpected broker status: {0:?}")]
    BrokerStatus(broker::Status),
    #[error("failed to parse document near journal offset {0}")]
    Parsing(i64, #[source] std::io::Error),
    #[error("{0}")]
    Protocol(&'static str),
    #[error("failed to parse document UUID {0:?}")]
    UUIDParse(String, #[source] ::uuid::Error),
    #[error("UUID {0} is not a V1 UUID")]
    UUIDNotV1(::uuid::Uuid),
}

pub type Result<T> = std::result::Result<T, Error>;