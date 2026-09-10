# UNFINISHED — Playable Co-Authorship

Status: **V4 PROTOTYPE / KILL TEST**, not yet PDPB/PRD.

Canonical repo: https://github.com/Faadil1/UNFINISHED

## Core rule

**NO ONE FINISHES WHAT THEY START.**

A visitor inherits a spatial condition created by a previous source, completes it into a playable route, uses the result, then authors the starting constraint for whoever comes next.

Core loop:

**INHERIT → COMPLETE → PLAY → AUTHOR NEXT → LEAVE**

## V4: causal authorship, not attribution theater

Earlier prototypes could still be criticized as “MAYA is only a name attached to designer-authored geometry.” V4 changes the primitive.

A real prior contributor now chooses two spatial properties:
- `anchor`: LOW / MID / HIGH
- `vector`: FLAT / UP

The current visitor chooses CONNECT or RISE. The route is computed from the inherited geometry plus the current completion.

Therefore the intended invariant is:

`same current action + different prior human spatial decision = different playable consequence`

The V4 export records this under `causalProof`, including counterfactual targets.

## Real prior-state authoring

Operator mode:

`/?author=1`

A real person creates a starting state. The prototype then generates:
- a HUMAN condition using that exact authored geometry;
- a matched WORLD condition using the exact same geometry.

This allows a clean Human Necessity comparison without changing the path itself.

## V4 evidence gates

1. Recognition — inherited geometry is legible before explanatory copy does the work.
2. Counterfactual Authorship — changing the prior spatial decision changes the current playable consequence.
3. Human Necessity — matched HUMAN states outperform WORLD states on meaning/social interpretation.
4. Playfulness — route use is voluntary.
5. Independent comprehension — tester separates previous contribution from their own.
6. Constraint strength — inherited geometry materially affects choice/play.
7. Causal source — HUMAN testers can explain what the prior person actually changed, not just remember a name.

See `TEST-PROTOCOL.md` and `TEST-MATRIX-V4.md`.

## Ten hidden spots hardened

`HIDDEN-SPOTS-HARDENING-V4.md` converts the ten identified risks into required constraints covering causal authorship, counterfactuals, browser-vs-Decentraland proof, persistence, concurrency, self-completion, identity integrity, retention, lineage scope, and real Decentraland Mobile validation.

## Runtime note

The canonical V4 source is fully English. The previous public Vercel alias lagged behind the repo. A V4 redeploy was attempted after the source update, but the Vercel connector became unavailable before the new public alias could be verified. Do not use an unverified old alias for scored tests.

## Gate discipline

V4 is still a falsification artifact. Passing a browser test does not authorize the final build.

**V4 causal kill test PASS → PDPB Builder → evolving PRD / Spec Kit → state machine + persistence architecture → Decentraland implementation → TRACE → real Decentraland Mobile validation → evidence/submission.**

PDPB Builder remains mandatory before the material Decentraland implementation.
