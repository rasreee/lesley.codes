import { useDebouncedState } from '@ui/hooks/useDebouncedState';
import { useEffect, useState } from 'react';

export function useSearch<D>(allData: Array<D>, processHits: (query: string) => Array<D>) {
  const [hits, setHits] = useState<Array<D>>(() => allData);
  const [query, setQuery] = useDebouncedState(``, 300);

  useEffect(() => {
    setHits(processHits(query));
  }, [processHits, query]);

  return { hits, query, setQuery };
}
