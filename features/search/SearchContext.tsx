import { createContext } from 'react';

export interface ISearchContext<Data = any> {
  query: string;
  setQuery: (query: string) => void;
  hits: Data[];
  onSelect: (selectedItem: Data) => void;
}

export const SearchContext = createContext<ISearchContext | undefined>(undefined);
