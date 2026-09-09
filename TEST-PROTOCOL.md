# Cold Test Protocol — V3

## Setup
Use a phone if possible. Do not explain the concept. Say only:

**“Try this and tell me what you think is happening.”**

Do not say social, co-author, previous player, unfinished, relay, persistence, or the slogan before the run.

Do not count anyone who has already seen V1/V2 or already knows the concept as a cold tester.

## Controlled 5-test matrix
Use these exact links in order. Do not reveal the assigned condition.

1. T1 — HUMAN + STEP
   https://unfinished-kill-test.vercel.app/?mode=HUMAN&prior=STEP&run=T1
2. T2 — WORLD + STEP
   https://unfinished-kill-test.vercel.app/?mode=WORLD&prior=STEP&run=T2
3. T3 — HUMAN + ARC
   https://unfinished-kill-test.vercel.app/?mode=HUMAN&prior=ARC&run=T3
4. T4 — WORLD + ARC
   https://unfinished-kill-test.vercel.app/?mode=WORLD&prior=ARC&run=T4
5. T5 — HUMAN + STEP replication
   https://unfinished-kill-test.vercel.app/?mode=HUMAN&prior=STEP&run=T5

## Observe silently
1. Does the tester notice the inherited geometry before reading attribution?
2. Does ARC vs STEP affect how they reason about CONNECT vs RISE?
3. After the morph, is their first action MOVE or DONE_WITHOUT_USE?
4. If they move, do they complete/use the route?
5. Can they explain the starting state's contribution separately from their own?
6. Can they recall who/what created the starting state without prompting?
7. Do HUMAN and WORLD feel meaningfully different on the same geometry?
8. Do they understand their final ARC/STEP becomes a new starting state for someone else?

## Built-in V3 debrief
The export captures:
- `whatHappened`
- `sourceRecall`
- `priorContribution`
- `selfContribution`
- `constraintScore` (1–5): how much the inherited shape affected their choice
- `originScore` (1–5): how much the source mattered
- `socialScore` (1–5)
- `funScore` (1–5)
- `firstPostReveal`
- `used` / `skipped`
- controlled condition + run label

Capture the tester's own words verbatim. Never type the test instruction into answer fields.

## External follow-up questions
Only after the built-in debrief:
- “If the starting state had come from the system instead of a person, would that change anything for you? Why?”
- “If the starting shape had been different, would your choice or route have changed?”
- “What made you want — or not want — to use what appeared?”

## Strong PASS signal
- >=4/5 independently explain that they completed or transformed something inherited and then left a new start;
- >=4/5 distinguish the starting contribution from their own;
- >=4/5 voluntarily MOVE before choosing I'M DONE HERE and/or complete the route;
- median Fun >=4/5;
- median Constraint >=4/5;
- HUMAN conditions outperform matched WORLD conditions on Origin and/or Social meaning, supported by qualitative explanation;
- ARC and STEP produce recognizably different practical consequences;
- HUMAN testers can recall a person as the source without the observer telling them.

## PIVOT/KILL signals
- 2+ of first 5 describe the experience mainly as choosing/building a shape;
- HUMAN and WORLD matched conditions feel essentially equivalent;
- fewer than 4/5 voluntarily engage with the route;
- median Constraint <3/5;
- ARC vs STEP feels cosmetic;
- prior contribution cannot be explained distinctly;
- tester does not understand that their final state is left for someone else.

## Decision
PASS → **PDPB Builder**.
PIVOT → change only the failed primitive and rerun this gate.
KILL → do not automatically fall back to NEED//RELAY or RELAY ECHO.
