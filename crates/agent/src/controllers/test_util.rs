use std::collections::{BTreeMap, BTreeSet};
use std::fmt::Debug;

use chrono::{DateTime, Utc};
use rand::RngCore;
use serde::Serialize;
use serde_json::Value;
use tables::{DraftCapture, DraftCollection, DraftMaterialization, DraftSpecs, DraftTest, Id};

use crate::publications;

use super::{ControlJob, ControlPlane, ControllerState, ControllerUpdate, PublicationResult};

pub fn id_of(id: &str) -> Id {
    id.parse().expect("invalid id str")
}

pub fn random_id() -> Id {
    let bytes = rand::thread_rng().next_u64().to_le_bytes();
    Id::new(bytes)
}

pub fn live_captures(rows: Vec<(Id, &str, Value, Id)>) -> tables::LiveCaptures {
    rows.into_iter()
        .map(|(id, name, spec, last_pub)| tables::LiveCapture {
            id,
            catalog_name: name.to_owned(),
            last_pub_id: last_pub,
            spec: serde_json::from_value(spec).expect("invalid capture spec"),
            built_spec: Default::default(),
        })
        .collect()
}

pub fn live_materializations(rows: Vec<(Id, &str, Value, Id)>) -> tables::LiveMaterializations {
    rows.into_iter()
        .map(|(id, name, spec, last_pub)| tables::LiveMaterialization {
            id,
            catalog_name: name.to_owned(),
            last_pub_id: last_pub,
            spec: serde_json::from_value(spec).expect("invalid materialization spec"),
            built_spec: Default::default(),
        })
        .collect()
}

pub fn live_tests(rows: Vec<(Id, &str, Value, Id)>) -> tables::LiveTests {
    rows.into_iter()
        .map(|(id, name, spec, last_pub)| tables::LiveTest {
            id,
            catalog_name: name.to_owned(),
            last_pub_id: last_pub,
            spec: serde_json::from_value(spec).expect("invalid materialization spec"),
            built_spec: Default::default(),
        })
        .collect()
}

pub fn live_collections(rows: Vec<(Id, &str, Value, Option<&str>, Id)>) -> tables::LiveCollections {
    rows.into_iter()
        .map(|(id, name, spec, schema_md5, last_pub)| {
            live_collection(id, name, spec, schema_md5, last_pub)
        })
        .collect()
}

pub fn draft_captures(rows: Vec<(&str, Value, Option<Id>)>) -> tables::DraftCaptures {
    rows.into_iter()
        .map(|(name, spec, expect_pub_id)| tables::DraftCapture {
            catalog_name: name.to_owned(),
            expect_pub_id,
            spec: serde_json::from_value(spec).expect("invalid draft capture spec"),
        })
        .collect()
}
pub fn draft_collections(rows: Vec<(&str, Value, Option<Id>)>) -> tables::DraftCollections {
    rows.into_iter()
        .map(|(name, spec, expect_pub_id)| tables::DraftCollection {
            catalog_name: name.to_owned(),
            expect_pub_id,
            spec: serde_json::from_value(spec).expect("invalid draft capture spec"),
        })
        .collect()
}
pub fn draft_materializations(
    rows: Vec<(&str, Value, Option<Id>)>,
) -> tables::DraftMaterializations {
    rows.into_iter()
        .map(|(name, spec, expect_pub_id)| tables::DraftMaterialization {
            catalog_name: name.to_owned(),
            expect_pub_id,
            spec: serde_json::from_value(spec).expect("invalid draft materialization spec"),
        })
        .collect()
}
pub fn draft_test(rows: Vec<(&str, Value, Option<Id>)>) -> tables::DraftTests {
    rows.into_iter()
        .map(|(name, spec, expect_pub_id)| tables::DraftTest {
            catalog_name: name.to_owned(),
            expect_pub_id,
            spec: serde_json::from_value(spec).expect("invalid draft test spec"),
        })
        .collect()
}

pub fn live_collection(
    id: Id,
    name: &str,
    spec: Value,
    inferred_schema_md5: Option<&str>,
    last_pub_id: Id,
) -> tables::LiveCollection {
    tables::LiveCollection {
        id,
        catalog_name: name.to_string(),
        last_pub_id,
        inferred_schema_md5: inferred_schema_md5.map(ToOwned::to_owned),
        spec: serde_json::from_value(spec).expect("invalid collection spec"),
        built_spec: Default::default(),
    }
}

