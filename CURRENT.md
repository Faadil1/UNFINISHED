# CURRENT — UNFINISHED

Date: 2026-09-10
Status: **PROTOTYPE_KILL_TEST_V5_2_1_ATOMIC_FIX / RUNTIME_SMOKE_PENDING / USER_GATE_NOT_YET_VALIDATED**

## Candidate
**UNFINISHED — Intelligent Causal Loop V5.2.1**

Rule: **NO ONE FINISHES WHAT THEY START.**

Thesis:
> **Every player solves one problem and creates the next.**

Loop:
**INHERIT → INTERPRET → COMPLETE → PLAY → AUTHOR NEXT → LEAVE → CONSEQUENCE**

## Required winning chain
**RUBRIC → PAIN → PROBLEM → DIFFERENTIATOR → V5.2.1 KILL TEST → PDPB BUILDER → EXECUTION → EVIDENCE → STORY → DEMO → Q&A**

Current gate: **V5.2.1 KILL TEST PRE-SMOKE**. PDPB Builder remains blocked until PASS.

## Canonical source
- Repo: `Faadil1/UNFINISHED`
- Branch: `main`
- Runtime: `https://unfinished-delta.vercel.app`
- Operator: `https://unfinished-delta.vercel.app/?author=1`
- Active bootstrap: `v52.html`
- Core: `index.html`
- Perceptual patch: `v52-patch.js`
- QA fix: `v521-fix.js`
- Protocol: `TEST-PROTOCOL.md`
- Matrix: `TEST-MATRIX-V5.md`
- Hardening: `HIDDEN-SPOTS-HARDENING-V5.md`
- Handoff: `CANONICAL-HANDOFF.md`

## V5.2.1 release fix
An 87-second V5.2 desktop QA recording confirmed the causal loop and 2.5D path work, but exposed two release-blocking defects:
1. explicit `WORLD STATE` could flash before debrief because the V5.1 core was interactable before the V5.2 patch finished loading;
2. HUMAN/WORLD test URLs were plain selectable text, making clipboard mistakes easy after copying evidence JSON.

V5.2.1 fixes both without changing the causal engine:
- the bootstrap keeps the page hidden/non-interactive until V5.2 + V5.2.1 scripts are loaded;
- any explicit pre-debrief source badge is neutralized to `STARTING CONDITION`;
- HUMAN/WORLD operator output gets dedicated COPY and OPEN buttons.

## Causal model preserved
Prior human authors: `anchor + vector + reach`.
Carried deterministic state: `pressure + tension + engineBias`.

`CONNECT` resolves SPAN and creates HEIGHT pressure.
`RISE` resolves HEIGHT and creates SPAN pressure.

The prior human remains a causal author because changing their authored geometry while holding the next action constant changes the playable target/topology.

## Hidden spots — current truth
Prototype implemented but still **yellow until the real execution layer**:
- shared persistence: URL/local prototype exists; durable shared backend still required;
- concurrency: exact local CAS exists; atomic shared CAS still required;
- identity: opaque local authority exists; connected Decentraland identity still required;
- mobile: browser 2.5D controls exist; real Decentraland Mobile still required.

## Build budget
Vercel Hobby quota is shared with other projects. UNFINISHED target: **1–2 deployments/24h**, hard ceiling **3–5 only if critical**. No bookkeeping-only deploys. Runtime verification goes in Issue #1.

## Immediate next action
After V5.2.1 deploy:
1. smoke-test author mode;
2. confirm no explicit HUMAN/WORLD badge before debrief;
3. confirm COPY/OPEN controls exist for both matched links;
4. confirm HUMAN/WORLD pair preserves identical geometry/pressure/tension/engineBias;
5. if clean, create Geometry A/B and begin T1–T5 cold tests;
6. hard verdict PASS / PIVOT / KILL;
7. PASS → **PDPB Builder immediately**.

## Integrity
No fake users. No display-name authority. No self-completion. No opaque/random AI in the causal core. No treating browser proof as Decentraland proof. No final STORY/DEMO claims before evidence.
