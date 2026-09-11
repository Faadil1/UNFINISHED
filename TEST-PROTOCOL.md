# Cold Test Protocol — V5.2.1 Intelligent Causal Loop

## Purpose
Test whether a real prior person's spatial decision changes the next visitor's playable problem, whether the visitor experiences the route voluntarily, and whether they understand that their own solution creates a successor condition.

## Release-blocking smoke check
Before consuming any T1–T5 slot:
1. load `https://unfinished-delta.vercel.app/?author=1`;
2. author a real gesture and generate the matched pair;
3. verify dedicated COPY + OPEN controls exist for HUMAN and WORLD;
4. open each using those controls — do not manually select the long raw URL;
5. before debrief, no explicit `HUMAN`, `WORLD`, `LEFT BY`, or equivalent source-answering badge may appear;
6. subtle in-scene provenance may remain;
7. confirm the pair matches on anchor/vector/reach/pressure/tension/engineBias/generation/version.

If any check fails: stop. Fix QA before scored testing.

## Tester instruction
Say only:
> **Try this and tell me what you think is happening.**

Do not say social, previous player, co-author, unfinished, persistence, pressure, tension, lineage, or the slogan before the run.

Do not count anyone who has seen V1–V5.2.1 or already knows the concept.

## Operator preparation
Use `/?author=1`.
A real author:
1. enters a display name;
2. drags from a scene socket;
3. releases where the unfinished segment should end.

The gesture derives `anchor + vector + reach`.
The engine carries deterministic `pressure + tension + engineBias`.

The operator receives:
- HUMAN link — real authored geometry, dedicated COPY + OPEN controls;
- WORLD link — identical causal state, separate test lane, dedicated COPY + OPEN controls.

Never hand-write a fake HUMAN state.

## Scored matrix
Use `TEST-MATRIX-V5.md`:
- T1 HUMAN geometry A
- T2 WORLD matched A
- T3 HUMAN geometry B
- T4 WORLD matched B
- T5 HUMAN replication / geometry C

Use five different independent English-speaking cold testers.

## Observe silently
Record whether the tester:
- treats the inherited object as a physical route/structure rather than a diagram;
- distinguishes inherited vs self-created structure;
- voluntarily traverses rather than immediately exits;
- notices meaningful geometry/constraint differences;
- can explain prior contribution vs own contribution;
- recalls a human source in HUMAN without prompting;
- treats final authoring as creating the next person's condition rather than decoration;
- understands that their solution changes what comes next.

## Evidence
Capture full exported JSON and verbatim debrief, including sourceRecall, priorContribution, selfContribution, Constraint/Origin/Social/Fun, routeProgress, used/skipped, offRouteAttempts, choice source/latency, direct drag/D-pad activity, CAS result, successor state, and causal counterfactuals.

## Strong PASS
- >=4/5 explain the inherited → changed → used → left-next-condition loop;
- >=4/5 distinguish prior vs self contribution;
- >=4/5 voluntarily engage with the route;
- median Fun >=4/5;
- median Constraint >=4/5;
- HUMAN meaning outperforms matched WORLD on Origin and/or Social with qualitative support;
- same current action + changed prior geometry produces materially different topology;
- >=3/5 understand their solution changes the next visitor's problem.

## PIVOT/KILL signals
- 2+ describe a shape/configuration tool;
- HUMAN and WORLD feel equivalent;
- fewer than 4/5 voluntarily engage;
- median Constraint <3/5;
- attribution remembered but causal contribution not understood;
- anchor/vector/reach feel cosmetic;
- successor pressure is invisible/meaningless;
- fun remains high while human causality is low.

PASS → **PDPB Builder immediately**. PIVOT → modify only failed primitive and retest. KILL → do not resurrect FAVOR//RELAY or automatically fall back to prior concepts.
