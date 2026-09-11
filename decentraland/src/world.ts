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

const BEACON_Z = 12.85
const ALTAR_Z = 11.95

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
    spawnVisualBox(Vector3.create(5.08, 0.2, 7.28), Vector3.create(0.075, 0.12, 9.95), COLORS.rose, 3.0),
    spawnVisualBox(Vector3.create(10.92, 0.2, 7.28), Vector3.create(0.075, 0.12, 9.95), COLORS.rose, 3.0),
    spawnVisualBox(Vector3.create(5.28, 0.24, 7.28), Vector3.create(0.14, 0.08, 9.95), COLORS.mulberry, 0),
    spawnVisualBox(Vector3.create(10.72, 0.24, 7.28), Vector3.create(0.14, 0.08, 9.95), COLORS.mulberry, 0),
    spawnVisualBox(Vector3.create(8, 0.095, 7.35), Vector3.create(0.055, 0.035, 9.85), COLORS.ivory, 1.45)
  )

  const bridgeMarks = [2.95, 4.65, 6.35, 8.05, 9.75, 11.25]
  bridgeMarks.forEach((z, index) => {
    const last = index === bridgeMarks.length - 1
    worldEntities.push(
      spawnVisualBox(
        Vector3.create(8, 0.11, z),
        Vector3.create(last ? 5.0 : 3.95, 0.035, last ? 0.11 : 0.065),
        last ? COLORS.coral : index % 2 === 0 ? COLORS.lilac : COLORS.rose,
        last ? 2.55 : 1.45
      )
    )
  })

  const relayZ = [3.85, 5.65, 7.45, 9.25, 10.85]
  relayZ.forEach((z, index) => {
    const tint = index % 2 === 0 ? COLORS.coral : COLORS.lilac
    const h = 0.55 + index * 0.055
    worldEntities.push(
      spawnVisualBox(Vector3.create(5.08, 0.25 + h / 2, z), Vector3.create(0.11, h, 0.11), tint, 1.7),
      spawnVisualBox(Vector3.create(10.92, 0.25 + h / 2, z), Vector3.create(0.11, h, 0.11), tint, 1.7)
    )
  })

  // A quiet arrival threshold before the altar.
  worldEntities.push(
    spawnVisualBox(Vector3.create(6.25, 0.29, 11.45), Vector3.create(0.18, 0.26, 0.18), COLORS.ivory, 1.4),
    spawnVisualBox(Vector3.create(9.75, 0.29, 11.45), Vector3.create(0.18, 0.26, 0.18), COLORS.ivory, 1.4)
  )
}

function buildChainMonument() {
  const pillars = [
    [3.7, 2.08, 10.95, 0.58, 4.15],
    [12.3, 2.08, 10.95, 0.58, 4.15],
    [4.62, 1.62, 13.35, 0.5, 3.2],
    [11.38, 1.62, 13.35, 0.5, 3.2]
  ]

  pillars.forEach((p, index) => {
    const tint = index < 2 ? COLORS.plum : COLORS.mulberry
    const glowTint = index % 2 === 0 ? COLORS.coral : COLORS.lilac
    worldEntities.push(
      spawnVisualBox(
        Vector3.create(p[0], p[1], p[2]),
        Vector3.create(p[3], p[4], 0.52),
        tint,
        0
      ),
      spawnVisualBox(
        Vector3.create(p[0], p[1] + 0.12, p[2] - 0.285),
        Vector3.create(0.05, p[4] * 0.54, 0.035),
        glowTint,
        2.7
      ),
      spawnVisualBox(
        Vector3.create(p[0], p[1] + p[4] * 0.31, p[2] - 0.305),
        Vector3.create(0.24, 0.05, 0.035),
        COLORS.ivory,
        1.25
      )
    )
  })

  // Small memorial ticks make the monument read as cumulative memory rather than generic columns.
  const memoryTicks = [
    [4.25, 0.72, 12.05],
    [4.25, 1.28, 12.05],
    [11.75, 0.72, 12.05],
    [11.75, 1.28, 12.05]
  ]
  memoryTicks.forEach((p, index) => {
    worldEntities.push(
      spawnVisualBox(
        Vector3.create(p[0], p[1], p[2]),
        Vector3.create(0.34, 0.045, 0.06),
        index % 2 === 0 ? COLORS.rose : COLORS.lilac,
        1.6
      )
    )
  })
}

