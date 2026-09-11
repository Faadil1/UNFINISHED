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

const BEACON_Z = 13.05
const ALTAR_Z = 12.25

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

function addSquareHalo(
  y: number,
  z: number,
  size: number,
  thickness: number,
  color: Color4,
  glow: number
) {
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
    spawnVisualBox(Vector3.create(5.0, 0.2, 7.45), Vector3.create(0.08, 0.12, 10.2), COLORS.rose, 2.9),
    spawnVisualBox(Vector3.create(11.0, 0.2, 7.45), Vector3.create(0.08, 0.12, 10.2), COLORS.rose, 2.9),
    spawnVisualBox(Vector3.create(5.22, 0.24, 7.45), Vector3.create(0.17, 0.08, 10.2), COLORS.mulberry, 0),
    spawnVisualBox(Vector3.create(10.78, 0.24, 7.45), Vector3.create(0.17, 0.08, 10.2), COLORS.mulberry, 0),
    spawnVisualBox(Vector3.create(8, 0.09, 7.5), Vector3.create(0.06, 0.035, 10.0), COLORS.ivory, 1.2)
  )

  const bridgeMarks = [3.0, 4.85, 6.7, 8.55, 10.4, 11.65]
  bridgeMarks.forEach((z, index) => {
    const last = index === bridgeMarks.length - 1
    worldEntities.push(
      spawnVisualBox(
        Vector3.create(8, 0.11, z),
        Vector3.create(last ? 4.9 : 3.85, 0.035, last ? 0.1 : 0.07),
        last ? COLORS.coral : index % 2 === 0 ? COLORS.lilac : COLORS.rose,
        last ? 2.2 : 1.35
      )
    )
  })

  ;[4.1, 6.15, 8.2, 10.25].forEach((z, index) => {
    const tint = index % 2 === 0 ? COLORS.coral : COLORS.lilac
    worldEntities.push(
      spawnVisualBox(Vector3.create(5.0, 0.52, z), Vector3.create(0.12, 0.62, 0.12), tint, 1.45),
      spawnVisualBox(Vector3.create(11.0, 0.52, z), Vector3.create(0.12, 0.62, 0.12), tint, 1.45)
    )
  })
}

function buildChainMonument() {
  const pillars = [
    [3.55, 2.2, 11.5, 0.7, 4.4],
    [12.45, 2.2, 11.5, 0.7, 4.4],
    [4.55, 1.72, 13.65, 0.58, 3.45],
    [11.45, 1.72, 13.65, 0.58, 3.45]
  ]

  pillars.forEach((p, index) => {
    const tint = index < 2 ? COLORS.plum : COLORS.mulberry
    const glowTint = index % 2 === 0 ? COLORS.coral : COLORS.lilac
    worldEntities.push(
      spawnVisualBox(
        Vector3.create(p[0], p[1], p[2]),
        Vector3.create(p[3], p[4], 0.62),
        tint,
        0
      ),
      spawnVisualBox(
        Vector3.create(p[0], p[1] + 0.18, p[2] - 0.33),
        Vector3.create(0.055, p[4] * 0.5, 0.04),
        glowTint,
        2.5
      ),
      spawnVisualBox(
        Vector3.create(p[0], p[1] + p[4] * 0.34, p[2] - 0.36),
        Vector3.create(0.28, 0.055, 0.04),
        COLORS.ivory,
        1.15
      )
    )
  })
}

function buildBeacon() {
  worldEntities.push(
    spawnVisualBox(Vector3.create(8, 0.3, 12.72), Vector3.create(5.2, 0.16, 2.2), COLORS.mulberry, 0),
    spawnVisualBox(Vector3.create(8, 0.52, 12.94), Vector3.create(3.95, 0.22, 1.55), COLORS.plum, 0),
    spawnVisualBox(Vector3.create(8, 0.76, 13.12), Vector3.create(2.65, 0.23, 0.96), COLORS.violet, 0)
  )

  const towerLeft = spawnVisualBox(
    Vector3.create(7.5, 3.65, BEACON_Z),
    Vector3.create(0.72, 5.85, 0.78),
    COLORS.plum,
    0
  )
  const towerRight = spawnVisualBox(
    Vector3.create(8.5, 3.65, BEACON_Z),
    Vector3.create(0.72, 5.85, 0.78),
    COLORS.plum,
    0
  )
  worldEntities.push(towerLeft, towerRight)

  const core = spawnVisualBox(
    Vector3.create(8, 3.86, BEACON_Z - 0.02),
    Vector3.create(0.18, 6.95, 0.2),
    COLORS.coral,
    3.9
  )
  worldEntities.push(core)
  beaconGlowEntities.push(core)

  const altarCore = spawnVisualBox(
    Vector3.create(8, 1.55, ALTAR_Z),
    Vector3.create(0.62, 0.62, 0.62),
    COLORS.coral,
    3.5
  )
  worldEntities.push(altarCore)
  beaconGlowEntities.push(altarCore)

  const crown = spawnVisualBox(
    Vector3.create(8, 6.85, BEACON_Z),
    Vector3.create(0.52, 0.52, 0.52),
    COLORS.rose,
    2.6
  )
  worldEntities.push(crown)
  beaconGlowEntities.push(crown)

  addSquareHalo(4.72, BEACON_Z, 4.45, 0.12, COLORS.rose, 2.35)
  addSquareHalo(5.85, BEACON_Z, 3.05, 0.1, COLORS.lilac, 2.15)

  const floaters = [
    [5.88, 4.25, 12.35, 0.4],
    [10.12, 4.05, 12.55, 0.5],
    [6.45, 5.8, 13.95, 0.33],
    [9.62, 6.15, 12.05, 0.39],
    [5.95, 5.45, 14.45, 0.28],
    [10.15, 5.25, 14.25, 0.3]
  ]

  floaters.forEach((p, index) => {
    worldEntities.push(
      spawnVisualBox(
        Vector3.create(p[0], p[1], p[2]),
        Vector3.create(p[3], p[3] * 1.15, p[3]),
        index % 2 === 0 ? COLORS.rose : COLORS.violet,
        index < 2 ? 1.2 : 0.45
      )
    )
  })
}

