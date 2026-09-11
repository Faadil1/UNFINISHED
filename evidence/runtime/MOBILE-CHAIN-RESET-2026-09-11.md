# UNFINISHED — Controlled Chain Reset for Mobile Smoke

**Date:** 2026-09-11

## Why this reset was needed

The latest shared chain was `Maya -> Faadil`. Because the same Faadil account was being used for the mobile validation, the product correctly entered the self-handoff guard state (`YOUR HANDOFF IS WAITING`) and would not let Faadil consume his own latest handoff.

That behavior is correct product behavior, but it blocks a same-account mobile smoke.

## Pre-reset evidence preserved

Before reset, Supabase contained:
- generation 1: `Maya`, `SPAN`, tension `3`;
- generation 2: `Faadil`, `SPAN`, tension `4`;
- parent link generation 2 -> generation 1.

That `Maya -> Faadil` persistence had already been runtime-proven and recorded in the canonical evidence before this reset.

## Reset action

A controlled admin-only reset removed runtime rows with `generation > 1` for the canonical chain:

`00000000-0000-4000-8000-000000000001`

The seed row was intentionally preserved.

## Post-reset state verified

Current canonical runtime chain is now exactly:
- generation 1: `Maya`
- author id: `seed-maya`
- pressure: `SPAN`
- tension: `3`
- no parent state

No client code, RLS policy, gameplay rule, or self-handoff protection was weakened or bypassed.

## Why this is the preferred test path

Faadil can now enter on mobile and legitimately inherit Maya's state, complete the route, and create a fresh generation 2 as Faadil. That fresh mobile-authored handoff can then be used directly for Benita / second-account cross-user PASS C.

## Next gate

1. Fully reload / re-enter `unfinished.dcl.eth` so the client rehydrates from Supabase.
2. Confirm the first screen is `MAYA LEFT THIS` / `SPAN · T3`, not `YOUR HANDOFF IS WAITING`.
3. Run the complete mobile path.
4. Confirm save reaches `HANDOFF READY` and a new generation 2 Faadil row is persisted.
5. Then send the World link to Benita / second account for PASS C.
