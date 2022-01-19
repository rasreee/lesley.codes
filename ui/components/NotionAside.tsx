import { cn } from '@lib/classnames';
import { Emojis } from '@lib/emojis';
import React from 'react';

interface NotionAsideProps {
  children: string;
}

/**
 * TODO: Fix Notion block parsing & rendering of children (i.e. links in text)
 */
const NotionAside: React.FunctionComponent<NotionAsideProps> = ({
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
      <div className="pr-2">{children}</div>
    </aside>
  );
};

export default NotionAside;
