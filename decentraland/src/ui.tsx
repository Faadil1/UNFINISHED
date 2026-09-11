import { Color4 } from '@dcl/sdk/math'
import { Button, Label, ReactEcs, ReactEcsRenderer, UiEntity } from '@dcl/sdk/react-ecs'
import {
  chooseCompletion,
  chooseNextPressure,
  getGameView,
  reloadSharedHandoff
} from './game'

const PANEL = Color4.create(0.075, 0.025, 0.095, 0.96)
const PANEL_SOFT = Color4.create(0.17, 0.055, 0.2, 0.92)
const PANEL_WARM = Color4.create(0.31, 0.085, 0.22, 0.92)
const TEXT = Color4.create(1, 0.965, 0.92, 1)
const MUTED = Color4.create(0.82, 0.72, 0.84, 1)
const CORAL = Color4.create(0.98, 0.43, 0.45, 1)
const LILAC = Color4.create(0.78, 0.63, 0.95, 1)

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
      fontSize={28}
      onMouseDown={props.onPress}
      uiTransform={{
        width: props.width ?? 300,
        height: 72,
        margin: 7,
        borderRadius: 18
      }}
    />
  )
}

function StatusPill() {
  const game = getGameView()
  const live = game.syncStatus === 'LIVE' || game.syncStatus === 'SAVED'
  const saving = game.syncStatus === 'LOADING' || game.syncStatus === 'SAVING'

  return (
    <UiEntity
      uiTransform={{ width: 360, height: 44, padding: 9 }}
      uiBackground={{
        color: live ? Color4.create(0.18, 0.18, 0.15, 0.92) : saving ? PANEL_WARM : PANEL_SOFT
      }}
    >
      <Label
        value={`${live ? '● LIVE HUMAN CHAIN' : saving ? '● SYNCING' : '● CHAIN STATUS'}  ·  ${game.syncMessage}`}
        fontSize={17}
        color={live ? CORAL : MUTED}
        uiTransform={{ width: 340, height: 28 }}
      />
    </UiEntity>
  )
}

function LoadingPanel() {
  return (
    <UiEntity
      uiTransform={{ width: 690, height: 210, padding: 26, flexDirection: 'column' }}
      uiBackground={{ color: PANEL }}
    >
      <Label
        value="ARRIVING AFTER SOMEONE…"
        fontSize={22}
        color={CORAL}
        uiTransform={{ width: 630, height: 42 }}
      />
      <Label
        value="Loading the latest unfinished condition."
        fontSize={38}
        color={TEXT}
        uiTransform={{ width: 630, height: 66 }}
      />
      <Label
        value="The world starts with what another real person left behind."
        fontSize={22}
        color={MUTED}
        uiTransform={{ width: 630, height: 64 }}
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
        uiTransform={{ width: 700, height: 300, padding: 26, flexDirection: 'column' }}
        uiBackground={{ color: PANEL }}
      >
        <Label
          value="THIS ONE IS YOURS"
          fontSize={22}
          color={CORAL}
          uiTransform={{ width: 640, height: 40 }}
        />
        <Label
          value="You left the latest condition."
          fontSize={40}
          color={TEXT}
          uiTransform={{ width: 640, height: 62 }}
        />
        <Label
          value="Pass unfinished.dcl.eth to another person. They should inherit your decision — not you."
          fontSize={23}
          color={MUTED}
          uiTransform={{ width: 640, height: 82 }}
        />
        <UiEntity
          uiTransform={{ width: 640, height: 66, padding: 12 }}
          uiBackground={{ color: PANEL_SOFT }}
        >
          <Label
            value={compactChain(game.sharedAuthors)}
            fontSize={23}
            color={LILAC}
            uiTransform={{ width: 610, height: 42 }}
          />
        </UiEntity>
      </UiEntity>
    )
  }

  return (
    <UiEntity
      uiTransform={{ width: 720, height: 382, padding: 26, flexDirection: 'column' }}
      uiBackground={{ color: PANEL }}
    >
      <Label
        value={`ARRIVED AFTER ${inherited.author.toUpperCase()}`}
        fontSize={22}
        color={CORAL}
        uiTransform={{ width: 660, height: 38 }}
      />
      <Label
        value={`Continue what ${inherited.author} left.`}
        fontSize={42}
        color={TEXT}
        uiTransform={{ width: 660, height: 62 }}
      />
      <Label
        value={`${inherited.pressure}  ·  tension ${inherited.tension}  ·  ${inherited.anchor} / ${inherited.vector} / ${inherited.reach}`}
        fontSize={21}
        color={LILAC}
        uiTransform={{ width: 660, height: 40 }}
      />
      <UiEntity
        uiTransform={{ width: 660, height: 62, padding: 10 }}
        uiBackground={{ color: PANEL_SOFT }}
      >
        <Label
          value={inherited.note ? `“${inherited.note}”` : 'Someone left this unfinished. Take it further.'}
          fontSize={19}
          color={MUTED}
          uiTransform={{ width: 630, height: 44 }}
        />
      </UiEntity>
      <Label
        value="Choose how you complete the gap. Their condition changes the route you get."
        fontSize={22}
        color={TEXT}
        uiTransform={{ width: 660, height: 58 }}
      />
      <UiEntity uiTransform={{ width: 660, height: 88, flexDirection: 'row' }}>
        <ActionButton label="CONNECT THE GAP" onPress={() => chooseCompletion('CONNECT')} />
        <ActionButton label="RISE THROUGH IT" onPress={() => chooseCompletion('RISE')} secondary />
      </UiEntity>
    </UiEntity>
  )
}

