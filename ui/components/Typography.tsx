import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { largerThan } from '@ui/utils/breakpoints';
import { StyledProps } from '@ui/utils/emotion';

const baseTextStyles = ({ theme }: StyledProps) => css`
  letter-spacing: -0.025em !important;
  color: ${theme.color.text};
`;

const headingStyles = ({ theme }: StyledProps) => css`
  font-weight: ${theme.fontWeights.bold};
`;

export const H1 = styled.h1`
  ${baseTextStyles}
  ${headingStyles}
  ${({ theme }) => css`
    font-size: ${theme.fontSizes['4xl']};
    ${largerThan('tablet')} {
      font-size: ${theme.fontSizes['5xl']};
    }
  `}
`;

export const H2 = styled.h2`
  ${baseTextStyles}
  ${headingStyles}
  ${({ theme }) => css`
    font-size: ${theme.fontSizes['2xl']};
    ${largerThan('tablet')} {
      font-size: ${theme.fontSizes['3xl']};
    }
  `}
`;

export const H3 = styled.h3`
  ${baseTextStyles}
  ${headingStyles}
  ${({ theme }) => css`
    font-size: ${theme.fontSizes['xl']};
    ${largerThan('tablet')} {
      font-size: ${theme.fontSizes['2xl']};
    }
  `}
`;

const bodyStyles = ({ theme }: StyledProps) => css`
  font-weight: ${theme.fontWeights.normal};
  font-size: ${theme.fontSizes['sm']};
  ${largerThan('tablet')} {
    font-size: ${theme.fontSizes['base']};
  }
  ${largerThan('desktop')} {
    font-size: ${theme.fontSizes['xl']};
  }
`;

export const P = styled.p`
  ${baseTextStyles}
  ${bodyStyles}
`;

export const Span = styled.p`
  ${baseTextStyles}
  ${bodyStyles}
`;
