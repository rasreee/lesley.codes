import invariant from 'lib/invariant'
import supabase from 'lib/supabase'

export interface Content<T extends ContentType = ContentType> {
  id: number
  type: T
  slug: string
  views: number
}

export type ContentType = 'blog' | 'project'

export const CONTENTS_TABLE = 'contents' as const

export async function getContent(args: Partial<Content>): Promise<Content> {
  const { data, error } = await supabase
    .from<Content>(CONTENTS_TABLE)
    .select('*')
    .match(args)
    .single()

  if (error) {
    console.error(
      'Failed to fetch content data for args: %s\n',
      JSON.stringify(args, null, 2),
      error,
    )
    throw error
  }

  invariant(
    data,
    'content data returned from Supabase was undefined when no error was thrown',
  )

  console.info('Fetched content data: %s', JSON.stringify(data, null, 2))

  return data
}

export async function getContentViews(args: Partial<Content>): Promise<number> {
  const { data, error } = await supabase
    .from<Content>(CONTENTS_TABLE)
    .select('views')
    .match(args)
    .single()

  if (error) {
    console.error(
      'Failed to fetch content views for args: %s\n',
      JSON.stringify(args, null, 2),
      error,
    )
    throw error
  }

  invariant(
    data,
    'content data returned from Supabase was undefined when no error was thrown',
  )

  console.info('Fetched content views: %s', JSON.stringify(data, null, 2))

  return data.views
}

export async function getOrCreateContent(
  args: Partial<Content>,
): Promise<Content> {
  const { data: existingData, error: existingError } = await supabase
    .from<Content>(CONTENTS_TABLE)
    .select('*')
    .match(args)
    .maybeSingle()

  if (existingError) {
    console.error(
      'Failed to fetch content data for args: %s\n',
      JSON.stringify(args, null, 2),
      existingError,
    )
    throw existingError
  }

  if (existingData) return existingData

  const { data, error } = await supabase
    .from<Content>(CONTENTS_TABLE)
    .insert(args)
    .single()

  invariant(
    data,
    'content data returned from Supabase was undefined when no error was thrown',
  )

  if (error) {
    console.error(
      'Failed to create content for args: %s\n',
      JSON.stringify(args, null, 2),
      error,
    )
    throw error
  }

  console.info('Created content data: %s', JSON.stringify(data, null, 2))

  return data
}
