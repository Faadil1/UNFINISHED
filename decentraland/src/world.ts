import {
  engine,
  Entity,
  Material,
  MeshRenderer,
  Transform
} from '@dcl/sdk/ecs'
import { Color3, Color4, Vector3 } from '@dcl/sdk/math'
import type { Completion } from './game'

type BeaconState = 'IDLE' | 'LIVE' | 'HANDOFF' | 'WAITING' | 'OFFLINE'

const COLORS = {
  night: Color4.create(0.04, 0.018, 0.065, 1),
  plum: Color4.create(0.11, 0.035, 0.15, 1),
  mulberry: Color4.create(0.22, 0.055, 0.23, 1),
  violet: Color4.create(0.36, 0.13, 0.48, 1),
  lilac: Color4.create(0.73, 0.53, 0.92, 1),
  coral: Color4.create(1, 0.25, 0.39, 1),
  rose: Color4.create(0.98, 0.16, 0.52, 1),
  ivory: Color4.create(1, 0.9, 0.72, 1),
  ash: Color4.create(0.29, 0.22, 0.33, 1)
}

const worldEntities: Entity[] = []
const memoryEntities: Entity[] = []
const choiceEntities: Entity[] = []
const handoffEntities: Entity[] = []
const beaconGlowEntities: Entity[] = []

let built = false

function color3(color: Color4) {
  return Color3.create(color.r, color.g, color.b)
}

function spawnVisualBox(
  position: ReturnType<typeof Vector3.create>,
  scale: ReturnType<typeof Vector3.create>,
  color: Color4,
  glow = 0
) {
  const entity = engine.addEntity()
  Transform.create(entity, { position, scale })
  MeshRenderer.setBox(entity)
  Material.setPbrMaterial(entity, {
    albedoColor: color,
    metallic: glow > 0 ? 0.24 : 0.08,
    roughness: glow > 0 ? 0.32 : 0.72,
    ...(glow > 0
      ? {
          emissiveColor: color3(color),
          emissiveIntensity: glow
        }
      : {})
  })
  return entity
}

function clearEntities(list: Entity[]) {
  for (const entity of list) engine.removeEntity(entity)
  list.length = 0
}

function addSquareHalo(y: number, size: number, thickness: number, color: Color4, glow: number) {
  const z = 14.15
  const half = size / 2
  worldEntities.push(
    spawnVisualBox(Vector3.create(8, y, z - half), Vector3.create(size, thickness, thickness), color, glow),
    spawnVisualBox(Vector3.create(8, y, z + half), Vector3.create(size, thickness, thickness), color, glow),
    spawnVisualBox(Vector3.create(8 - half, y, z), Vector3.create(thickness, thickness, size), color, glow),
    spawnVisualBox(Vector3.create(8 + half, y, z), Vector3.create(thickness, thickness, size), color, glow)
  )
}

function buildBridge() {
  worldEntities.push(
    spawnVisualBox(Vector3.create(5.1, 0.18, 7.8), Vector3.create(0.09, 0.11, 10.7), COLORS.rose, 2.6),
    spawnVisualBox(Vector3.create(10.9, 0.18, 7.8), Vector3.create(0.09, 0.11, 10.7), COLORS.rose, 2.6),
    spawnVisualBox(Vector3.create(5.33, 0.23, 7.8), Vector3.create(0.16, 0.08, 10.7), COLORS.mulberry, 0),
    spawnVisualBox(Vector3.create(10.67, 0.23, 7.8), Vector3.create(0.16, 0.08, 10.7), COLORS.mulberry, 0)
  )

  const bridgeMarks = [3.2, 5.2, 7.2, 9.2, 11.2]
  bridgeMarks.forEach((z, index) => {
    worldEntities.push(
      spawnVisualBox(
        Vector3.create(8, 0.105, z),
        Vector3.create(index === bridgeMarks.length - 1 ? 4.8 : 3.7, 0.035, 0.075),
        index === bridgeMarks.length - 1 ? COLORS.coral : COLORS.lilac,
        1.65
      )
    )
  })
}

