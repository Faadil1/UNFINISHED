# UNFINISHED — Memory Beacon Visual Pass

**Date:** 2026-09-11

## Verdict

**VISUAL DIRECTION LOCKED / MEMORY BEACON IMPLEMENTED / SDK7 BUILD PASS / RUNTIME VISUAL SMOKE PENDING / CROSS-USER HANDOFF STILL PENDING**

## Why this pass exists

The shared human-chain runtime was already proven before this change:
- `LIVE CHAIN` observed in the published Decentraland World;
- `HANDOFF READY` observed after a full run;
- `COPY HANDOFF LINK` visible;
- Supabase persisted `Maya -> Faadil` as generation 1 -> generation 2.

The purpose of this pass is therefore visual memorability, not feature rescue.

## Locked direction

**UNFINISHED — Memory Beacon**

One coherent synthesis of three explored directions:
- **Ritual Beacon** = central iconic landmark + ceremonial handoff;
- **Memory Bridge** = visible human transmission path;
- **Chain Monument** = cumulative spatial memory.

## Implemented

### New world layer
File: `decentraland/src/world.ts`

Added:
- central Memory Beacon tower;
- emissive vertical core;
- two suspended square halos;
- handoff altar and suspended core;
- floating geometric fragments;
- Memory Bridge edge-lighting and path marks;
- dynamic memory steles based on recent chain authors;
- Chain Monument pillars around the beacon;
- ritual frames and side markers;
- distinct spatial signatures for `CONNECT` and `RISE`;
- beacon visual states for `LIVE`, `HANDOFF`, `WAITING`, and `OFFLINE`.

### Game integration
File: `decentraland/src/game.ts`

Changes:
- removed the older generic gate/lantern visual layer;
- kept the proven gameplay and Supabase shared-chain logic intact;
- connected chain hydration to the Memory Bridge;
- connected `CONNECT` / `RISE` to different spatial signatures;
- connected successful save to the brighter `HANDOFF` beacon state;
- connected self-handoff state to a calmer `WAITING` beacon state;
- connected offline fallback to a muted beacon state.

### Entry framing
File: `decentraland/scene.json`

The initial camera target now points toward the Memory Beacon so the landmark is visible immediately on entry.

## Commits

- `0279f9eebdeec2f1a34c27f40559e02dda5f088a` — `feat: build Memory Beacon world layer`
- `4de82db146329592724bae1fe6621fce29862ea8` — `feat: integrate Memory Beacon visual system`
- `47099928c0698cfd81558a950e79d593c5106adc` — `feat: frame Memory Beacon on world entry`

## CI proof

GitHub Actions workflow: **Decentraland SDK7 Build**

Run: `34634950496`

Result: **SUCCESS**

Confirmed steps:
- dependencies installed;
- SDK7 scene build passed;
- TypeScript/type checking passed through the build;
- build artifact uploaded.

## Architecture discipline

This visual pass did **not** reopen or replace the working shared-chain architecture.

Still canonical:
- Supabase is the active shared-state backend;
- one canonical chain;
- copied World link does not encode a unique handoff id;
- recipient inherits the latest canonical state;
- RLS protects anonymous writes;
- no service-role or private secret is embedded in the Decentraland client.

## Next gate

1. Pull latest `main`.
2. Build `decentraland/` locally.
3. Republish `unfinished.dcl.eth`.
4. Desktop visual smoke before mobile:
   - Memory Beacon is visible on entry;
   - no blocking geometry at spawn;
   - inheritance UI remains readable;
   - `CONNECT` creates the horizontal connection signature;
   - `RISE` creates the ascending signature;
   - traversal remains possible;
   - final save reaches `HANDOFF READY`;
   - beacon visually shifts to the handoff state.
5. Only after desktop visual smoke passes: repeat the key route on mobile.
6. Then perform cross-user PASS C with Benita / another account.

## Claims discipline

Safe claim now:

> UNFINISHED has a proven shared human-chain runtime and a build-green Memory Beacon visual system that turns transmission, lineage, and handoff into spatial elements. The new visual layer still requires published-world visual smoke before it is considered runtime-proven.

Do not yet claim the new Memory Beacon visuals are mobile-proven or cross-user handoff is fully proven.