function buildBeacon() {
  worldEntities.push(
    spawnVisualBox(Vector3.create(8, 0.3, 12.46), Vector3.create(5.25, 0.16, 2.18), COLORS.mulberry, 0),
    spawnVisualBox(Vector3.create(8, 0.52, 12.7), Vector3.create(4.0, 0.22, 1.5), COLORS.plum, 0),
    spawnVisualBox(Vector3.create(8, 0.76, 12.88), Vector3.create(2.62, 0.23, 0.92), COLORS.violet, 0)
  )

  const towerLeft = spawnVisualBox(
    Vector3.create(7.53, 3.66, BEACON_Z),
    Vector3.create(0.64, 5.9, 0.7),
    COLORS.plum,
    0
  )
  const towerRight = spawnVisualBox(
    Vector3.create(8.47, 3.66, BEACON_Z),
    Vector3.create(0.64, 5.9, 0.7),
    COLORS.plum,
    0
  )
  worldEntities.push(towerLeft, towerRight)

  const core = spawnVisualBox(
    Vector3.create(8, 3.9, BEACON_Z - 0.02),
    Vector3.create(0.17, 7.05, 0.18),
    COLORS.coral,
    4.1
  )
  worldEntities.push(core)
  beaconGlowEntities.push(core)

  const altarCore = spawnVisualBox(
    Vector3.create(8, 1.52, ALTAR_Z),
    Vector3.create(0.64, 0.64, 0.64),
    COLORS.coral,
    3.7
  )
  worldEntities.push(altarCore)
  beaconGlowEntities.push(altarCore)

  const crown = spawnVisualBox(
    Vector3.create(8, 6.93, BEACON_Z),
    Vector3.create(0.48, 0.48, 0.48),
    COLORS.rose,
    2.9
  )
  worldEntities.push(crown)
  beaconGlowEntities.push(crown)

  // The double halo is the visual signature: one large memory field, one tighter handoff ring.
  addSquareHalo(4.76, BEACON_Z, 4.55, 0.105, COLORS.rose, 2.55)
  addSquareHalo(5.92, BEACON_Z, 3.08, 0.09, COLORS.lilac, 2.3)

  // Split side fins create a ritual silhouette without enclosing the player in another box frame.
  worldEntities.push(
    spawnVisualBox(Vector3.create(6.18, 2.22, 12.72), Vector3.create(0.18, 2.65, 0.18), COLORS.mulberry, 0),
    spawnVisualBox(Vector3.create(9.82, 2.22, 12.72), Vector3.create(0.18, 2.65, 0.18), COLORS.mulberry, 0),
    spawnVisualBox(Vector3.create(6.18, 3.32, 12.7), Vector3.create(0.06, 1.1, 0.04), COLORS.coral, 2.1),
    spawnVisualBox(Vector3.create(9.82, 3.32, 12.7), Vector3.create(0.06, 1.1, 0.04), COLORS.lilac, 2.1)
  )

  const floaters = [
    [5.95, 4.2, 12.25, 0.36],
    [10.05, 4.0, 12.42, 0.46],
    [6.5, 5.75, 13.75, 0.3],
    [9.55, 6.1, 11.98, 0.35],
    [6.0, 5.42, 14.2, 0.26],
    [10.02, 5.22, 14.05, 0.27]
  ]

  floaters.forEach((p, index) => {
    worldEntities.push(
      spawnVisualBox(
        Vector3.create(p[0], p[1], p[2]),
        Vector3.create(p[3], p[3] * 1.15, p[3]),
        index % 2 === 0 ? COLORS.rose : COLORS.violet,
        index < 2 ? 1.25 : 0.5
      )
    )
  })
}