fn mock_inferred_schema(collection_name: &str, num_properties: usize) -> tables::InferredSchema {
    let properties = (0..num_properties)
        .into_iter()
        .map(|i| (format!("p{i}"), serde_json::json!({"type": "string"})))
        .collect::<serde_json::Map<_, _>>();
    let schema: models::Schema = serde_json::from_value(serde_json::json!({
        "type": "object",
        "properties": properties,
    }))
    .unwrap();
    let md5 = md5_hash(&schema);
    tables::InferredSchema {
        collection_name: collection_name.to_owned(),
        schema,
        md5,
    }
}

pub fn md5_hash<T: serde::Serialize>(val: &T) -> String {
    let s = serde_json::to_string(val).unwrap();
    let bytes = md5::compute(s);
    format!("{bytes:x}")
}

pub fn redact_next_run() -> insta::internals::Redaction {
    use insta::internals::Content;

    insta::dynamic_redaction(|value, _| match value {
        Content::None => Content::String("redacted(None)".to_string()),
        Content::Some(_) => Content::String("redacted(Some)".to_string()),
        other => panic!("invalid next_run value: {other:?}"),
    })
}

pub fn update_live_specs(live: &mut tables::LiveSpecs, draft: tables::DraftSpecs, pub_id: Id) {
    let tables::DraftSpecs {
        captures,
        collections,
        materializations,
        tests,
        deletions,
    } = draft;
    for row in captures.into_iter() {
        let DraftCapture {
            catalog_name, spec, ..
        } = row;
        let new_live = tables::LiveCapture {
            id: random_id(),
            catalog_name,
            last_pub_id: pub_id,
            spec,
            built_spec: Default::default(),
        };
        live.captures.upsert(new_live, |existing, new_row| {
            new_row.id = existing.id;
        });
    }
    for row in collections.into_iter() {
        let DraftCollection {
            catalog_name, spec, ..
        } = row;
        let new_live = tables::LiveCollection {
            id: random_id(),
            catalog_name,
            last_pub_id: pub_id,
            spec,
            built_spec: Default::default(),
            inferred_schema_md5: None,
        };
        live.collections.upsert(new_live, |existing, new_row| {
            new_row.id = existing.id;
            new_row.inferred_schema_md5 = existing.inferred_schema_md5.clone();
        });
    }
    for row in materializations.into_iter() {
        let DraftMaterialization {
            catalog_name, spec, ..
        } = row;
        let new_live = tables::LiveMaterialization {
            id: random_id(),
            catalog_name,
            last_pub_id: pub_id,
            spec,
            built_spec: Default::default(),
        };
        live.materializations.upsert(new_live, |existing, new_row| {
            new_row.id = existing.id;
        });
    }
    for row in tests.into_iter() {
        let DraftTest {
            catalog_name, spec, ..
        } = row;
        let new_live = tables::LiveTest {
            id: random_id(),
            catalog_name,
            last_pub_id: pub_id,
            spec,
            built_spec: Default::default(),
        };
        live.tests.upsert(new_live, |existing, new_row| {
            new_row.id = existing.id;
        });
    }

    // TODO: handle deletions
}

pub fn draft_of(catalog_json: Value) -> tables::DraftSpecs {
    let catalog =
        serde_json::from_value(catalog_json).expect("failed to deserialize draft catalog");
    DraftSpecs::from_catalog(catalog, Default::default())
}

fn participating_specs(live: &tables::LiveSpecs, draft: &tables::DraftSpecs) -> tables::LiveSpecs {
    use tables::SpecExt;

    // Start with all specs directly included in the draft, and then add any collections that are
    // read from or written to by spec in the draft.
    let mut all_named = draft.all_spec_names();
    for c in draft.captures.iter() {
        all_named.extend(c.spec.writes_to());
    }
    for c in draft.collections.iter() {
        all_named.extend(c.spec.reads_from());
    }
    for m in draft.materializations.iter() {
        all_named.extend(m.spec.reads_from());
    }
    for t in draft.tests.iter() {
        all_named.extend(t.spec.reads_from());
        all_named.extend(t.spec.writes_to());
    }

    let mut filtered = live.get_named(&all_named);

    // Next get any specs that read from or write to one of the drafted collections
    let all_collections = draft
        .collections
        .iter()
        .map(|c| c.catalog_name.clone())
        .collect();
    let related = live.related_tasks(&all_collections);
    filtered.merge(related);

    filtered
}

