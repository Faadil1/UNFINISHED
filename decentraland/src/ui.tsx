import { Color4 } from '@dcl/sdk/math'
import { Button, Label, ReactEcs, ReactEcsRenderer, UiEntity } from '@dcl/sdk/react-ecs'
import { copyToClipboard, openExternalUrl } from '~system/RestrictedActions'
import {
  chooseCompletion,
  chooseNextPressure,
  getGameView,
  reloadSharedHandoff
} from './game'
import { getLastNetworkError } from './shared'

const HANDOFF_LINK = 'decentraland://?realm=unfinished.dcl.eth&dclenv=org'
const HANDOFF_SHARE_PAGE = 'https://unfinished.pages.dev/handoff.html'

const PANEL = Color4.create(0.075, 0.025, 0.095, 0.94)
const PANEL_SOFT = Color4.create(0.17, 0.055, 0.2, 0.9)
const PANEL_FAINT = Color4.create(0.11, 0.035, 0.135, 0.78)
const TEXT = Color4.create(1, 0.965, 0.92, 1)
const MUTED = Color4.create(0.82, 0.72, 0.84, 1)
const CORAL = Color4.create(0.98, 0.43, 0.45, 1)
const ROSE = Color4.create(0.98, 0.22, 0.52, 1)
const LILAC = Color4.create(0.78, 0.63, 0.95, 1)
const IVORY = Color4.create(1, 0.9, 0.72, 1)

let handoffCopied = false
let handoffCopyFailed = false

function dedupeNames(names: string[]) {
  return names.filter((name, index) => index === 0 || name !== names[index - 1])
}

function compactChain(names: string[], current?: string) {
  const full = current ? [...names, current] : names
  const deduped = dedupeNames(full)
  if (deduped.length <= 4) return deduped.join('  →  ')
  return `…  →  ${deduped.slice(-4).join('  →  ')}`
}

function chainMemoryLines(
  names: string[],
  current?: string,
  options?: { includeNext?: boolean; currentIsPending?: boolean }
) {
  const full = current ? [...names, current] : [...names]
  const deduped = dedupeNames(full)
  const currentIsPending = options?.currentIsPending ?? false
  const annotated = deduped.map((name, index) => {
    const isPendingCurrent =
      currentIsPending && current && index === deduped.length - 1 && name === current
    if (isPendingCurrent) return `${name} continuing`
    if (index === 0) return `${name} started`
    if (index === 1) return `${name} completed`
    return `${name} continued`
  })

  const recent = annotated.slice(-3)
  if (options?.includeNext !== false) recent.push("YOU’RE NEXT")
  return recent.slice(-4)
}

function ActionButton(props: {
  label: string
  onPress: () => void
  secondary?: boolean
  width?: number
}) {
  return (
    <Button
      value={props.label}
      variant={props.secondary ? 'secondary' : 'primary'}
      fontSize={24}
      onMouseDown={props.onPress}
      uiTransform={{
        width: props.width ?? 250,
        height: 62,
        margin: 6,
        borderRadius: 16
      }}
    />
  )
}

function WorldMark() {
  return (
    <UiEntity
      uiTransform={{ width: 32, height: 32, margin: { right: 12 }, borderRadius: 8 }}
      uiBackground={{ color: PANEL_SOFT }}
    >
      <UiEntity
        uiTransform={{
          positionType: 'absolute',
          position: { left: 6, top: 7 },
          width: 20,
          height: 3,
          borderRadius: 2
        }}
        uiBackground={{ color: ROSE }}
      />
      <UiEntity
        uiTransform={{
          positionType: 'absolute',
          position: { left: 14, top: 4 },
          width: 4,
          height: 24,
          borderRadius: 2
        }}
        uiBackground={{ color: IVORY }}
      />
      <UiEntity
        uiTransform={{
          positionType: 'absolute',
          position: { left: 8, top: 21 },
          width: 16,
          height: 3,
          borderRadius: 2
        }}
        uiBackground={{ color: CORAL }}
      />
    </UiEntity>
  )
}

