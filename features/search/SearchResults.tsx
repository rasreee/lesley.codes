import classNames from 'classnames';
import { ReactNode } from 'react';

export interface SearchResultsProps {
  items: SearchData[];
  renderItem: (item: SearchData) => ReactNode;
  onItemClick: (item: SearchData) => void;
}

export const SearchResults: React.FC<SearchResultsProps> = ({ items, renderItem, onItemClick }) => {
  const handleItemClick = (item: SearchData) => () => onItemClick(item);

  return (
    <div className={classNames('flex gap-3 py-2 w-full relative', 'flex-col')}>
      <ul className={'flex flex-col gap-10'}>
        {items.map((item) => (
          <button
            key={item.title}
            className={
              'text-base font-semibold text-gray-500 hover:text-gray-900 dark:hover:text-gray-200 transition-all'
            }
            onClick={handleItemClick(item)}
          >
            {renderItem(item)}
          </button>
        ))}
      </ul>
    </div>
  );
};
