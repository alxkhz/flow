use anyhow::Context;
use gazette::{broker, journal, uuid};
use proto_flow::flow;

pub async fn fetch_all_collection_names(
    client: &postgrest::Postgrest,
) -> anyhow::Result<Vec<String>> {
    #[derive(serde::Deserialize)]
    struct Row {
        catalog_name: String,
    }
    let rows: Vec<Row> = client
        .from("live_specs_ext")
        .eq("spec_type", "collection")
        .select("catalog_name")
        .execute()
        .await
        .and_then(|r| r.error_for_status())
        .context("listing current catalog specifications")?
        .json()
        .await?;

    Ok(rows
        .into_iter()
        .map(|Row { catalog_name }| catalog_name)
        .collect())
}

pub struct Collection {
    pub client: journal::Client,
    pub partitions: Vec<Partition>,
    pub spec: flow::CollectionSpec,

    // TODO(johnny)
    pub not_before: uuid::Clock,
}

pub struct Partition {
    pub spec: broker::JournalSpec,
    pub create_revision: i64,
    pub mod_revision: i64,
    pub route: broker::Route,
}

impl Collection {
    pub async fn new(
        client: &postgrest::Postgrest,
        collection: &str,
    ) -> anyhow::Result<Option<Self>> {
        // Build a journal client and use it to fetch partitions while concurrently
        // fetching the collection's metadata from the control plane.
        let client_partitions = async {
            let collection_client = Self::build_journal_client(&client, collection).await?;
            let partitions = Self::fetch_partitions(&collection_client, collection).await?;
            Ok((collection_client, partitions))
        };
        let (spec, client_partitions): (anyhow::Result<_>, anyhow::Result<_>) =
            futures::join!(Self::fetch_spec(&client, collection), client_partitions);

        let Some(spec) = spec? else { return Ok(None) };
        let (collection_client, partitions) = client_partitions?;

        tracing::info!(
            collection,
            partitions = partitions.len(),
            "built collection"
        );

        Ok(Some(Self {
            client: collection_client,
            spec,
            partitions,
            not_before: uuid::Clock::default(),
        }))
    }

    async fn fetch_spec(
        client: &postgrest::Postgrest,
        collection: &str,
    ) -> anyhow::Result<Option<flow::CollectionSpec>> {
        #[derive(serde::Deserialize)]
        struct Row {
            built_spec: flow::CollectionSpec,
        }

        let mut rows: Vec<Row> = client
            .from("live_specs_ext")
            .eq("spec_type", "collection")
            .eq("catalog_name", collection)
            .select("built_spec")
            .execute()
            .await
            .and_then(|r| r.error_for_status())
            .context("listing current collection specifications")?
            .json()
            .await?;

        if let Some(Row { built_spec }) = rows.pop() {
            Ok(Some(built_spec))
        } else {
            Ok(None)
        }
    }

    async fn fetch_partitions(
        client: &journal::Client,
        collection: &str,
    ) -> anyhow::Result<Vec<Partition>> {
        let request = broker::ListRequest {
            selector: Some(broker::LabelSelector {
                include: Some(labels::build_set([(labels::COLLECTION, collection)])),
                exclude: None,
            }),
        };
        let response = client.list(request).await?;
        let mut partitions = Vec::with_capacity(response.journals.len());

        for journal in response.journals {
            partitions.push(Partition {
                create_revision: journal.create_revision,
                mod_revision: journal.mod_revision,
                route: journal.route.context("expected journal Route")?,
                spec: journal.spec.context("expected journal Spec")?,
            })
        }

        // Establish stability of exposed partition indices by ordering journals
        // by their created revision, and _then_ by their name.
        partitions.sort_by(|l, r| {
            (l.create_revision, &l.spec.name).cmp(&(r.create_revision, &r.spec.name))
        });

        Ok(partitions)
    }

    pub async fn fetch_partition_offset(
        &self,
        partition_index: usize,
        timestamp_millis: i64,
    ) -> anyhow::Result<Option<(i64, i64)>> {
        let Some(partition) = self.partitions.get(partition_index) else {
            return Ok(None);
        };
        let (not_before_sec, _) = self.not_before.to_unix();

        let begin_mod_time = if timestamp_millis == -1 {
            i64::MAX // Sentinel for "largest available offset",
        } else if timestamp_millis == -2 {
            0 // Sentinel for "first available offset"
        } else {
            let timestamp = timestamp_millis / 1_000;
            if timestamp < not_before_sec as i64 {
                not_before_sec as i64
            } else {
                timestamp as i64
            }
        };

        let request = broker::FragmentsRequest {
            journal: partition.spec.name.clone(),
            begin_mod_time,
            page_limit: 1,
            ..Default::default()
        };
        let response = self.client.list_fragments(request).await?;

        let (offset, mod_time) = match response.fragments.get(0) {
            Some(broker::fragments_response::Fragment {
                spec: Some(spec), ..
            }) => {
                if timestamp_millis == -1 {
                    (spec.end, spec.mod_time)
                } else {
                    (spec.begin, spec.mod_time)
                }
            }
            _ => (0, 0),
        };

        tracing::info!(
            collection = self.spec.name,
            mod_time,
            offset,
            partition_index,
            timestamp_millis,
            "fetched offset"
        );

        Ok(Some((offset, mod_time)))
    }

    async fn build_journal_client(
        client: &postgrest::Postgrest,
        collection: &str,
    ) -> anyhow::Result<journal::Client> {
        let body = serde_json::json!({
            "prefixes": [collection],
        })
        .to_string();

        #[derive(serde::Deserialize)]
        struct Auth {
            token: String,
            gateway_url: String,
        }

        let auth: [Auth; 1] = client
            .rpc("gateway_auth_token", body)
            .build()
            .send()
            .await
            .and_then(|r| r.error_for_status())
            .context("requesting data plane gateway auth token")?
            .json()
            .await?;

        tracing::info!(
            collection,
            gateway = auth[0].gateway_url,
            "fetched data-plane token"
        );

        let router = journal::Router::new(
            &auth[0].gateway_url,
            gazette::Auth::new(Some(auth[0].token.clone()))
                .context("failed to build gazette router")?,
            "dekaf",
        )?;
        let client = journal::Client::new(Default::default(), router);

        Ok(client)
    }
}