#[derive(Serialize, Debug)]
pub struct TestPublication {
    #[serde(serialize_with = "serialize_draft_specs")]
    pub draft: tables::DraftSpecs,
    #[serde(skip)]
    pub status: publications::JobStatus,
    #[serde(rename = "publication_meta", skip_serializing_if = "Option::is_none")]
    control_plane: Option<(Id, DateTime<Utc>)>,
}

impl TestPublication {
    pub fn of_draft(draft: tables::DraftSpecs) -> Self {
        TestPublication {
            draft,
            status: publications::JobStatus::Success {
                linked_materialization_publications: Vec::new(),
            },
            control_plane: None,
        }
    }

    pub fn with_status(mut self, status: publications::JobStatus) -> Self {
        self.status = status;
        self
    }
}

fn serialize_draft_specs<S>(specs: &DraftSpecs, ser: S) -> Result<S::Ok, S::Error>
where
    S: serde::Serializer,
{
    let cat = specs.to_catalog();
    cat.serialize(ser)
}

impl Default for TestPublication {
    fn default() -> Self {
        TestPublication {
            draft: Default::default(),
            status: publications::JobStatus::Success {
                linked_materialization_publications: Vec::new(),
            },
            control_plane: None,
        }
    }
}

#[derive(Debug, Serialize)]
pub struct UpdateInfo<C: ControlJob> {
    pub catalog_name: String,
    pub prev_state: ControllerState<C::Status>,
}

#[derive(Debug, Serialize)]
pub struct PublicationInfo<C: ControlJob> {
    pub id: Id,
    pub completed_at: DateTime<Utc>,
    pub draft: models::BaseCatalog,
    pub live: models::BaseCatalog,
    pub starting_states: BTreeMap<String, ControllerState<C::Status>>,
    pub publication_status: publications::JobStatus,
    #[serde(skip)]
    _phantom: std::marker::PhantomData<C>,
}

/// A testing harness for writing tests of a `ControlJob`, which simulates the necessary operations
/// of a production environment. Tests are written primarily in terms of calls to
/// `observe_publication` and `next_run_update`. The harness maintains persistent (for the life of
/// the harness) states for each controller, and will keep them up to date as the controller emits
/// updates to the state.
///
/// The harness also maintains a set of live specs, and simulates updates to them as publication
/// completions are observed. This frees the tests from needing to mock out existing specs or
/// publication spec expansion. Spec expansion is technically slightly more minimal than what's
/// done in production currently. This is because we intend to tighten spec expansion in the future,
/// and the more minimal expansion here will ensure that controllers don't rely on any "extra"
/// expansion that's done currently.
///
/// The harness also completely manages the current time, as observed through `ControlPlane::current_time`
/// and the timestamps associated with publications. This allows tests and snapshots to be completely
/// deterministic, provided the controller uses no other time source.
pub struct Harness<C: ControlJob> {
    controller: C,
    control_plane: MockControlPlane,

    states: BTreeMap<String, ControllerState<C::Status>>,
    rt: tokio::runtime::Runtime,
}

impl<C: ControlJob> Harness<C> {
    pub fn new(controller: C) -> Harness<C> {
        // Arbitrary start time, but making it consistent helps tests be more readable
        let time = "2024-01-01T08:00:00Z".parse().unwrap();
        Harness {
            controller,
            control_plane: MockControlPlane::new(time),
            states: BTreeMap::new(),
            rt: tokio::runtime::Builder::new_current_thread()
                .build()
                .unwrap(),
        }
    }

    /// Simulates the background update of the inferred schema for the given `collection_name`.
    /// To simplify testing, the `schema_generation` directly corresponds to the number of properties
    /// in the inferred schema. Each generation corresponds to a deterministic md5 hash.
    pub fn update_inferred_schema(&mut self, collection_name: &str, schema_generation: usize) {
        self.control_plane
            .inferred_schemas
            .upsert_overwrite(mock_inferred_schema(collection_name, schema_generation))
    }

