import { useDebouncedState } from '@ui/hooks/useDebouncedState';
import { isBefore, isPast, parseISO } from 'date-fns';
import { ReactNode, useMemo } from 'react';

import { initSearchContext, ISearchContext } from './SearchContext';
import { SearchData } from './SearchData';

type SearchProviderProps<Data extends SearchData = SearchData> = {
  children: ReactNode;
  onSelect?: ISearchContext<Data>['onSelect'];
  allData: Data[];
};

function SearchProvider<Data extends SearchData = SearchData>({
  children,
  onSelect,
  allData
}: SearchProviderProps<Data>) {
  const SearchContext = useMemo(() => initSearchContext<Data>(), []);

  const [query, setQuery] = useDebouncedState(``, 300);

  const hits: Data[] = useMemo(() => {
    if (!allData.length) return [];

    return allData
      .filter((data) => data.title.toLowerCase().includes(query.toLowerCase()))
      .filter((data) => isPast(parseISO(data.createdAt)))
      .sort((a, b) => (isBefore(parseISO(a.createdAt), parseISO(b.createdAt)) ? 1 : -1));
  }, [allData, query]);

  return (
    <SearchContext.Provider
      value={{
        query,
        setQuery,
        hits,
        onSelect
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export default SearchProvider;
