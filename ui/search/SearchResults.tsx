import { ReactNode } from 'react';

import EmptySearchResults from './EmptySearchResults';

export interface SearchResultsProps {
  hits: SearchData[];
  renderHit: (item: SearchData) => ReactNode;
}

export const SearchResults = ({ hits, renderHit }: SearchResultsProps) => {
  if (hits.length === 0) {
    return <EmptySearchResults />;
  }

  return (
    <div className={'flex flex-col gap-3 w-full relative my-3'}>
      <ul className={'flex flex-col gap-10'}>
        {hits.map((item) => (
          <li key={item.slug}>{renderHit(item)}</li>
        ))}
      </ul>
    </div>
  );
};
