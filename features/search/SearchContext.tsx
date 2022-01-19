import { createContext } from 'react';

export interface ISearchContext {
  query: string;
  setQuery: (query: string) => void;
  hits: SearchData[];
  onSelect: ((selectedSearchResult: SearchData) => void) | undefined;
}

export const SearchContext = createContext<ISearchContext | undefined>(undefined);
