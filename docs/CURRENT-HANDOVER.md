# UNFINISHED — Current Canonical Handover

**Updated:** 2026-09-11

## Current verdict

**DECENTRALAND SHARED CHAIN PROVEN / SUPABASE LIVE / MEMORY BEACON MOBILE PASS / MAYA -> FAADIL PERSISTED / MOBILE SHARE FALLBACK PASS / WEB ROOT RESTORED AS PLAYABLE 2.5D LOCAL SANDBOX / CROSS-USER PASS C NEXT / VERCEL 2.5D DEPLOY PENDING BUILD-RATE-LIMIT CLEARANCE**

## Canonical product boundary

### Decentraland = real shared chain
World: `unfinished.dcl.eth`

Deep link: `decentraland://?realm=unfinished.dcl.eth&dclenv=org`

Only Decentraland reads/writes the canonical Supabase chain. The actual order after Maya is determined by real players. Current persisted proof includes Maya generation 1 and Faadil generation 2 (`SPAN · T4`).

### Web = local 2.5D sandbox
Public companion: `https://unfinished-delta.vercel.app/`

Every fresh web visit starts from the fixed Maya seed:
- HIGH / FLAT / SHORT
- SPAN · T3
- engine bias 0.25

The visitor then creates a local browser branch. The web sandbox does **not** read or write Supabase and must never present itself as the live shared chain.

Canonical wording:
> Try a local 2.5D branch from Maya on the web. Continue the real shared human chain in Decentraland.

## Web 2.5D restoration

The static landing-page direction was rejected because it weakened the experience and looked too generic.

The root now boots the validated playable 2.5D runtime again, with a quieter exhibit/object UI instead of a glossy SaaS landing page.

Key commits:
- `fe13d163e51ce16f429910d3ea730bfec59ed1f3` — 2.5D anti-AI-slop art direction
- `c158d687690f38d8c1db787df234127f753862a7` — exact Maya seed + local web branches
- `e109fd03fd65e857d02fcdeb3963dafef4537485` — stage hierarchy fix
- `f97a2d5aa3cd680b040e73fd23b720c64c894e73` — root restored to playable 2.5D sandbox

Visual principles:
- scene first, copy second;
- warm paper / exhibit shell;
- restrained oxblood + coral signals;
- square architectural framing;
- flat controls;
- physical-ticket receipt;
- explicit WEB SANDBOX / SHARED WORLD boundary.

Evidence:
`evidence/runtime/WEB-2_5D-SANDBOX-RESTORE-2026-09-11.md`

## Vercel status

The 2.5D source is committed on `main`, but Vercel rejected the production attempt for `f97a2d5...` because the Hobby account hit a **build-rate limit**.

Do not claim the live URL already shows V5.3.4 until a later production deployment succeeds.

## Exact next gates

1. **Benita / PASS C** in Decentraland: inherit Faadil, complete the route, persist generation 3, verify recent-chain memory.
2. When Vercel build-rate limit clears, deploy current `main` and smoke-test the restored web loop: Maya seed → choose → traverse → author next → local receipt → Decentraland CTA.

## Evidence index

- `evidence/runtime/MOBILE-CHAIN-RESET-2026-09-11.md`
- `evidence/runtime/MOBILE-HANDOFF-SHARE-FALLBACK-2026-09-11.md`
- `evidence/runtime/MEMORY-BEACON-VISUAL-PASS-2026-09-11.md`
- `evidence/runtime/WEB-2_5D-SANDBOX-RESTORE-2026-09-11.md`

GitHub Issue #3 remains the operational thread.
