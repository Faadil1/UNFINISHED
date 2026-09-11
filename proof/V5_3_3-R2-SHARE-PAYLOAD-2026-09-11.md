# V5.3.3 R2 — raw-link share correction

Date: 2026-09-11

## Observation
Real mobile recording showed the successor handoff link was present, but iOS native sharing copied the payload as:

`I left something unfinished for you. <URL>`

When pasted into Safari, the leading sentence caused Safari to treat the whole paste as a search rather than navigating directly to the handoff URL.

## Correction
The judge-facing `SHARE NEXT PLAYER LINK` action now passes the **raw successor URL only** to the native Web Share API. Clipboard fallback already copied the raw URL and remains unchanged.

This does not change:
- successor state generation;
- human-chain metadata;
- self-completion refusal;
- cold-test neutrality;
- causal engine.

## QA signal from paired mobile recording
A separate cross-browser run showed the human chain successfully advancing from `Maya → Faadil → Dice`, including inherited provenance, completion, successor authoring, and final receipt. This is QA evidence, not a scored cold test.

Gate remains `USER_GATE_NOT_YET_VALIDATED`; PDPB stays blocked until PASS.
