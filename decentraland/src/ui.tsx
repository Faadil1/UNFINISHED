import { Color4 } from '@dcl/sdk/math'
import { Button, Label, ReactEcsRenderer, UiEntity } from '@dcl/sdk/react-ecs'
import {
  chooseCompletion,
  chooseNextPressure,
  getGameView,
  resetLocalDemo
} from './game'

const PANEL = Color4.create(0.10, 0.035, 0.13, 0.94)
const PANEL_SOFT = Color4.create(0.18, 0.07, 0.22, 0.88)
const TEXT = Color4.create(1, 0.96, 0.98, 1)
const MUTED = Color4.create(0.81, 0.73, 0.84, 1)

function ActionButton(props: { label: string; onPress: () => void; secondary?: boolean }) {
  return (
    <Button
      value={props.label}
      variant={props.secondary ? 'secondary' : 'primary'}
      fontSize={30}
      onMouseDown={props.onPress}
      uiTransform={{
        width: 310,
        height: 76,
        margin: 8,
        borderRadius: 16
      }}
    />
  )
}

function Panel() {
  const game = getGameView()
  const inherited = game.inherited

  if (game.phase === 'INHERIT') {
    return (
      <UiEntity
        uiTransform={{ width: 760, height: 330, padding: 28, flexDirection: 'column' }}
        uiBackground={{ color: PANEL }}
      >
        <Label
          value={`INHERITED FROM ${inherited.author.toUpperCase()}`}
          fontSize={24}
          color={MUTED}
          uiTransform={{ width: 700, height: 44 }}
        />
        <Label
          value={`${inherited.pressure} PRESSURE  ·  TENSION ${inherited.tension}`}
          fontSize={42}
          color={TEXT}
          uiTransform={{ width: 700, height: 62 }}
        />
        <Label
          value="Another person's unfinished condition is now your playable problem."
          fontSize={26}
          color={TEXT}
          uiTransform={{ width: 700, height: 74 }}
        />
        <UiEntity uiTransform={{ width: 700, height: 100, flexDirection: 'row' }}>
          <ActionButton label="CONNECT" onPress={() => chooseCompletion('CONNECT')} />
          <ActionButton label="RISE" onPress={() => chooseCompletion('RISE')} secondary />
        </UiEntity>
      </UiEntity>
    )
  }

  if (game.phase === 'TRAVERSE') {
    return (
      <UiEntity
        uiTransform={{ width: 760, height: 235, padding: 28, flexDirection: 'column' }}
        uiBackground={{ color: PANEL }}
      >
        <Label
          value="ROUTE CREATED"
          fontSize={24}
          color={MUTED}
          uiTransform={{ width: 700, height: 44 }}
        />
        <Label
          value="Use what you made."
          fontSize={42}
          color={TEXT}
          uiTransform={{ width: 700, height: 60 }}
        />
        <Label
          value="Walk across the route to the bright marker. The next problem unlocks only after you physically use it."
          fontSize={25}
          color={TEXT}
          uiTransform={{ width: 700, height: 92 }}
        />
      </UiEntity>
    )
  }

  if (game.phase === 'AUTHOR') {
    return (
      <UiEntity
        uiTransform={{ width: 760, height: 330, padding: 28, flexDirection: 'column' }}
        uiBackground={{ color: PANEL }}
      >
        <Label
          value="ROUTE USED"
          fontSize={24}
          color={MUTED}
          uiTransform={{ width: 700, height: 44 }}
        />
        <Label
          value="Leave the next problem."
          fontSize={42}
          color={TEXT}
          uiTransform={{ width: 700, height: 62 }}
        />
        <Label
          value="Your completion becomes the next visitor's inherited pressure."
          fontSize={26}
          color={TEXT}
          uiTransform={{ width: 700, height: 74 }}
        />
        <UiEntity uiTransform={{ width: 700, height: 100, flexDirection: 'row' }}>
          <ActionButton label="LEAVE HEIGHT" onPress={() => chooseNextPressure('HEIGHT')} />
          <ActionButton label="LEAVE SPAN" onPress={() => chooseNextPressure('SPAN')} secondary />
        </UiEntity>
      </UiEntity>
    )
  }

  const next = game.nextState
  const chain = next?.chain.join('  →  ') ?? game.chain.join('  →  ')

  return (
    <UiEntity
      uiTransform={{ width: 800, height: 405, padding: 28, flexDirection: 'column' }}
      uiBackground={{ color: PANEL }}
    >
      <Label
        value="CREATION RECEIPT"
        fontSize={24}
        color={MUTED}
        uiTransform={{ width: 740, height: 42 }}
      />
      <Label
        value="The chain continues."
        fontSize={42}
        color={TEXT}
        uiTransform={{ width: 740, height: 58 }}
      />
      <Label
        value={`Prior author: ${game.inherited.author}   ·   Your completion: ${game.completion ?? '—'}`}
        fontSize={24}
        color={TEXT}
        uiTransform={{ width: 740, height: 46 }}
      />
      <Label
        value={`Next inherits: ${next?.pressure ?? '—'}   ·   tension ${next?.tension ?? '—'}`}
        fontSize={24}
        color={TEXT}
        uiTransform={{ width: 740, height: 46 }}
      />
      <UiEntity
        uiTransform={{ width: 740, height: 82, padding: 14 }}
        uiBackground={{ color: PANEL_SOFT }}
      >
        <Label
          value={chain}
          fontSize={26}
          color={TEXT}
          uiTransform={{ width: 710, height: 50 }}
        />
      </UiEntity>
      <Label
        value="No one finishes what they start. Pass the handoff to another person."
        fontSize={23}
        color={MUTED}
        uiTransform={{ width: 740, height: 52 }}
      />
      <Button
        value="RESET LOCAL DEMO"
        variant="secondary"
        fontSize={22}
        onMouseDown={resetLocalDemo}
        uiTransform={{ width: 300, height: 62, margin: 6, borderRadius: 14 }}
      />
    </UiEntity>
  )
}

function UnfinishedUi() {
  const game = getGameView()

  return (
    <UiEntity uiTransform={{ width: '100%', height: '100%' }}>
      <UiEntity
        uiTransform={{
          positionType: 'absolute',
          position: { left: 44, top: 36 },
          width: 760,
          height: 120,
          padding: 18,
          flexDirection: 'column'
        }}
        uiBackground={{ color: Color4.create(0.10, 0.035, 0.13, 0.82) }}
      >
        <Label
          value="UNFINISHED"
          fontSize={38}
          color={TEXT}
          uiTransform={{ width: 720, height: 48 }}
        />
        <Label
          value={`Another person's unfinished decision becomes the level you have to play.  ·  Playing as ${game.currentPlayerName}`}
          fontSize={20}
          color={MUTED}
          uiTransform={{ width: 720, height: 50 }}
        />
      </UiEntity>

      <UiEntity
        uiTransform={{
          positionType: 'absolute',
          position: { left: 44, bottom: 42 },
          width: 820,
          height: 430
        }}
      >
        <Panel />
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
