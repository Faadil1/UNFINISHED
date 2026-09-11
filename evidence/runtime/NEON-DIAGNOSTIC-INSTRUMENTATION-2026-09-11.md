# Neon Diagnostic Instrumentation — 2026-09-11

## Context
After the `USE_FETCH` permission fix, the SDK7 `executeTask()` network fix, Neon Data API schema-cache reload, and anonymous INSERT grant, the published Decentraland World still reported `OFFLINE`.

## Verified Neon state
- Project: `jolly-heart-33087700`
- Branch: `br-nameless-frog-aw9931ju` (`production`)
- Database: `unfinished`
- Data API: active
- Endpoint in Neon matches `decentraland/src/shared.ts`
- `db_anon_role`: `unfinished_anon`
- CORS: `*`
- `public.latest_chain_state`: `unfinished_anon` SELECT = yes
- `public.chain_history`: `unfinished_anon` SELECT = yes
- `public.chain_states`: `unfinished_anon` INSERT = yes
- RLS on `chain_states`: enabled
- Insert policy `unfinished_insert_next`: present

## Diagnostic code
Runtime diagnostic chain:
- `c2b4bfa382e274ffc95b5ed5313852e43cd20b3c` — capture detailed HTTP response text
- `0088d4d58045d818b3c69d3459e402ef33e3efc9` — preserve the failing result when two GETs run concurrently
- `528e5a26eb9386ec4e0bc79bc844812bc83c65d6` — show the caught Neon error inline in the DCL status bar; SDK7 GitHub Actions run #11 PASS
- `24dd230205c109db40f4bdae2d16e43450a5e23f` — tag the failing request stage as `latest`, `history`, or `append`

The top status bar now exposes the exact caught network error when `syncStatus === OFFLINE`, for example:
- `OFFLINE · latest · Error: latest_chain_state 401: ...`
- `OFFLINE · history · Error: chain_history 404: ...`
- `OFFLINE · latest · TypeError: Failed to fetch`

## Next gate
1. Pull latest `main`.
2. Build `decentraland/`.
3. Republish `unfinished.dcl.eth`.
4. Enter the World once.
5. Do **not** complete the full gameplay loop.
6. Read/capture the entire `OFFLINE · ...` diagnostic text in the top bar.
7. Use that exact error to choose the next targeted fix.

No further architecture, UI, or gameplay changes should be made before the exact runtime error is captured.
