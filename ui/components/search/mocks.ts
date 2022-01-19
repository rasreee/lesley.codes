import faker from 'faker';
import times from 'lodash.times';

import { SearchHit } from '../search/SearchHit';

export const generateMockSearchHit = (
  index: number,
  _initialData?: Partial<SearchHit>
): SearchHit => {
  const initialData = _initialData ?? {};
  return {
    id: index,
    title: faker.lorem.words(3),
    sourceUrl: faker.lorem.slug(),
    ...initialData,
  };
};

export const generateMockSearchHits = (n = 30) =>
  times(n, generateMockSearchHit);

export const mockSearchHits = generateMockSearchHits();
