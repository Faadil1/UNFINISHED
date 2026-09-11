# UNFINISHED — Current Canonical Handover

**Updated:** 2026-09-11

This file is the compact resume point for the next conversation. If chat context is lost, start here, then read GitHub Issue #3 and the latest evidence file.

## Current verdict

**SHARED CHAIN PROVEN / SUPABASE LIVE / MAYA -> FAADIL PERSISTED / MEMORY BEACON IMPLEMENTED / SDK7 BUILD PASS / PUBLISHED-WORLD VISUAL SMOKE PENDING / MOBILE VISUAL RETEST PENDING / CROSS-USER PASS C PENDING**

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

## Latest build

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

The proven shared-chain/gameplay flow remains intact and now drives the visual states.

### Entry framing
`decentraland/scene.json`

Spawn camera target now frames the Memory Beacon immediately.

## Latest commits

- `0279f9eebdeec2f1a34c27f40559e02dda5f088a` — Memory Beacon world layer
- `4de82db146329592724bae1fe6621fce29862ea8` — game integration
- `47099928c0698cfd81558a950e79d593c5106adc` — entry framing
- `ab698acf138e2b8c569aaa700f7cbebc3ff6a728` — visual build evidence
- `c6a9daf5ce348d00127b5f02f34f6db4011ac18a` — canonical handover

GitHub Actions run `34634950496`: **SUCCESS**.

## Exact next gate

Do not ideate further before visual smoke.

1. User runs:

```powershell
cd $HOME\UNFINISHED
git pull --ff-only
cd decentraland
npm run build
```

2. Republish `unfinished.dcl.eth` in Creator Hub.
3. Desktop published-world visual smoke:
   - landmark visible at entry;
   - no blocked spawn;
   - inheritance UI readable;
   - `LIVE CHAIN` still present;
   - `CONNECT` and `RISE` visibly differ;
   - traversal still works;
   - authoring still works;
   - save still reaches `HANDOFF READY`;
   - handoff beacon state visibly activates.
4. If desktop pass succeeds, repeat the essential flow on mobile.
5. Then send handoff to Benita / second account.
6. PASS C requires second user to inherit Faadil's persisted state while Faadil is self-blocked from consuming his own latest handoff.
7. After PASS C, freeze final demo/submission package and judge narrative.

## Visual constraints

- keep text minimal;
- do not add decorative clutter;
- preserve mobile readability;
- do not reopen backend architecture without runtime evidence;
- do not regress the proven shared chain;
- one iconic landmark and one readable human-chain path are more important than extra effects.

## Latest evidence

Read:
`evidence/runtime/MEMORY-BEACON-VISUAL-PASS-2026-09-11.md`

Canonical operational thread:
GitHub Issue #3 — `Canonical State + Handover — Decentraland Submission`
