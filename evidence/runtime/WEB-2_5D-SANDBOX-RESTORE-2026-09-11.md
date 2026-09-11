# UNFINISHED — Web 2.5D Sandbox Restoration

**Date:** 2026-09-11

## Decision

The public web companion must not collapse into a static landing page.

The approved architecture is now:

- **Web / Vercel:** playable 2.5D local sandbox, always seeded from Maya, with local browser branches only.
- **Decentraland:** the only canonical shared human chain, backed by Supabase.

## Why this pass was required

The static companion pass made the product easier to explain but weakened the actual experience and started to read like a generic AI-generated landing page.

The original web strength was the tactile 2.5D loop: inherit a spatial condition, choose how to complete it, physically use the route, then leave a new condition behind.

That interactive quality is restored.

## Implemented

### Playable runtime restored at root
`index.html` now boots the validated 2.5D runtime again instead of rendering a static marketing page.

Commit:
`f97a2d5aa3cd680b040e73fd23b720c64c894e73` — `feat: restore playable 2.5D web sandbox`

### Exact Maya seed on fresh web visits
The web root is explicitly patched to start from the canonical Maya seed:
- author: `Maya`
- anchor: `HIGH`
- vector: `FLAT`
- reach: `SHORT`
- pressure: `SPAN`
- tension: `3`
- engine bias: `0.25`

The visitor then creates a **local web branch**. No Supabase read/write is used by the public sandbox.

Commit:
`c158d687690f38d8c1db787df234127f753862a7` — `feat: lock web sandbox to Maya and local branches`

### Anti-AI-slop art direction
The site shell has been moved away from glossy dark-gradient / SaaS-card language toward a quieter object/exhibit direction:
- warm paper shell;
- square architectural framing;
- restrained oxblood/coral accents;
- scene-first composition;
- flat graphic controls;
- exhibit-label captions instead of glassmorphism;
- receipt styled like a physical ticket/object;
- fewer pills, gradients, and stacked marketing cards.

Commit:
`fe13d163e51ce16f429910d3ea730bfec59ed1f3` — `feat: restore tactile 2.5D web sandbox art direction`

Layout correction:
`e109fd03fd65e857d02fcdeb3963dafef4537485` — `fix: preserve 2.5D sandbox stage hierarchy`

### Explicit boundary
A persistent web label now states:
> WEB SANDBOX — Maya is always the seed here. Your continuation stays in this web branch.

The receipt adds an explicit route into the canonical Decentraland World.

## Product boundary

Safe web claim:
> Try a local 2.5D branch from Maya on the web. Continue the real shared human chain in Decentraland.

Do not claim that the Vercel sandbox displays or advances the live Supabase chain.

## Deployment state

The code is committed on `main`.

The Vercel Git integration attempted the deployment for commit `f97a2d5...` but returned a **build-rate-limit** failure on the current Hobby account. This is a hosting quota/timing issue, not a source-code failure signal.

The live URL should not be called updated until a later Vercel production deployment succeeds.
