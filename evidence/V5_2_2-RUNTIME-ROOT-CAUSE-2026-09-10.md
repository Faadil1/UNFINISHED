# V5.2.2 Runtime Root-Cause Note — 2026-09-10

A freshly surfaced generated WORLD URL was labeled by the browser/page as **UNFINISHED — Intelligent Causal Loop V5.1** even though V5.2.1 had been deployed successfully.

This is stronger evidence than the earlier stale-tab hypothesis: a generated test URL can still land on the V5.1 core identity. Rather than continue debugging a multi-file bootstrap, V5.2.2 removes the entire failure class.

## Corrective decision
- collapse V5.2 embodied interaction + V5.2.1 QA fixes into one self-contained `index.html`;
- remove the Vercel `/` → `v52.html` rewrite;
- make `/` with any query string the direct canonical runtime;
- keep historical patch files only as non-active artifacts;
- verify in a fresh/private tab before using cold testers.

## Gate impact
No cold-test evidence is invalidated because no V5.2.1 run was scored. Gate remains `RUNTIME_SMOKE_PENDING / USER_GATE_NOT_YET_VALIDATED` until the single-file runtime passes smoke.
