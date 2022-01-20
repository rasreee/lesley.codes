import classNames from 'classnames';
import React, { AnchorHTMLAttributes, forwardRef, Ref } from 'react';

export const baseAnchorStyles =
  'text-base font-semibold text-gray-500 hover:text-gray-900 dark:hover:text-gray-200 transition-all';

export type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>;

const Anchor = forwardRef(
  ({ children, className, ...props }: AnchorProps, ref: Ref<HTMLAnchorElement>) => {
    return (
      <a {...props} ref={ref} className={classNames(className, baseAnchorStyles)}>
        {children}
      </a>
    );
  }
);

Anchor.displayName = 'Anchor';

export default Anchor;
