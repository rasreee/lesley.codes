import { SearchField } from '@components/SearchField';

import { SearchResults } from './SearchResults';
import { useSearch } from './useSearch';

export interface SearchComponentProps {
  allData: SearchData[];
  renderHit: (hit: SearchData) => JSX.Element;
  onHitClick: (hit: SearchData) => void;
}

function SearchComponent({ allData, renderHit, onHitClick }: SearchComponentProps) {
  const { query, setQuery, hits } = useSearch(allData);

  return (
    <>
      <SearchField query={query} onChange={setQuery} />
      <SearchResults items={hits} renderHit={renderHit} onHitClick={onHitClick} />
    </>
  );
}

export default SearchComponent;
