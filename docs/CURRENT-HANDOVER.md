# UNFINISHED — Current Canonical Handover

**Updated:** 2026-09-11

This file is the compact resume point for the next conversation. Start here, then read GitHub Issue #3 and the latest Memory Beacon evidence file.

## Current verdict

**SHARED CHAIN PROVEN / SUPABASE LIVE / MAYA -> FAADIL PERSISTED / MEMORY BEACON SECOND LOCAL PREVIEW PASS CONFIRMED / LANDMARK + BRIDGE HIERARCHY MATERIALLY IMPROVED / FINAL RITUAL-SILHOUETTE POLISH PUSHED / CI RUN #18 PENDING / ONE FINAL LOCAL PREVIEW BEFORE REPUBLISH / MOBILE VISUAL RETEST PENDING / CROSS-USER PASS C PENDING**

## Product

**UNFINISHED — Playable Co-Authorship**

Thesis:
> Another real person's unfinished decision becomes the level you have to play.

Rule:
> NO ONE FINISHES WHAT THEY START.

Loop:
**INHERIT -> COMPLETE -> USE -> AUTHOR NEXT -> HANDOFF**

## Runtime truth already proven

- Decentraland World entry works.
- Desktop smoke passed on the earlier visual version.
- Real mobile smoke passed on the earlier visual version.
- Supabase shared state is reachable from Decentraland.
- `LIVE CHAIN` works.
- Full save reaches `HANDOFF READY`.
- `COPY HANDOFF LINK` works.
- Supabase contains generation 1 `Maya` and generation 2 `Faadil` (`SPAN`, tension `4`).

## Active backend

Supabase project `unfinished-dcl` (`ierowefnowuxybkivnnb`, `ca-central-1`).

- RLS enabled.
- Append-only validation.
- No private service secret in the DCL client.
- Neon is historical and no longer active for this runtime.

## Locked visual direction

**UNFINISHED — Memory Beacon**

Coherent merge of:
- Ritual Beacon = iconic landmark + handoff ritual;
- Memory Bridge = visible human transmission path;
- Chain Monument = cumulative spatial memory.

## Visual proof history

### First fresh local preview
The Memory Beacon layer was runtime-real, but the first composition was rejected because large ritual crossbars cut through the beacon and the bridge/steles were visually subordinate.

### Correction commit
`7266184779b082bd15ccb9d3b15da529a1064d48` — `feat: strengthen Memory Beacon silhouette and bridge hierarchy`

GitHub Actions run #17 `34638864974`: **SUCCESS**.

### Second local preview — current user video
The correction materially improved the composition.

Observed:
- beacon is now clearly visible and centered;
- luminous vertical core reads from entry;
- bridge rails and center spine visibly lead toward the ritual core;
- Chain Monument pillars frame rather than fully obscure the destination;
- halo / floating geometry is visible;
- self-handoff UI remains intact;
- `LIVE CHAIN` remains intact;
- no gameplay/backend regression observed in the local preview.

Residual visual issue:
- the remaining complete rectangular portal frames still read somewhat like test/scaffolding architecture;
- the world is recognizable and functional, but the ritual identity can be cleaner and more authored before freeze.

## Final polish pass

Commit:
`5658dd48bbfb59eb884065eb459e049d2a831fc5` — `feat: polish Memory Beacon ritual silhouette`

Changes in `decentraland/src/world.ts`:
- replaces full portal rectangles with incomplete side fragments so no dark bar crosses the beacon axis;
- keeps floating luminous keystones as spatial rhythm instead of a full cage;
- strengthens the bridge spine, relay cadence, and arrival threshold;
- refines Chain Monument proportions and adds memorial ticks so it reads as cumulative memory;
- tightens the beacon tower, core, crown, halos, side fins, altar, and floating fragments;
- preserves dynamic author steles;
- preserves CONNECT horizontal signature and RISE vertical signature;
- preserves LIVE / HANDOFF / WAITING / OFFLINE beacon states;
- no gameplay or backend architecture changes.

GitHub Actions run #18:
`34639594369` — pending at time of this handover update.

## Exact next gate

Do **not** republish yet.

1. Wait for CI run #18 to pass.
2. Stop local preview with `Ctrl+C`.
3. Pull latest main and restart preview:

```powershell
cd $HOME\UNFINISHED
git pull --ff-only
cd decentraland
npm run build
npm run start
```

4. Open the emitted local-scene deep link.
5. Final local visual PASS requires:
   - no full dark crossbar across the central sightline;
   - beacon immediately recognizable and dominant;
   - bridge clearly leads to altar/beacon;
   - monument/memory elements read as supporting layers, not clutter;
   - spawn clear;
   - UI readable;
   - `LIVE CHAIN` intact.
6. If that passes, republish from exactly `C:\Users\fboussari\UNFINISHED\decentraland`.
7. Then published desktop smoke -> mobile smoke -> cross-user PASS C.

## Canonical operational thread

GitHub Issue #3 — `Canonical State + Handover — Decentraland Submission`
