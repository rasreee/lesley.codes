import { ReactNode } from 'react';

import EmptySearchResults from './EmptySearchResults';

export interface SearchResultsProps {
  hits: SearchData[];
  renderHitButton: (hit: SearchData) => ReactNode;
}

export const SearchResults = ({ hits, renderHitButton }: SearchResultsProps) => {
  if (hits.length === 0) {
    return <EmptySearchResults />;
  }

  return (
    <div className={'w-full relative my-3'}>
      <ul className={'flex flex-col gap-3'}>
        {hits?.map((hit) => (
          <li key={hit.slug}>{renderHitButton(hit)}</li>
        ))}
      </ul>
    </div>
  );
};
