# CURRENT — UNFINISHED

Date: 2026-09-10
Status: **PROTOTYPE_KILL_TEST_V5_2_2_ROOT_FIX / RUNTIME_SMOKE_PENDING / USER_GATE_NOT_YET_VALIDATED**

## Candidate
**UNFINISHED — Intelligent Causal Loop V5.2.2**

Rule: **NO ONE FINISHES WHAT THEY START.**

Thesis:
> **Every player solves one problem and creates the next.**

Loop:
**INHERIT → INTERPRET → COMPLETE → PLAY → AUTHOR NEXT → LEAVE → CONSEQUENCE**

## Required winning chain
**RUBRIC → PAIN → PROBLEM → DIFFERENTIATOR → V5.2.2 KILL TEST → PDPB BUILDER → EXECUTION → EVIDENCE → STORY → DEMO → Q&A**

Current gate: **V5.2.2 RUNTIME SMOKE**. PDPB Builder remains blocked until PASS.

## Canonical runtime
- Repo: `Faadil1/UNFINISHED`
- Branch: `main`
- Production: `https://unfinished-delta.vercel.app`
- Operator: `https://unfinished-delta.vercel.app/?author=1`
- Public entry: `index.html`
- Frozen causal core: `core-v51.html`
- Perceptual layer: `v52-patch.js`
- QA/source-neutral layer: `v521-fix.js`
- Legacy `/v52.html` now redirects to `/` preserving query/hash.
- `vercel.json` no longer rewrites `/` away from `index.html`.

## Why V5.2.2 exists
Fresh InPrivate QA proved the public root could still expose the V5.1 core directly: WORLD runs showed `WORLD STATE` before debrief and the operator output lacked the dedicated matched-link COPY/OPEN controls. This falsified the cache-only hypothesis.

V5.2.2 removes routing ambiguity. `/` itself is now the readiness-gated bootstrap that loads the frozen V5.1 causal core, then synchronously applies V5.2 and V5.2.1 before interaction is exposed.

## Causal model preserved
Prior human authors: `anchor + vector + reach`.
Carried deterministic state: `pressure + tension + engineBias`.

`CONNECT` resolves SPAN and creates HEIGHT.
`RISE` resolves HEIGHT and creates SPAN.

No causal-engine logic changed in V5.2.2.

## Hidden spots — current truth
Prototype implemented but still yellow until real execution:
- shared persistence: URL/local prototype exists; durable shared backend required;
- concurrency: exact local CAS exists; atomic shared CAS required;
- identity: opaque local authority exists; connected Decentraland identity required;
- mobile: browser 2.5D controls exist; actual Decentraland Mobile runtime required.

## Smoke PASS
A fresh/private run must prove all of:
1. author mode loads through `/`;
2. matched HUMAN/WORLD output shows dedicated COPY + OPEN controls;
3. WORLD run shows only `STARTING CONDITION` before debrief;
4. HUMAN run does not expose `<name> LEFT THIS` before debrief;
5. matched pair preserves identical geometry/pressure/tension/engineBias;
6. title/debug identify V5.2.2 when inspected.

If clean: create Geometry A/B → T1–T5 → PASS/PIVOT/KILL → PASS means **PDPB Builder immediately**.

## Canonical discipline
Every substantive gate transition updates this file and `CANONICAL-HANDOFF.md` together. Runtime verification belongs in Issue #1 so bookkeeping does not trigger another Vercel build.
