# UNFINISHED — Current Canonical Handover

**Updated:** 2026-09-11

This file is the compact resume point for the next conversation. Start here, then read GitHub Issue #3 and the latest Memory Beacon evidence file.

## Current verdict

**SHARED CHAIN PROVEN / SUPABASE LIVE / MAYA -> FAADIL PERSISTED / MEMORY BEACON LOCAL PREVIEW CONFIRMED / FINAL RITUAL-SILHOUETTE POLISH BUILD PASS / P2.1-P2.4 FINISH POLISH IMPLEMENTED / DCL CI #19 + #20 PASS / FINAL LOCAL PREVIEW BEFORE REPUBLISH / MOBILE VISUAL RETEST PENDING / CROSS-USER PASS C PENDING**

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
- Shared World-link copy works.
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

## Memory Beacon visual state

The first local preview proved the new world layer was runtime-real, but the initial composition was too obstructed.

Correction commit:
`7266184779b082bd15ccb9d3b15da529a1064d48` — `feat: strengthen Memory Beacon silhouette and bridge hierarchy`

Final silhouette-polish commit:
`5658dd48bbfb59eb884065eb459e049d2a831fc5` — `feat: polish Memory Beacon ritual silhouette`

GitHub Actions:
- run #17 `34638864974`: **SUCCESS**
- run #18 `34639594369`: **SUCCESS**

The final world layer removes full dark crossbars from the central sightline, preserves the beacon as the visual anchor, strengthens the Memory Bridge and memorial cadence, and keeps CONNECT / RISE / LIVE / HANDOFF / WAITING / OFFLINE states intact.

## P2 finish-polish block

### P2.1 — Longer recent-chain memory
Implemented in `decentraland/src/ui.tsx`.

The UI now shows a compact semantic timeline instead of only a two-name arrow chain:
- first contributor = `started`;
- second contributor = `completed`;
- later contributors = `continued`;
- recipient state adds `YOU’RE NEXT`.

It displays up to the last three real contributors plus the next-player cue, so it naturally expands when Benita / later players actually join. **No fake Benita entry is seeded or displayed before a real persisted contribution exists.**

Examples once the real chain grows:
- `Maya started`
- `Faadil completed`
- `Benita continued`
- `YOU’RE NEXT`

### P2.2 — Light visual variation per handoff generation
Implemented in `decentraland/src/game.ts`.

Inherited-condition geometry now varies deterministically by generation while still reflecting the real state fields:
- generation-based motif variant (`generation % 3`);
- engine-bias lateral shift;
- pressure-dependent accent color;
- anchor/reach/vector/tension still drive height/span/lift;
- route cadence, zig-zag phase, ascent direction, widths, and color rhythm vary slightly across generations.

Goal: successive handoffs remain recognizably UNFINISHED but do not look visually identical.

Commit:
`72e51af7d01ed049beac2f0c35c1bda82644f59a` — `feat: vary inherited conditions across handoff generations`

GitHub Actions run #20 `34640606958`: **SUCCESS**.

### P2.3 — Cleaner receipts + shared link presentation
Implemented in `decentraland/src/ui.tsx`.

Receipt/self-handoff presentation now includes:
- semantic recent-chain memory;
- `GEN N · PLAYER -> NEXT` receipt metadata;
- a dedicated `NEXT CONDITION · PRESSURE · TENSION` strip;
- a dedicated `WORLD LINK` strip;
- clearer `COPY WORLD LINK` CTA;
- explicit wording that the World link opens `unfinished.dcl.eth` and the recipient inherits the **latest shared state**.

This wording intentionally does **not** imply a unique per-link handoff ID. The architecture remains one canonical latest shared chain.

Commit:
`5a411a1d953e394525ae1543accefb180d511da9` — `feat: add recent-chain memory and polished handoff receipt`

GitHub Actions run #19 `34640534366`: **SUCCESS**.

### P2.4 — Small world identity / favicon
Implemented in two places:

1. Decentraland UI brand bar now has a small Memory Beacon mark (rose/ivory beacon glyph) before `UNFINISHED`.
2. Web companion now has `/favicon.svg`, using the same Memory Beacon motif, and `index.html` wires it into both the bootstrap document and injected validated runtime head.

Commits:
- `ebecd746cdfea766eecf7d0fa367b847957685fc` — `feat: add Memory Beacon favicon identity`
- `d34efabbbb0e1e6b24654f4f98135f4657f00cfd` — `feat: wire UNFINISHED favicon into web companion`

## Exact next gate

Do **not** go to mobile yet. Do one final local desktop preview with the P2 block.

1. Stop any running local preview with `Ctrl+C`.
2. Pull latest `main`, build, and restart preview:

```powershell
cd $HOME\UNFINISHED
git pull --ff-only
cd decentraland
npm run build
npm run start
```

3. Open the emitted local-scene deep link.
4. Final local desktop PASS requires:
   - Memory Beacon silhouette still clean;
   - `LIVE CHAIN` still resolves;
   - new Memory Beacon brand mark visible in the top bar;
   - self-handoff shows semantic chain memory (`Maya started`, `Faadil completed`) rather than only `Maya -> Faadil`;
   - receipt/shared-link UI fits without clipping;
   - World-link language says latest shared state and does not imply unique routing;
   - generation-2 inherited condition visibly differs from the generation-1 seed motif;
   - no new collision or gameplay regression.
5. If local desktop passes, republish from exactly `C:\Users\fboussari\UNFINISHED\decentraland`.
6. Published desktop smoke.
7. Then real mobile smoke on the new visual/UI build.
8. Then cross-user PASS C with Benita / another account.

## Cross-user PASS C

Required proof after published desktop + mobile pass:
- second user enters the same World;
- sees Faadil as inherited author / expected latest condition;
- after that real contribution the UI automatically expands the recent-chain memory;
- Faadil remains blocked from consuming his own latest handoff normally.

## Claims discipline

Safe now:
> UNFINISHED has a proven shared human-chain runtime, a build-green Memory Beacon visual system, semantic recent-chain memory, deterministic visual variation across generations, polished latest-state World-link receipts, and a coherent Memory Beacon identity. The latest P2 UI/visual layer still needs final local/published/mobile smoke before runtime freeze.

Do not claim yet:
- latest Memory Beacon/P2 mobile pass;
- cross-user DCL handoff fully proven;
- unique per-link handoff addressing;
- arbitrary multi-chain routing;
- completed Friendzone submission.

## Canonical operational thread

GitHub Issue #3 — `Canonical State + Handover — Decentraland Submission`