function buildRitualFrames() {
  const frameZ = [4.25, 8.35]
  frameZ.forEach((z, index) => {
    const h = index === 0 ? 4.25 : 4.7
    const capWidth = index === 0 ? 10.7 : 9.7
    worldEntities.push(
      spawnVisualBox(Vector3.create(2.7, h / 2, z), Vector3.create(0.3, h, 0.34), COLORS.plum, 0),
      spawnVisualBox(Vector3.create(13.3, h / 2, z), Vector3.create(0.3, h, 0.34), COLORS.plum, 0),
      spawnVisualBox(Vector3.create(8, h, z), Vector3.create(capWidth, 0.18, 0.32), COLORS.plum, 0)
    )
  })

  worldEntities.push(
    spawnVisualBox(Vector3.create(3.35, 2.05, 8.35), Vector3.create(0.58, 2.6, 0.11), COLORS.mulberry, 0),
    spawnVisualBox(Vector3.create(12.65, 2.05, 8.35), Vector3.create(0.58, 2.6, 0.11), COLORS.mulberry, 0),
    spawnVisualBox(Vector3.create(3.35, 2.05, 8.27), Vector3.create(0.055, 1.55, 0.04), COLORS.coral, 2.25),
    spawnVisualBox(Vector3.create(12.65, 2.05, 8.27), Vector3.create(0.055, 1.55, 0.04), COLORS.coral, 2.25)
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
    const x = leftSide ? 4.62 : 11.38
    const z = 3.65 + pair * 2.55
    const newest = index === visible.length - 1
    const height = 0.95 + Math.min(index, 5) * 0.11

    memoryEntities.push(
      spawnVisualBox(Vector3.create(x, 0.15, z), Vector3.create(0.74, 0.18, 0.74), COLORS.plum, 0),
      spawnVisualBox(
        Vector3.create(x, 0.31 + height / 2, z),
        Vector3.create(0.42, height, 0.17),
        newest ? COLORS.rose : COLORS.violet,
        newest ? 1.0 : 0
      ),
      spawnVisualBox(
        Vector3.create(x, 0.33 + height, z - 0.1),
        Vector3.create(0.09, height * 0.58, 0.035),
        newest ? COLORS.ivory : COLORS.lilac,
        newest ? 2.3 : 1.25
      ),
      spawnVisualBox(
        Vector3.create(x, 0.37 + height * 0.66, z - 0.11),
        Vector3.create(0.25, 0.045, 0.035),
        newest ? COLORS.coral : COLORS.lilac,
        newest ? 1.9 : 1.0
      )
    )
  })
}

export function showChoiceSignature(kind: Completion | null) {
  clearEntities(choiceEntities)
  if (!kind) return

  if (kind === 'CONNECT') {
    ;[5.1, 7.0, 8.9, 10.8].forEach((z, index) => {
      choiceEntities.push(
        spawnVisualBox(
          Vector3.create(8, 0.27 + index * 0.025, z),
          Vector3.create(5.8, 0.055, 0.11),
          index % 2 === 0 ? COLORS.coral : COLORS.lilac,
          2.35
        )
      )
    })
  } else {
    ;[
      [10.35, 0.6, 5.15],
      [10.55, 0.94, 7.0],
      [10.75, 1.28, 8.85],
      [10.95, 1.62, 10.7]
    ].forEach((p, index) => {
      choiceEntities.push(
        spawnVisualBox(
          Vector3.create(p[0], p[1], p[2]),
          Vector3.create(0.12, 1.0 + index * 0.22, 0.12),
          index % 2 === 0 ? COLORS.lilac : COLORS.coral,
          2.45
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
  const intensity = state === 'HANDOFF' ? 5.0 : state === 'LIVE' ? 3.9 : state === 'OFFLINE' ? 0.25 : 2.25

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
      spawnVisualBox(Vector3.create(7.15, 2.05, ALTAR_Z), Vector3.create(0.22, 0.22, 0.22), COLORS.ivory, 3.7),
      spawnVisualBox(Vector3.create(8.85, 2.05, ALTAR_Z), Vector3.create(0.22, 0.22, 0.22), COLORS.ivory, 3.7),
      spawnVisualBox(Vector3.create(8, 2.38, ALTAR_Z), Vector3.create(0.2, 0.2, 0.2), COLORS.coral, 4.0),
      spawnVisualBox(Vector3.create(8, 0.34, 11.85), Vector3.create(5.15, 0.05, 0.12), COLORS.ivory, 3.0)
    )
  } else if (state === 'WAITING') {
    handoffEntities.push(
      spawnVisualBox(Vector3.create(8, 0.31, 11.85), Vector3.create(4.2, 0.05, 0.1), COLORS.lilac, 1.9)
    )
  }
}
