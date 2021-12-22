import { createClient, SupabaseClient } from '@supabase/supabase-js'

const initSupabase = (
  url = process.env.NEXT_PUBLIC_SUPABASE_URL,
  apiKey = process.env.NEXT_PUBLIC_SUPABASE_API_KEY
) => {
  if (!url) throw new Error('NEXT_PUBLIC_SUPABASE_URL was undefined')
  if (!apiKey) throw new Error('NEXT_PUBLIC_SUPABASE_API_KEY was undefined')

  return createClient(url, apiKey)
}

let _supabase: SupabaseClient | undefined

if (process.env.NODE_ENV === 'production') {
  _supabase = initSupabase()
} else {
  if (!_supabase) {
    _supabase = initSupabase()
  }

  _supabase = initSupabase()
}

if (!_supabase) throw new Error('Supabase was not initialized yet')

const supabase = _supabase
export default supabase

import { createContext, useContext } from 'react'

export const SupabaseContext = createContext<SupabaseClient | undefined>(undefined)

export const useSupabase = () => {
  const ctx = useContext(SupabaseContext)
  if (typeof ctx === 'undefined') throw new Error('failed to ensure defined context')

  return ctx
}
