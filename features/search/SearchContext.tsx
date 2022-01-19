import once from 'lodash.once';
import { createContext } from 'react';

import { SearchData } from './SearchData';

export interface ISearchContext<Data extends SearchData = SearchData> {
  query: string;
  setQuery: (query: string) => void;
  hits: Data[];
  onSelect: ((selectedSearchResult: Data) => void) | undefined;
}

export const initSearchContext = once(<Data extends SearchData = SearchData>() =>
  createContext<ISearchContext<Data> | undefined>(undefined)
);
