# Cold Test Protocol — V5 Intelligent Causal Loop

## Purpose
Test whether a real prior person's spatial decision changes the next visitor's playable problem **and** whether the next visitor understands that their solution creates a new problem for someone else.

## Setup
Use a phone if possible. Do not explain the concept. Say only:

> **Try this and tell me what you think is happening.**

Do not say social, co-author, previous player, unfinished, persistence, lineage, causal authorship, pressure, or the slogan before the run.

Do not count anyone who has already seen V1–V5 or knows the concept as a cold tester.

## Authoring preparation
Open operator mode:

`/?author=1`

Have a real person:
1. enter their display name;
2. tap a start socket in the scene;
3. tap an endpoint in the scene.

V5 derives from that actual endpoint:
- `anchor`: LOW / MID / HIGH
- `vector`: FLAT / UP
- `reach`: SHORT / MEDIUM / LONG

The operator then receives two matched links:
- HUMAN — real authored geometry;
- WORLD — identical geometry, pressure, tension, and engine state.

Never invent a fake human state manually.

## Five scored cold tests
Use `TEST-MATRIX-V5.md`.

T1 and T2 must be a matched HUMAN/WORLD pair from geometry A.
T3 and T4 must be a matched HUMAN/WORLD pair from geometry B.
T5 must be a HUMAN replication using geometry C or a deliberate repeat of A.

Use five different independent English-speaking testers.

## Observe silently
1. Does the inherited contribution read as an intentional spatial act rather than a prefab shape?
2. Does the tester distinguish the inherited segment from the segment they create?
3. Does `anchor/vector/reach` materially influence the CONNECT/RISE result?
4. After reveal, is first action MOVE or DONE_WITHOUT_USE?
5. Can the tester physically follow the produced route without bypassing it?
6. Can they explain what the prior contributor did vs what they did?
7. Can they recall a human source in HUMAN conditions without observer prompting?
8. Does HUMAN feel meaningfully different from matched WORLD when geometry is identical?
9. Does the final spatial authoring feel like creating the next person's condition rather than choosing decoration?
10. Do they understand that solving their current problem creates a new constraint for someone else?

## Built-in evidence
Export includes:
- `sourceRecall`
- `priorContribution`
- `selfContribution`
- `constraintScore`
- `originScore`
- `socialScore`
- `funScore`
- `firstPostReveal`
- `routeProgress`
- `used` / `skipped`
- `offRouteAttempts`
- `tradeoff.resolved`
- `tradeoff.created`
- inherited `anchor/vector/reach/pressure/tension`
- successor constraint
- local CAS result
- deterministic-engine evidence
- causal counterfactuals
- identity/persistence proof classification

Capture tester language verbatim.

## Strong PASS signal
- >=4/5 independently explain that they inherited an unfinished spatial condition, changed/completed it, used the result, and left a new starting condition;
- >=4/5 distinguish prior contribution from self contribution;
- >=4/5 voluntarily engage with the route;
- median Fun >=4/5;
- median Constraint >=4/5;
- HUMAN matched conditions outperform WORLD on Origin and/or Social meaning with qualitative support;
- HUMAN testers recall a person as the source without observer prompting;
- same current completion + changed prior anchor/vector/reach produces materially different geometry;
- at least 3/5 understand that their solution changes the next visitor's problem, not merely its appearance.

## PIVOT / KILL signals
- 2+ describe the experience mainly as a shape/configuration tool;
- HUMAN and matched WORLD are effectively equivalent;
- fewer than 4/5 voluntarily engage with the route;
- median Constraint <3/5;
- tester remembers a name but cannot explain the prior person's spatial decision;
- reach/anchor/vector do not materially change traversal;
- final authoring feels decorative;
- successor pressure is invisible or meaningless;
- fun comes from generic movement while human causality scores low.

## Yellow hidden-spot evidence
V5 may demonstrate prototype behavior for persistence, concurrency, identity separation, and mobile controls. **Do not mark those production-validated from this test.**

They can turn green only after:
- shared durable persistence exists;
- atomic shared CAS is exercised;
- Decentraland identity is authoritative;
- real Decentraland Mobile runtime is tested.

## Decision
PASS → **PDPB Builder** immediately.

PIVOT → change only the failed primitive and rerun this gate.

KILL → do not automatically fall back to NEED//RELAY or RELAY ECHO.
