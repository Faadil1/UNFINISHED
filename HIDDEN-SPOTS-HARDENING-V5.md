# UNFINISHED — V5.2 Hidden-Spots Hardening

Date: 2026-09-10
Status: ACTIVE PRE-PDPB CONSTRAINTS

This document supersedes the flat V5 interaction implementation while preserving the same ten hardening requirements.

## 1. Causal prior author — implemented in prototype
A real prior person authors `anchor + vector + reach` by dragging directly from a socket in the scene. The next route is computed from that gesture.

The display name is not the cause. The spatial decision is.

## 2. Counterfactual authorship — implemented in prototype
Evidence records the observed target plus counterfactual targets for changed anchor, vector, and reach while holding the next player's completion constant.

The active falsification test remains:
`f(A,B) ≠ f(A',B)` and `f(A,B) ≠ f(A,B')`.

## 3. Browser fun is not Decentraland proof — preserved as hard gate
V5.2 upgrades the falsification surface to tactile 2.5D but deliberately avoids full 3D/Three.js. It can validate causal comprehension and interaction quality, not certify Decentraland runtime fun.

## 4. Persistence — stronger prototype layer, production validation pending
V5.2 has:
- transferable state URLs;
- local active-state persistence;
- capped recent lineage;
- next-visitor links;
- privacy-gated return receipts;
- chain identity carried with each successor.

Production still requires shared durable persistence after PDPB.

## 5. Concurrency — stronger prototype layer, production validation pending
Each active state carries `chainId + stateId + version`.

A successor commit succeeds only when the current local active state matches all three expected values. A stale/forked state is refused rather than silently overwriting the newer state.

Production still requires atomic shared CAS/transaction semantics in the real backend.

## 6. No self-completion — implemented in prototype
The authoritative prototype identity is an opaque local session id. `authorId === viewerId` blocks completion. Production must enforce the same rule using platform identity.

## 7. Identity integrity — prototype layer implemented, Decentraland validation pending
- display name is presentation only;
- authority is separate from display name;
- an unauthored root is WORLD, never a fabricated human;
- matched WORLD controls use separate test lanes to avoid false concurrency collisions.

Production authority must come from connected Decentraland identity.

## 8. Retention by consequence — implemented as prototype proof
The return reason is: **what happened after what I left**.

After debrief, the prototype can expose:
- next-visitor handoff;
- successor pressure/tension;
- return receipt for the prior author;
- capped lineage event.

No streaks, loot, XP or generic daily-task gamification are required.

## 9. Gallery drift — constrained
Lineage is capped and secondary. The primary experience remains inherit → solve → play → author. History exists only to prove continuity and consequence.

## 10. Real Decentraland Mobile — prepared, not yet validated
V5.2 adds:
- 2.5D depth and perspective without a heavy 3D dependency;
- direct avatar drag constrained to route;
- accessible D-pad fallback;
- in-scene completion targets;
- mobile-safe layout;
- haptics when available;
- reduced-motion support;
- off-route instrumentation;
- authoring gesture metrics.

Actual camera, avatar, collision, persistence, identity, stale-state recovery and performance must still be tested in real Decentraland Mobile after PDPB + implementation.

# Intelligence layer

## A. Solve one problem, create the next
`CONNECT` resolves SPAN and creates HEIGHT.
`RISE` resolves HEIGHT and creates SPAN.

## B. Physical grammar
State:
`anchor × vector × reach × pressure × tension × engineBias`

Human-authored: anchor/vector/reach.
Carried deterministic state: pressure/tension/engineBias.

## C. Embodied intention
Creator mark, route direction, reach and physical stress cues make the inherited decision readable before explanatory prose.

## D. Delayed social consequence
A completion emits a successor state and can produce a return receipt proving how the prior contribution changed.

## E. Deterministic adaptation
No random core generation. `engineBias` is explicit, carried in state, and updates deterministically. HUMAN/WORLD matched links hold geometry, pressure, tension and engineBias constant.

# Debrief-bias protection added in V5.2
The tester answers open-ended comprehension + ratings **before** explicit text reveals that their solution became the next starting condition. This prevents the product from teaching the answer before the measurement is captured.

# Canonical causal claim
> **A previous real player creates the initial spatial conditions of the next player's playable problem, and the next player's solution creates a new problem for someone else.**

# Gate discipline
**RUBRIC → PAIN → PROBLEM → DIFFERENTIATOR → V5.2 KILL TEST → PDPB BUILDER → EXECUTION → EVIDENCE → STORY → DEMO → Q&A**

Nothing here converts prototype proof into production proof. Persistence, concurrency, Decentraland identity and Decentraland Mobile remain yellow until validated in their actual runtime layers.

# V5.2 perceptual hardening delta
The V5.1 QA recording exposed a perception gap even though the causal engine worked. V5.2 therefore adds four explicit requirements:

1. **Structure, not line** — playable paths render as beams/platforms with width, thickness, joints, supports and grounded shadows.
2. **Traversal has weight** — direct movement creates a progress trail, junction feedback and small camera-follow response.
3. **Provenance is embodied, not announced** — HUMAN and WORLD have distinct residue marks, while explicit source badge priming is removed before debrief.
4. **Pressure is physical** — SPAN and HEIGHT pressures alter visible structural cues/deformation, scaled by tension.

These are still prototype perceptual proofs. They do not turn browser 2.5D into Decentraland Mobile proof.
