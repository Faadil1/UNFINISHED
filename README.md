<div align="center">

# UNFINISHED

### Another real person’s unfinished decision becomes the level you have to play.

**Asynchronous causal social play for Decentraland — built for the Friendzone Mobile Buildathon.**

[**LIVE DEMO**](https://unfinished-delta.vercel.app/) · [**AUTHOR / TEST MODE**](https://unfinished-delta.vercel.app/?author=1) · [**SUBMISSION STORY + DEMO**](../../issues/2)

> **NO ONE FINISHES WHAT THEY START.**

</div>

---

## The idea in 20 seconds

Most social worlds work best when other people are online **right now**.

UNFINISHED asks a different question:

> **What if someone could matter to your session even after they had already left?**

A player leaves behind an unfinished spatial condition. A future player inherits it, completes it into a usable route, physically traverses the result, then authors the next unfinished condition for someone else.

The result is a human chain that does not depend on simultaneous presence:

**Maya → Faadil → Benita → …**

Every player is both a **successor** and an **author**.

---

## Judge path — try the core loop in under a minute

Open the **[live demo](https://unfinished-delta.vercel.app/)** on mobile.

1. **INHERIT** — receive a spatial condition left by a previous person.
2. **COMPLETE** — choose how to resolve the inherited problem.
3. **USE** — traverse the route your combined decisions created.
4. **AUTHOR NEXT** — leave a new spatial condition for the next visitor.
5. **CONTINUE** — share the successor link into another browser or device.

The important part is not the name tag.

The previous player’s authored geometry changes what you can build and what you have to solve.

---

# Why this is social

UNFINISHED is not a guestbook, chat room, leaderboard, or decorative persistence layer.

The prior player is **causally upstream** of your session.

They author:

```text
anchor × vector × reach
```

That creates the spatial constraint you inherit.

The engine carries forward:

```text
pressure × tension × engineBias
```

Your completion resolves one problem and creates another:

```text
CONNECT  → resolves SPAN   → creates HEIGHT
RISE     → resolves HEIGHT → creates SPAN
```

So the social loop is not:

```text
Person A leaves a message → Person B reads it
```

It is:

```text
Person A changes the playable world
        ↓
Person B must respond to A's decision
        ↓
B's response becomes Person C's new problem
```

That is the core primitive.

---

## The loop

```text
CREATE
  ↓
INHERIT
  ↓
COMPLETE
  ↓
USE
  ↓
AUTHOR NEXT
  ↓
CONTINUE
```

Or, in one sentence:

> **Every player solves one problem and creates the next.**

---

# What makes UNFINISHED different

| Common social pattern | UNFINISHED |
|---|---|
| Requires simultaneous players | Works asynchronously |
| Prior player is mostly attribution or content | Prior player changes your playable constraint |
| Persistence is decorative | Persistence affects topology and route choice |
| Session ends when you finish | Your session produces the next player’s starting problem |
| Retention comes from scores / streaks | Retention comes from human lineage + successor receipts |
| Empty world feels empty | The first minute can feel like **arriving after someone, not before anyone** |

---

# A real human chain

Display names are optional, but when players sign their contribution the lineage becomes visible:

```text
Maya → Faadil → Dice → …
```

Names and notes are **social metadata only**. They never authorize state changes and never modify the deterministic causal engine.

The chain exists to answer a simple question:

> **Who changed the world before me — and who will inherit what I do next?**

---

# Proof already exercised in the prototype

The current build has been exercised across real mobile browser sessions and supports:

- cross-browser successor handoff;
- visible human lineage across sessions;
- route traversal after completion;
- deterministic successor-state creation;
- self-completion refusal (`THIS ONE IS YOURS`);
- stale/local state refusal rather than silent overwrite;
- optional human names and notes;
- creation receipts showing prior author → completion → outcome → next inherited problem;
- opaque HUMAN/WORLD matched conditions for source-neutral cold testing;
- mobile-safe controls, reduced-motion handling, and keyboard-aware successor authoring.

A recent real-browser QA chain successfully continued from one participant/session to another while preserving the inherited condition and lineage. This is **handoff QA evidence**, not presented as independent cold-test proof.

---

# The creation receipt

Each completed session can explain its causal contribution in human-readable form:

```text
Prior author      Maya
Your completion   Bridge
Outcome           Traversable crossing
Route             Used
Next inherits     HEIGHT · tension 2
Human chain       Maya → Faadil → …
```

The receipt is deliberately designed to make the causal chain legible to both players and judges.

---

# Mobile-first interaction

UNFINISHED was designed around short, thumb-first sessions:

- press-and-hold commitment instead of tiny precision controls;
- direct route traversal after reveal;
- large world-space authoring targets;
- optional display name instead of account setup;
- compact successor authoring;
- shareable next-player handoff;
- reduced-motion support;
- no requirement for simultaneous presence.

The public demo and the source-neutral test mode intentionally have different presentation layers:

- **Demo mode** makes the human chain legible.
- **Cold-test mode** hides source identity until debrief so the experiment is not primed.

---

# Architecture

UNFINISHED separates the causal engine from the presentation and validation layers.

```text
core-v51.html
    ↓
v52-patch.js              embodied route + authoring
    ↓
v521-fix.js               source-neutral QA protections
    ↓
v53-submission.*           mobile submission / opaque test links
    ↓
v531-final.*               architectural world + judge-fast path
    ↓
v532-experience.*          human lineage + world-first experience
    ↓
v533-mobile.*              mobile fit + interaction polish
    ↓
v533-r2.*                  final receipt + safe successor sharing
```

Current public runtime:

```text
5.3.3-mobile-finish-r2
```

The causal engine underneath that stack remains deterministic.

---

# Operator / matched-condition mode

For controlled HUMAN vs WORLD evaluation:

**[Open author/test mode](https://unfinished-delta.vercel.app/?author=1)**

The operator can author a real spatial condition and generate matched links where geometry and deterministic engine state are held constant while source condition changes.

That allows the project to test the hard question:

> **Does the previous human matter because they actually changed the playable problem — or only because the UI says a human was there?**

The active validation gate is tracked in [Issue #1](../../issues/1).

---

# Submission story

The submission narrative is deliberately simple:

### PAIN
Social worlds lose energy when nobody else is online.

### PROBLEM
A solo visitor can complete content, but their visit rarely changes what a future real person experiences.

### INSIGHT
**The first minute should feel like arriving after someone, not before anyone.**

### DIFFERENTIATOR
Another real person’s prior spatial decision becomes your current playable problem.

### EXECUTION
A mobile-first causal loop: **inherit → complete → use → author next**.

### EVIDENCE
Cross-browser handoff, route usage, receipts, deterministic successor state, human lineage, source-neutral test instrumentation.

### STORY
**No one finishes what they start.**

### DEMO
Maya → Faadil → Benita → next player.

The frozen submission story and 75–90 second demo plan are tracked in [Issue #2](../../issues/2).

---

# What this prototype proves — and what it does not

UNFINISHED is intentionally explicit about evidence boundaries.

### Proven / exercised at prototype level

- transferable causal handoff;
- deterministic successor loop;
- mobile browser interaction;
- human lineage metadata;
- local stale-state and self-completion protections;
- judge-facing creation receipts;
- cold-test instrumentation.

### Still yellow until production integration

- shared durable backend persistence;
- atomic shared concurrency / CAS;
- authoritative Decentraland identity;
- final Decentraland Mobile camera / avatar / collision / performance behavior;
- reconnect / offline recovery;
- production moderation and griefing controls;
- impossible/dead-end shared-world recovery.

Those are execution gates, not claims hidden behind the demo.

---

# Repository map

| File | Purpose |
|---|---|
| [`CURRENT.md`](CURRENT.md) | Canonical current state |
| [`CANONICAL-HANDOFF.md`](CANONICAL-HANDOFF.md) | Exact continuation instructions |
| [`WINNING-CHAIN.md`](WINNING-CHAIN.md) | Rubric → evidence → demo chain |
| [`PDPB-GATE.md`](PDPB-GATE.md) | Mandatory post-validation gate |
| [`HIDDEN-SPOTS-HARDENING-V5.md`](HIDDEN-SPOTS-HARDENING-V5.md) | Known risks + hardening status |
| [`TEST-PROTOCOL.md`](TEST-PROTOCOL.md) | Cold-test protocol |
| [`TEST-MATRIX-V5.md`](TEST-MATRIX-V5.md) | HUMAN/WORLD matched test matrix |

---

<div align="center">

## The thing to remember

### **Another real person’s unfinished decision becomes the level you have to play.**

**[OPEN UNFINISHED →](https://unfinished-delta.vercel.app/)**

</div>