function buildRitualFrames() {
  // Deliberately incomplete portal fragments: they guide the eye but never cross the beacon sightline.
  const frames = [
    { z: 4.15, h: 3.95, arm: 2.35 },
    { z: 8.15, h: 4.45, arm: 2.05 }
  ]

  frames.forEach((frame, index) => {
    const leftX = index === 0 ? 2.85 : 3.05
    const rightX = 16 - leftX
    const capY = frame.h
    const tint = index === 0 ? COLORS.plum : COLORS.mulberry

    worldEntities.push(
      spawnVisualBox(Vector3.create(leftX, frame.h / 2, frame.z), Vector3.create(0.22, frame.h, 0.28), tint, 0),
      spawnVisualBox(Vector3.create(rightX, frame.h / 2, frame.z), Vector3.create(0.22, frame.h, 0.28), tint, 0),
      spawnVisualBox(
        Vector3.create(leftX + frame.arm / 2, capY, frame.z),
        Vector3.create(frame.arm, 0.14, 0.25),
        tint,
        0
      ),
      spawnVisualBox(
        Vector3.create(rightX - frame.arm / 2, capY, frame.z),
        Vector3.create(frame.arm, 0.14, 0.25),
        tint,
        0
      ),
      spawnVisualBox(Vector3.create(leftX + 0.18, frame.h * 0.58, frame.z - 0.16), Vector3.create(0.045, 1.45, 0.035), COLORS.coral, 2.1),
      spawnVisualBox(Vector3.create(rightX - 0.18, frame.h * 0.58, frame.z - 0.16), Vector3.create(0.045, 1.45, 0.035), COLORS.lilac, 2.1)
    )
  })

  // Floating keystones echo the beacon without recreating a full rectangular cage.
  worldEntities.push(
    spawnVisualBox(Vector3.create(7.45, 4.18, 4.15), Vector3.create(0.44, 0.09, 0.18), COLORS.rose, 1.5),
    spawnVisualBox(Vector3.create(8.55, 4.18, 4.15), Vector3.create(0.44, 0.09, 0.18), COLORS.lilac, 1.5),
    spawnVisualBox(Vector3.create(7.58, 4.7, 8.15), Vector3.create(0.36, 0.08, 0.16), COLORS.lilac, 1.4),
    spawnVisualBox(Vector3.create(8.42, 4.7, 8.15), Vector3.create(0.36, 0.08, 0.16), COLORS.rose, 1.4)
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
    const z = 3.55 + pair * 2.5
    const newest = index === visible.length - 1
    const height = 0.92 + Math.min(index, 5) * 0.11

    memoryEntities.push(
      spawnVisualBox(Vector3.create(x, 0.15, z), Vector3.create(0.7, 0.16, 0.7), COLORS.plum, 0),
      spawnVisualBox(
        Vector3.create(x, 0.29 + height / 2, z),
        Vector3.create(0.38, height, 0.15),
        newest ? COLORS.rose : COLORS.violet,
        newest ? 1.05 : 0
      ),
      spawnVisualBox(
        Vector3.create(x, 0.31 + height, z - 0.09),
        Vector3.create(0.075, height * 0.6, 0.03),
        newest ? COLORS.ivory : COLORS.lilac,
        newest ? 2.45 : 1.3
      ),
      spawnVisualBox(
        Vector3.create(x, 0.35 + height * 0.66, z - 0.1),
        Vector3.create(0.22, 0.04, 0.03),
        newest ? COLORS.coral : COLORS.lilac,
        newest ? 2.0 : 1.05
      )
    )
  })
}

export function showChoiceSignature(kind: Completion | null) {
  clearEntities(choiceEntities)
  if (!kind) return

  if (kind === 'CONNECT') {
    const connectZ = [5.0, 6.85, 8.7, 10.55]
    connectZ.forEach((z, index) => {
      choiceEntities.push(
        spawnVisualBox(
          Vector3.create(8, 0.27 + index * 0.025, z),
          Vector3.create(5.75, 0.05, 0.1),
          index % 2 === 0 ? COLORS.coral : COLORS.lilac,
          2.45
        )
      )
    })
  } else {
    const riseNodes = [
      [10.25, 0.6, 5.0],
      [10.45, 0.93, 6.85],
      [10.65, 1.27, 8.7],
      [10.85, 1.61, 10.55]
    ]
    riseNodes.forEach((p, index) => {
      choiceEntities.push(
        spawnVisualBox(
          Vector3.create(p[0], p[1], p[2]),
          Vector3.create(0.11, 0.95 + index * 0.22, 0.11),
          index % 2 === 0 ? COLORS.lilac : COLORS.coral,
          2.55
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
  const intensity = state === 'HANDOFF' ? 5.1 : state === 'LIVE' ? 4.0 : state === 'OFFLINE' ? 0.25 : 2.3

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
      spawnVisualBox(Vector3.create(7.15, 2.02, ALTAR_Z), Vector3.create(0.2, 0.2, 0.2), COLORS.ivory, 3.8),
      spawnVisualBox(Vector3.create(8.85, 2.02, ALTAR_Z), Vector3.create(0.2, 0.2, 0.2), COLORS.ivory, 3.8),
      spawnVisualBox(Vector3.create(8, 2.36, ALTAR_Z), Vector3.create(0.18, 0.18, 0.18), COLORS.coral, 4.2),
      spawnVisualBox(Vector3.create(8, 0.34, 11.55), Vector3.create(5.2, 0.05, 0.11), COLORS.ivory, 3.2)
    )
  } else if (state === 'WAITING') {
    handoffEntities.push(
      spawnVisualBox(Vector3.create(8, 0.31, 11.55), Vector3.create(4.25, 0.05, 0.095), COLORS.lilac, 2.0)
    )
  }
}