    /// Simulate the completion of the given `publication`. This includes having the controller
    /// observe the publication and produce updates, which are automatically merged into the
    /// persistent state of each controller. Returns a tuple of:
    /// - A `PublicationInfo` struct with additional information about the publication, which is
    ///   especially helpful as contextual information attached to `insta` snapshots.
    /// - The map of updates that was returned by the `ControlJob` under test. These updates will
    ///   have already been applied to the persistent `ControllerState`s managed by the harness.
    ///
    /// The given `publication` can be either one that was created by the controller itself (which
    /// would be returned by `next_run_update`), or one that simulates an out-of-band publication
    /// that was created some other way.
    pub fn observe_publication(
        &mut self,
        publication: TestPublication,
    ) -> (
        PublicationInfo<C>,
        BTreeMap<String, ControllerUpdate<C::Status>>,
    ) {
        let TestPublication {
            draft,
            status,
            control_plane,
        } = publication;

        let (pub_id, time) = control_plane.unwrap_or_else(|| self.control_plane.next_pub());

        let errors = match &status {
            publications::JobStatus::Queued => panic!("cannot observe Queued publication"),
            publications::JobStatus::Success { .. } => tables::Errors::new(),
            publications::JobStatus::EmptyDraft => tables::Errors::new(),
            other => {
                let err = tables::Error {
                    scope: "test://test.test/test".parse().unwrap(),
                    error: anyhow::anyhow!("oh no the publication failed: {other:?}"),
                };
                let mut t = tables::Errors::new();
                t.insert(err);
                t
            }
        };

        // Determine the subset of live specs that should be part of the publication.
        let live = participating_specs(&self.control_plane.live, &draft);
        let inferred_schemas = tables::inner_join(
            live.collections.iter(),
            self.control_plane.inferred_schemas.iter(),
        )
        .map(|j| j.1.clone())
        .collect();

        // Convert the draft and live tables into `models::Catalog`s, so that they can be
        // directly serialized as part of PublicationInfo.
        let draft_catalog = draft.to_catalog();
        let live_catalog = live.to_catalog();

        // Determine the set of controller states that will observe this publication
        let filtered_states = live_catalog
            .all_spec_names()
            .flat_map(|name: &'_ str| {
                self.states
                    .get(name)
                    .map(|s| (name.to_string(), (*s).clone()))
            })
            .collect::<BTreeMap<_, _>>();

        let result = PublicationResult {
            completed_at: time,
            publication_id: pub_id,
            draft,
            live,
            inferred_schemas,
            errors,
            publication_status: status,
        };

        let updates = self
            .controller
            .observe_publication(&filtered_states, &result);
        // Update the persistent controller states based on the updates.
        self.apply_updates(&updates);
        // Update all the live specs to reflect the drafted changes.
        self.control_plane.update_live_specs(result.draft, pub_id);

        let pub_info = PublicationInfo {
            id: pub_id,
            completed_at: time,
            draft: draft_catalog,
            live: live_catalog,
            starting_states: filtered_states,
            publication_status: result.publication_status,
            _phantom: std::marker::PhantomData,
        };

