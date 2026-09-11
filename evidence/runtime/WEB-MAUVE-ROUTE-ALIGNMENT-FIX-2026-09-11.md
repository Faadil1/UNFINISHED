# UNFINISHED — Web Mauve / Route Alignment Fix

**Date:** 2026-09-11

## Trigger

Cloudflare deployment recording showed two regressions in the restored 2.5D web sandbox:

1. The generated route used the correct Maya `HIGH` seed, but the avatar rendered well below the route and could not be meaningfully advanced with the route controls.
2. The beige / warm-paper V5.3.4 shell overrode too much of the previously approved mauve UNFINISHED direction.

## Root cause — avatar

The V5.3.4 web sandbox applied the fixed Maya seed (`HIGH / FLAT / SHORT`, `SPAN · T3`) **after** the older runtime had already initialized `S.avatar` using the previous seed geometry.

Result:
- route geometry was recomputed from the new HIGH anchor;
- avatar coordinates remained at the earlier vertical position;
- route validation correctly rejected movement far away from the path, making the D-pad appear broken.

This was a web sandbox state-sync bug, not a Cloudflare rendering issue.

## Fix

Commit:
`52b60a2d5f9c271d82d1a758040c394d3445cc7b` — `fix: align web avatar with Maya route`

Changes:
- sync avatar coordinates when Maya seed is applied;
- snap avatar to the route origin when the play phase opens;
- snap again immediately after CONNECT / RISE is chosen;
- reset route-progress / off-route counters at the snap point.

Expected result:
- avatar begins directly on the first segment of the generated route;
- D-pad / drag movement can advance along the valid path;
- no artificial teleport or route bypass is introduced.

## Visual-direction correction

Commit:
`35de2d49d263b9c77cad8cc6fdc9c6f1497c2fd3` — `style: restore mauve web direction`

The rejected beige exhibit shell was removed. V5.3.4 now preserves the previously approved V5.3.3 mauve 2.5D visual system and adds only:
- a slim `WEB SANDBOX` boundary;
- the Decentraland handoff CTA;
- local web-branch receipt actions.

Commit:
`d3e735bb60b7f729ce72919fa440887a09bef99f` — `style: restore mauve web shell`

The root bootstrap / browser theme color is also restored to the mauve shell (`#241429`).

## Architecture boundary remains unchanged

Web:
- always starts from Maya;
- local browser branch only;
- no Supabase reads/writes.

Decentraland:
- canonical shared chain;
- Supabase-backed;
- real-player sequence.

## Next gate

Redeploy current `main` to Cloudflare, then smoke:

`Maya seed -> CONNECT/RISE -> avatar starts on route -> D-pad/drag advances -> route completion -> author next -> local receipt`

Only after this exact smoke should the Cloudflare web URL be promoted for X / public traffic.
