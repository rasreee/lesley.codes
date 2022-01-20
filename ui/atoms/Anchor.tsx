import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { pseudo } from '@ui/utils';
import { AnchorHTMLAttributes, forwardRef, Ref } from 'react';

import { baseTextStyles } from './Typography';

export type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export const Anchor = forwardRef(
  ({ children, ...props }: AnchorProps, ref: Ref<HTMLAnchorElement>) => {
    return (
      <SAnchor {...props} ref={ref}>
        {children}
      </SAnchor>
    );
  }
);

const SAnchor = styled.a`
  ${baseTextStyles};
  ${({ theme }) => css`
    font-weight: ${theme.fontWeights.semibold};
    color: ${theme.color.textHint};
    opacity: 0.7;
    ${pseudo('_hover')} {
      color: ${theme.color.textHintHover};
      opacity: 1;
    }
  `}
`;

Anchor.displayName = 'Anchor';
