import { SearchField } from '@features/search/SearchField';
import { useDebouncedState } from '@ui/hooks/useDebouncedState';
import { isBefore, isPast, parseISO } from 'date-fns';
import { useMemo } from 'react';

import { SearchResults } from './SearchResults';

export interface SearchComponentProps {
  allData: SearchData[];
  renderHit: (hit: SearchData) => JSX.Element;
  onHitClick: (hit: SearchData) => void;
}

function SearchComponent({ allData, renderHit, onHitClick }: SearchComponentProps) {
  const [query, setQuery] = useDebouncedState(``, 300);

  const hits: SearchData[] = useMemo(() => {
    if (!allData) return [];

    return allData
      .filter((data) => data.title.toLowerCase().includes(query.toLowerCase()))
      .filter((data) => isPast(parseISO(data.createdAt)))
      .sort((a, b) => (isBefore(parseISO(a.createdAt), parseISO(b.createdAt)) ? 1 : -1));
  }, [allData, query]);

  return (
    <>
      <SearchField query={query} onChange={setQuery} />
      <SearchResults items={hits} renderHit={renderHit} onHitClick={onHitClick} />
    </>
  );
}

export default SearchComponent;
