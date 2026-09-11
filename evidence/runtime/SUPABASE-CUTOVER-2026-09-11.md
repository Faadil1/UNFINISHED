# Supabase Shared-Chain Cutover — 2026-09-11

## Trigger
Published Decentraland runtime diagnostic exposed the exact Neon failure:

`OFFLINE · history · Error: chain_history 400: {"message":"missing authentication credentials"}`

This proved the remaining blocker was Neon Data API authentication, not Decentraland networking, `USE_FETCH`, `executeTask()`, CORS, gameplay, or the UI.

## Decision
Do not embed a privileged Neon credential or force players through Neon Auth.

Move only the shared handoff state to a client-safe Supabase REST surface using a publishable key plus PostgreSQL RLS. The Decentraland World remains the product/runtime; Supabase is only the shared state transport.

## Supabase project
- Name: `unfinished-dcl`
- Project ref: `ierowefnowuxybkivnnb`
- Region: `ca-central-1`
- Status at creation: `ACTIVE_HEALTHY`
- API base: `https://ierowefnowuxybkivnnb.supabase.co`
- Client credential: Supabase publishable key (public by design; authorization enforced by RLS)

## Schema
Production migration `init_unfinished_shared_chain` created:
- `public.chain_states`
- UUID primary key
- canonical `chain_id`
- monotonic `generation`
- `parent_state_id`
- author identity/name
- gameplay condition fields (`anchor`, `vector`, `reach`, `pressure`, `tension`, `engine_bias`)
- note + timestamp
- unique `(chain_id, generation)` constraint
- index on `(chain_id, generation desc)`

RLS is enabled.

Read policy:
- `anon` and `authenticated` may SELECT chain state.

Append policy:
- public clients may INSERT only when the proposed row points to the current latest state;
- generation must be exactly latest + 1;
- the same author cannot immediately follow themselves;
- unique generation constraint prevents two canonical successors.

The policy helper is a `SECURITY DEFINER` function in non-exposed schema `private`, so it can inspect the canonical chain without becoming a public RPC endpoint.

Supabase security advisor after hardening: **0 lints**.

## Seed
Canonical generation 1 seeded:
- author: Maya
- author id: `seed-maya`
- pressure: `SPAN`
- tension: `3`
- engine bias: `0.25`
- chain id: `00000000-0000-4000-8000-000000000001`

## SDK7 cutover
Commit:
`a77b1472c0c489b8f0de94eaed2036f85b71670c` — `fix: move DCL shared chain from Neon to Supabase RLS`

`decentraland/src/shared.ts` now:
- reads latest state from Supabase `chain_states` ordered by generation descending;
- derives human-chain history directly from `chain_states` ordered ascending;
- appends next handoff through Supabase REST;
- uses a Supabase publishable key in the `apikey` header;
- preserves SDK7 `executeTask()` wrapping and inline runtime diagnostics.

CI:
- GitHub Actions `Decentraland SDK7 Build` run #13
- run id `34632409324`
- conclusion: **SUCCESS**

## Next gate
1. Pull latest `main`.
2. Build `decentraland/`.
3. Republish `unfinished.dcl.eth`.
4. Enter once and check the top badge.
5. PASS A = `LIVE CHAIN`.
6. If PASS A, complete one full path.
7. PASS B = final `HANDOFF READY` + `COPY HANDOFF LINK`.
8. Send to Benita / second account.
9. PASS C = second account inherits Faadil's persisted state.

If the badge still shows `OFFLINE`, capture the exact inline Supabase diagnostic. Do not make another speculative architecture change first.
