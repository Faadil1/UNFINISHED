# CURRENT — UNFINISHED

Date: 2026-09-10

## Status
**PROTOTYPE_KILL_TEST_V5_1_SINGLE_BATCH_PUSH / USER_GATE_NOT_YET_VALIDATED**

## Current candidate
**UNFINISHED — Intelligent Causal Loop V5.1**

Canonical rule:
> **NO ONE FINISHES WHAT THEY START.**

Stronger product thesis:
> **Every player solves one problem and creates the next.**

Core loop:
**INHERIT → INTERPRET → COMPLETE → PLAY → AUTHOR NEXT → LEAVE → CONSEQUENCE**

## Required winning chain
**RUBRIC → PAIN → PROBLEM → DIFFERENTIATOR → KILL TEST → PDPB BUILDER → EXECUTION → EVIDENCE → STORY → DEMO → Q&A**

Current location: **V5.1 KILL TEST**.

PDPB Builder remains blocked until this gate passes. No production Decentraland implementation is claimed before PASS.

## Canonical source
Repository: `Faadil1/UNFINISHED`
Branch: `main`
Active prototype: `index.html`
Active protocol: `TEST-PROTOCOL.md`
Active matrix: `TEST-MATRIX-V5.md`
Active hardening: `HIDDEN-SPOTS-HARDENING-V5.md`
Build budget: `BUILD-BUDGET.md`

## Public runtime
Current Vercel project: `unfinished`
Current observed production domain: `https://unfinished-delta.vercel.app`

V5 was already verified through GitHub as `Vercel: success` after the project re-import. V5.1 is intentionally shipped as one atomic source+docs batch. Runtime verification should be recorded in Issue #1 rather than creating a documentation-only follow-up deploy.

## V5.1 interaction upgrade — 2.5D tactile proof
V5.1 keeps Canvas 2D for fast falsification but changes the experience from a flat diagram into a lightweight 2.5D spatial playground:
- perspective floor and layered depth;
- extruded route surfaces and shadows;
- subtle parallax;
- creator mark embedded in the inherited geometry;
- pressure/tension shown through physical stress cues rather than explanatory text;
- in-scene ghost outcomes that can be tapped directly for CONNECT/RISE;
- direct avatar drag constrained to the route, with D-pad fallback;
- drag-from-socket authoring for both the original author and successor author;
- short non-verbal handoff animation before debrief;
- debrief is completed before any explicit successor explanation is revealed.

This is intentionally **not Three.js / full 3D**. Full 3D is reserved for post-PDPB Decentraland execution so visual polish cannot hide a weak primitive.

## Causal authorship
A prior real person authors:
- `anchor`: LOW / MID / HIGH
- `vector`: FLAT / UP
- `reach`: SHORT / MEDIUM / LONG

The state also carries deterministic:
- `pressure`: SPAN / HEIGHT / BALANCE
- `tension`: 0–3
- `engineBias`: explicit state-carried deterministic adaptation value

The next route is computed from inherited geometry + carried pressure/tension + the current visitor's CONNECT/RISE action.

`CONNECT` resolves SPAN and creates HEIGHT pressure.
`RISE` resolves HEIGHT and creates SPAN pressure.

The successor state therefore inherits a real consequence, not a cosmetic label.

## Hidden spots — current truth
### Implemented strongly in prototype
- causal prior authorship;
- counterfactual authorship;
- self-completion prevention;
- honest WORLD root when no authenticated human authorship exists;
- retention receipt / consequence handoff;
- capped lineage;
- deterministic engine/no random core generation;
- 2.5D mobile interaction + route adherence instrumentation.

### Yellow: prototype implementation exists, production proof still pending
1. **Persistence** — transferable URL state + local active state + capped lineage + return receipt; shared durable backend still required.
2. **Concurrency** — exact local CAS on `chainId + stateId + version`; atomic shared CAS still required.
3. **Identity** — opaque prototype session is authoritative and display name is non-authoritative; connected Decentraland identity still required.
4. **Decentraland Mobile** — mobile-safe 2.5D controls and telemetry exist; actual Decentraland Mobile runtime still required.

## Instrumentation added in V5.1
Evidence can now include:
- page-to-start latency;
- completion choice latency;
- button vs in-scene completion source;
- first post-reveal interaction latency;
- D-pad moves;
- direct-drag starts/samples;
- route progress;
- off-route attempts;
- route completion latency;
- play duration;
- author/leave gesture duration and spatial distance;
- debrief duration;
- exact CAS result;
- causal counterfactuals;
- successor pressure/tension/engineBias.

## Active gate
1. Smoke-test `https://unfinished-delta.vercel.app/?author=1` after the V5.1 atomic build completes.
2. Produce at least two materially different real-authored geometries.
3. Generate matched HUMAN/WORLD pairs.
4. Run five independent cold tests.
5. Record verbatim answers + evidence JSON.
6. Issue a hard PASS / PIVOT / KILL verdict.
7. PASS → **PDPB Builder immediately**.

## Integrity constraints
No fake users. No display-name authority. No self-completion. No random/opaque AI in the core mechanic. No treating browser 2.5D as Decentraland proof. No gallery drift. No final STORY/DEMO claims before evidence.
