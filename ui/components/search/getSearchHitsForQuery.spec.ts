import { generateMockSearchHit } from './generateMockSearchHit';
import { getSearchHitsForQuery } from './getSearchHitsForQuery';
import { SearchHit } from './SearchHit';

/**
 * @group ui
 * @group components
 * @group search
 */
describe('@ui/components/search/getSearchHitsForQuery', () => {
  it('should return an empty array given an empty query string', async () => {
    const query = '';
    const result = await getSearchHitsForQuery(query);
    expect(result).toHaveLength(0);
  });

  it('should return a non-empty array given a matching query', async () => {
    const query = 'doge';
    const testData: SearchHit[] = [generateMockSearchHit(0, { title: 'doge' })];
    const result = await getSearchHitsForQuery(query, testData);
    expect(result).toHaveLength(1);
    expect(result[0].title).toEqual('doge');
  });
});
