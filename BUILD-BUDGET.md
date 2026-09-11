# Vercel Build Budget — UNFINISHED

Date: 2026-09-10
Plan context: Vercel Hobby; user reports a shared limit of 100 builds per 24h across other active work.

## Policy
UNFINISHED treats deployments as a constrained resource.

- Target: **1–2 substantive UNFINISHED deployments per rolling 24h**.
- Hard ceiling: **3–5** only when a critical runtime defect requires it.
- Never deploy for documentation-only bookkeeping.
- Validate HTML/JavaScript locally before updating `main`.
- Batch code + protocol + CURRENT + HANDOFF + hardening in one atomic commit whenever possible.
- Use Issue #1 comments for post-deploy verification/evidence that does not require changing runtime source.
- Avoid throwaway preview branches/builds.
- Reserve capacity for the real Decentraland/judge-demo phase.

## Deployment gate
A new Vercel build is justified only when at least one is true:
1. tester-facing behavior changes;
2. causal/evidence instrumentation changes;
3. a runtime defect blocks the active gate;
4. a gate-approved post-PDPB execution milestone is ready.

## Current pattern
V5.2 is intentionally shipped as one atomic batch rather than a sequence of small commits.
