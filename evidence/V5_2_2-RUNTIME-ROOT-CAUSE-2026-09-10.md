# V5.2.2 Runtime Root-Cause Note — 2026-09-10

## Evidence
A fresh InPrivate QA recording was run from the production domain using a newly generated WORLD condition.

Observed:
- V5.2 embodied 2.5D visuals were present;
- `WORLD STATE` still appeared immediately after START;
- the operator handoff output did not show the V5.2.1 dedicated COPY/OPEN buttons.

## Conclusion
The cache/stale-tab hypothesis is rejected. The public root `/` was not reliably traversing the V5.2.1 bootstrap path defined through the Vercel rewrite.

## Corrective action
V5.2.2 makes `index.html` the canonical readiness-gated bootstrap itself:
- old causal `index.html` is frozen as `core-v51.html`;
- root `index.html` loads that core with `cache: no-store`;
- V5.2 and V5.2.1 execute before the document becomes interactive;
- `/v52.html` redirects to `/`;
- Vercel root rewrite is removed.

## Gate
This is QA evidence, not a cold test. Gate remains `RUNTIME_SMOKE_PENDING / USER_GATE_NOT_YET_VALIDATED` until a fresh smoke confirms source-neutral pre-debrief behavior and operator COPY/OPEN controls.
