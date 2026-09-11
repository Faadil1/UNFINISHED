# UNFINISHED — V5.2 Matched Cold-Test Matrix

Use only after `https://unfinished-delta.vercel.app` is verified to serve V5.2.

## Operator preparation
Open:
`/?author=1`

Create at least two genuinely different authored geometries using **drag-from-socket** gestures.

## T1 / T2 — Geometry A
Generate one real authored state and use:
- T1 — HUMAN A
- T2 — WORLD A

The pair must match on:
- anchor
- vector
- reach
- pressure
- tension
- engineBias
- generation
- state version

HUMAN and WORLD intentionally use separate `chainId/stateId` test lanes so the A/B experiment does not create a false stale-write collision.

## T3 / T4 — Geometry B
Create a second real authored state that differs from A in at least two spatial dimensions, preferably including reach.

Generate:
- T3 — HUMAN B
- T4 — WORLD B

Again hold geometry and engine state constant inside the pair.

## T5 — HUMAN replication
Use either:
- a third real geometry C, or
- a deliberate HUMAN repeat of the strongest prior HUMAN condition.

## Instruction only
> **Try this and tell me what you think is happening.**

## Tester eligibility
Every slot must be a different English-speaking cold tester who has never seen V1–V5.2 and has not been briefed on the concept.

## Evidence labels
Record per tester:
- T1–T5 label
- source condition HUMAN/WORLD
- pairId
- chainId/stateId/version
- anchor/vector/reach
- pressure/tension/engineBias
- CONNECT/RISE
- choice source + latency
- first post-reveal action + latency
- routeProgress
- direct drag / D-pad metrics
- used/skipped
- offRouteAttempts
- successor constraint
- CAS result
- sourceRecall
- priorContribution
- selfContribution
- constraint/origin/social/fun
- full `causalProof`

## Comparisons
Primary source-effect comparisons:
- T1 vs T2: source effect with geometry + engine held constant.
- T3 vs T4: source effect with second geometry + engine held constant.

Causal geometry comparison:
- same completion across A vs B should produce materially different target/topology because the prior human gesture changed.

Interaction check:
- scene-choice vs button-choice and avatar-drag vs D-pad are instrumentation dimensions, not different product conditions. Do not intentionally coach one tester into a specific method.

T5 checks replication of the strongest HUMAN signal.

## V5.2 observer-only perceptual notes
For T1–T5, separately record whether the tester spontaneously treats the inherited object as a physical route/structure, whether traversal feedback is noticed, and whether pressure/tension differences are perceived without naming the internal engine terms. These notes supplement — never replace — the existing quantitative and verbatim evidence.
