import { ErrorMessage } from '@components/ErrorMessage';
import { useQuery } from '@lib/useQuery';

import SearchComponent, { SearchComponentProps } from './SearchComponent';

export interface SearchProps extends Omit<SearchComponentProps, 'allData'> {
  apiEndpoint: `/${string}`;
}

function Search({ apiEndpoint, renderHit, onHitClick }: SearchProps) {
  const allDataQuery = useQuery<SearchData[]>(`${apiEndpoint}`);

  if (allDataQuery.status === 'error')
    return <ErrorMessage>{allDataQuery.error.message}</ErrorMessage>;

  if (allDataQuery.status === 'loading') return <div>Loading...</div>;

  const allData: SearchData[] = allDataQuery.data;

  return <SearchComponent allData={allData} renderHit={renderHit} onHitClick={onHitClick} />;
}

export default Search;