function MiniChainMemory(props: {
  names: string[]
  current?: string
  includeNext?: boolean
  currentIsPending?: boolean
}) {
  const lines = chainMemoryLines(props.names, props.current, {
    includeNext: props.includeNext,
    currentIsPending: props.currentIsPending
  })

  const lineColor = (index: number) =>
    lines[index] === "YOU’RE NEXT" ? CORAL : index === lines.length - 1 ? TEXT : MUTED

  return (
    <UiEntity
      uiTransform={{ width: 500, height: 126, padding: 10, flexDirection: 'column', borderRadius: 12 }}
      uiBackground={{ color: PANEL_FAINT }}
    >
      <Label
        value="RECENT HUMAN CHAIN"
        fontSize={14}
        color={LILAC}
        uiTransform={{ width: 478, height: 22 }}
      />
      <Label value={lines[0] ?? ''} fontSize={18} color={lineColor(0)} uiTransform={{ width: 478, height: 22 }} />
      <Label value={lines[1] ?? ''} fontSize={18} color={lineColor(1)} uiTransform={{ width: 478, height: 22 }} />
      <Label value={lines[2] ?? ''} fontSize={18} color={lineColor(2)} uiTransform={{ width: 478, height: 22 }} />
      <Label value={lines[3] ?? ''} fontSize={18} color={lineColor(3)} uiTransform={{ width: 478, height: 22 }} />
    </UiEntity>
  )
}

function copyHandoffLink() {
  handoffCopyFailed = false
  void copyToClipboard({ text: HANDOFF_LINK })
    .then(() => {
      handoffCopied = true
      handoffCopyFailed = false
    })
    .catch(() => {
      handoffCopied = false
      handoffCopyFailed = true
    })
}

function openHandoffSharePage() {
  void openExternalUrl({ url: HANDOFF_SHARE_PAGE })
}

function ShareActions() {
  const copyLabel = handoffCopied
    ? 'LINK COPIED ✓'
    : handoffCopyFailed
      ? 'COPY UNAVAILABLE'
      : 'COPY WORLD LINK'

  return (
    <UiEntity uiTransform={{ width: 500, height: 76, flexDirection: 'row' }}>
      <ActionButton label={copyLabel} onPress={copyHandoffLink} width={238} />
      <ActionButton label="SHARE / OPEN LINK" onPress={openHandoffSharePage} secondary width={238} />
    </UiEntity>
  )
}

function WorldLinkStrip() {
  return (
    <UiEntity
      uiTransform={{ width: 500, height: 44, padding: 8, flexDirection: 'row', borderRadius: 10 }}
      uiBackground={{ color: PANEL_SOFT }}
    >
      <Label
        value="WORLD LINK"
        fontSize={13}
        color={LILAC}
        uiTransform={{ width: 104, height: 26 }}
      />
      <Label
        value="unfinished.dcl.eth · latest shared state"
        fontSize={17}
        color={TEXT}
        uiTransform={{ width: 378, height: 26 }}
      />
    </UiEntity>
  )
}

function BrandBar() {
  const game = getGameView()
  const live = game.syncStatus === 'LIVE' || game.syncStatus === 'SAVED'
  const diagnostic = getLastNetworkError()
  const status = live
    ? 'LIVE CHAIN'
    : game.syncStatus === 'SAVING'
      ? 'SAVING'
      : game.syncStatus === 'OFFLINE' && diagnostic
        ? `OFFLINE · ${diagnostic.slice(0, 76)}`
        : game.syncStatus

  return (
    <UiEntity
      uiTransform={{ width: 800, height: 58, padding: 12, flexDirection: 'row' }}
      uiBackground={{ color: Color4.create(0.07, 0.02, 0.09, 0.86) }}
    >
      <WorldMark />
      <Label
        value="UNFINISHED"
        fontSize={26}
        color={TEXT}
        uiTransform={{ width: 190, height: 34 }}
      />
      <Label
        value={`● ${status}`}
        fontSize={14}
        color={live ? CORAL : MUTED}
        uiTransform={{ width: 525, height: 32 }}
      />
    </UiEntity>
  )
}

