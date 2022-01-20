import { useDebouncedState } from '@ui/hooks/useDebouncedState';
import { useEffect, useState } from 'react';

import SearchField from './SearchField';
import { SearchResults } from './SearchResults';

export type SearchProps = {
  onHitClick: (hit: SearchData) => void;
  renderHit: (hit: SearchData) => JSX.Element;
  processQuery: (query: string) => SearchData[];
};

const Search = ({ onHitClick, processQuery, renderHit }: SearchProps) => {
  const [query, setQuery] = useDebouncedState(``, 300);
  const [hits, setHits] = useState<SearchData[]>([]);

  useEffect(() => {
    setHits(processQuery(query));
  }, [processQuery, query]);

  return (
    <>
      <SearchField query={query} onChange={setQuery} />
      <SearchResults items={hits} renderHit={renderHit} onHitClick={onHitClick} />
    </>
  );
};

export default Search;