function TraversePanel() {
  const game = getGameView()

  return (
    <UiEntity
      uiTransform={{ width: 690, height: 255, padding: 26, flexDirection: 'column' }}
      uiBackground={{ color: PANEL }}
    >
      <Label
        value="CO-AUTHORED ROUTE"
        fontSize={22}
        color={CORAL}
        uiTransform={{ width: 630, height: 38 }}
      />
      <Label
        value="Use what you made together."
        fontSize={40}
        color={TEXT}
        uiTransform={{ width: 630, height: 60 }}
      />
      <Label
        value={`${game.inherited.author} + ${game.currentPlayerName}  ·  Walk the route to the bright handoff beacon.`}
        fontSize={22}
        color={LILAC}
        uiTransform={{ width: 630, height: 62 }}
      />
      <Label
        value="The next problem unlocks only after you physically use the result."
        fontSize={21}
        color={MUTED}
        uiTransform={{ width: 630, height: 56 }}
      />
    </UiEntity>
  )
}

function AuthorPanel() {
  const game = getGameView()

  return (
    <UiEntity
      uiTransform={{ width: 720, height: 342, padding: 26, flexDirection: 'column' }}
      uiBackground={{ color: PANEL }}
    >
      <Label
        value="ROUTE USED"
        fontSize={22}
        color={CORAL}
        uiTransform={{ width: 660, height: 38 }}
      />
      <Label
        value="Leave the next arrival a problem."
        fontSize={40}
        color={TEXT}
        uiTransform={{ width: 660, height: 62 }}
      />
      <Label
        value={`You completed ${game.inherited.author}'s unfinished condition. Now your decision becomes someone else's beginning.`}
        fontSize={22}
        color={MUTED}
        uiTransform={{ width: 660, height: 78 }}
      />
      <UiEntity
        uiTransform={{ width: 660, height: 58, padding: 10 }}
        uiBackground={{ color: PANEL_SOFT }}
      >
        <Label
          value={compactChain(game.sharedAuthors, game.currentPlayerName)}
          fontSize={22}
          color={LILAC}
          uiTransform={{ width: 630, height: 40 }}
        />
      </UiEntity>
      <UiEntity uiTransform={{ width: 660, height: 88, flexDirection: 'row' }}>
        <ActionButton label="LEAVE HEIGHT" onPress={() => chooseNextPressure('HEIGHT')} />
        <ActionButton label="LEAVE SPAN" onPress={() => chooseNextPressure('SPAN')} secondary />
      </UiEntity>
    </UiEntity>
  )
}

