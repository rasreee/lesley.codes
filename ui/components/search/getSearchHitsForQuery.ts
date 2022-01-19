import { mockSearchHits } from './mocks';
import { SearchHit } from './SearchHit';

const allData = mockSearchHits;

export function getSearchHitsForQuery(query: string): Promise<SearchHit[]> {
  if (!query) return Promise.resolve([]);

  let hits = [] as SearchHit[];

  const a = query.toLowerCase();

  hits = allData.filter((item) => {
    const b = item.title.toLowerCase().slice(0, query.length);

    return a === b;
  });

  return Promise.resolve(hits);
}
