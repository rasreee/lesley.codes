import faker from 'faker';

import { SearchResultData } from '../search/SearchResultData';

export const generateMockSearchResultData = (
  index: number,
  _initialData?: Partial<SearchResultData>
): SearchResultData => {
  const initialData = _initialData ?? {};
  return {
    id: index,
    title: faker.lorem.words(3),
    sourceUrl: faker.lorem.slug(),
    ...initialData
  };
};
