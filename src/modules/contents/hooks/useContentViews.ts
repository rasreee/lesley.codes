import useSWR from 'swr'

import { Content, getOrCreateContent } from '../api'

export function useContentViews(args: Pick<Content, 'type' | 'slug'>) {
  return useSWR<Content['views'], Error>(
    ['contentViews', args],
    async () => {
      const result = await getOrCreateContent(args)

      return result.views
    },
    {
      revalidateOnFocus: false,
    },
  )
}
