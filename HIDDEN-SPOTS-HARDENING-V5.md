# UNFINISHED — V5 Hidden-Spots Hardening

Date: 2026-09-10
Status: ACTIVE PRE-PDPB CONSTRAINTS

This document supersedes V4 hardening for the active prototype.

## 1. Causal prior author — implemented in prototype
A real prior person authors `anchor + vector + reach` by tapping directly in the scene. The next route is computed from that geometry.

## 2. Counterfactual authorship — implemented in prototype
The evidence export records the observed target plus counterfactual targets for changed anchor, vector, and reach while holding the next player's completion constant.

## 3. Browser fun is not Decentraland proof — preserved as a hard gate
V5 can falsify the primitive and measure comprehension/playfulness, but cannot certify Decentraland Mobile fun or runtime quality.

## 4. Persistence — prototype layer implemented, production validation pending
V5 now has:
- transferable state URLs;
- local active-state persistence;
- capped recent lineage;
- a next-visitor link;
- a privacy-gated return-receipt link.

Production still requires shared durable persistence after PDPB.

## 5. Concurrency — prototype layer implemented, production validation pending
Each state has `stateId`, `stateVersion`, and successor version. Local compare-and-swap refuses a stale completion rather than overwriting a newer state.

Production still requires atomic CAS/transaction semantics in the shared backend.

## 6. No self-completion — implemented in prototype
The authoritative prototype identity is an opaque local session id. Matching `authorId === viewerId` blocks completion. The production build must enforce the same rule using Decentraland identity.

## 7. Identity integrity — prototype layer implemented, Decentraland validation pending
Display names are presentation only. They never authorize a state transition. An unauthored root defaults to WORLD instead of inventing a human contributor. Production authority must come from the connected Decentraland identity.

## 8. Retention by consequence — implemented as a prototype proof
The return mechanism is "what happened after what I left." V5 creates a return receipt from the actual inherited state, the next player's completion, and the resulting successor constraint. No streaks, loot, or generic daily-task gamification are required.

## 9. Gallery drift — constrained
Lineage is capped and secondary. It exists to prove continuity, not to turn UNFINISHED into a museum/gallery.

## 10. Real Decentraland Mobile — prepared, not yet validated
V5 includes mobile-safe layout, four-direction controls, route-following checks, haptics when available, reduced-motion support, and telemetry for off-route attempts. Actual camera, controls, cold start, persistence, identity, and stale-state recovery must still be tested in Decentraland Mobile after PDPB + implementation.

# Five intelligence upgrades

## A. Solve one problem, create the next
`CONNECT` resolves current span pressure and creates successor height pressure. `RISE` resolves current height pressure and creates successor span pressure. Every solution therefore alters the next player's problem.

## B. Physical grammar
Canonical state grammar:

`anchor × vector × reach × pressure × tension`

Human-authored fields: `anchor`, `vector`, `reach`.
System-carried fields: `pressure`, `tension`.

## C. Embodied intention
The inherited segment has a creator mark and arrow direction and is visually distinct from the current player's extension. The prior person's contribution must be legible in geometry before explanatory copy.

## D. Delayed social consequence
A completed state emits:
- next-visitor handoff;
- successor constraint;
- return receipt for the prior author;
- capped lineage event.

## E. Deterministic adaptation
The prototype adaptation policy uses recent route-use/skip history to adjust successor tension. It has no randomness. Controlled HUMAN/WORLD tests must preserve identical geometry, pressure, tension, and engine state.

# Canonical causal claim

> A previous real player creates the initial spatial conditions of the next player's playable problem, and the next player's solution creates a new problem for someone else.

# Gate discipline

**RUBRIC → PAIN → PROBLEM → DIFFERENTIATOR → V5 KILL TEST → PDPB BUILDER → EXECUTION → EVIDENCE → STORY → DEMO → Q&A**

Nothing in this file converts a prototype proof into production proof. Persistence, concurrency, Decentraland identity, and Decentraland Mobile remain yellow until validated in their real runtime layers.
