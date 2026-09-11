# UNFINISHED — Current Canonical Handover

**Updated:** 2026-09-11

## Current verdict

**PROJECT FINISHER: READY_FOR_HUMAN_VALIDATION**

The product path is complete enough for submission. The repository has been reconciled around the native Decentraland runtime, the Cloudflare 2.5D sandbox, and the real Supabase chain.

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

The Project Finisher pass identified and corrected the main submission-facing inconsistencies:
- old README treated the browser prototype as primary;
- README and docs still pointed to Vercel;
- architecture / validation docs still denied shared durable persistence after Supabase proof existed;
- Decentraland README still described shared persistence as future work;
- old empty Vercel config remained at root;
- proof index underweighted the native Decentraland evidence.

These have been reconciled on `main`.

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

## Exact final human validation

Before pressing **Submit** on DoraHacks:

1. Open `https://unfinished.pages.dev/` in a fresh/private browser session.
2. Confirm Maya seed → CONNECT/RISE → avatar starts on the route → traversal works → author next → local receipt.
3. Open `unfinished.dcl.eth` once on desktop/mobile and confirm the latest published World is healthy.
4. Confirm the DoraHacks fields use:
   - Project website: `https://unfinished.pages.dev/`
   - GitHub: `https://github.com/Faadil1/UNFINISHED`
   - Demo: `https://youtu.be/As1GI0nlRNw`
5. Human approves the final submission.

No feature expansion after this point. Only release-blocking corrections are allowed.

## Canonical operational thread

GitHub Issue #3 — `Canonical State + Handover — Decentraland Submission`
