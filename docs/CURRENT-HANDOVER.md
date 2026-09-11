# UNFINISHED — Current Canonical Handover

**Updated:** 2026-09-11

This file is the compact resume point for the next conversation. If chat context is lost, start here, then read GitHub Issue #3 and the latest evidence file.

## Current verdict

**SHARED CHAIN PROVEN / SUPABASE LIVE / MAYA -> FAADIL PERSISTED / MEMORY BEACON LOCAL PREVIEW CONFIRMED / FIRST VISUAL PASS TOO OBSTRUCTED / SILHOUETTE + BRIDGE HIERARCHY CORRECTION PUSHED / CI RUN #17 IN PROGRESS / RE-PREVIEW REQUIRED BEFORE REPUBLISH / MOBILE VISUAL RETEST PENDING / CROSS-USER PASS C PENDING**

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

## Local preview result

The fresh synced local bundle was finally confirmed in the Decentraland desktop preview.

Observed PASS:
- Memory Beacon tower/core are present;
- floating halo geometry is present;
- bridge lighting is present;
- monument pillars are present;
- `LIVE CHAIN` still resolves;
- self-handoff state still works (`YOUR HANDOFF IS WAITING`, `Maya -> Faadil`, `COPY HANDOFF LINK`).

Observed visual issues:
- large ritual frame crossbars obscure the beacon silhouette at normal camera height;
- beacon sits too close to the far parcel edge and reads smaller than intended;
- bridge/steles are visually subordinate to the dark frame mass;
- landmark hierarchy is materially weaker than the selected concept art.

Conclusion:
**The Memory Beacon concept is runtime-real, but the first local visual pass is not strong enough to publish yet.**

## Correction pass

Commit:
`7266184779b082bd15ccb9d3b15da529a1064d48` — `feat: strengthen Memory Beacon silhouette and bridge hierarchy`

Changes in `decentraland/src/world.ts`:
- moved beacon/altar forward for stronger framing;
- narrowed the dark tower columns and increased luminous core prominence;
- added a glowing crown element;
- retained two suspended halos but positioned them around the stronger beacon center;
- raised ritual-frame crossbars substantially so they no longer cut through the landmark at eye level;
- reduced frame dominance and opened the central sightline;
- strengthened Memory Bridge rails, center spine, floor marks, and low relay posts;
- increased Chain Monument separation and luminous inscriptions;
- strengthened recent-author steles;
- preserved `CONNECT`, `RISE`, `HANDOFF`, `WAITING`, and `OFFLINE` state behaviors;
- no backend/gameplay architecture changes.

GitHub Actions run #17:
`34638864974` — currently in progress at time of this handover update.

## Exact next gate

Do **not** republish yet.

1. Wait for CI run #17 to pass.
2. On the user's PC, stop the current preview with `Ctrl+C`.
3. Pull the correction:

```powershell
cd $HOME\UNFINISHED
git pull --ff-only
cd decentraland
npm run build
npm run start
```

4. Open the local-scene deep link again.
5. Local visual PASS requires:
   - beacon unobstructed and dominant from entry;
   - halos readable;
   - bridge visibly leading toward the beacon;
   - Chain Monument pillars framing rather than blocking;
   - spawn clear;
   - UI readable;
   - `LIVE CHAIN` still present.
6. Only if this corrected preview passes: republish from exactly `C:\Users\fboussari\UNFINISHED\decentraland`.
7. Then published desktop smoke -> mobile smoke -> cross-user PASS C.

## Canonical operational thread

GitHub Issue #3 — `Canonical State + Handover — Decentraland Submission`
