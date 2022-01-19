import { mockSearchHits } from './mocks';
import { SearchHit } from './SearchHit';

const allData = mockSearchHits;

export function getSearchHitsForQuery(query: string): Promise<SearchHit[]> {
  let hits = [] as SearchHit[];

  if (query.length) {
    const a = query.toLowerCase();

    hits = allData.filter((item) => {
      const b = item.title.toLowerCase().slice(0, query.length);

      return a === b;
    });
  }

  return Promise.resolve(hits);
}