function buildChainMonument() {
  const pillars = [
    [3.35, 2.15, 12.9, 0.72, 4.3],
    [12.65, 2.15, 12.9, 0.72, 4.3],
    [4.45, 1.72, 14.55, 0.62, 3.45],
    [11.55, 1.72, 14.55, 0.62, 3.45]
  ]

  pillars.forEach((p, index) => {
    worldEntities.push(
      spawnVisualBox(
        Vector3.create(p[0], p[1], p[2]),
        Vector3.create(p[3], p[4], 0.68),
        index < 2 ? COLORS.plum : COLORS.mulberry,
        0
      ),
      spawnVisualBox(
        Vector3.create(p[0], p[1] + 0.25, p[2] - 0.36),
        Vector3.create(0.055, p[4] * 0.48, 0.04),
        index % 2 === 0 ? COLORS.coral : COLORS.lilac,
        2.4
      )
    )
  })
}

function buildBeacon() {
  worldEntities.push(
    spawnVisualBox(Vector3.create(8, 0.34, 13.72), Vector3.create(4.8, 0.18, 1.78), COLORS.mulberry, 0),
    spawnVisualBox(Vector3.create(8, 0.56, 13.95), Vector3.create(3.6, 0.24, 1.24), COLORS.plum, 0),
    spawnVisualBox(Vector3.create(8, 0.8, 14.15), Vector3.create(2.25, 0.25, 0.86), COLORS.violet, 0)
  )

  const towerLeft = spawnVisualBox(Vector3.create(7.37, 3.58, 14.2), Vector3.create(0.94, 5.45, 0.98), COLORS.plum, 0)
  const towerRight = spawnVisualBox(Vector3.create(8.63, 3.58, 14.2), Vector3.create(0.94, 5.45, 0.98), COLORS.plum, 0)
  worldEntities.push(towerLeft, towerRight)

  const core = spawnVisualBox(Vector3.create(8, 3.72, 14.16), Vector3.create(0.2, 6.55, 0.22), COLORS.coral, 3.6)
  worldEntities.push(core)
  beaconGlowEntities.push(core)

  const altarCore = spawnVisualBox(Vector3.create(8, 1.62, 13.7), Vector3.create(0.58, 0.58, 0.58), COLORS.coral, 3.1)
  worldEntities.push(altarCore)
  beaconGlowEntities.push(altarCore)

  addSquareHalo(4.65, 4.3, 0.13, COLORS.rose, 2.2)
  addSquareHalo(5.85, 3.05, 0.11, COLORS.lilac, 2.0)

  const floaters = [
    [5.95, 4.55, 13.55, 0.42],
    [10.08, 4.15, 13.8, 0.54],
    [6.62, 6.12, 14.62, 0.34],
    [9.52, 6.62, 13.54, 0.4],
    [5.78, 5.8, 15.18, 0.3],
    [10.24, 5.42, 15.05, 0.31]
  ]

  floaters.forEach((p, index) => {
    worldEntities.push(
      spawnVisualBox(
        Vector3.create(p[0], p[1], p[2]),
        Vector3.create(p[3], p[3] * 1.15, p[3]),
        index % 2 === 0 ? COLORS.rose : COLORS.violet,
        index < 2 ? 1.1 : 0.35
      )
    )
  })
}

function buildRitualFrames() {
  const frameZ = [4.15, 8.25]
  frameZ.forEach((z, index) => {
    const h = index === 0 ? 2.8 : 3.45
    worldEntities.push(
      spawnVisualBox(Vector3.create(2.45, h / 2, z), Vector3.create(0.38, h, 0.42), COLORS.plum, 0),
      spawnVisualBox(Vector3.create(13.55, h / 2, z), Vector3.create(0.38, h, 0.42), COLORS.plum, 0),
      spawnVisualBox(Vector3.create(8, h, z), Vector3.create(11.5, 0.24, 0.38), COLORS.plum, 0)
    )
  })

  worldEntities.push(
    spawnVisualBox(Vector3.create(3.2, 1.7, 8.25), Vector3.create(0.9, 2.35, 0.12), COLORS.mulberry, 0),
    spawnVisualBox(Vector3.create(12.8, 1.7, 8.25), Vector3.create(0.9, 2.35, 0.12), COLORS.mulberry, 0),
    spawnVisualBox(Vector3.create(3.2, 1.7, 8.17), Vector3.create(0.06, 1.45, 0.04), COLORS.coral, 2.1),
    spawnVisualBox(Vector3.create(12.8, 1.7, 8.17), Vector3.create(0.06, 1.45, 0.04), COLORS.coral, 2.1)
  )
}

