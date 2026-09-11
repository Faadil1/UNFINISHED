# UNFINISHED

**Every player solves one problem and creates the next.**

UNFINISHED is an asynchronous social-play concept for the Decentraland Friendzone Mobile Buildathon. A visitor inherits an unfinished spatial condition authored by another real person, completes it into a playable route, uses the result, then authors the condition the next visitor inherits.

> **NO ONE FINISHES WHAT THEY START.**

## Current status
**V5.2.1 — 2.5D Tactile Prototype / Kill Test**

Production prototype: `https://unfinished-delta.vercel.app`
Operator authoring: `https://unfinished-delta.vercel.app/?author=1`

This is not yet the production Decentraland build. PDPB and material implementation remain locked until the cold-test gate passes.

## Causal grammar
Human-authored: `anchor + vector + reach`.
Deterministically carried: `pressure + tension + engineBias`.

`CONNECT` resolves SPAN and creates HEIGHT.
`RISE` resolves HEIGHT and creates SPAN.

The prior human is therefore intended to be a causal author of the next visitor's playable problem, not a display name attached to a prefab level.

## V5.2.1
V5.2 added embodied 2.5D structure, pressure/tension cues, direct traversal, route-constrained avatar movement, drag-from-socket authorship, successor handoff, local persistence/CAS, receipt, and instrumentation.

V5.2.1 is a narrow QA hardening pass:
- blocks interaction until the V5.2 layers are fully loaded;
- neutralizes explicit HUMAN/WORLD source badges before debrief;
- adds dedicated COPY/OPEN controls for each matched HUMAN/WORLD link.

Use those operator buttons rather than manually selecting long URLs.

## Still yellow until real execution
Browser proof does not make these production-green:
- shared durable persistence;
- atomic shared concurrency;
- authoritative Decentraland identity;
- real Decentraland Mobile runtime.

## Required chain
**RUBRIC → PAIN → PROBLEM → DIFFERENTIATOR → V5.2.1 KILL TEST → PDPB BUILDER → EXECUTION → EVIDENCE → STORY → DEMO → Q&A**

Canonical state: `CURRENT.md` + `CANONICAL-HANDOFF.md`. Active test protocol: `TEST-PROTOCOL.md`. Active gate: GitHub Issue #1.
