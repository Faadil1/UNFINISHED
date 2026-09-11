# UNFINISHED — Current Canonical Handover

**Updated:** 2026-09-11

This is the compact resume point for the next conversation. Read this first, then GitHub Issue #3 and the newest runtime evidence files.

## Current verdict

**SHARED CHAIN PROVEN / SUPABASE LIVE / MEMORY BEACON P2 MOBILE GAMEPLAY REACHED HANDOFF READY / MAYA -> FAADIL RE-PERSISTED AFTER RESET / MOBILE CLIPBOARD FAILURE ISOLATED / MOBILE-SAFE SHARE FALLBACK IMPLEMENTED / SDK7 CI #21 PASS / REPUBLISH REQUIRED / CROSS-USER PASS C NEXT**

## Product

**UNFINISHED — Playable Co-Authorship**

Thesis:
> Another real person's unfinished decision becomes the level you have to play.

Rule:
> NO ONE FINISHES WHAT THEY START.

Loop:
**INHERIT -> COMPLETE -> USE -> AUTHOR NEXT -> HANDOFF**

## Active runtime truth

- Decentraland World entry works.
- Supabase is the active shared-state backend.
- `LIVE CHAIN` works.
- Memory Beacon / P2 visual layer is implemented.
- Mobile route gameplay works on the current P2 world.
- Latest mobile run reached `HANDOFF READY`.
- After the test reset, Supabase again contains:
  - generation 1 `Maya` — `SPAN · T3`
  - generation 2 `Faadil` — `SPAN · T4`
- Faadil is therefore correctly self-blocked by `YOUR HANDOFF IS WAITING` until another real player continues the chain.

## Mobile handoff-share issue

The latest real mobile recording exposed one isolated defect:
- tapping `COPY WORLD LINK` did not copy the deep link;
- the CTA remained unchanged;
- the failure was the mobile/runtime clipboard action, not Supabase, gameplay, or receipt generation.

## Implemented fix

### SDK7 fallback
Commit:
`8141760b108d312577cdafe8bd327dd0d9236239` — `fix: add mobile-safe handoff share fallback`

The receipt/self-handoff UI now has two actions:
- `COPY WORLD LINK` — still used when the runtime clipboard works;
- `SHARE / OPEN LINK` — opens a mobile-safe HTTPS handoff page.

If clipboard copying fails, the first button visibly changes to `COPY UNAVAILABLE` instead of failing silently.

GitHub Actions run #21 `34643410639`: **SUCCESS**.

### HTTPS handoff page
Commit:
`214625d21b34687c21f52d6ec4c8bd8b9708d46c` — `feat: add mobile-safe UNFINISHED handoff share page`

Page:
`https://unfinished-delta.vercel.app/handoff.html`

The page provides:
- `OPEN UNFINISHED IN DECENTRALAND`;
- `SHARE THIS HANDOFF` using the browser/native share sheet when available;
- `COPY DECENTRALAND LINK` with browser clipboard + selectable-text fallback.

Canonical deep link remains:
`decentraland://?realm=unfinished.dcl.eth&dclenv=org`

Architecture boundary remains unchanged: the link opens the same World and the recipient inherits the latest canonical Supabase state. It is not a unique per-handoff URL.

## Exact next gate

1. Pull latest main:

```powershell
cd $HOME\UNFINISHED
git pull --ff-only
cd decentraland
npm run build
```

2. Republish `unfinished.dcl.eth` from exactly:
`C:\Users\fboussari\UNFINISHED\decentraland`

3. On mobile, Faadil should now see `YOUR HANDOFF IS WAITING` because Faadil is the latest real author. This is correct.

4. Test only the handoff actions:
   - `COPY WORLD LINK` may succeed; if unsupported it must become `COPY UNAVAILABLE`;
   - `SHARE / OPEN LINK` must open the HTTPS handoff page;
   - use the native share sheet from that page to send it to Benita / another account.

5. Cross-user PASS C:
   - recipient opens the handoff page;
   - enters `unfinished.dcl.eth`;
   - inherits Faadil's latest `SPAN · T4` state;
   - completes the route and persists generation 3;
   - recent-chain memory expands automatically.

## Evidence

- `evidence/runtime/MOBILE-CHAIN-RESET-2026-09-11.md`
- `evidence/runtime/MOBILE-HANDOFF-SHARE-FALLBACK-2026-09-11.md`
- `evidence/runtime/MEMORY-BEACON-VISUAL-PASS-2026-09-11.md`

## Canonical operational thread

GitHub Issue #3 — `Canonical State + Handover — Decentraland Submission`
