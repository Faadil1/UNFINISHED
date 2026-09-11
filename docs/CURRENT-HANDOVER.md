# UNFINISHED — Current Canonical Handover

**Updated:** 2026-09-11

Read this first, then GitHub Issue #3 and the newest runtime evidence files.

## Current verdict

**SHARED CHAIN PROVEN / SUPABASE LIVE / MEMORY BEACON P2 MOBILE GAMEPLAY PASS / MAYA -> FAADIL RE-PERSISTED / MOBILE SHARE FALLBACK PASS / WEB COMPANION REBUILT AS MAYA-SEEDED LOCAL SANDBOX / CANONICAL CHAIN RESERVED FOR DECENTRALAND / CROSS-USER PASS C NEXT**

## Product

**UNFINISHED — Playable Co-Authorship**

Thesis:
> Another real person's unfinished decision becomes the level you have to play.

Rule:
> NO ONE FINISHES WHAT THEY START.

Loop:
**INHERIT -> COMPLETE -> USE -> AUTHOR NEXT -> HANDOFF**

## Canonical Decentraland runtime

- World: `unfinished.dcl.eth`
- Deep link: `decentraland://?realm=unfinished.dcl.eth&dclenv=org`
- Supabase is the active shared-state backend.
- `LIVE CHAIN` works.
- Memory Beacon / P2 visual layer is implemented.
- Current mobile gameplay reaches `HANDOFF READY`.
- After the test reset, the real persisted chain again contains:
  - generation 1 `Maya` — `SPAN · T3`
  - generation 2 `Faadil` — `SPAN · T4`
- Faadil correctly sees `YOUR HANDOFF IS WAITING` until another real player continues the chain.
- The mobile-safe `SHARE / OPEN LINK` fallback is implemented and proven.

## Critical architecture boundary — DO NOT BLUR THIS

### Decentraland = canonical real chain
Only the Decentraland World may represent or advance the real shared human chain.

That chain may currently be:
`Maya -> Faadil -> Benita -> ...`

but it is runtime data, not a sequence that should be hard-coded into the public web companion.

### Vercel = onboarding + local sandbox
The public web companion at `https://unfinished-delta.vercel.app/` is intentionally **not connected to the canonical Supabase chain**.

Every web visitor starts from the same fixed seed:
- `Maya`
- `SPAN · T3`

From there, the visitor creates their own **local browser branch**, e.g.:
`Maya -> Visitor -> next`

The web sandbox:
- does not read Supabase;
- does not write Supabase;
- does not expose the real current chain;
- does not assume Faadil is the next person after Maya;
- exists so visitors from X can understand and try the loop without installing Decentraland first.

At the end, it sends them to Decentraland to inherit the **actual latest canonical state**.

## Web companion changes

Main companion rebuilt:
`cf14e920a8baf0c007c1d9c604c03ebcae6a735a` — `fix: keep web preview sandboxed from canonical Decentraland chain`

Key behavior:
- Memory Beacon visual language;
- explicit `WEB SANDBOX` labeling;
- fixed Maya seed;
- local display-name branch;
- CONNECT / RISE preview;
- local author-next receipt;
- strong CTA: `MAKE IT REAL` / `OPEN UNFINISHED WORLD`.

Handoff bridge page updated:
`a37ebf8d04a82c76f13e9ac9b928f81b960b9fd6` — `fix: keep canonical chain details inside Decentraland`

The handoff page no longer reads or displays the real chain. It only explains that Decentraland resolves the latest canonical state after entry.

## Mobile share fallback

SDK7 commit:
`8141760b108d312577cdafe8bd327dd0d9236239` — `fix: add mobile-safe handoff share fallback`

GitHub Actions run #21 `34643410639`: **SUCCESS**.

Fallback page:
`https://unfinished-delta.vercel.app/handoff.html`

## Exact next gate

### Product proof
Cross-user PASS C with Benita / another account:
1. recipient enters `unfinished.dcl.eth`;
2. Decentraland, not the web page, resolves the real latest state;
3. recipient should inherit Faadil's current `SPAN · T4` state if no one else advances the chain first;
4. recipient completes the route and persists generation 3;
5. recent-chain memory in Decentraland expands automatically;
6. Faadil remains self-blocked until that continuation exists.

### Public/X experience
Use `https://unfinished-delta.vercel.app/` as the low-friction public entry point.
It should be described as:
> a web sandbox that starts from Maya and lets you understand the loop; the real shared chain lives in Decentraland.

## Evidence

- `evidence/runtime/MOBILE-CHAIN-RESET-2026-09-11.md`
- `evidence/runtime/MOBILE-HANDOFF-SHARE-FALLBACK-2026-09-11.md`
- `evidence/runtime/MEMORY-BEACON-VISUAL-PASS-2026-09-11.md`

## Canonical operational thread

GitHub Issue #3 — `Canonical State + Handover — Decentraland Submission`
