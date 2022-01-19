import { useDebouncedState } from '@ui/hooks/useDebouncedState';
import isBefore from 'date-fns/isBefore';
import isPast from 'date-fns/isPast';
import parseISO from 'date-fns/parseISO';
import { useMemo } from 'react';

export function useSearch(allData: SearchData[] | Falsy) {
  const [query, setQuery] = useDebouncedState(``, 300);

  const hits: SearchData[] = useMemo(() => {
    if (!allData) return [];

    return allData
      .filter((data) => data.title.toLowerCase().includes(query.toLowerCase()))
      .filter((data) => isPast(parseISO(data.createdAt)))
      .sort((a, b) => (isBefore(parseISO(a.createdAt), parseISO(b.createdAt)) ? 1 : -1));
  }, [allData, query]);

  return { query, setQuery, hits };
}
