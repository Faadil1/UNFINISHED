# UNFINISHED — Current Canonical Handover

**Updated:** 2026-09-11

This file is the compact resume point for the next conversation. If chat context is lost, start here, then read GitHub Issue #3 and the latest evidence file.

## Current verdict

**SHARED CHAIN PROVEN / SUPABASE LIVE / MAYA -> FAADIL PERSISTED / MEMORY BEACON SOURCE + CI ARTIFACT PROVEN / LOCAL REPO NOW SYNCED / FRESH LOCAL BUNDLE CONFIRMED TO CONTAIN MEMORY BEACON / LOCAL PREVIEW SERVER RUNNING / VISUAL PREVIEW CONFIRMATION NEXT / PUBLISHED-WORLD REPUBLISH AFTER LOCAL VISUAL PASS / MOBILE VISUAL RETEST PENDING / CROSS-USER PASS C PENDING**

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

## Deployment mismatch diagnosis

A first published-world retest still showed the old environment. Investigation found the user's local repo was 17 commits behind `origin/main`, so the published bundle had been compiled from the old local source.

The user then stashed the local `scene.json` edit and fast-forwarded successfully.

Confirmed locally after sync:
- `HEAD == origin/main == 5ca52fd8d9c528cb08f68d7c62418b96c094390a`;
- `decentraland/src/world.ts` exists;
- `game.ts` imports and calls `buildMemoryBeaconWorld()`;
- fresh `npm run build` passes with zero type errors;
- `bin/index.js` contains `buildMemoryBeaconWorld`, `showChoiceSignature`, and `setBeaconState` plus their runtime call sites;
- `npm run start` launches the local preview server successfully on `127.0.0.1:8000` and emits the Decentraland desktop-client deep link.

This eliminates stale-local-source as the remaining cause. The next evidence needed is visual confirmation inside the local preview client.

## Exact next gate

Do not republish yet.

1. Keep `npm run start` running.
2. Open the emitted Decentraland desktop-client link:

`decentraland://realm=http%3A%2F%2F127.0.0.1%3A8000&position=0%2C0&dclenv=org&local-scene=true`

3. Confirm visually in local preview:
   - Memory Beacon tower visible;
   - suspended halos visible;
   - Memory Bridge / glowing side rails visible;
   - Chain Monument pillars visible;
   - spawn not blocked;
   - inheritance UI remains readable;
   - `LIVE CHAIN` still resolves.
4. If local visual preview passes, republish from exactly:
   `C:\Users\fboussari\UNFINISHED\decentraland`
5. Then re-enter `unfinished.dcl.eth` and verify the new visual layer is live.
6. Only after published-world visual pass: full desktop smoke -> mobile smoke -> cross-user PASS C.

## Visual constraints

- keep text minimal;
- do not add decorative clutter;
- preserve mobile readability;
- do not reopen backend architecture without runtime evidence;
- do not regress the proven shared chain;
- one iconic landmark and one readable human-chain path are more important than extra effects.

## Canonical operational thread

GitHub Issue #3 — `Canonical State + Handover — Decentraland Submission`
