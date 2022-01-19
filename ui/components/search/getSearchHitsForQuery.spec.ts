import { generateMockSearchResultData } from './generateMockSearchResultData';
import { getSearchResultsForQuery } from './getSearchResultsForQuery';
import { SearchResultData } from './SearchResultData';

/**
 * @group ui
 * @group components
 * @group search
 */
describe('@ui/components/search/getSearchResultsForQuery', () => {
  it('should return an empty array given an empty query string', async () => {
    const query = '';
    const result = await getSearchResultsForQuery(query);
    expect(result).toHaveLength(0);
  });

  it('should return a non-empty array given a matching query', async () => {
    const query = 'doge';
    const testData: SearchResultData[] = [
      generateMockSearchResultData(0, { title: 'doge' }),
    ];
    const result = await getSearchResultsForQuery(query, testData);
    expect(result).toHaveLength(1);
    expect(result[0].title).toEqual('doge');
  });
});
