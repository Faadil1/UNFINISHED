import { Color4 } from '@dcl/sdk/math'
import { Button, Label, ReactEcs, ReactEcsRenderer, UiEntity } from '@dcl/sdk/react-ecs'
import { copyToClipboard } from '~system/RestrictedActions'
import {
  chooseCompletion,
  chooseNextPressure,
  getGameView,
  reloadSharedHandoff
} from './game'

const HANDOFF_LINK = 'decentraland://?realm=unfinished.dcl.eth&dclenv=org'

const PANEL = Color4.create(0.075, 0.025, 0.095, 0.94)
const PANEL_SOFT = Color4.create(0.17, 0.055, 0.2, 0.9)
const TEXT = Color4.create(1, 0.965, 0.92, 1)
const MUTED = Color4.create(0.82, 0.72, 0.84, 1)
const CORAL = Color4.create(0.98, 0.43, 0.45, 1)
const LILAC = Color4.create(0.78, 0.63, 0.95, 1)

let handoffCopied = false

function compactChain(names: string[], current?: string) {
  const full = current ? [...names, current] : names
  const deduped = full.filter((name, index) => index === 0 || name !== full[index - 1])
  if (deduped.length <= 4) return deduped.join('  →  ')
  return `…  →  ${deduped.slice(-4).join('  →  ')}`
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

function copyHandoffLink() {
  void copyToClipboard({ text: HANDOFF_LINK })
    .then(() => {
      handoffCopied = true
    })
    .catch(() => {
      handoffCopied = false
    })
}

function BrandBar() {
  const game = getGameView()
  const live = game.syncStatus === 'LIVE' || game.syncStatus === 'SAVED'
  const status = live ? 'LIVE CHAIN' : game.syncStatus === 'SAVING' ? 'SAVING' : game.syncStatus

  return (
    <UiEntity
      uiTransform={{ width: 470, height: 58, padding: 12, flexDirection: 'row' }}
      uiBackground={{ color: Color4.create(0.07, 0.02, 0.09, 0.86) }}
    >
      <Label
        value="UNFINISHED"
        fontSize={26}
        color={TEXT}
        uiTransform={{ width: 245, height: 34 }}
      />
      <Label
        value={`● ${status}`}
        fontSize={17}
        color={live ? CORAL : MUTED}
        uiTransform={{ width: 190, height: 30 }}
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
        uiTransform={{ width: 520, height: 230, padding: 20, flexDirection: 'column' }}
        uiBackground={{ color: PANEL }}
      >
        <Label
          value="YOUR HANDOFF IS WAITING"
          fontSize={21}
          color={CORAL}
          uiTransform={{ width: 480, height: 34 }}
        />
        <Label
          value={compactChain(game.sharedAuthors)}
          fontSize={28}
          color={TEXT}
          uiTransform={{ width: 480, height: 46 }}
        />
        <Label
          value="Pass it to someone else."
          fontSize={22}
          color={MUTED}
          uiTransform={{ width: 480, height: 36 }}
        />
        <ActionButton
          label={handoffCopied ? 'HANDOFF LINK COPIED ✓' : 'COPY HANDOFF LINK'}
          onPress={copyHandoffLink}
          width={320}
        />
      </UiEntity>
    )
  }

  return (
    <UiEntity
      uiTransform={{ width: 540, height: 250, padding: 20, flexDirection: 'column' }}
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
      <Label
        value="Choose how you finish the gap."
        fontSize={21}
        color={MUTED}
        uiTransform={{ width: 500, height: 42 }}
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
      uiTransform={{ width: 540, height: 230, padding: 20, flexDirection: 'column' }}
      uiBackground={{ color: PANEL }}
    >
      <Label
        value="LEAVE WHAT'S NEXT"
        fontSize={21}
        color={CORAL}
        uiTransform={{ width: 500, height: 34 }}
      />
      <Label
        value={compactChain(game.sharedAuthors, game.currentPlayerName)}
        fontSize={27}
        color={TEXT}
        uiTransform={{ width: 500, height: 46 }}
      />
      <Label
        value="Your choice becomes the next player's start."
        fontSize={20}
        color={MUTED}
        uiTransform={{ width: 500, height: 40 }}
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

  return (
    <UiEntity
      uiTransform={{ width: 560, height: 285, padding: 20, flexDirection: 'column' }}
      uiBackground={{ color: PANEL }}
    >
      <Label
        value={saved ? 'HANDOFF READY' : saving ? 'SAVING HANDOFF…' : conflict ? 'CHAIN MOVED' : 'HANDOFF'}
        fontSize={21}
        color={saved ? CORAL : MUTED}
        uiTransform={{ width: 520, height: 34 }}
      />
      <Label
        value={compactChain(next?.chain ?? game.chain)}
        fontSize={31}
        color={TEXT}
        uiTransform={{ width: 520, height: 48 }}
      />
      <UiEntity
        uiTransform={{ width: 520, height: 52, padding: 9 }}
        uiBackground={{ color: PANEL_SOFT }}
      >
        <Label
          value={`NEXT: ${next?.pressure ?? '—'}  ·  T${next?.tension ?? '—'}`}
          fontSize={21}
          color={LILAC}
          uiTransform={{ width: 495, height: 32 }}
        />
      </UiEntity>
      {saved ? (
        <Label
          value="Copy the link. Send it. The next person inherits this state."
          fontSize={19}
          color={MUTED}
          uiTransform={{ width: 520, height: 44 }}
        />
      ) : null}
      {saved ? (
        <ActionButton
          label={handoffCopied ? 'HANDOFF LINK COPIED ✓' : 'COPY HANDOFF LINK'}
          onPress={copyHandoffLink}
          width={320}
        />
      ) : conflict ? (
        <ActionButton label="INHERIT LATEST" onPress={reloadSharedHandoff} width={280} />
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
          width: 480,
          height: 64
        }}
      >
        <BrandBar />
      </UiEntity>

      <UiEntity
        uiTransform={{
          positionType: 'absolute',
          position: { left: 32, bottom: 34 },
          width: 580,
          height: 300
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