export function buildMemoryBeaconWorld() {
  if (built) return
  built = true

  buildBridge()
  buildRitualFrames()
  buildChainMonument()
  buildBeacon()
}

export function refreshMemoryBridge(authors: string[]) {
  clearEntities(memoryEntities)
  const visible = authors.slice(-6)
  if (!visible.length) return

  visible.forEach((_, index) => {
    const leftSide = index % 2 === 0
    const pair = Math.floor(index / 2)
    const x = leftSide ? 4.58 : 11.42
    const z = 3.65 + pair * 2.75
    const newest = index === visible.length - 1
    const height = 0.86 + Math.min(index, 5) * 0.1

    memoryEntities.push(
      spawnVisualBox(Vector3.create(x, 0.14, z), Vector3.create(0.72, 0.18, 0.72), COLORS.plum, 0),
      spawnVisualBox(
        Vector3.create(x, 0.31 + height / 2, z),
        Vector3.create(0.44, height, 0.18),
        newest ? COLORS.rose : COLORS.violet,
        newest ? 0.8 : 0
      ),
      spawnVisualBox(
        Vector3.create(x, 0.34 + height, z - 0.105),
        Vector3.create(0.09, height * 0.55, 0.04),
        newest ? COLORS.ivory : COLORS.lilac,
        newest ? 2.1 : 1.2
      )
    )
  })
}

export function showChoiceSignature(kind: Completion | null) {
  clearEntities(choiceEntities)
  if (!kind) return

  if (kind === 'CONNECT') {
    ;[5.3, 7.25, 9.2, 11.15].forEach((z, index) => {
      choiceEntities.push(
        spawnVisualBox(
          Vector3.create(8, 0.26 + index * 0.025, z),
          Vector3.create(5.65, 0.055, 0.11),
          index % 2 === 0 ? COLORS.coral : COLORS.lilac,
          2.2
        )
      )
    })
  } else {
    ;[
      [10.45, 0.62, 5.4],
      [10.65, 0.94, 7.3],
      [10.85, 1.26, 9.2],
      [11.05, 1.58, 11.1]
    ].forEach((p, index) => {
      choiceEntities.push(
        spawnVisualBox(
          Vector3.create(p[0], p[1], p[2]),
          Vector3.create(0.12, 0.95 + index * 0.2, 0.12),
          index % 2 === 0 ? COLORS.lilac : COLORS.coral,
          2.35
        )
      )
    })
  }
}

export function setBeaconState(state: BeaconState) {
  const color =
    state === 'HANDOFF'
      ? COLORS.ivory
      : state === 'OFFLINE'
        ? COLORS.ash
        : state === 'WAITING'
          ? COLORS.lilac
          : state === 'LIVE'
            ? COLORS.coral
            : COLORS.rose
  const intensity = state === 'HANDOFF' ? 4.8 : state === 'LIVE' ? 3.6 : state === 'OFFLINE' ? 0.25 : 2.1

  for (const entity of beaconGlowEntities) {
    Material.setPbrMaterial(entity, {
      albedoColor: color,
      metallic: 0.26,
      roughness: 0.28,
      emissiveColor: color3(color),
      emissiveIntensity: intensity
    })
  }

  clearEntities(handoffEntities)
  if (state === 'HANDOFF') {
    handoffEntities.push(
      spawnVisualBox(Vector3.create(7.25, 2.15, 13.7), Vector3.create(0.22, 0.22, 0.22), COLORS.ivory, 3.5),
      spawnVisualBox(Vector3.create(8.75, 2.15, 13.7), Vector3.create(0.22, 0.22, 0.22), COLORS.ivory, 3.5),
      spawnVisualBox(Vector3.create(8, 2.45, 13.7), Vector3.create(0.18, 0.18, 0.18), COLORS.coral, 3.8),
      spawnVisualBox(Vector3.create(8, 0.33, 12.72), Vector3.create(4.95, 0.05, 0.12), COLORS.ivory, 2.8)
    )
  } else if (state === 'WAITING') {
    handoffEntities.push(
      spawnVisualBox(Vector3.create(8, 0.31, 12.7), Vector3.create(3.9, 0.05, 0.1), COLORS.lilac, 1.8)
    )
  }
}
