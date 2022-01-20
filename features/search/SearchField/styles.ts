import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ColorModeProps } from '@features/colorMode/types';
import { spacing } from '@ui/utils/spacing';
import { StyledProps } from '@ui/utils/styledProps';

type FocusedProps = { isFocused: boolean };

const inputColorStyle = ({ theme, mode, isFocused }: StyledProps<ColorModeProps & FocusedProps>) =>
  isFocused
    ? css`
        color: ${theme.colors.gray[mode === 'light' ? 800 : 50]} !important;
      `
    : css`
        color: ${theme.colors.gray[mode === 'light' ? 900 : 300]} !important;
      `;

export const ImposterInput = styled.div<ColorModeProps & FocusedProps>`
  ${inputColorStyle}

  svg {
    ${inputColorStyle}
  }

  ${({ theme, mode }) =>
    css`
      background: ${mode === 'light' ? '#fff' : theme.colors.gray[800]};
      border: 1px solid ${theme.colors.gray[mode === 'light' ? 200 : 900]}
      border-radius: ${theme.radii.DEFAULT} !important;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-left: 0px;
      padding-right: 0.75rem;
    `}
`;

export const Input = styled.input<ColorModeProps>`
  border: none;
  background: none;
  width: 100%;
  ${({ theme }) =>
    css`
      font-size: ${theme.fontSizes.lg};
      padding: ${spacing(2, 5)};
    `}
`;
