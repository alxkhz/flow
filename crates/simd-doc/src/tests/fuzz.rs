use quickcheck::quickcheck;
use serde_json::Value;

use super::ArbitraryValue;

quickcheck! {
    fn simd_matches_fallback_fuzz(input: Vec<ArbitraryValue>) -> bool {
        let (simd, fallback) = super::simd_and_fallback(&mut build_fixture(input));
        return fallback.v.as_slice() == simd.v.as_slice();
    }

    fn incremental_parse_splits_fuzz(input: Vec<ArbitraryValue>, s1: u16, s2: u16) -> bool {
        incremental_parse_splits_case(input, s1, s2)
    }
}

fn incremental_parse_splits_case(input: Vec<ArbitraryValue>, s1: u16, s2: u16) -> bool {
    if input.is_empty() {
        return true; // Cannot modulo on len().
    }
    let input = build_fixture(input);

    let mut p1 = crate::Parser::new();
    let mut p2 = crate::Parser::new();

    use std::hash::Hasher;
    let mut h1 = xxhash_rust::xxh3::Xxh3::with_seed(0);
    let mut h2 = h1.clone();

    for (p, s, h) in [(&mut p1, s1, &mut h1), (&mut p2, s2, &mut h2)] {
        let s = (s as usize) % input.len();

        let out = p.parse(&input[..s], 0, Default::default()).unwrap();

        for (offset, doc) in out.iter() {
            h.write_i64(offset);
            h.update(doc);
        }

        let out = p.parse(&input[s..], s as i64, out.into_inner()).unwrap();

        for (offset, doc) in out.iter() {
            h.write_i64(offset);
            h.update(doc);
        }
    }

    return h1.digest() == h2.digest();
}

fn build_fixture(it: Vec<ArbitraryValue>) -> Vec<u8> {
    super::build_fixture(it.into_iter().map(|v| match v.0 {
        doc @ Value::Object(_) | doc @ Value::Array(_) => doc,
        doc => Value::Array(vec![doc]),
    }))
}