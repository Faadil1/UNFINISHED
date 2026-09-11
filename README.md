# UNFINISHED

**Every player solves one problem and creates the next.**

UNFINISHED is an asynchronous social-play concept for Decentraland Friendzone. A visitor inherits an unfinished spatial condition authored by another real person, completes it into a playable route, physically uses the result, then authors the starting condition that someone else can inherit.

> **NO ONE FINISHES WHAT THEY START.**

## Current status
**V5.2 Intelligent Causal Loop — 2.5D Tactile Prototype / Kill Test**

This is not yet the production Decentraland build. V5.2 exists to prove or kill the differentiator before PDPB and implementation.

Canonical repo:
https://github.com/Faadil1/UNFINISHED

Production prototype runtime:
https://unfinished-delta.vercel.app

Operator authoring mode:
https://unfinished-delta.vercel.app/?author=1

## Core differentiator
The previous player is not just a name attached to a prefab state.

A real contributor authors three physical properties by dragging in the scene:
- `anchor`: LOW / MID / HIGH
- `vector`: FLAT / UP
- `reach`: SHORT / MEDIUM / LONG

The state also carries deterministic world conditions:
- `pressure`: SPAN / HEIGHT / BALANCE
- `tension`: 0–3
- `engineBias`: explicit deterministic adaptation state

The next route is computed from inherited human-authored geometry + carried conditions + the current player's action.

`CONNECT` resolves span pressure and creates height pressure.
`RISE` resolves height pressure and creates span pressure.

So every solution changes the problem that comes next.

## Why 2.5D now
V5.2 intentionally uses lightweight Canvas 2D with perspective/depth rather than full Three.js.

The prototype now includes:
- structural beam/platform rendering with width, thickness, joints, supports and grounded shadows;
- perspective floor, shallow void and subtle parallax;
- lightweight camera-follow and junction feedback during traversal;
- in-scene causal stress cues that physically distinguish SPAN/HEIGHT pressure and tension;
- subtle embodied HUMAN/WORLD provenance instead of explicit pre-debrief source-label priming;
- direct CONNECT/RISE ghost-route selection;
- direct avatar drag constrained to the route plus D-pad fallback;
- drag-from-socket authorship;
- non-verbal successor transition;
- debrief-before-explanation bias protection.

This gives enough embodied interaction to test the mechanic while keeping full 3D, camera, collisions and Decentraland runtime complexity out of the kill-test gate.

## Hidden-spot hardening
See `HIDDEN-SPOTS-HARDENING-V5.md`.

Prototype implementations exist for:
- transferable persistence + capped lineage;
- exact local stale/fork refusal through CAS;
- opaque authority separate from display name;
- self-completion prevention;
- retention return receipt;
- deterministic pressure/tension adaptation;
- mobile interaction telemetry.

Still yellow until post-PDPB execution proves them:
- shared durable persistence;
- atomic shared concurrency;
- connected Decentraland identity;
- real Decentraland Mobile runtime.

## Evidence
V5.2 can export causal and interaction evidence including:
- prior vs self contribution;
- source recall;
- Constraint / Origin / Social / Fun;
- button vs in-scene completion choice;
- direct avatar drag vs D-pad activity;
- route progress, junctions and off-route attempts;
- timing and camera-travel instrumentation;
- inherited physical grammar;
- successor constraint;
- exact local CAS result;
- counterfactual targets for changed anchor/vector/reach;
- identity/persistence proof classification.

## Required winning chain
**RUBRIC → PAIN → PROBLEM → DIFFERENTIATOR → V5.2 KILL TEST → PDPB BUILDER → EXECUTION → EVIDENCE → STORY → DEMO → Q&A**

Current location: **V5.2 KILL TEST**.

PASS → PDPB Builder immediately.

No material Decentraland implementation is claimed before PASS.

## Runtime composition
`vercel.json` routes the public root to `v52.html`, which loads the validated V5.1 causal core from `index.html` and then applies `v52-patch.js`. This isolates the perceptual pass from the causal engine for easier rollback/audit.
