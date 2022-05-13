import { useDebouncedCallback } from 'lib/hooks/useDebouncedCallback'
import invariant from 'lib/invariant'
import supabase from 'lib/supabase'
import { useEffect } from 'react'

import { Content, CONTENTS_TABLE, getOrCreateContent } from '../api'
import { useContentViews } from './useContentViews'

type RegisterContentViewArgs = Pick<Content, 'type' | 'slug'>

async function registerContentView(args: RegisterContentViewArgs) {
  const oldViews = await getOrCreateContent(args).then(
    (content) => content.views,
  )

  const { data, error } = await supabase
    .from<Content>(CONTENTS_TABLE)
    .update({ views: oldViews + 1 })
    .match(args)
    .single()

  if (error) {
    console.error(
      'Failed to update views for content: %s\n',
      JSON.stringify(args, null, 2),
      error,
    )
    throw error
  }

  invariant(
    data,
    'content data returned from Supabase was undefined when no error was thrown',
  )

  console.info('Updated content views: %s', JSON.stringify(data, null, 2))

  return data.views
}

export function useRegisterContentView(args: RegisterContentViewArgs): void {
  const { mutate: mutateContentViews } = useContentViews(args)

  const debouncedRegisterContentView = useDebouncedCallback(
    (args) =>
      registerContentView(args)
        .then((newViews) => {
          console.log('✅ successfully registered content view')
          mutateContentViews(newViews)
        })
        .catch((error) =>
          console.log('❌ failed to register content view', { error }),
        ),
    [args],
    500,
  )

  useEffect(() => {
    const shouldRegisterContentViews =
      process.env.NEXT_PUBLIC_SHOULD_REGISTER_CONTENT_VIEWS === 'true'
        ? true
        : false

    if (shouldRegisterContentViews) {
      debouncedRegisterContentView(args)
    }
  }, [])
}
