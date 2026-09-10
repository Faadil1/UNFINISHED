# CURRENT — UNFINISHED

Date: 2026-09-10

## Status
**PROTOTYPE_KILL_TEST_V5_PUSHED / LIVE_REDEPLOY_EXPECTED / USER_GATE_NOT_YET_VALIDATED**

## Current candidate
**UNFINISHED — Intelligent Causal Loop**

Canonical rule: **NO ONE FINISHES WHAT THEY START.**

Stronger product thesis:
> **Every player solves one problem and creates the next.**

Core loop:
**INHERIT → INTERPRET → COMPLETE → PLAY → AUTHOR NEXT → LEAVE → CONSEQUENCE**

## Winning chain
The required chain is preserved:

**RUBRIC → PAIN → PROBLEM → DIFFERENTIATOR → KILL TEST → PDPB BUILDER → EXECUTION → EVIDENCE → STORY → DEMO → Q&A**

PDPB Builder is still blocked until the V5 causal-authorship kill test passes. No production Decentraland implementation is being claimed before that gate.

## Canonical source
https://github.com/Faadil1/UNFINISHED

`index.html` is now **V5**, English-first.

Latest V5 source commit:
`13696af2648f7dc7acff3b979b86dc0a42ab9513`

## V5 — five intelligence improvements
1. **Solve + create tension** — CONNECT resolves SPAN and creates HEIGHT pressure for the successor; RISE resolves HEIGHT and creates SPAN pressure.
2. **Physical grammar** — inherited state now carries `anchor + vector + reach + pressure + tension`.
3. **Embodied intention** — inherited contribution is visually distinct, has an origin mark and arrow direction, and is readable before explanatory prose.
4. **Delayed consequence proof** — each completed run creates a next-visitor handoff plus a privacy-gated return receipt describing what happened after the prior person left.
5. **Deterministic adaptation** — recent local lineage can raise/lower successor tension deterministically; no randomness is used, and matched HUMAN/WORLD controls preserve identical engine state.

## Causal-authorship upgrade
The prior person is no longer a display label attached to a prefab route.

A real author chooses spatially in the scene:
- anchor: LOW / MID / HIGH
- direction: FLAT / UP
- reach: SHORT / MEDIUM / LONG (derived from actual endpoint placement)

The next playable route is computed from that human-authored geometry plus the next visitor's completion and inherited pressure/tension.

V5 evidence exports counterfactuals for changed anchor, vector, and reach.

## Previously yellow hidden spots — implementation status
### 4. Persistence — IMPLEMENTED IN PROTOTYPE / NOT YET PRODUCTION-VALIDATED
- state handoff survives as a transferable URL;
- local active state persists in localStorage;
- lineage is capped to five recent entries;
- return receipt proves the intended consequence loop.
- still requires shared durable persistence after PDPB.

### 5. Concurrency — IMPLEMENTED IN PROTOTYPE / NOT YET PRODUCTION-VALIDATED
- state carries id + version;
- local compare-and-swap refuses stale writes instead of overwriting;
- evidence records expected/new version.
- still requires atomic shared CAS in the production backend.

### 7. Identity — IMPLEMENTED IN PROTOTYPE / NOT YET PRODUCTION-VALIDATED
- opaque prototype session id is authoritative;
- display name is explicitly non-authoritative;
- a user cannot complete their own state under the same prototype identity;
- default unauthored root is WORLD, never a fake human.
- production must replace prototype identity with connected Decentraland identity.

### 10. Decentraland Mobile — PREPARED / NOT VALIDATABLE YET
- four-direction mobile controls;
- safe-area layout;
- reduced-motion support;
- haptics when available;
- route-following/off-route instrumentation.
- actual Decentraland Mobile validation remains mandatory after PDPB + implementation.

## Active gate
Run real-author matched HUMAN/WORLD cold tests on the verified V5 live runtime.

Required evidence:
- Recognition
- Counterfactual Authorship
- Human Necessity
- Playfulness
- Independent comprehension
- Constraint strength
- Real prior-player causal contribution
- Successor tension comprehension

## Decision rule
- PASS → mandatory **PDPB Builder**
- PIVOT → modify only the failed primitive and rerun the gate
- KILL → do not automatically fall back to NEED//RELAY or RELAY ECHO

## After PASS
PDPB Builder → evolving PRD / Spec Kit → state machine + shared persistence/identity architecture → Decentraland implementation → TRACE → real Decentraland Mobile validation → evidence → STORY → DEMO → Q&A → submission readiness.

## Integrity constraints
No fake users. No display-name authority. Honest WORLD/FOUNDER seed only. No self-completion. No random adaptive black box. Lineage stays secondary to active play. Evidence must distinguish prototype proof from production proof.
