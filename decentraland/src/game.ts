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
import {
  appendNextState,
  CHAIN_ID,
  fetchChainAuthors,
  fetchLatestState,
  SharedStateRow
} from './shared'
import {
  buildMemoryBeaconWorld,
  refreshMemoryBridge,
  setBeaconState,
  showChoiceSignature
} from './world'

export type GamePhase = 'INHERIT' | 'TRAVERSE' | 'AUTHOR' | 'RECEIPT'
export type Completion = 'CONNECT' | 'RISE'
export type Pressure = 'SPAN' | 'HEIGHT'
export type SyncStatus =
  | 'LOADING'
  | 'LIVE'
  | 'OFFLINE'
  | 'SAVING'
  | 'SAVED'
  | 'CONFLICT'

export type HandoffState = {
  id: string | null
  chainId: string
  anchor: 'LOW' | 'MID' | 'HIGH'
  vector: 'FLAT' | 'UP'
  reach: 'SHORT' | 'LONG'
  pressure: Pressure
  tension: number
  engineBias: number
  authorId: string
  author: string
  note: string
  chain: string[]
  generation: number
}

const seedState: HandoffState = {
  id: null,
  chainId: CHAIN_ID,
  anchor: 'HIGH',
  vector: 'FLAT',
  reach: 'SHORT',
  pressure: 'SPAN',
  tension: 3,
  engineBias: 0.25,
  authorId: 'seed-maya',
  author: 'Maya',
  note: 'I left this unfinished for whoever arrives next.',
  chain: ['Maya'],
  generation: 1
}

let inherited: HandoffState = { ...seedState, chain: [...seedState.chain] }
let phase: GamePhase = 'INHERIT'
let completion: Completion | null = null
let nextState: HandoffState | null = null
let currentPlayerName = 'Visitor'
let currentPlayerId = 'visitor'
let sharedAuthors: string[] = ['Maya']
let syncStatus: SyncStatus = 'LOADING'
let syncMessage = 'Loading the latest human handoff…'
let routeEndpoint = Vector3.create(8, 0.8, 12)

const routeEntities: Entity[] = []
const conditionEntities: Entity[] = []
const environmentEntities: Entity[] = []

const COLORS = {
  night: Color4.create(0.055, 0.025, 0.08, 1),
  plum: Color4.create(0.13, 0.045, 0.17, 1),
  mulberry: Color4.create(0.24, 0.07, 0.23, 1),
  violet: Color4.create(0.38, 0.16, 0.48, 1),
  lilac: Color4.create(0.72, 0.54, 0.9, 1),
  coral: Color4.create(0.98, 0.39, 0.42, 1),
  rose: Color4.create(0.9, 0.25, 0.53, 1),
  ivory: Color4.create(1, 0.94, 0.82, 1)
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
    metallic: 0.08,
    roughness: 0.74
  })
  return entity
}

function clearEntities(list: Entity[]) {
  for (const entity of list) engine.removeEntity(entity)
  list.length = 0
}

function spawnEnvironment() {
  if (environmentEntities.length) return

  environmentEntities.push(
    spawnBox(Vector3.create(8, -0.08, 8), Vector3.create(16, 0.16, 16), COLORS.night, true),
    spawnBox(Vector3.create(8, 0.02, 7.9), Vector3.create(8.4, 0.08, 13.9), COLORS.plum, false),
    spawnBox(Vector3.create(8, 0.14, 1.8), Vector3.create(5.8, 0.24, 1.7), COLORS.mulberry, true),
    spawnBox(Vector3.create(8, 0.16, 14.05), Vector3.create(5.8, 0.28, 1.55), COLORS.mulberry, true)
  )

  buildMemoryBeaconWorld()
}

function spawnMemoryTrail() {
  refreshMemoryBridge(sharedAuthors)
}

