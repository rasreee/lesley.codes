import { useDebouncedState } from '@ui/hooks/useDebouncedState';
import { useEffect } from 'react';

import SearchField from './SearchField';

export type SearchProps = {
  hits: SearchData[];
  onHitClick: (hit: SearchData) => void;
  renderHit: (hit: SearchData) => JSX.Element;
  onQuery: (query: string) => void;
};

const Search = ({ hits, onHitClick, onQuery, renderHit }: SearchProps) => {
  const [query, setQuery] = useDebouncedState(``, 300);

  useEffect(() => {
    onQuery(query);
  }, [onQuery, query]);

  const handleHitClick = (item: SearchData) => () => onHitClick(item);

  return (
    <>
      <SearchField query={query} onChange={setQuery} />
      <div className={'flex flex-col gap-3 w-full relative my-3'}>
        <ul className={'flex flex-col gap-10'}>
          {hits.map((item) => (
            <button
              key={item.slug}
              className={
                'text-base font-semibold text-gray-500 hover:text-gray-900 dark:hover:text-gray-200 transition-all'
              }
              onClick={handleHitClick(item)}
            >
              {renderHit(item)}
            </button>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Search;
