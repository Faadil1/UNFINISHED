# CURRENT — UNFINISHED

Date: 2026-09-10
Status: **PROTOTYPE_KILL_TEST_V5_2_2 / RUNTIME_SMOKE_PASS / USER_GATE_NOT_YET_VALIDATED**

## Candidate
**UNFINISHED — Intelligent Causal Loop V5.2.2**

Rule: **NO ONE FINISHES WHAT THEY START.**

Thesis:
> **Every player solves one problem and creates the next.**

Loop:
**INHERIT → INTERPRET → COMPLETE → PLAY → AUTHOR NEXT → LEAVE → CONSEQUENCE**

## Required winning chain
**RUBRIC → PAIN → PROBLEM → DIFFERENTIATOR → V5.2.2 KILL TEST → PDPB BUILDER → EXECUTION → EVIDENCE → STORY → DEMO → Q&A**

Current gate: **V5.2.2 COLD-TEST PREPARATION**. PDPB Builder remains blocked until the user gate PASS.

## Canonical runtime
- Repo: `Faadil1/UNFINISHED`
- Branch: `main`
- Production: `https://unfinished-delta.vercel.app`
- Operator: `https://unfinished-delta.vercel.app/?author=1`
- Public entry: `index.html`
- Frozen causal core: `core-v51.html`
- Perceptual layer: `v52-patch.js`
- QA/source-neutral layer: `v521-fix.js`
- Legacy `/v52.html` redirects to `/` preserving query/hash.
- `vercel.json` does not rewrite `/` away from `index.html`.

## Runtime smoke — PASS
Fresh/private QA has now passed both matched lanes:
- operator authoring loads through `/`;
- dedicated `COPY HUMAN LINK`, `OPEN HUMAN TEST`, `COPY WORLD LINK`, `OPEN WORLD TEST` controls are present;
- WORLD lane shows only `STARTING CONDITION` before debrief;
- HUMAN lane, opened from another browser identity, also shows only `STARTING CONDITION` before debrief;
- no `WORLD STATE` and no `<name> LEFT THIS` priming remains in the tested flow;
- anti-self-completion still behaves correctly when the author opens their own HUMAN state;
- stale-state/CAS refusal previously passed QA.

These recordings are **QA evidence only, not scored cold testers**.

## Causal model preserved
Prior human authors: `anchor + vector + reach`.
Carried deterministic state: `pressure + tension + engineBias`.

`CONNECT` resolves SPAN and creates HEIGHT pressure.
`RISE` resolves HEIGHT and creates SPAN pressure.

## Hidden spots — current truth
Prototype implemented but still yellow until real execution:
- shared persistence: URL/local prototype exists; durable shared backend required;
- concurrency: exact local CAS exists; atomic shared CAS required;
- identity: opaque local authority exists; connected Decentraland identity required;
- mobile: browser 2.5D controls exist; actual Decentraland Mobile runtime required.

## Immediate next action
1. Use operator authoring to create **Geometry A** from a real human drag gesture.
2. Keep its matched HUMAN/WORLD pair for T1/T2.
3. Create **Geometry B** differing from A in at least two spatial dimensions, preferably including reach.
4. Keep its matched HUMAN/WORLD pair for T3/T4.
5. T5 = HUMAN replication of the strongest HUMAN condition or a third real Geometry C.
6. Run five independent English-speaking cold testers with only: **“Try this and tell me what you think is happening.”**
7. Capture full JSON + verbatim debrief for every slot.
8. Hard verdict PASS / PIVOT / KILL.
9. PASS → **PDPB Builder immediately**.

## Build-budget discipline
Vercel Hobby quota is shared with other projects. Target 1–2 UNFINISHED deployments/24h; avoid documentation-only deployments where possible. Runtime/test evidence belongs in Issue #1. Substantive code + docs + CURRENT + HANDOFF must be batched atomically.

## Canonical discipline
Every substantive gate transition updates this file and `CANONICAL-HANDOFF.md` together. GitHub is the source of truth.