function spawnInheritedCondition() {
  clearEntities(conditionEntities)

  const variant = inherited.generation % 3
  const anchorY = inherited.anchor === 'HIGH' ? 1.6 : inherited.anchor === 'MID' ? 1.15 : 0.72
  const reachScale = inherited.reach === 'LONG' ? 2.6 : 1.55
  const vectorLift = inherited.vector === 'UP' ? 0.72 : 0
  const tensionLift = Math.max(0, inherited.tension - 2) * 0.12
  const biasShift = Math.max(-0.42, Math.min(0.42, inherited.engineBias * 0.55))
  const conditionZ = variant === 1 ? 4.72 : variant === 2 ? 4.38 : 4.55
  const anchorWidth = variant === 1 ? 0.76 : variant === 2 ? 1.02 : 0.9
  const partialHeight = variant === 2 ? 0.19 : 0.24
  const partialColor = inherited.pressure === 'SPAN' ? COLORS.coral : COLORS.lilac
  const accentColor = inherited.pressure === 'SPAN' ? COLORS.lilac : COLORS.coral

  conditionEntities.push(
    spawnBox(
      Vector3.create(5.2 + biasShift, anchorY / 2 + 0.2, conditionZ),
      Vector3.create(anchorWidth, anchorY, variant === 1 ? 0.72 : 0.9),
      variant === 2 ? COLORS.mulberry : COLORS.violet,
      false
    ),
    spawnBox(
      Vector3.create(10.8 + biasShift, 0.7 + tensionLift, conditionZ),
      Vector3.create(variant === 1 ? 1.05 : 0.9, 1.4 + tensionLift, variant === 2 ? 0.72 : 0.9),
      variant === 1 ? COLORS.violet : COLORS.rose,
      false
    )
  )

  conditionEntities.push(
    spawnBox(
      Vector3.create(6.65 + biasShift, 0.52 + vectorLift, conditionZ),
      Vector3.create(reachScale * (variant === 1 ? 0.46 : 0.52), partialHeight, 0.95),
      partialColor,
      false
    ),
    spawnBox(
      Vector3.create(9.35 + biasShift, 0.52 + vectorLift + tensionLift, conditionZ),
      Vector3.create(reachScale * (variant === 2 ? 0.46 : 0.52), partialHeight, 0.95),
      partialColor,
      false
    )
  )

  if (variant === 0) {
    conditionEntities.push(
      spawnBox(
        Vector3.create(8 + biasShift, 0.86 + vectorLift, conditionZ),
        Vector3.create(0.22, 1.45, 0.22),
        COLORS.ivory,
        false
      )
    )
  } else if (variant === 1) {
    conditionEntities.push(
      spawnBox(
        Vector3.create(7.72 + biasShift, 0.88 + vectorLift, conditionZ),
        Vector3.create(0.16, 1.18, 0.16),
        COLORS.ivory,
        false
      ),
      spawnBox(
        Vector3.create(8.28 + biasShift, 1.06 + vectorLift, conditionZ),
        Vector3.create(0.16, 1.54, 0.16),
        accentColor,
        false
      )
    )
  } else {
    conditionEntities.push(
      spawnBox(
        Vector3.create(8 + biasShift, 0.54 + vectorLift, conditionZ),
        Vector3.create(0.58, 0.16, 0.58),
        COLORS.ivory,
        false
      ),
      spawnBox(
        Vector3.create(8 + biasShift, 1.14 + vectorLift, conditionZ),
        Vector3.create(0.18, 1.22, 0.18),
        accentColor,
        false
      ),
      spawnBox(
        Vector3.create(8 + biasShift, 1.72 + vectorLift, conditionZ),
        Vector3.create(0.42, 0.12, 0.42),
        COLORS.ivory,
        false
      )
    )
  }
}

