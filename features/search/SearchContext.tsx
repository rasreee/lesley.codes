import { createContext } from 'react';

import { SearchData } from './SearchData';

export interface ISearchContext<Data extends SearchData = SearchData> {
  query: string;
  setQuery: (query: string) => void;
  hits: Data[];
  onSelect: ((selectedSearchResult: Data) => void) | undefined;
}

export const SearchContext = createContext<ISearchContext | undefined>(undefined);
