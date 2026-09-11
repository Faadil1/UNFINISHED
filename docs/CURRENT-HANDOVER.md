# UNFINISHED — Current Canonical Handover

**Updated:** 2026-09-11

This file is the compact resume point for the next conversation. Start here, then read GitHub Issue #3 and the latest Memory Beacon evidence file.

## Current verdict

**SHARED CHAIN PROVEN / SUPABASE LIVE / MAYA -> FAADIL PERSISTED / MEMORY BEACON LOCAL PREVIEW CONFIRMED / FIRST VISUAL PASS TOO OBSTRUCTED / SILHOUETTE + BRIDGE HIERARCHY CORRECTION PUSHED / CI RUN #17 PASS / CORRECTED LOCAL RE-PREVIEW NEXT / REPUBLISH ONLY AFTER LOCAL VISUAL PASS / MOBILE VISUAL RETEST PENDING / CROSS-USER PASS C PENDING**

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

## First local visual proof

A fresh local preview finally confirmed the new world layer was executing.

Confirmed:
- Memory Beacon tower/core present;
- halo geometry present;
- bridge lighting present;
- monument pillars present;
- `LIVE CHAIN` intact;
- self-handoff UI intact (`YOUR HANDOFF IS WAITING`, `Maya -> Faadil`, `COPY HANDOFF LINK`).

Visual failure found:
- ritual-frame crossbars cut across the beacon at normal camera height;
- beacon sat too deep in the parcel;
- bridge/steles were visually subordinate to the dark frame mass;
- silhouette was weaker than the selected Memory Beacon concept.

Therefore the first visual pass was **not approved for republish**.

## Correction pass

Commit:
`7266184779b082bd15ccb9d3b15da529a1064d48` — `feat: strengthen Memory Beacon silhouette and bridge hierarchy`

Changes:
- moved beacon and altar forward;
- narrowed tower columns;
- strengthened luminous core;
- added glowing crown;
- repositioned the two halos around the stronger center;
- raised frame crossbars above eye level;
- opened the central sightline;
- strengthened Memory Bridge rails, center spine, floor marks, and relay posts;
- separated Chain Monument pillars from the core and strengthened luminous slots;
- strengthened recent-author steles;
- preserved CONNECT / RISE / HANDOFF / WAITING / OFFLINE behaviors;
- no backend or gameplay architecture changes.

GitHub Actions run #17:
`34638864974` — **SUCCESS**.

All build steps passed, including SDK7 build, type checking, and artifact upload.

## Exact next gate

Do **not** republish yet.

1. Stop the current preview with `Ctrl+C`.
2. Pull latest `main`.
3. Rebuild and restart local preview:

```powershell
cd $HOME\UNFINISHED
git pull --ff-only
cd decentraland
npm run build
npm run start
```

4. Open the local-scene deep link emitted by the SDK.
5. Corrected local visual PASS requires:
   - beacon unobstructed and dominant from entry;
   - halos readable;
   - bridge clearly leading toward the beacon;
   - Chain Monument framing rather than blocking;
   - spawn clear;
   - UI readable;
   - `LIVE CHAIN` still present.
6. Only after this local pass: republish from exactly `C:\Users\fboussari\UNFINISHED\decentraland`.
7. Then published desktop smoke -> mobile smoke -> cross-user PASS C.

## Canonical operational thread

GitHub Issue #3 — `Canonical State + Handover — Decentraland Submission`
