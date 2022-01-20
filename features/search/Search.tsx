import { useDebouncedState } from '@ui/hooks/useDebouncedState';
import { useEffect } from 'react';

import SearchField from './SearchField';

export type SearchProps = {
  hits: SearchData[];
  renderHit: (hit: SearchData) => JSX.Element;
  onQuery: (query: string) => void;
};

const Search = ({ hits, onQuery, renderHit }: SearchProps) => {
  const [query, setQuery] = useDebouncedState(``, 300);

  useEffect(() => {
    onQuery(query);
  }, [onQuery, query]);

  return (
    <>
      <SearchField query={query} onChange={setQuery} />
      <div className={'flex flex-col gap-3 w-full relative my-3'}>
        <ul className={'flex flex-col gap-10'}>
          {hits.map((item) => (
            <li key={item.slug}>{renderHit(item)}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Search;
