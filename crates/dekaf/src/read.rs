use super::{Collection, Partition};
use anyhow::Context;
use futures::TryStreamExt;
use gazette::journal::{ReadJsonLine, ReadJsonLines};
use gazette::uuid::{Clock, Producer};
use gazette::{broker, journal, uuid};

pub struct Read {
    // Kafka cursor of this Read.
    // This is the "offset" (from kafka's FetchPartition message) that will next be yielded by this Read.
    // It's currently encoded as journal_offset << 1, with the LSB flagging whether to skip the first
    // document at that offset. This works because kafka's FetchPartition offset increments by one
    // from the last-yielded document.
    pub kafka_cursor: i64,
    // Last reported journal write head.
    pub last_write_head: i64,

    key: Vec<doc::Extractor>, // Extractor of the document key.
    not_before: uuid::Clock,  // Not before this clock.
    uuid_ptr: doc::Pointer,   // Location of document UUID.
    stream: ReadJsonLines,    // Underlying document stream.
}

impl Read {
    pub fn new(
        client: journal::Client,
        collection: &Collection,
        partition: &Partition,
        kafka_cursor: i64,
    ) -> anyhow::Result<Self> {
        let ser_policy = doc::SerPolicy::noop();

        let key = extractors::for_key(
            &collection.spec.key,
            &collection.spec.projections,
            &ser_policy,
        )
        .with_context(|| {
            format!(
                "failed to build key extractors for collection {}",
                collection.spec.name
            )
        })?;
        let uuid_ptr = doc::Pointer::from_str(&collection.spec.uuid_ptr);

        let (not_before_sec, _) = collection.not_before.to_unix();

        let lines = client.clone().read_json_lines(broker::ReadRequest {
            offset: kafka_cursor >> 1,
            block: true,
            journal: partition.spec.name.clone(),
            begin_mod_time: not_before_sec as i64,
            ..Default::default()
        });

        Ok(Self {
            kafka_cursor,
            key,
            last_write_head: 0,
            not_before: collection.not_before,
            stream: lines,
            uuid_ptr,
        })
    }

    async fn next(&mut self) -> Result<(Producer, Clock, doc::OwnedArchivedNode), gazette::Error> {
        loop {
            let read = self
                .stream
                .try_next()
                .await?
                .expect("blocking gazette client read never returns EOF");

            match read {
                ReadJsonLine::Meta(response) => {
                    self.last_write_head = response.write_head;
                }
                ReadJsonLine::Doc { offset, root } => {
                    let Some(uuid) = self.uuid_ptr.query(root.get()).and_then(|node| match node {
                        doc::ArchivedNode::String(s) => Some(s.as_str()),
                        _ => None,
                    }) else {
                        return Err(gazette::Error::Parsing(
                            offset,
                            std::io::Error::other("document does not have a UUID"),
                        ));
                    };
                    let (producer, clock, flags) = gazette::uuid::parse_str(uuid)?;

                    if flags.is_ack() {
                        continue;
                    } else if clock < self.not_before {
                        continue;
                    } else if self.kafka_cursor == offset << 1 | 1 {
                        continue;
                    }

                    self.kafka_cursor = offset << 1 | 1;
                    return Ok((producer, clock, root));
                }
            };
        }
    }
}

pub async fn read_record_batch(
    read: &mut Read,
    mut target_bytes: i32,
    timeout: impl std::future::Future<Output = ()>,
) -> anyhow::Result<bytes::Bytes> {
    use kafka_protocol::records::{
        Compression, Record, RecordBatchEncoder, RecordEncodeOptions, TimestampType,
    };
    let mut records: Vec<Record> = Vec::new();
    let mut tmp = bytes::BytesMut::new();

    tokio::pin!(timeout);

    while target_bytes > 0 {
        let (producer, clock, root) = tokio::select! {
            r = read.next() => r?,
            _ = &mut timeout => break,
        };
        let (unix_seconds, unix_nanos) = clock.to_unix();

        let key = doc::Extractor::extract_all(root.get(), &read.key, &mut tmp);
        let key = base64::encode(key);

        // TODO(johnny): Map to AVRO.
        let value = serde_json::to_string(&doc::SerPolicy::noop().on(root.get())).unwrap();

        target_bytes -= (key.len() + value.len()) as i32;

        // TODO remove me -- for testing AVRO serialization & schemas.
        let key = vec![0, 0x32, 0x42, 0x52, 0x61, 0x36, 0x06, 0x66, 0x6f, 0x6f];
        let value = vec![0, 0x32, 0x42, 0x52, 0x62, 0x36, 0x06, 0x66, 0x6f, 0x6f];

        records.push(Record {
            control: false,
            headers: Default::default(),
            key: Some(key.into()),
            offset: read.kafka_cursor & !1,
            partition_leader_epoch: 1,
            producer_epoch: 1,
            producer_id: producer.as_i64(),
            sequence: (clock.to_g1582_ns100() % i32::MAX as u64) as i32,
            timestamp: unix_seconds as i64 * 1000 + unix_nanos as i64 / 1_000_000, // Map into millis.
            timestamp_type: TimestampType::LogAppend,
            transactional: true,
            value: Some(value.into()),
        });
    }

    let opts = RecordEncodeOptions {
        compression: Compression::Lz4,
        version: 2,
    };
    RecordBatchEncoder::encode(&mut tmp, records.iter(), &opts)
        .expect("record encoding cannot fail");

    tracing::info!(
        count = records.len(),
        first_offset = records.first().map(|r| r.offset >> 1).unwrap_or_default(),
        last_offset = records.last().map(|r| r.offset >> 1).unwrap_or_default(),
        target_bytes,
        write_head = read.last_write_head,
        "returning records"
    );

    Ok(tmp.freeze())
}
