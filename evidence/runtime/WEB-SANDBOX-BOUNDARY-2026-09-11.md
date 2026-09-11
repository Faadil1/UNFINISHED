# UNFINISHED — Web Sandbox Boundary

**Date:** 2026-09-11

## Decision

The public Vercel companion is **not** part of the canonical human chain.

### Vercel / X public entry
- always starts from fixed seed `Maya` / `SPAN · T3`;
- lets each visitor create their own local browser continuation;
- does not read Supabase;
- does not write Supabase;
- does not expose or assume the actual current Decentraland chain;
- exists for low-friction onboarding and social sharing.

### Decentraland
- is the only canonical shared-chain runtime;
- loads the actual latest persisted state from Supabase;
- enforces self-handoff rules;
- is where real contributors extend the chain.

## Implemented commits

- `cf14e920a8baf0c007c1d9c604c03ebcae6a735a` — public companion changed to Maya-seeded local sandbox.
- `a37ebf8d04a82c76f13e9ac9b928f81b960b9fd6` — handoff page stopped exposing canonical chain details.
- `5ce163a3c519224abf9e77f4f0857d3e2a4d902d` — canonical handover updated with this architecture boundary.

## Public framing

Use:
> Try a local branch from Maya on the web. Continue the real shared chain in Decentraland.

Do not claim that the web companion mirrors, reads, or advances the live Decentraland human chain.
