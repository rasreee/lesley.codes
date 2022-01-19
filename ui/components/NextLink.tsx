import Link from 'next/link';

import Anchor, { AnchorProps } from './Anchor';

interface NextLinkProps extends AnchorProps {
  href: string;
}

const NextLink: React.FunctionComponent<NextLinkProps> = ({ href, children, ...props }) => {
  return (
    <Link href={href} passHref>
      <Anchor {...props}>{children}</Anchor>
    </Link>
  );
};

export default NextLink;
