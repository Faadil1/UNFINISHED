# UNFINISHED — Current Canonical Handover

**Updated:** 2026-09-11

## Current verdict

**DECENTRALAND SHARED CHAIN PROVEN / SUPABASE LIVE / MEMORY BEACON MOBILE PASS / MAYA -> FAADIL -> GENERATION 3 PERSISTED ACROSS DISTINCT PLAYER IDS / WEB ROOT = PLAYABLE 2.5D LOCAL SANDBOX / WEB AVATAR-ROUTE ALIGNMENT BUG FIXED / MAUVE DIRECTION RESTORED / CLOUDFLARE REDEPLOY + WEB SMOKE PENDING / VISUAL REVIEW OF GENERATION-3 PLAYER STILL PENDING**

## Canonical product boundary

### Decentraland = real shared chain
World: `unfinished.dcl.eth`

Deep link: `decentraland://?realm=unfinished.dcl.eth&dclenv=org`

Only Decentraland reads/writes the canonical Supabase chain.

Latest verified DB chain:
- generation 1 `Maya` — `SPAN · T3`
- generation 2 `Faadil` — `SPAN · T4`
- generation 3 `Bigbeni` — `HEIGHT · T5`

Generation 2 and generation 3 use distinct wallet author IDs, and generation 3 points exactly to generation 2 as its parent state. Cross-user persistence is therefore DB-proven. Real-world identity of the generation-3 contributor should not be claimed until independently confirmed.

### Web = local 2.5D sandbox
Public companion may be deployed on Cloudflare / Vercel, but its architecture is intentionally separate from the canonical chain.

Every fresh web visit starts from the fixed Maya seed:
- HIGH / FLAT / SHORT
- SPAN · T3
- engine bias 0.25

The visitor creates a local browser branch only. The web sandbox does **not** read or write Supabase and must never present itself as the live shared chain.

Canonical wording:
> Try a local 2.5D branch from Maya on the web. Continue the real shared human chain in Decentraland.

## Web 2.5D status — latest correction

Cloudflare recording exposed two regressions:
1. avatar rendered far below the generated route and route controls appeared unusable;
2. the beige / exhibit-shell pass weakened the previously preferred mauve UNFINISHED direction.

### Root cause
The V5.3.4 Maya seed changed the inherited anchor to `HIGH` **after** the older runtime had initialized the avatar position. Route geometry moved; avatar coordinates did not.

### Fixes
- `52b60a2d5f9c271d82d1a758040c394d3445cc7b` — `fix: align web avatar with Maya route`
  - sync avatar when Maya seed is applied;
  - snap avatar to the route origin on play;
  - snap again after CONNECT / RISE;
  - reset route-progress / off-route counters.
- `35de2d49d263b9c77cad8cc6fdc9c6f1497c2fd3` — `style: restore mauve web direction`
  - removes the rejected beige shell;
  - preserves the V5.3.3 mauve 2.5D world / UI;
  - keeps only a slim WEB SANDBOX boundary + local handoff actions.
- `d3e735bb60b7f729ce72919fa440887a09bef99f` — `style: restore mauve web shell`
  - browser/bootstrap theme restored to `#241429`.

Evidence:
- `evidence/runtime/WEB-MAUVE-ROUTE-ALIGNMENT-FIX-2026-09-11.md`
- `evidence/runtime/CROSS-USER-GENERATION-3-DB-PROOF-2026-09-11.md`

## Exact next gates

### Web / public-X gate
Redeploy current `main` to Cloudflare and smoke this exact loop:

`Maya seed -> CONNECT/RISE -> avatar begins on route -> D-pad/drag advances -> route completed -> author next -> local receipt -> Decentraland CTA`

Do not promote the Cloudflare URL for X until this passes.

### Decentraland / PASS C visual gate
The database already proves a distinct generation-3 contributor advanced Faadil's state. Review that player's Decentraland recording and verify:
- inherited Faadil state shown before completion;
- route completion / author-next flow;
- generation-3 receipt / recent-chain memory.

Once the recording matches the persisted generation-3 row, promote PASS C to full **visual + persistence** proof.

## Evidence index

- `evidence/runtime/MOBILE-CHAIN-RESET-2026-09-11.md`
- `evidence/runtime/MOBILE-HANDOFF-SHARE-FALLBACK-2026-09-11.md`
- `evidence/runtime/MEMORY-BEACON-VISUAL-PASS-2026-09-11.md`
- `evidence/runtime/WEB-2_5D-SANDBOX-RESTORE-2026-09-11.md`
- `evidence/runtime/WEB-MAUVE-ROUTE-ALIGNMENT-FIX-2026-09-11.md`
- `evidence/runtime/CROSS-USER-GENERATION-3-DB-PROOF-2026-09-11.md`

GitHub Issue #3 remains the operational thread.
