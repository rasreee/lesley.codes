import Link from 'next/link';
import React from 'react';

import { Anchor, AnchorProps } from './Anchor';

export interface NavLinkProps extends AnchorProps {
  href: string;
}

export const NavLink: React.FunctionComponent<NavLinkProps> = ({
  href,
  children,
  ...props
}) => {
  return (
    <Link href={href} passHref>
      <Anchor {...props}>{children}</Anchor>
    </Link>
  );
};
