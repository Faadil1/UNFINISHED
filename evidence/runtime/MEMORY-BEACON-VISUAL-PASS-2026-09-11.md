# UNFINISHED — Memory Beacon Visual Pass Evidence

**Date:** 2026-09-11

## Decision

Locked visual direction: **UNFINISHED — Memory Beacon**.

This coherently merges:
- Ritual Beacon — iconic central ritual landmark;
- Memory Bridge — visible human lineage and transmission path;
- Chain Monument — cumulative spatial memory.

## Implementation

### `decentraland/src/world.ts`
Implements:
- central Memory Beacon tower;
- emissive vertical core;
- suspended square halos;
- ritual handoff altar;
- floating fragments;
- illuminated Memory Bridge rails and marks;
- recent-author steles;
- Chain Monument pillars;
- ritual frames;
- CONNECT and RISE spatial signatures;
- live/handoff/waiting/offline beacon states.

### `decentraland/src/game.ts`
Integrates the world layer into the proven gameplay/shared-chain loop through:
- `buildMemoryBeaconWorld()`;
- `refreshMemoryBridge()`;
- `setBeaconState()`;
- `showChoiceSignature()`.

### `decentraland/scene.json`
Entry camera target frames the Memory Beacon.

## Build proof

Commits:
- `0279f9eebdeec2f1a34c27f40559e02dda5f088a`
- `4de82db146329592724bae1fe6621fce29862ea8`
- `47099928c0698cfd81558a950e79d593c5106adc`

GitHub Actions run `34634950496`: **SUCCESS**.

Artifact:
- name: `unfinished-dcl-build`
- id: `10276754589`
- digest: `sha256:6c0617f97b4e5b42446ac204b85cb106d406bcedd2771a3cf82420a197eedcb4`

The compiled `index.js` artifact was inspected and contains:
- `buildMemoryBeaconWorld`
- `refreshMemoryBridge`
- `setBeaconState`
- `showChoiceSignature`

Therefore the Memory Beacon is present in the CI build output.

## Published-world smoke result

A user-recorded published-world video after the implementation still shows the **old scene visuals**:
- legacy rectangular gate architecture;
- no central Memory Beacon tower;
- no suspended halos;
- no illuminated lineage bridge;
- no Chain Monument pillars.

The runtime nevertheless remains connected and displays:
- `LIVE CHAIN`;
- `YOUR HANDOFF IS WAITING`;
- `Maya -> Faadil`;
- `COPY HANDOFF LINK`.

### Verdict

**PUBLISHED WORLD IS SERVING AN OLDER VISUAL BUNDLE.**

This is not evidence that the new visual code failed. The source and CI artifact both contain the new world layer. The next gate is to prove which local project/folder Creator Hub is publishing and to verify the local built `bin/index.js` before another publish.

## Next gate

From PowerShell:

```powershell
cd $HOME\UNFINISHED
git fetch origin
git status --short
git rev-parse HEAD
git rev-parse origin/main

Select-String -Path .\decentraland\src\game.ts -Pattern "buildMemoryBeaconWorld"
Select-String -Path .\decentraland\src\world.ts -Pattern "buildMemoryBeaconWorld"

cd decentraland
npm run build
Select-String -Path .\bin\index.js -Pattern "buildMemoryBeaconWorld"
npm run start
```

If local preview shows the Memory Beacon, Creator Hub must publish from exactly:

`C:\Users\fboussari\UNFINISHED\decentraland`

Do not change backend or redesign the visual direction until this deployment-path mismatch is resolved.
