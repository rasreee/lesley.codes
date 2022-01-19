import faker from 'faker';
import times from 'lodash.times';

import { SearchHit } from '../search/SearchHit';

export const generateMockSearchHit = (index: number): SearchHit => ({
  id: index,
  title: faker.lorem.words(3),
  sourceUrl: faker.lorem.slug(),
});

export const generateMockSearchHits = (n = 30) =>
  times(n, generateMockSearchHit);

export const mockSearchHits = generateMockSearchHits();
