export const DATA_API =
  'https://ep-bitter-surf-awl0142t.apirest.c-12.us-east-1.aws.neon.tech/unfinished/rest/v1'

export const CHAIN_ID = '00000000-0000-4000-8000-000000000001'

export type SharedStateRow = {
  id: string
  chain_id: string
  generation: number
  parent_state_id: string | null
  author_id: string
  author_name: string
  anchor: 'LOW' | 'MID' | 'HIGH'
  vector: 'FLAT' | 'UP'
  reach: 'SHORT' | 'LONG'
  pressure: 'SPAN' | 'HEIGHT'
  tension: number
  engine_bias: number
  note: string | null
  created_at?: string
}

type ChainHistoryRow = {
  authors: string[]
  max_generation: number
}

const JSON_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
}

export async function fetchLatestState(): Promise<SharedStateRow | null> {
  const response = await fetch(
    `${DATA_API}/latest_chain_state?chain_id=eq.${CHAIN_ID}&select=*`,
    { headers: { Accept: 'application/json' } }
  )

  if (!response.ok) {
    throw new Error(`latest_chain_state ${response.status}`)
  }

  const rows = (await response.json()) as SharedStateRow[]
  return rows[0] ?? null
}

export async function fetchChainAuthors(): Promise<string[]> {
  const response = await fetch(
    `${DATA_API}/chain_history?chain_id=eq.${CHAIN_ID}&select=authors,max_generation`,
    { headers: { Accept: 'application/json' } }
  )

  if (!response.ok) {
    throw new Error(`chain_history ${response.status}`)
  }

  const rows = (await response.json()) as ChainHistoryRow[]
  return rows[0]?.authors ?? []
}

export async function appendNextState(input: {
  parentStateId: string
  generation: number
  authorId: string
  authorName: string
  anchor: 'LOW' | 'MID' | 'HIGH'
  vector: 'FLAT' | 'UP'
  reach: 'SHORT' | 'LONG'
  pressure: 'SPAN' | 'HEIGHT'
  tension: number
  engineBias: number
  note: string
}): Promise<void> {
  const response = await fetch(`${DATA_API}/chain_states`, {
    method: 'POST',
    headers: {
      ...JSON_HEADERS,
      Prefer: 'return=minimal'
    },
    body: JSON.stringify({
      chain_id: CHAIN_ID,
      generation: input.generation,
      parent_state_id: input.parentStateId,
      author_id: input.authorId,
      author_name: input.authorName,
      anchor: input.anchor,
      vector: input.vector,
      reach: input.reach,
      pressure: input.pressure,
      tension: input.tension,
      engine_bias: input.engineBias,
      note: input.note
    })
  })

  if (!response.ok) {
    const detail = await response.text()
    throw new Error(`append ${response.status}: ${detail.slice(0, 160)}`)
  }
}
