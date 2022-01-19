import faker from 'faker';

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
