# Cold Test Protocol — V4

## Purpose
V4 tests whether a previous real player is a **causal spatial author**, not merely a name attached to a designer-authored state.

## Setup
Use a phone if possible. Do not explain the concept. Say only:

**“Try this and tell me what you think is happening.”**

Do not say social, co-author, previous player, unfinished, relay, persistence, or the slogan before the run.

Do not count anyone who has already seen V1–V4 or knows the concept as a scored cold tester.

## Create real inherited states first
Use operator mode `/?author=1`.

A real prior contributor chooses:
- `anchor`: LOW / MID / HIGH
- `vector`: FLAT / UP

The prototype generates a HUMAN link and a matched WORLD link with **identical geometry**.

This is mandatory. Do not replace it with a hand-written `MAYA` label.

## Controlled five-test matrix
Use `TEST-MATRIX-V4.md`:
- T1 HUMAN geometry A
- T2 WORLD matched geometry A
- T3 HUMAN geometry B
- T4 WORLD matched geometry B
- T5 HUMAN geometry C replication

Use five different English-speaking cold testers.

## Observe silently
1. Does the tester notice the inherited geometry before attribution copy?
2. Does the inherited anchor/vector affect how they choose CONNECT vs RISE?
3. After the morph, is the first action MOVE or I'M DONE HERE?
4. If they move, do they actually use the generated route?
5. Can they explain the inherited contributor's effect separately from their own?
6. Can they recall who/what created the starting state without prompting?
7. Do matched HUMAN/WORLD conditions feel meaningfully different despite identical geometry?
8. Do they understand that their LOW/MID/HIGH + FLAT/UP choice becomes the next person's constraint?

## Built-in V4 evidence
Each JSON export captures:
- `mode`
- inherited `anchor` / `vector`
- `complete`
- `outcome`
- `causalProof.priorSpatialDecision`
- `causalProof.resultingTarget`
- counterfactual targets for a different prior anchor/vector
- `stateVersion`
- successor `expectedVersion`
- `firstPostReveal`
- `used` / `skipped`
- `sourceRecall`
- `priorContribution`
- `selfContribution`
- `constraintScore`
- `originScore`
- `socialScore`
- `funScore`

Capture the tester's own words verbatim.

## Strong PASS signal
- >=4/5 independently explain that they inherited another source's unfinished spatial state, changed it, used the result, and left a new constraint;
- >=4/5 distinguish prior contribution from self contribution;
- >=4/5 voluntarily engage with the resulting route;
- median Fun >=4/5;
- median Constraint >=4/5;
- HUMAN matched conditions outperform WORLD on Origin and/or Social meaning with qualitative support;
- HUMAN testers recall a person as the source without prompting;
- different prior anchor/vector states create visibly and practically different paths for the same completion action.

## PIVOT/KILL signals
- 2+ of first 5 describe it mainly as choosing/building a shape;
- matched HUMAN and WORLD states feel essentially equivalent;
- fewer than 4/5 voluntarily engage with the route;
- median Constraint <3/5;
- the tester remembers a name but cannot explain the prior person's spatial effect;
- different prior decisions do not materially change the route;
- the successor state is understood as a menu choice rather than a constraint for another person.

## Decision
PASS → **PDPB Builder**.
PIVOT → change only the failed primitive and rerun this gate.
KILL → do not automatically fall back to NEED//RELAY or RELAY ECHO.
