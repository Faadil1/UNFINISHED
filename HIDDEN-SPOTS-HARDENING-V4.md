# UNFINISHED — V4 Hardening

Date: 2026-09-10
Status: ACTIVE PRE-PDPB CONSTRAINTS

This file converts the ten identified hidden spots into explicit requirements.

1. **Causal prior author** — the prior person now leaves a spatial decision (`anchor` + `vector`), not only a name or enum label. The next route is computed from that decision.

2. **Counterfactual authorship** — same current action with different prior spatial decisions must create materially different playable geometry. V4 exports the observed result plus counterfactual result coordinates.

3. **Browser fun is not final mobile proof** — V4 remains a falsification prototype. A real Decentraland mobile runtime gate is mandatory later.

4. **Real persistence required in the final build** — persist one active unfinished state and immutable completion lineage. The V4 URL/export state is only a prototype representation, not production persistence.

5. **Concurrent completions must resolve deterministically** — production persistence must use a versioned state transition so two visitors cannot overwrite the same active state. V4 already exports `stateVersion` and the successor `expectedVersion` for this contract.

6. **No one completes their own state** — V4 supports `authorId` and `viewer` and blocks matching identities. The final build must enforce this from the platform identity rather than a display label. Honest WORLD/FOUNDER seed remains the zero-user fallback.

7. **Identity must be real and privacy-safe** — display attribution may use a player display name, but contribution ownership must come from the actual connected Decentraland identity. Never present a synthetic person as a real visitor.

8. **Retention must come from consequence** — the return reason is seeing what happened after the state you left, not generic points, streaks, loot, or daily-task gamification.

9. **Lineage/gallery stays secondary** — keep only a small capped recent-history surface. It supports social proof but must never become the primary experience or replace traversal.

10. **Actual Decentraland Mobile validation is mandatory** — after PDPB and implementation, test camera/controls, cold start, one-prior-user flow, own-state block, stale-state recovery, honest seed, reduced motion, and persistence failure handling in the actual mobile runtime.

## Canonical causal claim

> A previous real player creates the initial spatial conditions of the next player's playable problem.

The prior contribution must be legible in the geometry itself before explanatory copy is needed.

## Gate discipline

`V4 causal kill test PASS → PDPB Builder → PRD/Spec → implementation → TRACE → real mobile runtime gate → evidence/submission`.
