# CANONICAL HANDOFF — UNFINISHED

Date: 2026-09-10
Active version: **V5.2.2 — Root Runtime Fix / Intelligent Causal Loop**

## Start here in a new conversation
Read:
1. `CURRENT.md`
2. `CANONICAL-HANDOFF.md`
3. `WINNING-CHAIN.md`
4. `PDPB-GATE.md`
5. `TEST-PROTOCOL.md`
6. `TEST-MATRIX-V5.md`
7. `HIDDEN-SPOTS-HARDENING-V5.md`
8. GitHub Issue #1

GitHub is the source of truth.

## Current gate
**V5.2.2 RUNTIME SMOKE / USER_GATE_NOT_YET_VALIDATED**

Mandatory order:
**RUBRIC → PAIN → PROBLEM → DIFFERENTIATOR → V5.2.2 KILL TEST → PDPB BUILDER → EXECUTION → EVIDENCE → STORY → DEMO → Q&A**

Do not start material Decentraland implementation before kill-test PASS + PDPB output.

## Product primitive
A prior real person authors `anchor × vector × reach`.
The carried deterministic state contains `pressure × tension × engineBias`.

`CONNECT`: resolves SPAN → creates HEIGHT.
`RISE`: resolves HEIGHT → creates SPAN.

The next visitor therefore inherits a problem causally shaped by the previous human plus the deterministic world state.

## Runtime architecture after V5.2.2
- canonical public path: `/`
- `index.html` is the only public bootstrap;
- frozen V5.1 causal core lives at `core-v51.html`;
- `index.html` fetches the core with `cache: no-store`;
- the document remains hidden/non-interactive until `v52-patch.js` and `v521-fix.js` have executed;
- readiness is identified as `window.__UNFINISHED_RUNTIME__ = "5.2.2"`;
- `/v52.html` redirects to `/` preserving query/hash;
- the old Vercel root rewrite is removed.

This change is routing/readiness hardening only. It does not change the causal engine or invalidate earlier QA.

## Root cause evidence
A fresh InPrivate recording showed V5.2 visuals but still displayed `WORLD STATE` and omitted V5.2.1 operator buttons. Because this happened in a fresh session, cache/stale-tab alone cannot explain it. The public root was not reliably reaching the V5.2.1 bootstrap. V5.2.2 makes the root itself the bootstrap.

## Hidden spots still yellow
Do not mark these production-green from browser proof:
1. shared durable persistence;
2. atomic shared concurrency/CAS;
3. authoritative Decentraland identity;
4. actual Decentraland Mobile runtime.

## Evidence discipline
T1–T5 require five independent English-speaking cold testers who have never seen the concept. Operator says only:
> **Try this and tell me what you think is happening.**

Matched HUMAN/WORLD pairs must hold geometry, pressure, tension, engineBias, generation and version constant. Capture full JSON + verbatim debrief.

## Immediate next action
Fresh/private smoke on `/?author=1&v=522` → verify COPY/OPEN controls → open fresh WORLD lane → verify no source-revealing badge → verify HUMAN lane likewise → if PASS, Geometry A/B → T1–T5 → hard verdict → PASS means **PDPB Builder immediately**.

## Build-budget rule
Vercel Hobby quota is shared with other projects. One atomic deployable commit per substantive gate/batch. No documentation-only commits to `main`; record deployment/smoke evidence in Issue #1.

## Never do
- no fake human attribution;
- no self-completion;
- no opaque/random AI in the causal core;
- no treating URL/localStorage as production persistence;
- no treating browser 2.5D as Decentraland Mobile proof;
- no final story/demo claims before evidence;
- no gallery drift;
- no bookkeeping-only Vercel builds.
