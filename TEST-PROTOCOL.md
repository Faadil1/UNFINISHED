# Cold Test Protocol — V5.3 Submission Build

## Purpose
Test whether a prior real person's spatial decision changes the next visitor's playable problem, whether the visitor voluntarily engages with the route, and whether they understand that their own solution creates a successor condition.

## Release-blocking smoke before using a tester
1. Load `/` and confirm runtime marker/title V5.3.
2. Load `/?author=1`.
3. Use a real alphabetic name/alias and author a drag gesture.
4. Generate matched HUMAN/WORLD links.
5. Confirm links are opaque (`?s=...`) rather than readable HUMAN/WORLD/geometry URLs.
6. Open each link in a fresh browser/profile/device.
7. Confirm the address cleans to neutral `?play=<fingerprint>` after load.
8. Before debrief, no explicit HUMAN/WORLD/name/source-answering copy or creator residue difference may reveal condition source.
9. Confirm pair matches on anchor/vector/reach/pressure/tension/engineBias/generation/version.

If any check fails: stop and fix only the release-blocking defect.

## Tester instruction
Say only:
> **Try this and tell me what you think is happening.**

Do not say social, previous player, co-author, unfinished, persistence, pressure, tension, lineage, successor, or the slogan before the run.

## Scored matrix
- T1 — HUMAN Geometry A (`HIGH / FLAT / SHORT`)
- T2 — WORLD matched A
- T3 — HUMAN Geometry B (`LOW / UP / SHORT`)
- T4 — WORLD matched B
- T5 — HUMAN replication or Geometry C if time permits

Every scored slot should be a different English-speaking cold tester. Prefer real phones.

## Observe silently
Record whether the tester:
- treats the inherited object as a physical route/structure rather than a diagram;
- distinguishes inherited vs self-created structure;
- voluntarily traverses;
- notices geometry/constraint differences;
- understands prior contribution vs own contribution;
- recalls a human source in HUMAN without prompting;
- understands final authoring as creating what comes next rather than decoration.

## Evidence
Capture full exported JSON + verbatim debrief. V5.3 evidence must include:
- runtime version;
- `conditionFingerprint`;
- `experimentIntegrity` block;
- pairId/runLabel;
- inherited anchor/vector/reach/pressure/tension/engineBias;
- completion + tradeoff;
- first post-reveal action;
- routeProgress, used/skipped, offRouteAttempts;
- interaction metrics;
- successor constraint + local CAS;
- sourceRecall;
- priorContribution/selfContribution;
- Constraint/Origin/Social/Fun;
- `causalProof`.

## Strong PASS
- >=4/5 explain inherited → changed → used → left-next-condition loop;
- >=4/5 distinguish prior vs self contribution;
- >=4/5 voluntarily engage with the route;
- median Fun >=4/5;
- median Constraint >=4/5;
- matched HUMAN conditions outperform WORLD on Origin and/or Social meaning with qualitative support;
- same completion + changed prior geometry produces materially different topology;
- >=3/5 understand their solution changes what comes next.

## Deadline rule
If fewer than five valid testers are available before submission, record partial evidence honestly. Do not convert partial QA or self-runs into a false five-user PASS.

PASS → **PDPB Builder immediately** if time permits. PIVOT only the failed primitive. KILL if prior-human causal relevance collapses.
