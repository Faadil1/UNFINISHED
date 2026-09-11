# UNFINISHED — Decentraland SDK7 World

This folder contains the canonical native Decentraland runtime for UNFINISHED.

World:

```text
unfinished.dcl.eth
```

Deep link:

```text
decentraland://?realm=unfinished.dcl.eth&dclenv=org
```

Core loop:

**INHERIT → COMPLETE → USE → AUTHOR NEXT → HANDOFF**

## What is live

The current World implements:

- shared Supabase-backed handoff state;
- inherited spatial conditions;
- causal `CONNECT` / `RISE` completion;
- generated traversable routes;
- avatar-position verification before successor authoring unlocks;
- `HEIGHT` / `SPAN` successor authoring;
- Decentraland player/wallet authorship;
- recent human-chain memory;
- self-handoff refusal;
- conflict / latest-state recovery;
- Memory Beacon / Memory Bridge / Chain Monument world language;
- creation receipt;
- mobile-safe controls and share/open fallback.

The live backend has persisted a linked generation 1 → 2 → 3 chain where generation 2 and 3 use different wallet author IDs.

## Run locally

Requirements: Node.js 22+ and npm 10+.

```bash
cd decentraland
npm install
npm run build
npm run start
```

## Build gate

```bash
npm run build
```

The repository also runs the SDK7 build through `.github/workflows/dcl-build.yml` for Decentraland source changes.

## Publish to the World

The target is already configured in `scene.json`:

```json
"worldConfiguration": {
  "name": "unfinished.dcl.eth"
}
```

Publish from Creator Hub with **PUBLISH TO WORLD** using the wallet that owns or has permission for the World.

The intended release sequence is:

```text
npm run build
→ local smoke
→ Creator Hub publish
→ published desktop smoke
→ published mobile smoke
```

## Shared-state boundary

The stable deep link does not contain a handoff ID. Every recipient enters the same World and inherits the latest canonical state from Supabase.

That is intentional for this submission’s single shared human chain.

Not claimed here:

- arbitrary parallel chain routing;
- unique per-handoff World URLs;
- production-grade multi-writer concurrency guarantees;
- large-scale moderation / abuse handling.

## Public web companion

The separate 2.5D web sandbox is available at:

```text
https://unfinished.pages.dev/
```

It always starts from Maya and remains local to the browser. It does not read or write the canonical Supabase chain.
