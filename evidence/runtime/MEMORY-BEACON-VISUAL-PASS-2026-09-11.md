# UNFINISHED — Memory Beacon Visual Pass

**Date:** 2026-09-11

## Verdict

**SHARED RUNTIME PROVEN / MEMORY BEACON SECOND LOCAL PREVIEW CONFIRMED / LANDMARK HIERARCHY IMPROVED / FINAL RITUAL-SILHOUETTE POLISH BUILD PASS / P2.1-P2.4 FINISH POLISH IMPLEMENTED / DCL CI #19 + #20 PASS / FINAL LOCAL PREVIEW BEFORE REPUBLISH / MOBILE + CROSS-USER STILL PENDING**

## Runtime truth already proven

Before this visual work:
- `LIVE CHAIN` was observed in the published Decentraland World;
- `HANDOFF READY` was observed after a full run;
- shared World-link copy was visible;
- Supabase persisted `Maya -> Faadil` as generation 1 -> generation 2.

This visual pass is therefore about memorability, continuity, and finish quality, not feature rescue.

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
The user's new video confirmed:
- beacon visible and centered from entry;
- luminous vertical core readable;
- Memory Bridge rails/spine lead toward the ritual core;
- Chain Monument pillars frame rather than fully hide the destination;
- halo/floating geometry visible;
- `LIVE CHAIN` intact;
- self-handoff UI intact.

Residual issue:
- complete rectangular portal frames still read somewhat like generic/test scaffolding.

## Final ritual-silhouette polish

Commit:
`5658dd48bbfb59eb884065eb459e049d2a831fc5` — `feat: polish Memory Beacon ritual silhouette`

Changes in `decentraland/src/world.ts`:
- replaces complete portal rectangles with incomplete side fragments so no dark crossbar spans the beacon axis;
- adds floating luminous keystones as spatial rhythm;
- strengthens bridge spine, relay cadence, floor marks, and arrival threshold;
- refines Chain Monument proportions and memorial ticks;
- tightens beacon tower/core/crown/halo proportions;
- adds side fins around the ritual core without enclosing the player;
- preserves dynamic author steles;
- preserves CONNECT horizontal and RISE vertical signatures;
- preserves LIVE / HANDOFF / WAITING / OFFLINE beacon states;
- does not alter gameplay or Supabase architecture.

GitHub Actions run #18 `34639594369`: **SUCCESS**.

## P2 finish-polish implementation

### P2.1 — Longer chain memory
Commit:
`5a411a1d953e394525ae1543accefb180d511da9` — `feat: add recent-chain memory and polished handoff receipt`

`decentraland/src/ui.tsx` now shows a semantic recent-chain timeline:
- generation 1 author -> `started`;
- generation 2 author -> `completed`;
- later real authors -> `continued`;
- recipient view -> `YOU’RE NEXT`.

The component displays up to the latest three real contributors plus the recipient cue. It will automatically become `Maya started / Faadil completed / Benita continued / YOU’RE NEXT` **only after Benita actually persists a real contribution**. No fake chain member is seeded for demo optics.

GitHub Actions run #19 `34640534366`: **SUCCESS**.

### P2.2 — Light visual variation between passages
Commit:
`72e51af7d01ed049beac2f0c35c1bda82644f59a` — `feat: vary inherited conditions across handoff generations`

`decentraland/src/game.ts` now varies condition/route presentation deterministically with the real state:
- generation motif rotates across three layouts;
- engine bias shifts the inherited condition laterally;
- pressure swaps accent logic;
- anchor / reach / vector / tension continue to control the actual form;
- route cadence, zig-zag phase, ascent direction, width, and color rhythm vary slightly by generation.

This preserves one visual language while reducing the sense that every handoff is the same scene.

GitHub Actions run #20 `34640606958`: **SUCCESS**.

### P2.3 — Cleaner receipt + shared-link continuity
Also in `decentraland/src/ui.tsx`:
- semantic recent-chain block;
- `GEN N · PLAYER -> NEXT` receipt metadata;
- dedicated next-condition strip;
- dedicated `WORLD LINK` strip;
- CTA renamed to `COPY WORLD LINK`;
- explicit copy explains that `unfinished.dcl.eth` opens the World and the recipient inherits the **latest shared state**.

This is intentionally accurate to the architecture: the copied link is a stable World link, **not** a unique per-handoff address.

### P2.4 — Small world identity
Implemented as a coherent Memory Beacon mark:
- Decentraland top bar has a small beacon glyph before `UNFINISHED`;
- root `favicon.svg` uses the same beacon motif;
- root `index.html` injects the favicon into both the bootstrap page and the validated companion runtime head.

Commits:
- `ebecd746cdfea766eecf7d0fa367b847957685fc` — favicon asset;
- `d34efabbbb0e1e6b24654f4f98135f4657f00cfd` — favicon/runtime wiring.

## Exact next gate

Do **not** go to mobile yet.

1. Pull latest `main`.
2. Rebuild and restart local preview:

```powershell
cd $HOME\UNFINISHED
git pull --ff-only
cd decentraland
npm run build
npm run start
```

3. Final local desktop PASS requires:
   - final Memory Beacon silhouette still clean;
   - `LIVE CHAIN` intact;
   - new top-bar world mark visible;
   - self-handoff shows `Maya started` and `Faadil completed` cleanly;
   - receipt/World-link UI has no clipping;
   - World-link copy accurately says latest shared state;
   - generation-2 condition motif visibly differs from the generation-1 seed layout;
   - no collision or gameplay regression.
4. Only after this local pass: republish exactly from `C:\Users\fboussari\UNFINISHED\decentraland`.
5. Then published desktop smoke -> real mobile smoke -> cross-user PASS C.

## Claims discipline

Safe claim now:
> UNFINISHED has a proven shared human-chain runtime, a locally proven Memory Beacon world layer, build-green semantic recent-chain memory, generation-aware visual variation, a polished latest-state World-link receipt, and a coherent Memory Beacon identity.

Do not yet claim the latest P2 build is published/mobile-proven or that cross-user DCL handoff is fully proven.
