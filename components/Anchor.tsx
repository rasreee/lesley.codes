import { cn } from 'lib/classnames';
import React, { AnchorHTMLAttributes, forwardRef, Ref } from 'react';

export const anchorStyles =
  'text-base font-semibold text-gray-500 hover:text-gray-900 dark:hover:text-gray-200 transition-all';

export type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export const Anchor = forwardRef(
  (
    { children, className, ...props }: AnchorProps,
    ref: Ref<HTMLAnchorElement>
  ) => {
    return (
      <a {...props} ref={ref} className={cn(className, anchorStyles)}>
        {children}
      </a>
    );
  }
);
