# UNFINISHED — Current Canonical Handover

**Updated:** 2026-09-11

## Current verdict

**FRIENDZONE SUBMITTED / PROJECT FINISHER COMPLETE / CANONICAL RUNTIME FROZEN / VERCEL MIRROR PENDING BUILD-RATE RESET**

UNFINISHED has been submitted to the Friendzone Mobile Buildathon. The product path is frozen. No new features or visual exploration should be introduced post-submission; only release-blocking fixes or mirror-deployment maintenance are allowed.

## Product

**UNFINISHED — Playable Co-Authorship**

Thesis:
> Another real person's unfinished decision becomes the level you have to play.

Rule:
> NO ONE FINISHES WHAT THEY START.

Loop:
**INHERIT → COMPLETE → USE → AUTHOR NEXT → HANDOFF**

## Canonical runtime

### Decentraland = real shared chain

World:
`unfinished.dcl.eth`

Deep link:
`decentraland://?realm=unfinished.dcl.eth&dclenv=org`

Active backend: Supabase project `unfinished-dcl`.

Proven runtime facts:
- native SDK7 World exists and has been published;
- `LIVE CHAIN` works;
- mobile gameplay reaches `HANDOFF READY`;
- mobile share/open fallback works;
- self-handoff blocking works;
- latest-state inheritance works;
- Memory Beacon / Memory Bridge / Chain Monument are the locked visual direction;
- linked generations 1 → 2 → 3 exist in Supabase;
- generation 2 and generation 3 use different wallet author IDs;
- generation 3 points exactly to generation 2 as parent state.

Cross-user persistence is therefore DB-proven.

Evidence:
`evidence/runtime/CROSS-USER-GENERATION-3-DB-PROOF-2026-09-11.md`

### Web = local 2.5D sandbox

Canonical public site:
`https://unfinished.pages.dev/`

The web companion:
- always starts from Maya;
- preserves the mauve 2.5D direction;
- lets a visitor experience the core loop locally;
- does not read Supabase;
- does not write Supabase;
- does not expose or advance the real chain;
- routes interested visitors into Decentraland.

## Submission links

- GitHub: `https://github.com/Faadil1/UNFINISHED`
- Web: `https://unfinished.pages.dev/`
- Demo: `https://youtu.be/As1GI0nlRNw`
- Decentraland World: `unfinished.dcl.eth`

## Repository finalization

Project Finisher completed the submission-facing reconciliation:
- README rewritten as judge-facing / product-first documentation;
- canonical links moved from Vercel to Cloudflare;
- architecture / validation docs aligned with real Supabase persistence;
- Decentraland README aligned with the live runtime;
- proof index promoted native Decentraland evidence;
- obsolete empty `vercel.json` removed;
- mobile handoff fallback now targets `unfinished.pages.dev/handoff.html`;
- final audit stored at `docs/PROJECT-FINISHER-FINAL.md`.

Latest Decentraland SDK7 CI after the Cloudflare handoff-link correction:
- GitHub Actions run #23: **SUCCESS**.

## Vercel mirror status

The old Vercel mirror may still be useful as a secondary public mirror after submission.

Current state:
- repository `main` already contains the final current web code;
- the latest Vercel Git check failed only because the Hobby account hit `build-rate-limit`;
- this is not a code/build failure;
- once the limit resets, a single production redeploy is sufficient to bring the Vercel mirror to the current 2.5D mauve build.

Cloudflare remains the canonical public site regardless of the Vercel mirror status.

## Claims discipline

Safe:
- native Decentraland World;
- shared Supabase persistence at submission scale;
- linked cross-user generations;
- mobile gameplay and handoff flow;
- Memory Beacon visual system;
- self-handoff protection;
- local 2.5D web sandbox;
- asynchronous causal co-authorship.

Do not claim:
- unique per-handoff URLs;
- arbitrary parallel chain routing;
- production-grade atomic multi-writer guarantees;
- reconnect/offline guarantees;
- production moderation / griefing controls.

## Post-submission rule

**Freeze the product.**

Allowed post-submission work:
- keep Cloudflare healthy;
- update the optional Vercel mirror once its build-rate limit resets;
- preserve links / demo / evidence;
- answer judge questions;
- fix only release-blocking regressions.

Not allowed:
- new gameplay systems;
- visual redesigns;
- architecture expansion;
- claim inflation.

## Canonical operational thread

GitHub Issue #3 — `Canonical State + Handover — Decentraland Submission`