function ReceiptPanel() {
  const game = getGameView()
  const next = game.nextState
  const saved = game.syncStatus === 'SAVED'
  const conflict = game.syncStatus === 'CONFLICT'

  return (
    <UiEntity
      uiTransform={{ width: 740, height: 398, padding: 26, flexDirection: 'column' }}
      uiBackground={{ color: PANEL }}
    >
      <Label
        value={saved ? 'HANDOFF SAVED' : game.syncStatus === 'SAVING' ? 'SAVING HANDOFF…' : 'CREATION RECEIPT'}
        fontSize={22}
        color={saved ? CORAL : MUTED}
        uiTransform={{ width: 680, height: 38 }}
      />
      <Label
        value="The chain continues."
        fontSize={42}
        color={TEXT}
        uiTransform={{ width: 680, height: 60 }}
      />
      <UiEntity
        uiTransform={{ width: 680, height: 74, padding: 12 }}
        uiBackground={{ color: PANEL_WARM }}
      >
        <Label
          value={compactChain(next?.chain ?? game.chain)}
          fontSize={25}
          color={TEXT}
          uiTransform={{ width: 650, height: 48 }}
        />
      </UiEntity>
      <Label
        value={`Inherited from ${game.inherited.author}  ·  completed ${game.completion ?? '—'}  ·  next inherits ${next?.pressure ?? '—'} / tension ${next?.tension ?? '—'}`}
        fontSize={20}
        color={LILAC}
        uiTransform={{ width: 680, height: 60 }}
      />
      <Label
        value={game.syncMessage}
        fontSize={20}
        color={conflict ? CORAL : MUTED}
        uiTransform={{ width: 680, height: 54 }}
      />
      <Label
        value="No one finishes what they start. Pass unfinished.dcl.eth to another person."
        fontSize={22}
        color={TEXT}
        uiTransform={{ width: 680, height: 58 }}
      />
      {conflict ? (
        <ActionButton label="INHERIT LATEST HANDOFF" onPress={reloadSharedHandoff} width={350} />
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
  const game = getGameView()
  const chain = compactChain(game.sharedAuthors)

  return (
    <UiEntity uiTransform={{ width: '100%', height: '100%' }}>
      <UiEntity
        uiTransform={{
          positionType: 'absolute',
          position: { left: 44, top: 30 },
          width: 720,
          height: 92,
          padding: 16,
          flexDirection: 'column'
        }}
        uiBackground={{ color: Color4.create(0.07, 0.02, 0.09, 0.88) }}
      >
        <Label
          value="UNFINISHED  ·  unfinished.dcl.eth"
          fontSize={32}
          color={TEXT}
          uiTransform={{ width: 680, height: 42 }}
        />
        <Label
          value={`Every player solves one problem and creates the next.  ·  Playing as ${game.currentPlayerName}`}
          fontSize={18}
          color={MUTED}
          uiTransform={{ width: 680, height: 34 }}
        />
      </UiEntity>

      <UiEntity
        uiTransform={{
          positionType: 'absolute',
          position: { left: 44, top: 132 },
          width: 720,
          height: 52,
          padding: 9,
          flexDirection: 'row'
        }}
        uiBackground={{ color: Color4.create(0.12, 0.035, 0.14, 0.9) }}
      >
        <Label
          value={`HUMAN CHAIN  ·  ${chain || 'Maya'}`}
          fontSize={19}
          color={LILAC}
          uiTransform={{ width: 690, height: 34 }}
        />
      </UiEntity>

      <UiEntity
        uiTransform={{
          positionType: 'absolute',
          position: { left: 44, top: 194 },
          width: 380,
          height: 52
        }}
      >
        <StatusPill />
      </UiEntity>

      <UiEntity
        uiTransform={{
          positionType: 'absolute',
          position: { left: 44, top: 258 },
          width: 760,
          height: 430
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
