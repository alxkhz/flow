use std::time::Instant;

// This benchmark is regularly run as part of our test suite to ensure it remains functional.
// When actually developing it, you may wish to run as:
//
//   cargo test --release -p simd-doc --test parser_perf -- --nocapture
//
// And additionally increase TOTAL_ROUNDS to a larger value (e.g. 5_000).

const TOTAL_ROUNDS: usize = 5;
// Size of chunks which are handed to the parser.
const CHUNK_SIZE: usize = 1 << 17; // 128K.

// Re-use github and citi-bike event data for this benchmark. See:
// * crates/json/benches/github_events.rs
// * crates/json/benches/citi_rides.rs
const GITHUB_SCHEMA: &[u8] = include_bytes!("../../json/benches/testdata/github-event.schema.json");
const GITHUB_SCRAPES: &[&[u8]] = &[
    include_bytes!("../../json/benches/testdata/github-scrape1.json"),
    include_bytes!("../../json/benches/testdata/github-scrape2.json"),
    include_bytes!("../../json/benches/testdata/github-scrape3.json"),
    include_bytes!("../../json/benches/testdata/github-scrape4.json"),
];
const CITI_RIDES_SCHEMA: &[u8] =
    include_bytes!("../../json/benches/testdata/citi-rides.schema.json");
const CITI_RIDES: &[u8] = include_bytes!("../../json/benches/testdata/citi-rides1.json");

#[test]
pub fn parser_perf() {
    let mut fixture: Vec<u8> = Vec::new();

    let mut add_doc = |doc: serde_json::Value| {
        serde_json::to_writer(&mut fixture, &doc).unwrap();
        fixture.push(b'\n');
    };
    add_doc(serde_json::from_slice(GITHUB_SCHEMA).unwrap());

    for scrape in GITHUB_SCRAPES {
        let items: Vec<_> = serde_json::from_slice(*scrape).unwrap();
        for item in items {
            add_doc(item);
        }
    }
    add_doc(serde_json::from_slice(CITI_RIDES_SCHEMA).unwrap());
    fixture.extend_from_slice(CITI_RIDES); // Already JSON newlines.

    let chunks: Vec<_> = fixture.chunks(CHUNK_SIZE).collect();

    let mut scratch = rkyv::AlignedVec::with_capacity(CHUNK_SIZE);
    let mut parser = simd_doc::Parser::new();

    let mut docs: usize = 0;
    let mut bytes: usize = 0;

    // Begin to measure performance.
    let start_stats = allocator::current_mem_stats();
    let begin = Instant::now();

    for _ in 0..TOTAL_ROUNDS {
        for chunk in &chunks {
            let output = parser.parse(chunk, bytes as i64, scratch).unwrap();

            bytes += chunk.len();
            docs += output.iter().count();

            scratch = output.into_inner();
        }
    }

    let peak_stats = allocator::current_mem_stats();
    let duration = begin.elapsed();

    eprintln!(
        "Rounds: {} of {}\nElapsed: {}s\nDocs/sec: {}\nMB/sec: {}s\nMemory: active {}MB allocated {}MB resident {}MB retained {}MB alloc_ops {} dealloc_ops {} realloc_ops {}",
        TOTAL_ROUNDS,
        chunks.len(),
        duration.as_secs_f64(),
        (docs as f64) / duration.as_secs_f64(),
        (bytes as f64) / (duration.as_secs_f64() * 1000f64 * 1000f64),
        peak_stats.active / (1000 * 1000),
        peak_stats.allocated / (1000 * 1000),
        peak_stats.resident / (1000 * 1000),
        peak_stats.retained / (1000 * 1000),
        peak_stats.counts.alloc_ops - start_stats.counts.alloc_ops,
        peak_stats.counts.dealloc_ops - start_stats.counts.dealloc_ops,
        peak_stats.counts.realloc_ops - start_stats.counts.realloc_ops,
    );
}
