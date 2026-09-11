# CANONICAL HANDOFF — UNFINISHED

Date: 2026-09-10
Active version: **V5.2 — Intelligent Causal Loop / 2.5D Tactile Kill Test**

## Source of truth
Repository: `Faadil1/UNFINISHED`
Branch: `main`

Active runtime entry: `v52.html` → V5.1 causal core `index.html` + `v52-patch.js`
Runtime routing: `vercel.json` rewrites `/` to `v52.html`.
Active protocol: `TEST-PROTOCOL.md`
Active matrix: `TEST-MATRIX-V5.md`
Active hardening: `HIDDEN-SPOTS-HARDENING-V5.md`
Winning chain: `WINNING-CHAIN.md`
PDPB gate: `PDPB-GATE.md`
Build budget: `BUILD-BUDGET.md`

Older V2/V3/V4 artifacts are historical only. V5/V5.1 interaction is superseded by V5.2.

## Current gate
**V5.2 KILL TEST / USER_GATE_NOT_YET_VALIDATED**

Required order:
**RUBRIC → PAIN → PROBLEM → DIFFERENTIATOR → V5.2 KILL TEST → PDPB BUILDER → EXECUTION → EVIDENCE → STORY → DEMO → Q&A**

Do not start material Decentraland implementation before V5.2 PASS and PDPB output.

## Product thesis
> **Every player solves one problem and creates the next.**

Rule:
> **NO ONE FINISHES WHAT THEY START.**

Problem:
A low-concurrency World lacks cross-session consequential social continuity when one real visitor's action does not materially shape another real visitor's later session.

Differentiator under test:
A previous real person authors the physical starting conditions of the next visitor's playable problem. The next visitor resolves one pressure, physically uses the result, then authors a successor state carrying a new pressure.

## V5.2 physical grammar
Human-authored:
- anchor
- vector
- reach

Deterministically carried:
- pressure
- tension
- engineBias

State grammar:
`anchor × vector × reach × pressure × tension × engineBias`

`CONNECT`: resolves SPAN → creates HEIGHT.
`RISE`: resolves HEIGHT → creates SPAN.

## V5.2 interaction model
- lightweight embodied 2.5D Canvas, not full 3D;
- plank/beam geometry with top/side faces, joints, supports, shadows and shallow void;
- small camera-follow/parallax response during traversal;
- progress trail and junction feedback so crossing feels consequential;
- HUMAN provenance = subtle engraved personal residue; WORLD provenance = system residue; no explicit pre-debrief source label;
- SPAN and HEIGHT pressure expressed physically, with tension scaling the cue;
- drag-from-socket spatial authorship;
- tap ghost outcomes directly or use accessible CONNECT/RISE buttons;
- direct avatar drag constrained to generated topology + D-pad fallback;
- physical stress cues for pressure/tension;
- non-verbal successor handoff animation;
- open-ended debrief occurs before explicit successor explanation;
- post-debrief next-visitor link and return receipt.

## Prototype hardening
- real spatial authoring of anchor/vector/reach;
- matched HUMAN/WORLD pairs with separate test lanes but identical causal state;
- counterfactual evidence holding current action constant;
- transferable URL handoff;
- local active-state persistence;
- capped local lineage;
- exact local CAS on chainId/stateId/version;
- opaque prototype authority separate from display name;
- self-completion block;
- honest WORLD fallback;
- deterministic pressure/tension adaptation;
- retention return receipt;
- detailed interaction telemetry;
- mobile safe areas, haptics and reduced motion.

## Still yellow until real execution layer
Never mark these production-validated from V5.2:
1. shared durable persistence;
2. atomic shared concurrency/CAS;
3. authoritative Decentraland identity;
4. actual Decentraland Mobile runtime.

## Vercel discipline
Project: `unfinished`
Domain: `https://unfinished-delta.vercel.app`
Plan constraint: Hobby build budget shared with other projects.

Policy:
- one atomic deployable commit per substantive gate/batch;
- no documentation-only commits to main merely to record deployment success;
- target 1–2 UNFINISHED deployments per 24h, hard ceiling 3–5 unless critical;
- verify locally before pushing;
- record runtime verification in Issue #1 to avoid a follow-up build.

## Latest QA finding
A 2026-09-10 V5.1 recording was reviewed as QA only. It confirmed the loop works but showed that the structure still read too much like a line/diagram, traversal lacked weight, WORLD/HUMAN source was over-explained by badge text, and pressure/tension were not sufficiently embodied. V5.2 is the targeted correction.

## Immediate next actions
1. Verify V5.2 live title/author mode after the atomic build.
2. In `/?author=1`, have real authors drag two materially different starting conditions.
3. Generate HUMAN/WORLD matched links for geometry A and B.
4. Run T1–T5 with five independent English-speaking cold testers.
5. Capture full evidence JSON and verbatim debrief.
6. PASS/PIVOT/KILL.
7. PASS → **PDPB Builder immediately**.

## Never do
- do not resurrect FAVOR//RELAY V1;
- do not fake human attribution;
- do not interpret localStorage/URL persistence as final backend proof;
- do not interpret browser-mobile proof as Decentraland Mobile proof;
- do not finalize judge story or demo claims before evidence;
- do not turn lineage into a gallery product;
- do not add opaque AI generation to the core causal engine;
- do not spend Vercel builds on bookkeeping-only changes.

## Handover rule
This file must be updated alongside `CURRENT.md` at every substantive gate transition. A future conversation should read `CURRENT.md`, this file, `WINNING-CHAIN.md`, `PDPB-GATE.md`, the active test protocol/matrix, and Issue #1 before taking the lead.
