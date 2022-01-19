import { useDebouncedState } from '@ui/hooks/useDebouncedState';
import { isBefore, isPast, parseISO } from 'date-fns';
import { ReactNode, useMemo } from 'react';

import { SearchContext } from './SearchContext';
import { SearchData } from './SearchData';

type SearchProviderProps<Data extends SearchData = SearchData> = {
  children: ReactNode;
  onSelect: (selectedSearchResult: Data) => void;
  allData: Data[];
};

function SearchProvider<Data extends SearchData = SearchData>({
  children,
  onSelect,
  allData
}: SearchProviderProps<Data>) {
  const [query, setQuery] = useDebouncedState(``, 300);

  const hits = useMemo(() => {
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
