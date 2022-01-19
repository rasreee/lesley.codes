import { mockSearchHits } from './mocks';
import { SearchHit } from './SearchHit';

export function getSearchHitsForQuery(
  query: string,
  allData = mockSearchHits
): Promise<SearchHit[]> {
  if (!query) return Promise.resolve([]);

  let hits = [] as SearchHit[];

  const a = query.toLowerCase();

  hits = allData.filter((item) => {
    const b = item.title.toLowerCase();

    return a === b;
  });

  return Promise.resolve(hits);
}
