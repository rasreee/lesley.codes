import searchDataFixture from './searchDataFixture';
import { SearchResultData } from './SearchResultData';

export function getSearchResultsForQuery(
  query: string,
  allData = searchDataFixture
): Promise<SearchResultData[]> {
  if (!query) return Promise.resolve([]);

  let hits = [] as SearchResultData[];

  const a = query.toLowerCase();

  hits = allData.filter((item) => {
    const b = item.title.toLowerCase();

    return a === b;
  });

  return Promise.resolve(hits);
}
