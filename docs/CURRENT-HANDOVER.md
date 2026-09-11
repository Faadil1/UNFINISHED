# UNFINISHED — Current Canonical Handover

**Updated:** 2026-09-11

This file is the compact resume point for the next conversation. If chat context is lost, start here, then read GitHub Issue #3 and the latest evidence file.

## Current verdict

**SHARED CHAIN PROVEN / SUPABASE LIVE / MAYA -> FAADIL PERSISTED / MEMORY BEACON SOURCE + CI ARTIFACT PROVEN / PUBLISHED WORLD STILL SERVING OLD VISUAL BUNDLE / DEPLOYMENT-PATH VERIFICATION NEXT / MOBILE VISUAL RETEST PENDING / CROSS-USER PASS C PENDING**

## Product

**UNFINISHED — Playable Co-Authorship**

Thesis:
> Another real person's unfinished decision becomes the level you have to play.

Rule:
> NO ONE FINISHES WHAT THEY START.

Loop:
**INHERIT -> COMPLETE -> USE -> AUTHOR NEXT -> HANDOFF**

## Proven runtime truth

Already proven in the published Decentraland World before the latest visual pass:
- World entry works;
- desktop smoke works;
- real mobile smoke works on the earlier visual version;
- Supabase shared state is reachable from Decentraland;
- `LIVE CHAIN` appears;
- full run can save successfully;
- `HANDOFF READY` appears;
- `COPY HANDOFF LINK` appears;
- Supabase contains generation 1 `Maya` and generation 2 `Faadil` (`SPAN`, tension `4`).

## Backend canon

Active backend: **Supabase**

Project: `unfinished-dcl`

Project ref: `ierowefnowuxybkivnnb`

Region: `ca-central-1`

Security:
- publishable/anon client access;
- RLS enabled;
- append-only validation policy;
- no private service secret in the Decentraland client;
- Supabase security advisor clean after private-schema hardening.

Neon is historical for this workstream and is no longer the active runtime backend.

## Locked visual direction

**UNFINISHED — Memory Beacon**

Coherent merge of:
- Ritual Beacon -> iconic central ritual landmark;
- Memory Bridge -> visible human lineage/transmission path;
- Chain Monument -> cumulative spatial memory.

## Memory Beacon implementation

### World layer
`decentraland/src/world.ts`

Implements:
- Memory Beacon tower;
- emissive core;
- suspended halos;
- handoff altar;
- floating fragments;
- Memory Bridge lighting;
- recent-author memory steles;
- Chain Monument pillars;
- ritual frames;
- `CONNECT` horizontal signature;
- `RISE` ascending signature;
- beacon states: idle/live/handoff/waiting/offline.

### Game integration
`decentraland/src/game.ts`

Imports and calls:
- `buildMemoryBeaconWorld()`
- `refreshMemoryBridge()`
- `setBeaconState()`
- `showChoiceSignature()`

The proven shared-chain/gameplay flow remains intact and now drives the visual states.

### Entry framing
`decentraland/scene.json`

Spawn camera target frames the Memory Beacon.

## Build proof

Core implementation commits:
- `0279f9eebdeec2f1a34c27f40559e02dda5f088a` — Memory Beacon world layer
- `4de82db146329592724bae1fe6621fce29862ea8` — game integration
- `47099928c0698cfd81558a950e79d593c5106adc` — entry framing

GitHub Actions run `34634950496`: **SUCCESS**.
Artifact: `unfinished-dcl-build`, id `10276754589`, digest `sha256:6c0617f97b4e5b42446ac204b85cb106d406bcedd2771a3cf82420a197eedcb4`.
The compiled artifact was inspected and contains `buildMemoryBeaconWorld`, `refreshMemoryBridge`, `setBeaconState`, and `showChoiceSignature`.

## Latest published-world visual smoke

User video uploaded after the Memory Beacon implementation still shows the **old visual environment**:
- old rectangular gate architecture remains;
- no Memory Beacon tower;
- no suspended halos;
- no Memory Bridge rails/steles;
- no Chain Monument pillars.

At the same time the runtime still shows `LIVE CHAIN` and the self-handoff UI (`YOUR HANDOFF IS WAITING`, `Maya -> Faadil`).

Conclusion:
**The latest source and CI artifact are correct, but the published World is still serving an older scene bundle. This is a deployment/local-project mismatch, not a design-code failure.**

## Exact next gate

Do not change visual design or backend yet.

1. Verify the local repo actually matches `origin/main`:

```powershell
cd $HOME\UNFINISHED
git fetch origin
git status --short
git rev-parse HEAD
git rev-parse origin/main
```

2. Confirm the Memory Beacon source exists locally:

```powershell
Select-String -Path .\decentraland\src\game.ts -Pattern "buildMemoryBeaconWorld"
Select-String -Path .\decentraland\src\world.ts -Pattern "buildMemoryBeaconWorld"
```

3. Build from the exact repo folder:

```powershell
cd $HOME\UNFINISHED\decentraland
npm run build
Select-String -Path .\bin\index.js -Pattern "buildMemoryBeaconWorld"
```

4. Before publishing, run local preview from that same folder:

```powershell
npm run start
```

5. If local preview shows the Memory Beacon, Creator Hub must be pointed to exactly:
`C:\Users\fboussari\UNFINISHED\decentraland`

6. Republish only from that exact project/folder.
7. Re-enter `unfinished.dcl.eth` and verify the landmark visually.
8. Only after the published-world Memory Beacon is confirmed: full desktop smoke -> mobile smoke -> cross-user PASS C.

## Visual constraints

- keep text minimal;
- do not add decorative clutter;
- preserve mobile readability;
- do not reopen backend architecture without runtime evidence;
- do not regress the proven shared chain;
- one iconic landmark and one readable human-chain path are more important than extra effects.

## Canonical operational thread

GitHub Issue #3 — `Canonical State + Handover — Decentraland Submission`
