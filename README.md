# UNFINISHED

**Every player solves one problem and creates the next.**

UNFINISHED is an asynchronous social-play concept for Decentraland Friendzone. A visitor inherits an unfinished spatial condition authored by another real person, completes it into a playable route, uses the result, then authors the starting condition that someone else will inherit.

Canonical rule:

> **NO ONE FINISHES WHAT THEY START.**

## Current status
**V5 Intelligent Causal Loop — Prototype / Kill Test**

This is not yet the production Decentraland build. The active purpose is to prove or kill the differentiator before PDPB and implementation.

Canonical repo:
https://github.com/Faadil1/UNFINISHED

Vercel project was re-imported from `main` on 2026-09-10. The observed production domain in the Vercel project is:

`https://unfinished-delta.vercel.app`

Do not count a scored test until the live page is verified to show V5.

## Why V5 is different
The previous player is not just a name attached to a prefab state.

A real prior contributor authors three spatial properties directly in the scene:
- `anchor`: LOW / MID / HIGH
- `vector`: FLAT / UP
- `reach`: SHORT / MEDIUM / LONG

The inherited state also carries deterministic world pressure:
- `pressure`: SPAN / HEIGHT / BALANCE
- `tension`: 0–2

The next route is computed from those inherited conditions plus the current player's action.

## Intelligent causal loop

`INHERIT → INTERPRET → COMPLETE → PLAY → AUTHOR NEXT → LEAVE → CONSEQUENCE`

`CONNECT` resolves span pressure and creates height pressure for the successor.

`RISE` resolves height pressure and creates span pressure for the successor.

So the action is not just a cosmetic choice: every solution changes the problem that comes next.

## Five V5 improvements
1. **Solve + create tension** — each solution creates the next constraint.
2. **Physical grammar** — anchor/vector/reach/pressure/tension form a compact world grammar.
3. **Embodied intention** — the inherited segment shows origin + direction visually before explanatory text.
4. **Delayed consequence** — next-visitor handoff and return receipt show what happened after a state was left.
5. **Deterministic adaptation** — recent play/skip history adjusts tension without randomness; matched HUMAN/WORLD tests hold engine state constant.

## Hidden-spot hardening
See `HIDDEN-SPOTS-HARDENING-V5.md`.

Prototype implementations now exist for:
- transferable persistence + local capped lineage;
- stale-write refusal through local compare-and-swap;
- opaque authority separate from display name;
- self-completion prevention;
- mobile-safe controls, route adherence, haptics and reduced motion.

These are **not yet production proof**. Shared persistence, atomic shared concurrency, connected Decentraland identity, and real Decentraland Mobile validation remain yellow until the post-PDPB implementation stage.

## Test flow
Open operator authoring mode:

`/?author=1`

A real author taps a start socket and endpoint. V5 then generates:
- a HUMAN link containing that actual authored geometry;
- a matched WORLD link with identical geometry and engine state.

The active test protocol is `TEST-PROTOCOL.md` and the active matrix is `TEST-MATRIX-V5.md`.

Older V2/V3/V4 matrices are historical only.

## Evidence
V5 exports:
- source recall;
- prior vs self contribution;
- constraint/origin/social/fun scores;
- route use + off-route attempts;
- inherited physical grammar;
- action tradeoff;
- successor constraint;
- version/CAS result;
- deterministic engine state;
- counterfactual targets for changed anchor/vector/reach;
- identity and persistence proof classification.

## Required winning chain

**RUBRIC → PAIN → PROBLEM → DIFFERENTIATOR → V5 KILL TEST → PDPB BUILDER → EXECUTION → EVIDENCE → STORY → DEMO → Q&A**

Current location: **V5 KILL TEST**.

PASS → PDPB Builder immediately.

No material Decentraland implementation is claimed before that PASS.
