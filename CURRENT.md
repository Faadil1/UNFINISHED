# CURRENT — UNFINISHED

Date: 2026-09-11
Status: **V5_3_3_MOBILE_FINISH / DEPLOY_PENDING / USER_GATE_NOT_YET_VALIDATED**

## Candidate
**UNFINISHED — Mobile Finish V5.3.3**

Rule: **NO ONE FINISHES WHAT THEY START.**

Thesis:
> **Every player solves one problem and creates the next.**

Human loop:
**CREATE → INHERIT → COMPLETE → USE → AUTHOR NEXT → CONTINUE**

Required winning chain:
**RUBRIC → PAIN → PROBLEM → DIFFERENTIATOR → V5.3.3 KILL TEST → PDPB BUILDER → EXECUTION → EVIDENCE → STORY → DEMO → Q&A**

PDPB remains blocked until the user gate PASS.

## Canonical runtime
- repo: `Faadil1/UNFINISHED`
- production: `https://unfinished-delta.vercel.app`
- operator: `https://unfinished-delta.vercel.app/?author=1`
- frozen causal core: `core-v51.html`
- embodied layer: `v52-patch.js`
- source-neutral QA layer: `v521-fix.js`
- TRACE submission layer: `v53-submission.*`
- architectural demo layer: `v531-final.*`
- final experience layer: `v532-experience.*`
- **mobile finish layer: `v533-mobile.css` + `v533-mobile.js`**
- expected runtime marker: `5.3.3-mobile-finish`

## Why V5.3.3 exists
Two real mobile recordings of V5.3.2 were reviewed after the main experience translation. V5.3.2 is materially better, but the recordings exposed a final set of presentation/interaction gaps rather than a conceptual failure.

Observed gaps:
1. the route traveler still read as a generic stick figure rather than part of the world;
2. large white authoring sockets broke the approved visual language;
3. successor name/note entry was cramped by the mobile keyboard;
4. the creation receipt required too much scrolling while an empty world area stayed visible;
5. the judge-facing `FOLLOW THE NEXT CONDITION` action could intentionally hit self-completion refusal in the same browser;
6. human-chain identity appeared mostly at the end, making continuity weaker than the approved direction.

## V5.3.3 adjustments
- replaces the route stick figure with a small cloaked traveler silhouette;
- replaces large white authoring sockets with luminous in-world sockets and a holographic endpoint;
- adds optional current-player identity in the demo intro so the chain is legible earlier;
- reveal attribution can show `prior author + current contributor`;
- successor identity is prefilled from the current contribution and explains the optional human lineage;
- keyboard-aware mobile layout shrinks the world and keeps the active successor fields reachable;
- handoff receipt uses more of the viewport and hides redundant empty-world labels;
- judge demo replaces `FOLLOW THE NEXT CONDITION` with **SHARE NEXT PLAYER LINK**, preserving no-self-completion instead of walking a judge into an expected refusal;
- self-completion protection remains intact for real state transitions;
- cold-test mode remains source-neutral and does not expose human chain before debrief.

## Causal engine — unchanged
Human-authored variables remain `anchor + vector + reach`.
Carried deterministic variables remain `pressure + tension + engineBias`.

`CONNECT` resolves SPAN → creates HEIGHT.
`RISE` resolves HEIGHT → creates SPAN.

Names, notes and human-chain continuity remain social metadata only.

## Hidden spots — current truth
Hardened in prototype:
- causal authorship + counterfactuals;
- no self-completion;
- stale-state/local CAS refusal;
- identity/display-name separation;
- transferable handoff + capped lineage;
- optional human chain and notes;
- return/creation receipts;
- opaque cold-test conditions + evidence fingerprint;
- reduced-motion and mobile-safe controls.

Still yellow until production execution:
- shared durable persistence;
- atomic shared concurrency/CAS;
- authoritative Decentraland identity;
- actual Decentraland Mobile camera/avatar/collision/performance;
- reconnect/offline recovery;
- abuse/griefing/moderation of names, notes and authored states;
- impossible/dead-end shared-world recovery.

## Immediate next action
1. Wait for the single V5.3.3 Vercel deploy.
2. Smoke `/` on real mobile: Maya provenance → optional current name → hold choice → reveal → traversal → successor authoring → creation receipt → share next player link.
3. Smoke `/?author=1`: author card must remain readable on mobile and luminous sockets must replace the white circles.
4. Confirm cold-test matched lane still hides provenance/chain before debrief.
5. If no release-blocking defect: **freeze runtime**.
6. Use remaining time on cold tests if practical and STORY → DEMO → Q&A → submission.

## Build-budget discipline
No documentation-only deployment. No further deploy unless V5.3.3 smoke exposes a release-blocking defect.

## Canonical discipline
Every substantive gate transition updates `CURRENT.md` + `CANONICAL-HANDOFF.md` together. GitHub is the source of truth.
