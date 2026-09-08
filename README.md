# UNFINISHED — Playable Co-Authorship Kill Test

Status: **PROTOTYPE / KILL TEST V2 LIVE**, not yet PDPB/PRD.

Live mobile prototype: https://unfinished-kill-test.vercel.app

Core hypothesis: a previous real person's unfinished spatial decision can materially shape the current player's play, and the current player can leave an unfinished decision for the next person.

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
- deterministic HUMAN/WORLD × ARC/STEP conditions through query parameters;
- voluntary route use vs `CONTINUE_WITHOUT_USE`;
- verbatim tester explanation;
- separate prior/self contribution fields;
- Origin, Social, and Fun ratings;
- run labels for controlled evidence.

See `TEST-PROTOCOL.md` for the fixed 5-test matrix.

## Gates
1. Recognition — ARC and STEP are perceived as different inherited states.
2. Counterfactual Authorship — the same completion produces a materially different path depending on the inherited stem.
3. Human Necessity — HUMAN meaning must outperform matched WORLD meaning.
4. Playfulness — route engagement must be voluntary, not forced.
5. Independent comprehension — the tester must explain the prior contribution and their own contribution distinctly.

## Strong PASS signal
- >=4/5 independently explain that they transformed/completed an inherited state and left a new start;
- >=4/5 distinguish prior vs self contribution;
- >=4/5 voluntarily engage with the route;
- median Fun >=4/5;
- HUMAN matched conditions outperform WORLD on Origin/Social meaning with qualitative support;
- ARC vs STEP changes practical traversal consequence.

## KILL/PIVOT
- described mainly as choosing/building a shape;
- HUMAN and WORLD feel equivalent;
- route is not voluntarily used;
- ARC vs STEP feels cosmetic;
- prior contribution is not remembered or cannot be separated from self contribution.

No network request is made. `COPIER JSON` exports one test run locally.

## Next mandatory gate
PASS → **PDPB Builder** → evolving PRD / Spec Kit → architecture/state machine → Decentraland implementation → TRACE → real mobile validation → evidence/submission.