function spawnRoute(kind: Completion) {
  clearEntities(routeEntities)
  showChoiceSignature(kind)

  const variant = inherited.generation % 3
  const positions =
    variant === 1
      ? [4.0, 5.72, 7.48, 9.28, 11.08, 12.7]
      : variant === 2
        ? [4.18, 6.02, 7.86, 9.66, 11.38, 12.7]
        : [4.1, 5.9, 7.7, 9.5, 11.3, 12.7]
  const spanAmplitude = inherited.pressure === 'SPAN' ? 0.58 + inherited.tension * 0.04 : 0.26
  const baseRise = inherited.pressure === 'HEIGHT' ? 0.1 + inherited.tension * 0.035 : 0
  const connectPhase = variant === 1 ? 1 : 0
  const riseFromRight = variant === 2

  positions.forEach((z, index) => {
    const progress = index / (positions.length - 1)
    const y =
      0.22 +
      baseRise * index +
      (kind === 'RISE' ? progress * (variant === 1 ? 1.08 : 0.95) : inherited.vector === 'UP' ? progress * 0.42 : 0)
    const x =
      kind === 'CONNECT'
        ? 8 + ((index + connectPhase) % 2 === 0 ? -1 : 1) * spanAmplitude
        : riseFromRight
          ? 8.75 - progress * 1.5
          : 7.25 + progress * 1.5
    const widthBase = inherited.reach === 'LONG' ? 2.65 : 3.05
    const width = widthBase - (variant === 1 ? 0.12 : variant === 2 ? -0.08 : 0)
    const routeColor = (index + variant) % 2 === 0 ? COLORS.coral : COLORS.lilac

    routeEntities.push(
      spawnBox(
        Vector3.create(x, y, z),
        Vector3.create(width, 0.32, variant === 2 ? 1.42 : 1.56),
        routeColor,
        true
      )
    )
  })

  const endY =
    0.82 +
    (kind === 'RISE' ? (variant === 1 ? 1.08 : 0.95) : inherited.vector === 'UP' ? 0.42 : 0) +
    (inherited.pressure === 'HEIGHT' ? baseRise * (positions.length - 1) : 0)

  const endX =
    kind === 'CONNECT'
      ? 8 + (((positions.length - 1 + connectPhase) % 2 === 0 ? -1 : 1) * spanAmplitude)
      : riseFromRight
        ? 7.25
        : 8.75

  routeEndpoint = Vector3.create(endX, endY, 12.7)
}

function routeUseSystem() {
  if (phase !== 'TRAVERSE') return

  const transform = Transform.getOrNull(engine.PlayerEntity)
  if (!transform) return

  const dx = transform.position.x - routeEndpoint.x
  const dz = transform.position.z - routeEndpoint.z

  if (Math.abs(dx) < 2.1 && Math.abs(dz) < 1.55) {
    phase = 'AUTHOR'
  }
}

function mapRow(row: SharedStateRow, chain: string[]): HandoffState {
  return {
    id: row.id,
    chainId: row.chain_id,
    anchor: row.anchor,
    vector: row.vector,
    reach: row.reach,
    pressure: row.pressure,
    tension: row.tension,
    engineBias: Number(row.engine_bias),
    authorId: row.author_id,
    author: row.author_name,
    note: row.note ?? '',
    chain: chain.length ? chain : [row.author_name],
    generation: row.generation
  }
}

async function hydrateSharedState() {
  syncStatus = 'LOADING'
  syncMessage = 'Loading the latest human handoff…'
  setBeaconState('IDLE')
  showChoiceSignature(null)

  try {
    const [latest, authors] = await Promise.all([fetchLatestState(), fetchChainAuthors()])
    if (!latest) throw new Error('No shared state found')

    sharedAuthors = authors.length ? authors : [latest.author_name]
    inherited = mapRow(latest, sharedAuthors)
    completion = null
    nextState = null
    phase = 'INHERIT'
    syncStatus = 'LIVE'
    syncMessage = `Live chain · generation ${inherited.generation}`

    clearEntities(routeEntities)
    spawnInheritedCondition()
    spawnMemoryTrail()
    setBeaconState(isSelfBlocked() ? 'WAITING' : 'LIVE')
  } catch (error) {
    inherited = { ...seedState, chain: [...seedState.chain] }
    sharedAuthors = ['Maya']
    completion = null
    nextState = null
    phase = 'INHERIT'
    syncStatus = 'OFFLINE'
    syncMessage = 'Shared chain unavailable · local fallback'

    clearEntities(routeEntities)
    spawnInheritedCondition()
    spawnMemoryTrail()
    setBeaconState('OFFLINE')
  }
}