function LoadingPanel() {
  return (
    <UiEntity
      uiTransform={{ width: 470, height: 110, padding: 18, flexDirection: 'column' }}
      uiBackground={{ color: PANEL }}
    >
      <Label
        value="FINDING THE LATEST HANDOFF…"
        fontSize={21}
        color={CORAL}
        uiTransform={{ width: 430, height: 34 }}
      />
      <Label
        value="Someone was here before you."
        fontSize={27}
        color={TEXT}
        uiTransform={{ width: 430, height: 44 }}
      />
    </UiEntity>
  )
}

function InheritPanel() {
  const game = getGameView()
  const inherited = game.inherited

  if (game.selfBlocked) {
    return (
      <UiEntity
        uiTransform={{ width: 540, height: 350, padding: 20, flexDirection: 'column' }}
        uiBackground={{ color: PANEL }}
      >
        <Label
          value="YOUR HANDOFF IS WAITING"
          fontSize={21}
          color={CORAL}
          uiTransform={{ width: 500, height: 34 }}
        />
        <MiniChainMemory names={game.sharedAuthors} includeNext={false} />
        <Label
          value="Pass the World to someone else. They inherit the latest shared state."
          fontSize={18}
          color={MUTED}
          uiTransform={{ width: 500, height: 42 }}
        />
        <WorldLinkStrip />
        <ShareActions />
      </UiEntity>
    )
  }

  return (
    <UiEntity
      uiTransform={{ width: 540, height: 390, padding: 20, flexDirection: 'column' }}
      uiBackground={{ color: PANEL }}
    >
      <Label
        value={`${inherited.author.toUpperCase()} LEFT THIS`}
        fontSize={21}
        color={CORAL}
        uiTransform={{ width: 500, height: 34 }}
      />
      <Label
        value={`${inherited.pressure}  ·  T${inherited.tension}`}
        fontSize={36}
        color={TEXT}
        uiTransform={{ width: 500, height: 52 }}
      />
      <MiniChainMemory names={game.sharedAuthors} />
      <Label
        value="Choose how you finish the gap."
        fontSize={20}
        color={MUTED}
        uiTransform={{ width: 500, height: 36 }}
      />
      <UiEntity uiTransform={{ width: 500, height: 76, flexDirection: 'row' }}>
        <ActionButton label="CONNECT" onPress={() => chooseCompletion('CONNECT')} />
        <ActionButton label="RISE" onPress={() => chooseCompletion('RISE')} secondary />
      </UiEntity>
    </UiEntity>
  )
}

function TraversePanel() {
  return (
    <UiEntity
      uiTransform={{ width: 470, height: 108, padding: 18, flexDirection: 'column' }}
      uiBackground={{ color: PANEL }}
    >
      <Label
        value="USE THE ROUTE"
        fontSize={22}
        color={CORAL}
        uiTransform={{ width: 430, height: 34 }}
      />
      <Label
        value="Reach the bright handoff beacon."
        fontSize={27}
        color={TEXT}
        uiTransform={{ width: 430, height: 46 }}
      />
    </UiEntity>
  )
}

