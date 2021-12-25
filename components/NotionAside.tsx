import { cn } from 'lib/classnames';
import React from 'react';

export const Emojis = {
  Exclamation: '💡',
};

export interface NotionAsideProps {
  children: string;
}

/**
 * TODO: Fix Notion block rendering of children (i.e. links in text)
 */
export const NotionAside: React.FunctionComponent<NotionAsideProps> = ({
  children,
}) => {
  return (
    <aside
      className={cn(
        'rounded',
        'dark:bg-gray-800 dark:bg-opacity-90',
        'px-5 py-4',
        'my-3',
        'flex gap-3'
      )}
    >
      {Emojis.Exclamation}
      <div className={cn('pr-2')}>{children}</div>
    </aside>
  );
};
