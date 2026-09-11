<div align="center">

<img src="./favicon.svg" width="88" alt="UNFINISHED Memory Beacon mark" />

# UNFINISHED

### Another real person’s unfinished decision becomes the level you have to play.

**Playable co-authorship for Decentraland — built for the Friendzone Mobile Buildathon.**

[**TRY THE 2.5D WEB SANDBOX →**](https://unfinished.pages.dev/) · [**WATCH THE DEMO →**](https://youtu.be/As1GI0nlRNw)

**Decentraland World:** `unfinished.dcl.eth`  
**Deep link:** `decentraland://?realm=unfinished.dcl.eth&dclenv=org`

> **NO ONE FINISHES WHAT THEY START.**

</div>

---

## The idea in one minute

Most multiplayer worlds depend on people being online at the same time.

UNFINISHED asks a different question:

> **What if somebody could materially shape your session after they had already left?**

A player inherits an unfinished spatial condition from a real previous player, chooses how to complete it, physically uses the route created by that choice, then leaves a new condition for whoever arrives next.

```text
INHERIT → COMPLETE → USE → AUTHOR NEXT → HANDOFF
```

The previous player is not decoration or a username in a feed. Their state is **causally upstream** of what the next player can do.

---

## The hero demo moment

The strongest proof is the handoff itself:

```text
Maya seed
   ↓
real player inherits the state
   ↓
CONNECT / RISE changes the playable route
   ↓
player reaches the Memory Beacon
   ↓
new successor condition is persisted
   ↓
a different wallet enters later and inherits it
```

The live shared chain has already persisted three linked generations. Generation 2 and generation 3 were authored by different wallet identities, and generation 3 points directly to generation 2 as its parent state.

That means the core promise is no longer just a browser simulation: **the Decentraland World has real cross-user, cross-session continuity.**

Evidence: [`evidence/runtime/CROSS-USER-GENERATION-3-DB-PROOF-2026-09-11.md`](evidence/runtime/CROSS-USER-GENERATION-3-DB-PROOF-2026-09-11.md)

---

## Two surfaces, one clear boundary

### 1. Decentraland = the canonical shared world

`unfinished.dcl.eth` is the real multiplayer runtime.

It includes:

- native Decentraland SDK7 scene;
- **Memory Beacon** landmark and spatial memory system;
- shared Supabase-backed human chain;
- physical route traversal before successor authoring unlocks;
- `CONNECT` / `RISE` causal completion;
- successor `HEIGHT` / `SPAN` authoring;
- recent human-chain memory;
- self-handoff refusal;
- conflict / latest-state recovery;
- mobile-safe UI and sharing fallback.

The stable World link always resolves the **latest canonical shared state**. It is intentionally not a unique per-handoff URL.

### 2. Web = low-friction 2.5D sandbox

[unfinished.pages.dev](https://unfinished.pages.dev/) is the public entry point for people coming from X, DoraHacks, or the repository.

Every fresh visitor starts from the same Maya seed and can experience the loop immediately in a tactile 2.5D sandbox.

The web experience is deliberately local:

- it does **not** read the canonical Supabase chain;
- it does **not** write the canonical Supabase chain;
- it cannot overwrite the real Decentraland lineage;
- it exists to make the mechanic understandable before asking someone to open Decentraland.

**Web explains the loop. Decentraland owns the real chain.**

---

## Why the mechanic is social

UNFINISHED is not a guestbook, leaderboard, chat room, or decorative persistence layer.

A player authors:

```text
anchor × vector × reach
```

The shared state carries:

```text
pressure × tension × engineBias
```

The next player must respond to that inherited condition.

```text
CONNECT  → resolves SPAN   → creates HEIGHT
RISE     → resolves HEIGHT → creates SPAN
```

So each session has a consequence for a real future visitor:

```text
Person A changes the playable world
        ↓
Person B must respond to A's decision
        ↓
B's response becomes Person C's new problem
```

> **Every player solves one problem and creates the next.**

---

## Why it fits Friendzone

| Judging dimension | What UNFINISHED demonstrates |
|---|---|
| **Mobile-first** | Short sessions, large controls, mobile Decentraland smoke tests, mobile-safe handoff fallback |
| **Social value** | Another real player’s prior action materially changes the next player’s starting problem |
| **Low-concurrency social design** | The relationship survives even when players never overlap online |
| **Originality** | Social interaction through causal inheritance instead of chat, scores, follows, or simultaneous presence |
| **Retention** | Every ending creates curiosity about who inherits it and what they do next |
| **Execution** | Native SDK7 World + shared persistence + visible lineage + playable route + successor authoring |

The design target is simple:

> **The first minute should feel like arriving after someone, not before anyone.**

---

## Runtime architecture

```text
Decentraland SDK7 World
        ↓
latest shared handoff
        ↓
Supabase REST + RLS
        ↓
INHERIT
        ↓
CONNECT / RISE
        ↓
physical route traversal
        ↓
AUTHOR NEXT
        ↓
append successor state
        ↓
next real player inherits latest state
```

The web sandbox reuses the validated causal grammar, but remains isolated from this shared chain.

More detail: [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md)

---

## What is already proven

- native Decentraland World published at `unfinished.dcl.eth`;
- shared Supabase state reachable from Decentraland;
- `LIVE CHAIN` runtime state;
- successful `HANDOFF READY` persistence;
- real mobile gameplay through the latest Memory Beacon experience;
- mobile share/open fallback;
- generation 1 → 2 → 3 parent linkage;
- generation 2 and 3 authored by different wallet identities;
- self-handoff blocking;
- recent-chain UI and creation receipt;
- build-green SDK7 workflow.

Selected evidence lives in [`proof/`](proof/) and [`evidence/runtime/`](evidence/runtime/).

Validation summary: [`docs/VALIDATION.md`](docs/VALIDATION.md)

---

## Claims we intentionally do not make

UNFINISHED is submission-ready, but the repository does not pretend to be a production-scale social protocol.

Not claimed:

- unique per-handoff URLs;
- arbitrary parallel chain routing;
- production-grade multi-writer concurrency guarantees;
- reconnect/offline recovery guarantees;
- production moderation / griefing controls.

The goal is to show a real, understandable social primitive with visible proof — not inflate the scope.

---

## Repository structure

```text
UNFINISHED/
├── README.md                 ← judge-facing overview
├── index.html                ← playable 2.5D web sandbox bootstrap
├── handoff.html              ← mobile-safe bridge into Decentraland
├── runtime/                  ← validated browser causal runtime
├── decentraland/            ← native SDK7 World
├── docs/                     ← architecture, validation, handover
├── proof/                    ← selected submission-facing proof
├── evidence/runtime/         ← canonical runtime evidence
└── .github/workflows/        ← Decentraland build gate
```

---

## Run locally

### Web sandbox

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000/
```

### Decentraland World

Requires Node.js 22+.

```bash
cd decentraland
npm install
npm run build
npm run start
```

---

## Team

UNFINISHED is being built through close collaboration between **Faadil and Benita**. We work together across the project, continuously sharing ideas, testing the experience, refining decisions, and shaping the final direction as a team.

The collaboration mirrors the product itself: progress comes from one person building on what another has started.

---

<div align="center">

## The thing to remember

### **Another real person’s unfinished decision becomes the level you have to play.**

[**TRY UNFINISHED →**](https://unfinished.pages.dev/) · **World:** `unfinished.dcl.eth`

</div>
