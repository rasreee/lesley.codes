import NextLink from 'next/link';
import React from 'react';

import { Anchor, AnchorProps } from './Anchor';

export const anchorStyles =
  'text-base font-semibold text-gray-500 hover:text-gray-900 dark:hover:text-gray-200 transition-all';

export interface NavLinkProps extends AnchorProps {
  href: string;
}

export const NavLink: React.FunctionComponent<NavLinkProps> = ({
  href,
  children,
  ...props
}) => {
  return (
    <NextLink href={href} passHref>
      <Anchor {...props}>{children}</Anchor>
    </NextLink>
  );
};
