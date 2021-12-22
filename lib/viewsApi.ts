import { SupabaseClient } from '@supabase/supabase-js'
import { Views } from 'models/views'
import useSWR from 'swr'

import { useSupabase } from './supabase'

export const getViews = (slug: string) => {
  return async (supabase: SupabaseClient): Promise<Views> => {
    const { data, error } = await supabase.from<Views>('views').select('*').match({ slug }).single()
    if (error) throw error
    if (!data) throw new Error('Views response data was null when error was null')

    return data
  }
}

export const useViews = (slug: string | null) => {
  const supabase = useSupabase()

  const viewsFetcher = (slug: string) => {
    return async (): Promise<Views> => {
      const res = await getViews(slug)(supabase)

      return res
    }
  }

  const { data, ...rest } = useSWR<Views, Error>(slug ? `/api/views/${slug}` : null, viewsFetcher(slug!))

  return { views: data, ...rest }
}
