import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ColorModeProps } from '@features/colorMode/types';
import { useColorMode } from '@features/colorMode/useColorMode';
import { useInputFocus } from '@ui/hooks/useInputFocus';
import SearchIcon from '@ui/icons/SearchIcon';
import { StyledProps } from '@ui/utils/emotion';
import { registerSearch } from 'db/searches';
import { ChangeEventHandler, useEffect } from 'react';

import { BaseInput, BaseInputGroup } from './common';

const MIN_QUERY_LENGTH = 3;

export interface SearchFieldProps {
  query: string;
  onChange: (value: string) => void;
}

export const SearchField = (props: SearchFieldProps) => {
  const { isFocused, ...bindInput } = useInputFocus(true);

  const { query, onChange } = props;

  useEffect(() => {
    if (query.length < MIN_QUERY_LENGTH) return;

    registerSearch(query).then((response) => console.log('🔍 Registered search: ', response));
  }, [query]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const newValue = event.currentTarget.value;
    onChange(newValue);
  };

  const colorMode = useColorMode();

  return (
    <SInputGroup mode={colorMode} isFocused={isFocused}>
      <SInput
        onChange={handleChange}
        aria-label="Search articles"
        type="text"
        placeholder="Search articles"
        mode={colorMode}
        {...bindInput}
      />
      <SearchIcon />
    </SInputGroup>
  );
};

export type FocusedProps = { isFocused: boolean };

const inputColorStyle = ({ theme, mode, isFocused }: StyledProps<ColorModeProps & FocusedProps>) =>
  isFocused
    ? css`
        color: ${theme.colors.gray[mode === 'light' ? 800 : 50]} !important;
      `
    : css`
        color: ${theme.colors.gray[mode === 'light' ? 900 : 300]} !important;
      `;

const SInputGroup = styled(BaseInputGroup)<ColorModeProps & FocusedProps>`
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

const SInput = styled(BaseInput)<ColorModeProps>`
  border: none;
  background: none;
`;
