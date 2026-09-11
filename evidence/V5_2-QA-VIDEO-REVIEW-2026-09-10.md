# UNFINISHED — V5.2 QA VIDEO REVIEW

Date: 2026-09-10
Evidence type: **QA / operator smoke evidence — NOT A SCORED COLD TEST**
Recording duration reviewed: ~87 seconds
Runtime: `https://unfinished-delta.vercel.app`

## What the recording confirms
- V5.2 production loads and author mode is reachable.
- Drag-authored geometry produces matched HUMAN/WORLD links.
- A WORLD lane can run through completion choice, route use, debrief, and post-debrief handoff.
- 2.5D structural rendering, route progression, and the successor handoff surface are present.
- Evidence copy and next-visitor handoff surfaces are present.

## Release-blocking findings
### 1. Source-priming race
The WORLD run visibly displayed `WORLD STATE` before debrief. This violates the intended source-recall test because V5.2 was supposed to rely on subtle in-scene provenance. Root cause: the active route loaded the V5.1 core and then an external V5.2 patch; a user could interact before the patch fully replaced the core start behavior.

**Correction:** V5.2.1 keeps the page non-interactive until the perceptual patch and QA-fix patch are loaded, then neutralizes any explicit source badge to `STARTING CONDITION`.

### 2. Operator clipboard affordance
The later `Bad Request` is not evidence that the generated next-visitor URL is invalid. The recording shows `EVIDENCE COPIED`, then a return to author mode where the WORLD raw URL is highlighted manually. The browser address bar later receives the still-copied JSON and searches it through Bing, producing the Bad Request page.

**Correction:** V5.2.1 adds dedicated COPY/OPEN controls for HUMAN and WORLD matched links so operators do not depend on text selection or clipboard state.

## Perceptual assessment
V5.2 is materially better than V5.1: the route reads more like a supported structure, the perspective floor gives spatial context, the route has more weight, and the progression/junction state is clearer. It remains intentionally lightweight 2.5D rather than production Decentraland art. This is appropriate for the kill test provided the source-priming defect is removed.

## Decision
**V5.2 = QA TECH PASS WITH TWO RELEASE-BLOCKING FIXES.**

Do not consume T1–T5 on V5.2.

Next: deploy V5.2.1 ready-gated bootstrap fix → smoke-test source neutrality + operator link controls → if clean, begin matched cold tests. PDPB Builder remains blocked until the scored gate passes.
