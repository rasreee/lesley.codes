import { createClient, SupabaseClient } from '@supabase/supabase-js'
import invariant from 'lib/invariant'

export function createSupabaseClient(): SupabaseClient {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY

  invariant(
    supabaseUrl,
    'NEXT_PUBLIC_SUPABASE_URL environment variable was undefined',
  )
  invariant(
    supabaseKey,
    'NEXT_PUBLIC_SUPABASE_KEY environment variable was undefined',
  )

  return createClient(supabaseUrl, supabaseKey)
}

const supabase = createSupabaseClient()

export default supabase
