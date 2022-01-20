import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { largerThan } from '@ui/utils/breakpoints';
import { StyledProps } from '@ui/utils/emotion';
import classNames from 'classnames';
import { HTMLAttributes, ReactNode } from 'react';

export interface TextProps extends Omit<HTMLAttributes<HTMLElement>, 'color'> {
  children: ReactNode;
  /* Custom text color className */
  color?: string;
  /* Custom font size className */
  size?: string;
  /* Custom font weight className */
  weight?: string;
}

const headingStyles = ({ theme }: StyledProps) => css`
  font-weight: ${theme.fontWeights.bold};
  letter-spacing: -0.025em !important;
`;

export const H1 = styled.h1`
  ${headingStyles}
  ${({ theme }) => css`
    font-size: ${theme.fontSizes['4xl']};
    ${largerThan('tablet')} {
      font-size: ${theme.fontSizes['5xl']};
    }
  `}
`;

export const H2 = styled.h2`
  ${headingStyles}
  ${({ theme }) => css`
    font-size: ${theme.fontSizes['2xl']};
    ${largerThan('tablet')} {
      font-size: ${theme.fontSizes['3xl']};
    }
  `}
`;

export const H3 = styled.h3`
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
  letter-spacing: -0.025em !important;
`;

export const P = styled.p`
  ${bodyStyles}
  ${({ theme }) => css`
    font-size: ${theme.fontSizes['base']};
    ${largerThan('tablet')} {
      font-size: ${theme.fontSizes['lg']};
    }
    ${largerThan('desktop')} {
      font-size: ${theme.fontSizes['2xl']};
    }
  `}
`;

const defaultTextColor = 'text-gray-700 dark:text-gray-100';

export const Span: React.FC<TextProps> = ({
  children,
  className,
  size = 'text-base md:text-lg',
  color = defaultTextColor,
  weight = 'font-normal',
  ...props
}) => {
  return (
    <span
      className={classNames(
        color,
        size,
        weight,
        className
          ?.split(' ')
          .map((c) => `${c}`)
          .join(' ')
      )}
      {...props}
    >
      {children}
    </span>
  );
};
