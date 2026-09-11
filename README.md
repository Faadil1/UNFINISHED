<div align="center">

# UNFINISHED

### Another real person’s unfinished decision becomes the level you have to play.

**Asynchronous causal social play for Decentraland — built for the Friendzone Mobile Buildathon.**

[**PLAY THE LIVE DEMO →**](https://unfinished-delta.vercel.app/) · [**TECHNICAL / AUTHOR MODE**](https://unfinished-delta.vercel.app/?author=1)

> **NO ONE FINISHES WHAT THEY START.**

</div>

---

## What is UNFINISHED?

Most social worlds are strongest when other people are online **right now**.

UNFINISHED is built around the opposite condition: **what if another person could materially shape your session after they had already left?**

A player leaves an unfinished spatial condition. A future player inherits it, completes it into a usable route, traverses the result, then authors the next condition for someone else.

```text
Maya → Faadil → Benita → …
```

Every player is both a **successor** and an **author**.

---

## Judge path — understand the product in under a minute

Open the **[live mobile demo](https://unfinished-delta.vercel.app/)**.

1. **INHERIT** — receive a spatial condition left by a previous person.
2. **COMPLETE** — choose how to resolve the inherited problem.
3. **USE** — traverse the route your combined decisions created.
4. **AUTHOR NEXT** — leave a new condition for the next visitor.
5. **CONTINUE** — share the successor link into another browser or device.

The important part is not the name tag. The previous person’s authored geometry changes what you can build and what you have to solve.

---

## The social primitive

UNFINISHED is not a guestbook, chat room, leaderboard, or decorative persistence layer.

The previous player is **causally upstream** of your session.

They author:

```text
anchor × vector × reach
```

The engine carries:

```text
pressure × tension × engineBias
```

Your completion resolves one pressure and creates the next:

```text
CONNECT  → resolves SPAN   → creates HEIGHT
RISE     → resolves HEIGHT → creates SPAN
```

So the social loop is:

```text
Person A changes the playable world
        ↓
Person B must respond to A's decision
        ↓
B's response becomes Person C's new problem
```

> **Every player solves one problem and creates the next.**

---

## Why this fits Friendzone

| Judging dimension | UNFINISHED |
|---|---|
| **Mobile-first experience** | Thumb-first hold interactions, short sessions, mobile-safe authoring and sharing |
| **Social value** | A real person’s prior action materially changes the next player’s problem |
| **Mobile UX & accessibility** | Large targets, keyboard-aware layouts, reduced-motion support |
| **Performance** | Lightweight deterministic browser runtime; no heavy 3D asset dependency in the prototype |
| **Creativity & originality** | Social interaction through causal inheritance rather than chat, scores, or simultaneous presence |
| **Retention & discovery** | Human lineage, successor receipts, and the desire to see what the next player inherits |
| **Overall execution** | End-to-end inherit → complete → use → author → handoff loop with cross-browser proof |

The design goal is simple:

> **The first minute should feel like arriving after someone, not before anyone.**

---

## A real human chain

Display names are optional. When players sign their contribution, the lineage becomes visible:

```text
Maya → Faadil → Benita → …
```

Names and notes are social metadata only. They do **not** authorize state changes and they do **not** alter the deterministic engine.

The chain answers two questions:

> **Who changed the world before me?**  
> **Who will inherit what I do next?**

---

## Creation receipt

Each completed session explains its causal contribution in human-readable form:

```text
Prior author      Maya
Your completion   Bridge
Outcome           Traversable crossing
Route             Used
Next inherits     HEIGHT · tension 2
Human chain       Maya → Faadil → …
```

The receipt makes the social causality legible instead of hiding it behind telemetry.

---

## Proof exercised in the prototype

The current build has been exercised across real mobile browser sessions and supports:

- cross-browser successor handoff;
- visible human lineage across sessions;
- route traversal after completion;
- deterministic successor-state creation;
- self-completion refusal;
- stale/local state refusal rather than silent overwrite;
- optional human names and notes;
- human-readable creation receipts;
- source-neutral HUMAN/WORLD test conditions;
- reduced-motion and keyboard-aware mobile interaction.

A real cross-browser QA chain successfully preserved both the inherited condition and the human lineage across sessions. See [`proof/`](proof/).

---

## Architecture

UNFINISHED separates the deterministic causal engine from embodiment, validation, and presentation layers.

```text
runtime/core-v51.html
        ↓
runtime/v52-patch.js        embodied route + authoring
        ↓
runtime/v521-fix.js         source-neutral QA protections
        ↓
runtime/v53-submission.*    mobile submission / opaque test links
        ↓
runtime/v531-final.*        architectural world + judge-fast path
        ↓
runtime/v532-experience.*   human lineage + world-first experience
        ↓
runtime/v533-mobile.*       mobile fit + interaction polish
        ↓
runtime/v533-r2.*           receipt + safe successor sharing
```

Current public runtime: `5.3.3-mobile-finish-r2`.

For more detail, see [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md).

---

## Validation approach

The public demo makes the human chain visible. The technical author mode can generate matched HUMAN/WORLD conditions where geometry and deterministic engine state are held constant.

That lets the project ask the hard question:

> **Does the previous human matter because they actually changed the playable problem — or only because the UI says a human was there?**

See [`docs/VALIDATION.md`](docs/VALIDATION.md) for the public validation summary.

---

## Repository structure

```text
UNFINISHED/
├── README.md              ← start here
├── index.html             ← production bootstrap
├── runtime/               ← deployed causal + interaction layers
├── docs/                  ← public architecture and validation notes
├── proof/                 ← selected runtime / handoff evidence
└── vercel.json
```

The default branch intentionally contains **submission-facing material only**.

---

## Run locally

UNFINISHED is a static browser prototype. Serve the repository over HTTP so the bootstrap can fetch the runtime files:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000/
```

Author / technical mode:

```text
http://localhost:8000/?author=1
```

---

## Evidence boundaries

### Exercised at prototype level

- transferable causal handoff;
- deterministic successor loop;
- mobile browser interaction;
- human lineage metadata;
- local stale-state and self-completion protections;
- creation receipts;
- test instrumentation.

### Not claimed as production proof

- shared durable backend persistence;
- atomic shared concurrency / CAS;
- authoritative Decentraland identity;
- final Decentraland Mobile camera / avatar / collision / performance behavior;
- reconnect / offline recovery;
- production moderation and griefing controls.

The demo shows what is real today without disguising what still belongs to production integration.

---

<div align="center">

## The thing to remember

### **Another real person’s unfinished decision becomes the level you have to play.**

[**OPEN UNFINISHED →**](https://unfinished-delta.vercel.app/)

</div>
