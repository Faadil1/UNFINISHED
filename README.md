# UNFINISHED — Playable Co-Authorship Kill Test

Status: **PROTOTYPE / KILL TEST V3 SOURCE READY**, not yet PDPB/PRD.

Canonical repo: https://github.com/Faadil1/UNFINISHED

Current public Vercel alias previously served V2:
https://unfinished-kill-test.vercel.app

V3 has been committed and deployed, but the Vercel connector switched to a different team scope during redeploy and could not verify the clean alias. Do not use the clean alias for new scored tests until V3 is confirmed there.

## Core hypothesis
A previous real person's unfinished spatial decision can materially shape the current player's play, and the current player can leave an unfinished decision for the next person.

Rule: **NO ONE FINISHES WHAT THEY START.**

## 2×2 scope

| Prior stem | Completion | Outcome |
|---|---|---|
| ARC | CONNECT | GATEWAY |
| ARC | RISE | ARCH CLIMB |
| STEP | CONNECT | CROSSING |
| STEP | RISE | STAIR TOWER |

## V1 pilot
Three self-runs + one iPhone recording produced `PILOT_TECH_PASS / USER_GATE_NOT_YET_VALIDATED`.
They are QA evidence only; they do not count as independent cold testers.

V1 exposed two test biases: the slogan primed the concept before play, and route use was forced.

## V2 corrections
- neutral entry screen;
- deterministic HUMAN/WORLD × ARC/STEP conditions;
- voluntary route use;
- verbatim tester explanation;
- prior/self contribution fields;
- Origin / Social / Fun ratings.

## V3 improvements
- all tester-facing copy is English;
- cleaner neutral onboarding;
- larger, clearer attribution in the world;
- debug information hidden unless `?debug=1`;
- more neutral skip action: `I'M DONE HERE`;
- short transformation animation and optional device haptic feedback;
- `sourceRecall`: unaided recall of who/what created the starting state;
- `constraintScore`: how much the inherited shape affected the player's choice;
- Origin, Social, Fun remain separate measures;
- reduced-motion preference respected;
- controlled T1–T5 matrix retained for matched HUMAN/WORLD comparisons.

See `TEST-PROTOCOL.md` and `TEST-MATRIX-V3.md`.

## Gates
1. Recognition — ARC and STEP are perceived as different inherited states.
2. Counterfactual Authorship — the same completion produces a materially different path depending on the inherited stem.
3. Human Necessity — HUMAN meaning must outperform matched WORLD meaning.
4. Playfulness — route engagement must be voluntary, not forced.
5. Independent comprehension — tester explains source, prior contribution, and self contribution distinctly.
6. Constraint strength — inherited geometry must materially influence choice, not merely decorate it.

## Strong PASS signal
- >=4/5 independently explain that they transformed/completed something inherited and left a new start;
- >=4/5 distinguish prior vs self contribution;
- >=4/5 voluntarily engage with the route;
- median Fun >=4/5;
- median Constraint >=4/5;
- HUMAN matched conditions outperform WORLD on Origin/Social meaning with qualitative support;
- HUMAN testers recall a person as the source without prompting;
- ARC vs STEP changes practical traversal consequence.

## KILL/PIVOT
- described mainly as choosing/building a shape;
- HUMAN and WORLD feel equivalent;
- route is not voluntarily used;
- median Constraint <3/5;
- ARC vs STEP feels cosmetic;
- prior contribution is not remembered or cannot be separated from self contribution.

## Next mandatory gate
PASS → **PDPB Builder** → evolving PRD / Spec Kit → architecture/state machine → Decentraland implementation → TRACE → real mobile validation → evidence/submission.
