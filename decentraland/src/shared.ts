import { executeTask } from '@dcl/sdk/ecs'

export const DATA_API = 'https://ierowefnowuxybkivnnb.supabase.co/rest/v1'

// Supabase publishable keys are designed for public clients. RLS is the authorization boundary.
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable__iUnIisPHzZeAg_Vz-ccsg_a2tEVSrh'

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

type ChainAuthorRow = {
  author_name: string
  generation: number
}

const API_HEADERS = {
  Accept: 'application/json',
  apikey: SUPABASE_PUBLISHABLE_KEY
}

const JSON_HEADERS = {
  ...API_HEADERS,
  'Content-Type': 'application/json'
}

let lastNetworkError = ''

function errorText(error: unknown) {
  if (error instanceof Error) return `${error.name}: ${error.message}`
  return String(error)
}

export function getLastNetworkError() {
  return lastNetworkError
}

function runNetworkTask<T>(stage: string, work: () => Promise<T>): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    executeTask(async () => {
      try {
        resolve(await work())
      } catch (error) {
        lastNetworkError = `${stage} · ${errorText(error)}`
        console.error('[UNFINISHED][SUPABASE]', lastNetworkError)
        reject(error)
      }
    })
  })
}

export function fetchLatestState(): Promise<SharedStateRow | null> {
  return runNetworkTask('latest', async () => {
    const response = await fetch(
      `${DATA_API}/chain_states?chain_id=eq.${CHAIN_ID}&select=*&order=generation.desc&limit=1`,
      { headers: API_HEADERS }
    )

    if (!response.ok) {
      const detail = await response.text()
      throw new Error(`chain_states latest ${response.status}: ${detail.slice(0, 180)}`)
    }

    const rows = (await response.json()) as SharedStateRow[]
    return rows[0] ?? null
  })
}

export function fetchChainAuthors(): Promise<string[]> {
  return runNetworkTask('history', async () => {
    const response = await fetch(
      `${DATA_API}/chain_states?chain_id=eq.${CHAIN_ID}&select=author_name,generation&order=generation.asc`,
      { headers: API_HEADERS }
    )

    if (!response.ok) {
      const detail = await response.text()
      throw new Error(`chain_states history ${response.status}: ${detail.slice(0, 180)}`)
    }

    const rows = (await response.json()) as ChainAuthorRow[]
    return rows.map((row) => row.author_name)
  })
}

export function appendNextState(input: {
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
  return runNetworkTask('append', async () => {
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
      throw new Error(`append ${response.status}: ${detail.slice(0, 180)}`)
    }
  })
}
