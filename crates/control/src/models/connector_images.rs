use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};
use sqlx::FromRow;

use crate::models::Id;

/// A ConnectorImage is a specific version of a Connector.
///
/// A `ConnectorImage` is a Rust representation of the Postgres database
/// metadata about a specific image.
#[derive(Debug, Deserialize, FromRow, Serialize)]
pub struct ConnectorImage {
    /// The Connector to which this image belongs to.
    pub connector_id: Id,
    /// When this record was created.
    pub created_at: DateTime<Utc>,
    /// Primary key for this record.
    pub id: Id,
    /// The full name to this image, including registry. Eg. `ghcr.io/estuary/source-hello-world`.
    pub name: String,
    /// The full sha256 sum which uniquely identifies this image.
    pub digest: String,
    /// The specific tag we are exposing as canonical for this image.
    pub tag: String,
    /// When this record was last updated.
    pub updated_at: DateTime<Utc>,
}

impl ConnectorImage {
    /// Returns the name with tag.
    ///
    /// eg. `ghcr.io/estuary/source-hello-world:01fb856`
    pub fn full_name(&self) -> String {
        format!("{}:{}", self.name, self.tag)
    }

    /// Returns the fully resolved version of this image from the path and the digest.
    ///
    /// eg. `ghcr.io/estuary/source-hello-world@sha256:15751ba960870e5ba233ebfe9663fe8a236c8ce213b43fbf4cccc4e485594600`
    pub fn pinned_version(&self) -> String {
        format!("{}@sha256:{}", self.name, self.digest)
    }
}

/// CreateConnectorImage represents the data required to insert a new
/// ConnectorImage, with remaining fields from `ConnectorImage` generated by
/// Postgres.
#[derive(Debug, Deserialize, FromRow, Serialize)]
pub struct CreateConnectorImage {
    pub connector_id: Id,
    pub name: String,
    pub digest: String,
    pub tag: String,
}
