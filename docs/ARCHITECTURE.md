# Architecture

UNFINISHED has two deliberately separate surfaces:

1. **Decentraland World** — the canonical shared human chain.
2. **Web sandbox** — a local 2.5D onboarding experience seeded from Maya.

The web explains the mechanic. Decentraland owns the real multiplayer state.

## Canonical Decentraland flow

```text
latest Supabase handoff
        ↓
anchor × vector × reach
        ↓
pressure × tension × engineBias
        ↓
CONNECT or RISE
        ↓
generated traversable route
        ↓
player physically reaches handoff beacon
        ↓
author successor condition
        ↓
append next state to shared chain
        ↓
future player inherits latest state
```

The shared state includes generation, parent state, author identity, condition geometry, pressure/tension, and recent chain metadata.

## Decentraland runtime

Native SDK7 source lives in `decentraland/`.

Key responsibilities:

- `src/shared.ts` — Supabase shared-state adapter and network diagnostics;
- `src/game.ts` — inherited-state loading, causal completion, route generation, successor persistence, self/conflict handling;
- `src/world.ts` — Memory Beacon, Memory Bridge and Chain Monument visual system;
- `src/ui.tsx` — mobile-safe interaction, recent-chain memory, receipts and handoff/share controls;
- `scene.json` — `unfinished.dcl.eth` World configuration and `USE_FETCH` permission.

### Persistence

The active backend is Supabase.

- RLS is enabled;
- the public Decentraland client does not contain a private service secret;
- successor states are append-oriented and preserve `parent_state_id`;
- the World resolves the latest canonical state on entry.

The project has persisted a linked generation 1 → 2 → 3 chain, with generation 2 and 3 authored by different wallet identities.

## Identity and authority

Display names are presentation metadata. Runtime authorship is tied to Decentraland player/wallet identity rather than trusting a typed name.

Self-handoff is intentionally blocked: a player who authored the latest state sees `YOUR HANDOFF IS WAITING` until another real player advances the chain.

## Handoff model

The public World link is stable:

```text
decentraland://?realm=unfinished.dcl.eth&dclenv=org
```

It does **not** encode a unique handoff ID. The recipient enters the same World and inherits the latest canonical state.

This is sufficient for the intended single shared-chain demo, but the repository does not claim arbitrary multi-chain routing or production-grade multi-writer concurrency.

## Memory Beacon visual system

The final World direction combines:

- **Ritual Beacon** — the central landmark and handoff ritual;
- **Memory Bridge** — visible transmission / route language;
- **Chain Monument** — cumulative spatial memory.

Successive generations vary deterministically while retaining one coherent visual language.

## Web sandbox architecture

The root web app boots the validated 2.5D causal runtime from `runtime/`.

Every fresh root visit is forced to the fixed Maya seed and creates only a local browser branch.

The web sandbox:

- does not read Supabase;
- does not write Supabase;
- does not expose the canonical current chain;
- can share a local branch for explanation/testing;
- directs players into `unfinished.dcl.eth` for the real shared experience.

## Browser runtime layers

```text
runtime/core-v51.html
        ↓
runtime/v52-patch.js
        ↓
runtime/v521-fix.js
        ↓
runtime/v53-submission.*
        ↓
runtime/v531-final.*
        ↓
runtime/v532-experience.*
        ↓
runtime/v533-mobile.*
        ↓
runtime/v533-r2.*
        ↓
runtime/v534-web-sandbox.*
```

The browser stack remains useful as a low-friction sandbox and as historical validation of the causal grammar; it is not the canonical shared runtime.
