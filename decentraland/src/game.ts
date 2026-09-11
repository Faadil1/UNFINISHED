import {
  engine,
  Entity,
  Material,
  MeshCollider,
  MeshRenderer,
  Transform
} from '@dcl/sdk/ecs'
import { Color4, Vector3 } from '@dcl/sdk/math'
import { getPlayer } from '@dcl/sdk/src/players'

export type GamePhase = 'INHERIT' | 'TRAVERSE' | 'AUTHOR' | 'RECEIPT'
export type Completion = 'CONNECT' | 'RISE'
export type Pressure = 'SPAN' | 'HEIGHT'

export type HandoffState = {
  anchor: 'LOW' | 'MID' | 'HIGH'
  vector: 'FLAT' | 'UP'
  reach: 'SHORT' | 'LONG'
  pressure: Pressure
  tension: number
  engineBias: number
  author: string
  chain: string[]
  generation: number
}

const seedState: HandoffState = {
  anchor: 'HIGH',
  vector: 'FLAT',
  reach: 'SHORT',
  pressure: 'SPAN',
  tension: 3,
  engineBias: 0.25,
  author: 'Maya',
  chain: ['Maya'],
  generation: 1
}

let inherited: HandoffState = { ...seedState, chain: [...seedState.chain] }
let phase: GamePhase = 'INHERIT'
let completion: Completion | null = null
let nextState: HandoffState | null = null
let currentPlayerName = 'Visitor'
let routeEndpoint = Vector3.create(8, 0.8, 12)
let routeEntities: Entity[] = []
let conditionEntities: Entity[] = []

const COLORS = {
  plum: Color4.create(0.18, 0.07, 0.22, 1),
  violet: Color4.create(0.39, 0.18, 0.49, 1),
  lilac: Color4.create(0.72, 0.55, 0.88, 1),
  coral: Color4.create(0.95, 0.38, 0.42, 1),
  rose: Color4.create(0.88, 0.27, 0.55, 1),
  ivory: Color4.create(0.98, 0.94, 0.88, 1)
}

function spawnBox(
  position: ReturnType<typeof Vector3.create>,
  scale: ReturnType<typeof Vector3.create>,
  color: Color4,
  collider = true
) {
  const entity = engine.addEntity()
  Transform.create(entity, { position, scale })
  MeshRenderer.setBox(entity)
  if (collider) MeshCollider.setBox(entity)
  Material.setPbrMaterial(entity, {
    albedoColor: color,
    metallic: 0.12,
    roughness: 0.72
  })
  return entity
}

function clearEntities(list: Entity[]) {
  for (const entity of list) engine.removeEntity(entity)
  list.length = 0
}

function spawnInheritedCondition() {
  clearEntities(conditionEntities)

  const anchorY = inherited.anchor === 'HIGH' ? 1.45 : inherited.anchor === 'MID' ? 1.0 : 0.55
  const reachScale = inherited.reach === 'LONG' ? 2.4 : 1.45
  const vectorLift = inherited.vector === 'UP' ? 0.8 : 0.0

  conditionEntities.push(
    spawnBox(Vector3.create(5.1, anchorY, 4.6), Vector3.create(1.1, anchorY * 1.4, 1.1), COLORS.violet, false)
  )
  conditionEntities.push(
    spawnBox(
      Vector3.create(8, 0.4 + vectorLift, 5.2),
      Vector3.create(reachScale, 0.28, 1.15),
      inherited.pressure === 'SPAN' ? COLORS.coral : COLORS.lilac,
      false
    )
  )
  conditionEntities.push(
    spawnBox(Vector3.create(10.9, 0.85, 4.6), Vector3.create(0.9, 1.7, 0.9), COLORS.rose, false)
  )
}

function spawnRoute(kind: Completion) {
  clearEntities(routeEntities)

  const positions = [4, 6, 8, 10, 12]

  positions.forEach((z, index) => {
    const y = kind === 'RISE' ? 0.18 + index * 0.18 : 0.18
    const x = kind === 'CONNECT' ? 8 : 7.25 + index * 0.38
    const width = kind === 'CONNECT' ? 3.2 : 2.6

    routeEntities.push(
      spawnBox(
        Vector3.create(x, y, z),
        Vector3.create(width, 0.32, 1.8),
        index % 2 === 0 ? COLORS.coral : COLORS.lilac,
        true
      )
    )
  })

  routeEndpoint = Vector3.create(kind === 'CONNECT' ? 8 : 8.77, kind === 'RISE' ? 1.1 : 0.8, 12)

  routeEntities.push(
    spawnBox(
      Vector3.create(routeEndpoint.x, 1.3, 13.25),
      Vector3.create(0.28, 2.6, 0.28),
      COLORS.ivory,
      false
    )
  )
}

function routeUseSystem() {
  if (phase !== 'TRAVERSE') return

  const transform = Transform.getOrNull(engine.PlayerEntity)
  if (!transform) return

  const dx = transform.position.x - routeEndpoint.x
  const dz = transform.position.z - routeEndpoint.z

  if (Math.abs(dx) < 2.1 && Math.abs(dz) < 1.35) {
    phase = 'AUTHOR'
  }
}

export function initGame() {
  const player = getPlayer()
  if (player?.name?.trim()) currentPlayerName = player.name.trim()

  spawnInheritedCondition()
  engine.addSystem(routeUseSystem)
}

export function chooseCompletion(kind: Completion) {
  if (phase !== 'INHERIT') return

  completion = kind
  spawnRoute(kind)
  phase = 'TRAVERSE'
}

export function chooseNextPressure(pressure: Pressure) {
  if (phase !== 'AUTHOR' || !completion) return

  nextState = {
    anchor: completion === 'CONNECT' ? 'HIGH' : 'MID',
    vector: completion === 'RISE' ? 'UP' : 'FLAT',
    reach: inherited.reach,
    pressure,
    tension: Math.min(5, inherited.tension + 1),
    engineBias: Math.max(-1, Math.min(1, inherited.engineBias + (completion === 'CONNECT' ? 0.25 : -0.25))),
    author: currentPlayerName,
    chain: [...inherited.chain, currentPlayerName],
    generation: inherited.generation + 1
  }

  phase = 'RECEIPT'
}

export function resetLocalDemo() {
  clearEntities(routeEntities)
  inherited = { ...seedState, chain: [...seedState.chain] }
  completion = null
  nextState = null
  phase = 'INHERIT'
  spawnInheritedCondition()
}

export function getGameView() {
  return {
    phase,
    inherited,
    completion,
    nextState,
    currentPlayerName,
    chain: nextState?.chain ?? inherited.chain
  }
}
