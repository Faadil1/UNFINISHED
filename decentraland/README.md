# UNFINISHED — Decentraland SDK7 World

This folder contains the native Decentraland port of UNFINISHED.

The core in-world loop is:

**INHERIT → COMPLETE → USE → AUTHOR NEXT → CONTINUE**

The scene uses Decentraland SDK7 primitives only, reads the current Decentraland player name for authorship, and requires the avatar to physically reach the end of the generated route before the next problem can be authored.

## Run locally

Requirements: Node.js 20+.

```bash
cd decentraland
npm install
npm run build
npm run start
```

## Preview on Decentraland Mobile

```bash
npm run start -- --mobile
```

Scan the QR code from a phone on the same Wi-Fi network. This is the required validation path for mobile controls, layout, camera and performance.

## Deploy to a Decentraland World

Before publishing, add the World owned by the deploying wallet to `scene.json`:

```json
"worldConfiguration": {
  "name": "YOUR-NAME.dcl.eth"
}
```

Then either publish from Creator Hub using **PUBLISH TO WORLD**, or run:

```bash
npm run deploy
```

The wallet signing the deployment must own the Decentraland NAME / ENS domain or have deployment permission for that World.

## Current implementation

The native World scene already implements:

- inherited spatial condition;
- causal `CONNECT` / `RISE` completion;
- generated traversable route;
- avatar-position verification that the route was actually used;
- successor `HEIGHT` / `SPAN` authoring;
- Decentraland player-name attribution;
- creation receipt and visible human chain;
- mobile-safe large controls and lightweight geometry.

The next deployment step is connecting the handoff state adapter to shared cross-session persistence, then running the real mobile preview and World publish gate.
