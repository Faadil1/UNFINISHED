# UNFINISHED — Current Canonical Handover

**Updated:** 2026-09-11

This file is the compact resume point for the next conversation. If chat context is lost, start here, then read GitHub Issue #3 and the latest evidence file.

## Current verdict

**SHARED CHAIN PROVEN / SUPABASE LIVE / MAYA -> FAADIL PERSISTED / MEMORY BEACON SOURCE + CI ARTIFACT PROVEN / LOCAL REPO SYNCED / FRESH LOCAL BUNDLE CONFIRMED TO CONTAIN MEMORY BEACON / LOCAL PREVIEW SERVER RUNNING WITH ZERO ERRORS / VISUAL PREVIEW CONFIRMATION NEXT / REPUBLISH ONLY AFTER LOCAL VISUAL PASS / MOBILE VISUAL RETEST PENDING / CROSS-USER PASS C PENDING**

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

`decentraland/src/world.ts` implements:
- Memory Beacon tower;
- emissive core;
- suspended halos;
- handoff altar;
- floating fragments;
- Memory Bridge lighting;
- recent-author memory steles;
- Chain Monument pillars;
- ritual frames;
- CONNECT horizontal signature;
- RISE ascending signature;
- beacon states: idle/live/handoff/waiting/offline.

`decentraland/src/game.ts` imports/calls:
- `buildMemoryBeaconWorld()`
- `refreshMemoryBridge()`
- `setBeaconState()`
- `showChoiceSignature()`

`decentraland/scene.json` frames the Memory Beacon on entry.

## Build proof

Implementation commits:
- `0279f9eebdeec2f1a34c27f40559e02dda5f088a`
- `4de82db146329592724bae1fe6621fce29862ea8`
- `47099928c0698cfd81558a950e79d593c5106adc`

GitHub Actions run `34634950496`: **SUCCESS**.
Artifact `unfinished-dcl-build` contains the Memory Beacon functions.

## Local sync + fresh build proof

The stale deployment was traced to the user's local repo being 17 commits behind `origin/main`.

After stashing the local `scene.json` change and fast-forwarding:
- `HEAD == origin/main == 5ca52fd8d9c528cb08f68d7c62418b96c094390a`;
- `world.ts` exists locally;
- `game.ts` contains both import and runtime call for `buildMemoryBeaconWorld()`.

Fresh build after sync:
- `npm run build` PASS;
- type checking PASS;
- `bin/index.js` contains:
  - `buildMemoryBeaconWorld()` definition + call;
  - `showChoiceSignature()` definition + call sites;
  - `setBeaconState()` definition + state transitions.

Local preview:
- `npm run start` PASS;
- compiler watch active;
- type checker reports `Found 0 errors`;
- preview server listening on `0.0.0.0:8000`;
- desktop client deep link emitted successfully.

## Exact next gate

Do not republish yet.

1. Keep `npm run start` running.
2. Open:
   `decentraland://realm=http%3A%2F%2F127.0.0.1%3A8000&position=0%2C0&dclenv=org&local-scene=true`
3. Visual local preview PASS requires:
   - beacon tower visible;
   - halos visible;
   - bridge rails/steles visible;
   - Chain Monument pillars visible;
   - spawn not blocked;
   - UI readable;
   - `LIVE CHAIN` still resolves.
4. If local preview passes, republish exactly from:
   `C:\Users\fboussari\UNFINISHED\decentraland`
5. Then verify the published world.
6. Only after published desktop pass: mobile smoke -> cross-user PASS C.

## Canonical operational thread

GitHub Issue #3 — `Canonical State + Handover — Decentraland Submission`
