# Cold Test Protocol — V2

## Setup
Use a phone if possible. Do not explain the idea. Say only:

**“Essaie ceci et dis-moi ce que tu comprends.”**

Do not say social, co-author, previous player, unfinished, relay, persistence, or the slogan before the run.

## Controlled 5-test matrix
Use these exact links in order. Do not tell the tester which condition they received.

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

If a tester has already seen V1 or knows the concept, do not count them as a cold tester.

## Observe silently
1. Does the tester notice inherited geometry before attribution text?
2. Does ARC vs STEP affect how they reason about CONNECT vs RISE?
3. After the morph, is their first action MOVE or CONTINUE_WITHOUT_USE?
4. If they move, do they complete/use the route?
5. Can they explain the initial state's contribution separately from their own?
6. Do they interpret HUMAN differently from WORLD without being told to?
7. Do they understand their final ARC/STEP is a new start for someone else?

## Built-in debrief
The V2 export captures:
- `whatHappened`
- `priorContribution`
- `selfContribution`
- `originScore` (1–5)
- `socialScore` (1–5)
- `funScore` (1–5)
- `firstPostReveal`
- `used` / `skipped`
- controlled condition + run label

Do not type the test instruction into the answer fields. Capture the tester's own words verbatim.

## External follow-up questions
Only after the built-in debrief:
- Si l'état initial venait du système plutôt que d'une personne, est-ce que ça changerait quelque chose ? Pourquoi ?
- Si la première forme avait été différente, est-ce que ton choix ou ton parcours aurait changé ?
- Qu'est-ce qui t'a donné envie — ou pas — d'utiliser ce qui est apparu ?

## Strong PASS signal
- >=4/5 independently explain that they completed or transformed something inherited and then left a new start;
- >=4/5 distinguish the prior contribution from their own;
- >=4/5 choose MOVE before CONTINUE_WITHOUT_USE and/or complete the route;
- median Fun >=4/5;
- HUMAN conditions outperform matched WORLD conditions on Origin and/or Social meaning, with qualitative explanations supporting the difference;
- ARC and STEP produce recognizably different practical consequences.

## PIVOT/KILL signals
- 2+ of first 5 describe the experience mainly as choosing/building a shape;
- HUMAN and WORLD matched conditions feel essentially equivalent;
- fewer than 4/5 voluntarily engage with the route;
- ARC vs STEP feels cosmetic;
- prior contribution cannot be explained distinctly;
- tester does not understand that their final state is left for someone else.

## Decision
PASS → **PDPB Builder**.
PIVOT → change only the failed primitive and rerun this gate.
KILL → do not automatically fall back to NEED//RELAY or RELAY ECHO.
