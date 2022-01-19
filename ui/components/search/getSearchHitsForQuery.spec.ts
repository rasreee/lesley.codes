import { getSearchHitsForQuery } from './getSearchHitsForQuery';

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
});
