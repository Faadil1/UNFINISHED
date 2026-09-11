# UNFINISHED — Memory Beacon Visual Pass

**Date:** 2026-09-11

## Verdict

**SHARED RUNTIME PROVEN / MEMORY BEACON SECOND LOCAL PREVIEW CONFIRMED / LANDMARK HIERARCHY IMPROVED / FINAL RITUAL-SILHOUETTE POLISH PUSHED / CI RUN #18 PENDING / ONE FINAL LOCAL PREVIEW BEFORE REPUBLISH / MOBILE + CROSS-USER STILL PENDING**

## Runtime truth already proven

Before this visual work:
- `LIVE CHAIN` was observed in the published Decentraland World;
- `HANDOFF READY` was observed after a full run;
- `COPY HANDOFF LINK` was visible;
- Supabase persisted `Maya -> Faadil` as generation 1 -> generation 2.

This visual pass is therefore about memorability and spatial storytelling, not feature rescue.

## Locked direction

**UNFINISHED — Memory Beacon**

Coherent synthesis of:
- **Ritual Beacon** = central landmark + handoff ritual;
- **Memory Bridge** = visible human transmission path;
- **Chain Monument** = cumulative spatial memory.

## Local proof history

### Fresh local bundle proof
The user's local repo was initially 17 commits behind `origin/main`. After fast-forward sync, a fresh local build proved that `bin/index.js` contained the Memory Beacon functions and the local preview ran with zero compiler/type errors.

### First local visual preview
The Memory Beacon was runtime-real, but large full-width dark crossbars cut through the beacon and weakened the hierarchy. That version was not approved for publication.

### Correction pass
Commit:
`7266184779b082bd15ccb9d3b15da529a1064d48` — `feat: strengthen Memory Beacon silhouette and bridge hierarchy`

CI run #17 `34638864974`: **SUCCESS**.

### Second local visual preview
The user's new video confirms the correction materially improved the world:
- beacon is visible and centered from entry;
- luminous vertical core reads clearly;
- Memory Bridge rails/spine lead toward the ritual core;
- Chain Monument pillars frame rather than fully hide the destination;
- halo/floating geometry is visible;
- `LIVE CHAIN` remains intact;
- self-handoff UI remains intact (`YOUR HANDOFF IS WAITING`, `Maya -> Faadil`, `COPY HANDOFF LINK`).

Residual issue:
- complete rectangular portal frames still read somewhat like generic/test scaffolding;
- the world is recognizable but can carry a cleaner authored ritual identity before freeze.

## Final polish pass

Commit:
`5658dd48bbfb59eb884065eb459e049d2a831fc5` — `feat: polish Memory Beacon ritual silhouette`

Changes in `decentraland/src/world.ts`:
- replaces complete portal rectangles with incomplete side fragments so no dark crossbar spans the beacon axis;
- adds floating luminous keystones as spatial rhythm;
- strengthens the bridge spine, relay cadence, floor marks, and arrival threshold;
- refines Chain Monument proportions and adds memorial ticks;
- tightens beacon tower/core/crown/halo proportions;
- adds side fins around the ritual core without enclosing the player;
- preserves dynamic author steles;
- preserves CONNECT horizontal and RISE vertical signatures;
- preserves LIVE / HANDOFF / WAITING / OFFLINE beacon states;
- does not alter gameplay or the Supabase architecture.

GitHub Actions run #18:
`34639594369` — pending at time of this evidence update.

## Exact next gate

Do **not** republish yet.

1. Wait for CI run #18 to pass.
2. Pull latest `main`.
3. Rebuild and restart local preview:

```powershell
cd $HOME\UNFINISHED
git pull --ff-only
cd decentraland
npm run build
npm run start
```

4. Final local visual PASS requires:
   - no full dark crossbar across the central sightline;
   - beacon immediately recognizable and dominant;
   - bridge clearly leading to altar/beacon;
   - monument/memory layers support rather than clutter;
   - spawn clear;
   - UI readable;
   - `LIVE CHAIN` intact.
5. Only after this local pass: republish exactly from `C:\Users\fboussari\UNFINISHED\decentraland`.
6. Then published desktop smoke -> mobile smoke -> cross-user PASS C.

## Claims discipline

Safe claim now:
> UNFINISHED has a proven shared human-chain runtime and a locally proven Memory Beacon visual system. A final ritual-silhouette polish is build-gated before publication.

Do not yet claim the final Memory Beacon polish is published/mobile-proven or that cross-user DCL handoff is fully proven.
