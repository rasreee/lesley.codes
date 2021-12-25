import { cn } from 'lib/classnames';

import { Span } from './Typography';

type TagsProps = { tags: string; className?: string };

export const Tags: React.FC<TagsProps> = ({ tags, className }) => {
  return (
    <ul className={cn(className, 'flex gap-2 items-center', 'overflow-auto')}>
      {tags
        .replace('{', '')
        .replace('}', '')
        .split(',')
        .map((tag) => (
          <li key={tag}>
            <div
              className={cn(
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
