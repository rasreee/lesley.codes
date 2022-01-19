import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ColorModeProps } from '@features/colorMode/types';
import classed from '@lib/classed';
import { StyledProps } from '@ui/utils/emotion';

const BaseInput = classed('input', 'w-full', 'text-lg', 'px-5 py-2');

const BaseInputGroup = classed(
  'div',
  'bg-white dark:bg-gray-800',
  'border border-gray-200 dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500'
);

type FocusedProps = { isFocused: boolean };

const inputColorStyle = ({ theme, mode, isFocused }: StyledProps<ColorModeProps & FocusedProps>) =>
  isFocused
    ? css`
        color: ${theme.colors.gray[mode === 'light' ? 800 : 50]} !important;
      `
    : css`
        color: ${theme.colors.gray[mode === 'light' ? 900 : 300]} !important;
      `;

export const InputGroup = styled(BaseInputGroup)<ColorModeProps & FocusedProps>`
  ${inputColorStyle}

  svg {
    ${inputColorStyle}
  }

  ${({ theme }) =>
    css`
      border-radius: ${theme.radii.md};
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-left: 0px;
      padding-right: 0.75rem;
    `}
`;

export const Input = styled(BaseInput)<ColorModeProps>`
  border: none;
  background: none;
`;