        (pub_info, updates)
    }

    /// Returns a description of the next controller that would be run if `next_run_update` were
    /// called. Returns `None` if no controllers have a `next_run` value set.
    pub fn next_run(&self) -> Option<(&str, &ControllerState<C::Status>)> {
        self.states
            .iter()
            .filter(|(_, s)| s.next_run.is_some())
            .min_by_key(|(_, s)| s.next_run.unwrap())
            .map(|(n, s)| (n.as_str(), s))
    }

    /// Jumps time forward to that of the smalles `next_run` of any controller state, and invokes
    /// the `update` function for that controller. Returns a tuple of:
    /// - An `UpdateInfo` struct with additional information about the invocation, which is
    ///   especially helpful as contextual information attached to `insta` snapshots.
    /// - The actual `ControllerUpdate` that was returned by the controller. This will have already
    ///   been applied to the persistent state maintained by the harness.
    /// - A vector of publications that were created by the controller as part of this update. These
    ///   publications are still considered "pending" and will not have updated any live specs. In
    ///   order to simulate the completion of the publications, you must call `observe_publication`
    ///   for each one. Note that you have the opportunity to set the publication status before that
    ///   point, in order to simulate failed publications.
    pub fn next_run_update(
        &mut self,
    ) -> (
        UpdateInfo<C>,
        ControllerUpdate<C::Status>,
        Vec<TestPublication>,
    ) {
        let Some((next_name, next_state)) = self.next_run().map(|(n, s)| (n.to_owned(), s.clone()))
        else {
            panic!("no controller has a next_run in states: {:?}", self.states);
        };

        let state_copy = next_state.clone();

        let Harness {
            controller,
            control_plane,
            rt,
            ..
        } = self;

        // Jump our time forward so that it's at the next_run time.
        control_plane.time = next_state.next_run.unwrap();

        let update_result = rt.block_on(async {
            controller
                .update(next_name.clone(), state_copy.clone(), control_plane)
                .await
        });

        let update = update_result.unwrap_or_else(|err| {
            panic!(
                "update error processing '{next_name}' with state:\n{next_state:?}\nerror: {err:?}"
            )
        });
        let pubs = std::mem::take(&mut control_plane.publications);
        self.apply_state_update(next_name.as_str(), &update);
        let info = UpdateInfo {
            catalog_name: next_name.clone(),
            prev_state: state_copy,
        };
        (info, update, pubs)
    }

    fn apply_state_update(&mut self, name: &str, update: &ControllerUpdate<C::Status>) {
        let time = self.control_plane.time;
        // Compute the next run time without applying any jitter so that run times are stable.
        let next_run = update
            .next_run
            .as_ref()
            .map(|n| time + chrono::TimeDelta::seconds(n.after_seconds as i64));

        if let Some(state) = self.states.get_mut(name) {
            state.active = update.active;
            state.next_run = next_run;
            if let Some(new_status) = &update.status {
                state.status = (*new_status).clone();
            }
            state.updated_at = time;
        } else {
            let Some(status) = &update.status else {
                panic!("initial update for '{name}' is missing a status");
            };
            let state = ControllerState {
                active: update.active,
                next_run,
                updated_at: time,
                status: status.clone(),
                failures: 0,
            };
            self.states.insert(name.to_owned(), state);
        }
    }

    fn apply_updates(&mut self, updates: &BTreeMap<String, ControllerUpdate<C::Status>>) {
        let time = self.control_plane.time;
        for (name, update) in updates.iter() {
            self.apply_state_update(name.as_str(), update);
        }
    }
}

fn pub_id(counter: u8) -> Id {
    Id::new([counter, 0, 0, 0, 0, 0, 0, 0])
}

/// Used by the `Harness` to simulate interactions with the control plane database.
pub struct MockControlPlane {
    live: tables::LiveSpecs,
    inferred_schemas: tables::InferredSchemas,

    publications: Vec<TestPublication>,
    /// The current time point for the test. This is moved forward deterministically, so that
    /// tests and snapshots can rely on deterministic timestamps.
    time: DateTime<Utc>,
    /// Counter of publications created by the test, which is used to create determistic
    /// publication ids for tests. Might need to make it a u16 if we have a test that goes through
    /// more than 255 publications.
    pub_counter: u8,
}

impl MockControlPlane {
    pub fn new(time: DateTime<Utc>) -> MockControlPlane {
        MockControlPlane {
            live: Default::default(),
            inferred_schemas: Default::default(),
            publications: Default::default(),
            time,
            pub_counter: 0,
        }
    }

    fn update_live_specs(&mut self, draft: tables::DraftSpecs, pub_id: Id) {
        update_live_specs(&mut self.live, draft, pub_id)
    }

    fn next_pub(&mut self) -> (Id, DateTime<Utc>) {
        self.pub_counter += 1;
        self.time += chrono::Duration::minutes(1);

        (Id::new([self.pub_counter, 0, 0, 0, 0, 0, 0, 0]), self.time)
    }
}

#[async_trait::async_trait]
impl ControlPlane for MockControlPlane {
    fn current_time(&self) -> DateTime<Utc> {
        self.time
    }

    async fn get_live_specs(
        &mut self,
        names: BTreeSet<String>,
    ) -> anyhow::Result<tables::LiveSpecs> {
        Ok(self.live.get_named(&names))
    }

    async fn get_inferred_schemas(
        &mut self,
        collections: BTreeSet<String>,
    ) -> anyhow::Result<tables::InferredSchemas> {
        let schemas = tables::inner_join(self.inferred_schemas.iter(), collections.iter())
            .map(|(s, _)| s.clone())
            .collect();
        Ok(schemas)
    }

    async fn create_publication(
        &mut self,
        draft: tables::DraftSpecs,
    ) -> anyhow::Result<tables::Id> {
        self.pub_counter += 1;
        let id = pub_id(self.pub_counter);
        self.publications.push(TestPublication {
            draft,
            status: publications::JobStatus::Success {
                linked_materialization_publications: Vec::new(),
            },
            control_plane: Some((id, self.current_time())),
        });
        Ok(id)
    }
}
