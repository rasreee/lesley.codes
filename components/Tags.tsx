import { Span } from '@ui/components/Typography';
import classNames from 'classnames';
import { useMemo } from 'react';

type TagsProps = { tags: string; className?: string };

export const Tags: React.FC<TagsProps> = ({ tags, className }) => {
  const parsedTags = useMemo(() => tags.replace('{', '').replace('}', '').split(','), [tags]);

  return (
    <ul className={classNames(className, 'flex gap-2 items-center', 'overflow-auto')}>
      {parsedTags.map((tag) => (
        <li key={tag}>
          <div
            className={classNames(
              'cursor-pointer rounded',
              'bg-gray-100 dark:bg-gray-700 dark:bg-opacity-70',
              'flex items-center',
              'py-1 px-2.5'
            )}
          >
            <Span
              color="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              size="text-xs"
              weight="font-semibold"
              className="leading-none my-auto"
            >
              {tag}
            </Span>
          </div>
        </li>
      ))}
    </ul>
  );
};
