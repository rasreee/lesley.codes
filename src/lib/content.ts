import { compareDates } from './date'
import invariant from './invariant'

export interface ContentDateMeta {
  publishedAt?: string
  lastUpdated?: string
}

export const getDateMeta = <T extends ContentDateMeta>(data: T): string => {
  const result = data.lastUpdated ?? data.publishedAt
  invariant(
    result,
    'Either lastUpdated or publishedAt must be a string. Both were undefined',
  )
  return result
}

export function sortContentByDate<T extends ContentDateMeta = ContentDateMeta>(
  contents: Array<T>,
) {
  return contents.sort((a, b) => compareDates(getDateMeta(a), getDateMeta(b)))
}
