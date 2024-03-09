use rkyv::ser::Serializer;

mod ffi;
pub mod output;
pub use output::Output;

#[cfg(test)]
mod tests;

/// Parser is a very fast parser for JSON documents that transcodes directly
/// into instances of doc::ArchivedNode.
///
/// In the common case it uses simdjson to parse documents and directly
/// transcodes from simdjson's DOM into a byte representation that exactly
/// matches doc::ArchivedNode.
///
/// On my available hardware (a several-year-old Xeon, and a Macbook Air M2)
/// it achieves throughput of 800-950 MB per second in this happy-path case.
///
/// For large documents (greater than one megabyte) it falls back to serde_json
/// for parsing.
pub struct Parser {
    buf: Vec<u8>,
    ffi: cxx::UniquePtr<ffi::Parser>,
    offset: i64,
}

impl Parser {
    pub fn new() -> Self {
        Self {
            buf: Vec::new(),
            // We must choose what the maximum capacity (and document size) of the
            // parser will be. This value shouldn't be too large, or it negatively
            // impacts parser performance. According to the simdjson docs, 1MB is
            // something of a sweet spot. Inputs larger than this capacity will
            // trigger the fallback handler.
            ffi: ffi::new_parser(1_000_000),
            offset: 0,
        }
    }

    pub fn parse(
        &mut self,
        input: &[u8],
        offset: i64,
        scratch: rkyv::AlignedVec,
    ) -> Result<Output, std::io::Error> {
        if self.buf.is_empty() {
            self.offset = offset;
        } else if self.offset + self.buf.len() as i64 != offset {
            return Err(std::io::Error::new(
                std::io::ErrorKind::InvalidData,
                format!(
                    "parser has {} bytes of document prefix at offset {}, but got unexpected input offset {offset}",
                    self.buf.len(), self.offset
                ),
            ));
        };

        let mut output = Output {
            v: scratch,
            offset: self.offset,
        };
        output.v.clear();

        // Look for a *last* newline in `input`.
        let Some(pivot) = memchr::memrchr(b'\n', &input) else {
            self.buf.extend_from_slice(input); // Buffer this partial line.
            return Ok(output); // Nothing to parse yet.
        };

        // Complete a series of whole documents by appending through the newline.
        // The remainder is held back for now.
        self.buf.extend_from_slice(&input[..pivot + 1]);

        if let Err(err) = parse_simd(&mut self.buf, &mut output, &mut self.ffi) {
            tracing::debug!(%err, "simdjson JSON parsing failed; using fallback");
            output.v = parse_fallback(&mut self.buf, std::mem::take(&mut output.v))?;
        }

        self.offset += self.buf.len() as i64;
        self.buf.clear();
        self.buf.extend_from_slice(&input[pivot + 1..]);

        Ok(output)
    }
}

fn parse_simd(
    input: &mut Vec<u8>,
    output: &mut Output,
    parser: &mut cxx::UniquePtr<ffi::Parser>,
) -> Result<(), cxx::Exception> {
    let rollback_len = output.v.len();

    // We must pad `input` with requisite extra bytes.
    static PAD: [u8; 64] = [0; 64];
    input.extend_from_slice(&PAD);
    input.truncate(input.len() - PAD.len());

    match parser.pin_mut().parse(input, output) {
        Err(err) => {
            // `output` may contain partial messages that must be considered
            // undefined. Roll back to its initial length.
            unsafe { output.v.set_len(rollback_len) };
            Err(err)
        }
        Ok(()) => Ok(()),
    }
}

fn parse_fallback(
    input: &[u8],
    mut v: rkyv::AlignedVec,
) -> Result<rkyv::AlignedVec, serde_json::Error> {
    let mut alloc = doc::HeapNode::allocator_with_capacity(input.len());
    let mut offset = 0;

    // For each input newline...
    while let Some(pivot) = memchr::memchr(b'\n', &input[offset..]) {
        // Parse the line into  HeapNode.
        let mut deser = serde_json::Deserializer::from_slice(&input[offset..offset + pivot + 1]);
        let node = doc::HeapNode::from_serde(&mut deser, &alloc)?;
        deser.end()?;

        // Write the document header (offset and length placeholder).
        v.extend_from_slice(&(offset as u32).to_le_bytes());
        v.extend_from_slice(&[0; 4]); // Length placeholder.
        let start_len = v.len();

        // Serialize HeapNode into ArchivedNode by extending our `output.v` buffer.
        let mut ser = rkyv::ser::serializers::AllocSerializer::<512>::new(
            rkyv::ser::serializers::AlignedSerializer::new(v),
            Default::default(),
            Default::default(),
        );
        ser.serialize_value(&node)
            .expect("rkyv serialization cannot fail");
        v = ser.into_serializer().into_inner();

        // Update the document header, now that we know the actual length.
        let len = ((v.len() - start_len) as u32).to_le_bytes();
        (&mut v[start_len - 4..start_len]).copy_from_slice(&len);

        alloc.reset();

        offset += pivot + 1;
    }
    assert_eq!(input.len(), offset, "input does not end with newline");

    Ok(v)
}
