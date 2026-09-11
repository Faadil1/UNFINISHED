# UNFINISHED — Mobile Handoff Share Fallback

**Date:** 2026-09-11

## Trigger
A real mobile recording reached `HANDOFF READY`, but tapping `COPY WORLD LINK` did not change the CTA state and did not place the Decentraland deep link on the mobile clipboard.

The affected runtime call was `copyToClipboard()` from `~system/RestrictedActions`. The failure was silent in the user experience because the previous UI simply reset the copied flag on rejection.

## Runtime proof preserved
The mobile run itself is valid beyond the clipboard issue:
- `LIVE CHAIN` was present;
- the P2 Memory Beacon UI rendered on mobile;
- the route was playable;
- author-next completed;
- receipt reached `HANDOFF READY`;
- Supabase persisted a new generation 2 `Faadil` row after the test reset.

Current chain after the mobile run:
- generation 1: `Maya` — `SPAN · T3`
- generation 2: `Faadil` — `SPAN · T4`

## Fix
Two-layer handoff action implemented.

### Decentraland UI
Commit `8141760b108d312577cdafe8bd327dd0d9236239` — `fix: add mobile-safe handoff share fallback`

Changes:
- keep `COPY WORLD LINK` for runtimes where clipboard is supported;
- if clipboard rejects, CTA visibly changes to `COPY UNAVAILABLE` instead of failing silently;
- add a second explicit action: `SHARE / OPEN LINK`;
- that action uses `openExternalUrl()` from `~system/RestrictedActions` and opens the mobile-safe HTTPS handoff page.

### Mobile-safe handoff page
Commit `214625d21b34687c21f52d6ec4c8bd8b9708d46c` — `feat: add mobile-safe UNFINISHED handoff share page`

Page:
`https://unfinished-delta.vercel.app/handoff.html`

It provides:
- `OPEN UNFINISHED IN DECENTRALAND` using the canonical deep link;
- `SHARE THIS HANDOFF` using the browser/Web Share API when available;
- `COPY DECENTRALAND LINK` using the browser clipboard with a selectable-text fallback;
- explicit latest-shared-state wording so it does not imply unique per-handoff routing.

## CI
GitHub Actions run #21 `34643410639`: **SUCCESS**.

SDK7 build and artifact upload passed.

## Next gate
1. Pull latest `main`.
2. Rebuild and republish `unfinished.dcl.eth` from `C:\Users\fboussari\UNFINISHED\decentraland`.
3. On mobile, because Faadil is now the latest author, the self-handoff screen is expected.
4. Verify:
   - `COPY WORLD LINK` either succeeds or visibly becomes `COPY UNAVAILABLE`;
   - `SHARE / OPEN LINK` opens the HTTPS handoff page;
   - browser share sheet can send the handoff page to Benita / another account;
   - recipient can open UNFINISHED from the page.
5. Then run cross-user PASS C.

## Architecture boundary
The shared handoff remains one stable World destination whose recipient inherits the latest canonical Supabase state. There is no unique per-handoff URL or arbitrary multi-chain routing.
