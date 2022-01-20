import { ReactNode } from 'react';

export interface SearchResultsProps {
  items: SearchData[];
  renderHit: (item: SearchData) => ReactNode;
  onHitClick: (item: SearchData) => void;
}

export const SearchResults = ({ items, renderHit, onHitClick }: SearchResultsProps) => {
  const handleHitClick = (item: SearchData) => () => onHitClick(item);

  return (
    <div className={'flex flex-col gap-3 w-full relative my-3'}>
      <ul className={'flex flex-col gap-10'}>
        {items.map((item) => (
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
  );
};