function AuthorPanel() {
  const game = getGameView()

  return (
    <UiEntity
      uiTransform={{ width: 540, height: 350, padding: 20, flexDirection: 'column' }}
      uiBackground={{ color: PANEL }}
    >
      <Label
        value="LEAVE WHAT'S NEXT"
        fontSize={21}
        color={CORAL}
        uiTransform={{ width: 500, height: 34 }}
      />
      <MiniChainMemory
        names={game.sharedAuthors}
        current={game.currentPlayerName}
        includeNext={false}
        currentIsPending
      />
      <Label
        value="Your choice becomes the next player's start."
        fontSize={19}
        color={MUTED}
        uiTransform={{ width: 500, height: 38 }}
      />
      <UiEntity uiTransform={{ width: 500, height: 76, flexDirection: 'row' }}>
        <ActionButton label="HEIGHT" onPress={() => chooseNextPressure('HEIGHT')} />
        <ActionButton label="SPAN" onPress={() => chooseNextPressure('SPAN')} secondary />
      </UiEntity>
    </UiEntity>
  )
}

function ReceiptPanel() {
  const game = getGameView()
  const next = game.nextState
  const saved = game.syncStatus === 'SAVED'
  const saving = game.syncStatus === 'SAVING'
  const conflict = game.syncStatus === 'CONFLICT'
  const generation = next?.generation ?? game.inherited.generation + 1

  return (
    <UiEntity
      uiTransform={{ width: 560, height: 420, padding: 20, flexDirection: 'column' }}
      uiBackground={{ color: PANEL }}
    >
      <Label
        value={saved ? 'HANDOFF READY' : saving ? 'SAVING HANDOFF…' : conflict ? 'CHAIN MOVED' : 'HANDOFF'}
        fontSize={21}
        color={saved ? CORAL : MUTED}
        uiTransform={{ width: 520, height: 32 }}
      />
      <Label
        value={`GEN ${generation}  ·  ${game.currentPlayerName.toUpperCase()} → NEXT`}
        fontSize={16}
        color={LILAC}
        uiTransform={{ width: 520, height: 26 }}
      />
      <MiniChainMemory names={next?.chain ?? game.chain} />
      <UiEntity
        uiTransform={{ width: 500, height: 52, padding: 9, borderRadius: 10 }}
        uiBackground={{ color: PANEL_SOFT }}
      >
        <Label
          value={`NEXT CONDITION  ·  ${next?.pressure ?? '—'}  ·  T${next?.tension ?? '—'}`}
          fontSize={20}
          color={LILAC}
          uiTransform={{ width: 478, height: 32 }}
        />
      </UiEntity>
      {saved ? <WorldLinkStrip /> : null}
      {saved ? (
        <Label
          value="The link opens this World; the next person inherits the latest shared state."
          fontSize={17}
          color={MUTED}
          uiTransform={{ width: 500, height: 38 }}
        />
      ) : null}
      {saved ? (
        <ShareActions />
      ) : conflict ? (
        <ActionButton
          label="INHERIT LATEST"
          onPress={() => {
            handoffCopied = false
            handoffCopyFailed = false
            reloadSharedHandoff()
          }}
          width={280}
        />
      ) : null}
    </UiEntity>
  )
}

function MainPanel() {
  const game = getGameView()

  if (game.syncStatus === 'LOADING') return <LoadingPanel />
  if (game.phase === 'INHERIT') return <InheritPanel />
  if (game.phase === 'TRAVERSE') return <TraversePanel />
  if (game.phase === 'AUTHOR') return <AuthorPanel />
  return <ReceiptPanel />
}

function UnfinishedUi() {
  return (
    <UiEntity uiTransform={{ width: '100%', height: '100%' }}>
      <UiEntity
        uiTransform={{
          positionType: 'absolute',
          position: { left: 32, top: 24 },
          width: 810,
          height: 64
        }}
      >
        <BrandBar />
      </UiEntity>

      <UiEntity
        uiTransform={{
          positionType: 'absolute',
          position: { left: 32, bottom: 34 },
          width: 590,
          height: 440
        }}
      >
        <MainPanel />
      </UiEntity>
    </UiEntity>
  )
}

export function setupUi() {
  ReactEcsRenderer.setUiRenderer(UnfinishedUi, {
    virtualWidth: 1920,
    virtualHeight: 1080,
    screenInset: 'interactable'
  })
}