async function persistNextState(candidate: HandoffState) {
  if (!inherited.id) {
    syncStatus = 'OFFLINE'
    syncMessage = 'Played locally · shared handoff was unavailable'
    setBeaconState('OFFLINE')
    return
  }

  syncStatus = 'SAVING'
  syncMessage = 'Saving your handoff to the human chain…'

  try {
    await appendNextState({
      parentStateId: inherited.id,
      generation: candidate.generation,
      authorId: currentPlayerId,
      authorName: currentPlayerName,
      anchor: candidate.anchor,
      vector: candidate.vector,
      reach: candidate.reach,
      pressure: candidate.pressure,
      tension: candidate.tension,
      engineBias: candidate.engineBias,
      note: candidate.note
    })

    const [latest, authors] = await Promise.all([fetchLatestState(), fetchChainAuthors()])
    if (latest) {
      sharedAuthors = authors.length ? authors : [...sharedAuthors, currentPlayerName]
      nextState = mapRow(latest, sharedAuthors)
      spawnMemoryTrail()
    }

    syncStatus = 'SAVED'
    syncMessage = 'Shared handoff saved · pass the world to another person'
    setBeaconState('HANDOFF')
  } catch (error) {
    syncStatus = 'CONFLICT'
    syncMessage = 'Someone else continued first · refresh to inherit their handoff'
    setBeaconState('LIVE')
  }
}

export function initGame() {
  const player = getPlayer() as { name?: string; userId?: string } | null
  if (player?.name?.trim()) currentPlayerName = player.name.trim()
  currentPlayerId =
    player?.userId?.trim() ||
    `visitor-${currentPlayerName.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 36)}`

  spawnEnvironment()
  engine.addSystem(routeUseSystem)
  void hydrateSharedState()
}

export function chooseCompletion(kind: Completion) {
  if (phase !== 'INHERIT' || syncStatus === 'LOADING' || isSelfBlocked()) return

  completion = kind
  setBeaconState('LIVE')
  spawnRoute(kind)
  phase = 'TRAVERSE'
}

export function chooseNextPressure(pressure: Pressure) {
  if (phase !== 'AUTHOR' || !completion || syncStatus === 'SAVING') return

  const candidate: HandoffState = {
    id: null,
    chainId: inherited.chainId,
    anchor: completion === 'CONNECT' ? 'HIGH' : 'MID',
    vector: completion === 'RISE' ? 'UP' : 'FLAT',
    reach: inherited.reach,
    pressure,
    tension: Math.min(5, inherited.tension + 1),
    engineBias: Math.max(
      -1,
      Math.min(1, inherited.engineBias + (completion === 'CONNECT' ? 0.25 : -0.25))
    ),
    authorId: currentPlayerId,
    author: currentPlayerName,
    note: `I completed ${inherited.author}'s unfinished condition and left ${pressure.toLowerCase()} for whoever arrives next.`,
    chain: [...sharedAuthors, currentPlayerName],
    generation: inherited.generation + 1
  }

  nextState = candidate
  phase = 'RECEIPT'
  void persistNextState(candidate)
}

export function reloadSharedHandoff() {
  clearEntities(routeEntities)
  showChoiceSignature(null)
  void hydrateSharedState()
}

export function isSelfBlocked() {
  return inherited.generation > 1 && inherited.authorId === currentPlayerId
}

export function getGameView() {
  return {
    phase,
    inherited,
    completion,
    nextState,
    currentPlayerName,
    currentPlayerId,
    sharedAuthors,
    syncStatus,
    syncMessage,
    selfBlocked: isSelfBlocked(),
    chain: nextState?.chain ?? inherited.chain
  }
}
