import { useContext } from 'react';

import { ISearchContext, SearchContext } from './SearchContext';
import { SearchData } from './SearchData';

export function useSearch() {
  const context = useContext(SearchContext);
  if (!context) throw new Error('SearchContext must be defined to use useSearch');
  return context;
}
