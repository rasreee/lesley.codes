import { useDebouncedState } from '@ui/hooks/useDebouncedState';
import { isBefore, isPast, parseISO } from 'date-fns';
import { ReactNode, useMemo } from 'react';

import { ISearchContext, SearchContext } from './SearchContext';

type SearchProviderProps = {
  children: ReactNode;
  onSelect?: ISearchContext['onSelect'];
  allData: SearchData[];
};

function SearchProvider({ children, onSelect, allData }: SearchProviderProps) {
  const [query, setQuery] = useDebouncedState(``, 300);

  const hits: SearchData[] = useMemo(() => {
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
