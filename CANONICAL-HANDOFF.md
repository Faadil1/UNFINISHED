# CANONICAL HANDOFF — UNFINISHED

Date: 2026-09-10
Active version: **V5.2.1 — Intelligent Causal Loop / 2.5D Tactile Kill Test**

## Start here in a new conversation
Read, in order:
1. `CURRENT.md`
2. `CANONICAL-HANDOFF.md`
3. `WINNING-CHAIN.md`
4. `PDPB-GATE.md`
5. `TEST-PROTOCOL.md`
6. `TEST-MATRIX-V5.md`
7. `HIDDEN-SPOTS-HARDENING-V5.md`
8. GitHub Issue #1

GitHub is the source of truth. Do not reconstruct state from memory alone.

## Current gate
**V5.2.1 KILL TEST / RUNTIME_SMOKE_PENDING / USER_GATE_NOT_YET_VALIDATED**

Mandatory order:
**RUBRIC → PAIN → PROBLEM → DIFFERENTIATOR → V5.2.1 KILL TEST → PDPB BUILDER → EXECUTION → EVIDENCE → STORY → DEMO → Q&A**

Do not start material Decentraland implementation before V5.2.1 PASS + PDPB output.

## Product
Problem: low-concurrency Worlds can lack cross-session consequential social continuity.

Differentiator under test: a previous real person authors the physical starting condition of the next visitor's problem; the next visitor solves one pressure, uses the result, and creates the following visitor's condition.

Human-authored grammar: `anchor × vector × reach`.
Carried deterministic grammar: `pressure × tension × engineBias`.

`CONNECT`: resolves SPAN → creates HEIGHT.
`RISE`: resolves HEIGHT → creates SPAN.

## Runtime
- Repo: `Faadil1/UNFINISHED`
- Branch: `main`
- Production: `https://unfinished-delta.vercel.app`
- Author mode: `/?author=1`
- Root route: `/` → `v52.html`
- `v52.html` fetches `index.html`, loads `v52-patch.js`, then `v521-fix.js`.
- The document stays hidden/non-interactive until `v521-fix.js` marks it ready.

This preserves the validated V5.1 causal core while preventing users from interacting with stale source-priming behavior before the V5.2 layer is ready.

## V5.2 QA finding → V5.2.1 fix
The 87s desktop QA recording is **QA only, not a scored cold test**.

It proved:
- author-mode drag works;
- matched links are generated;
- WORLD lane can reach choice → traversal → debrief → handoff;
- 2.5D structural route is materially better than V5.1.

It exposed:
- `WORLD STATE` still flashed before debrief due load race;
- operator manually selected a long WORLD URL after previously copying evidence JSON, so the browser later searched the stale JSON and produced a Bing/Akamai `Bad Request`. This was an operator affordance failure, not proof the generated handoff URL was invalid.

V5.2.1 therefore:
- neutralizes explicit source badges before debrief;
- prevents interaction until patches are ready;
- adds COPY HUMAN LINK / OPEN HUMAN TEST;
- adds COPY WORLD LINK / OPEN WORLD TEST.

## Hidden spots still yellow
Do not mark these production-green from the browser prototype:
1. shared durable persistence;
2. atomic shared concurrency/CAS;
3. authoritative Decentraland identity;
4. actual Decentraland Mobile runtime.

## Evidence discipline
T1–T5 require five independent English-speaking cold testers who have never seen V1–V5.2.1 and do not know the concept.

Say only:
> **Try this and tell me what you think is happening.**

Matched HUMAN/WORLD pairs must hold geometry, pressure, tension, engineBias, generation, and version constant. Capture full JSON and verbatim debrief.

## Build-budget discipline
Vercel Hobby quota is shared. Target 1–2 UNFINISHED deploys/24h; 3–5 only if critical. Batch code + docs + CURRENT + HANDOFF atomically. Record smoke/deployment evidence in Issue #1 instead of a follow-up documentation commit.

## Next action
Deploy V5.2.1 QA fix → smoke-test source neutrality + operator buttons → if clean, Geometry A/B → T1–T5 → PASS/PIVOT/KILL → PASS means **PDPB Builder immediately**.
