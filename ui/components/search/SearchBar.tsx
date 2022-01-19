import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useInputFocus } from '@ui/hooks/useInputFocus';
import SearchIcon from '@ui/icons/SearchIcon';
import { smallerThan } from '@ui/utils/breakpoints';
import { ChangeEventHandler } from 'react';

interface SearchBarProps {
  query: string;
  onQueryChange: (query: string) => void;
}

const SearchBar = ({ query, onQueryChange }: SearchBarProps) => {
  const { isFocused, ...bindInput } = useInputFocus(true);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) =>
    onQueryChange(event.currentTarget.value);

  return (
    <SContainer isFocused={isFocused}>
      <SLabel htmlFor="search">
        <SearchIcon />
      </SLabel>
      <SInput
        type="search"
        name="search"
        placeholder="Search"
        value={query}
        onChange={handleChange}
        {...bindInput}
      />
    </SContainer>
  );
};

const SContainer = styled.div<{ isFocused: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  ${({ theme, isFocused }) =>
    isFocused &&
    css`
      border: 1px solid ${theme.colors.blue[500]};
      border-radius: ${theme.radii.md};
      box-shadow: ${theme.shadows.sm};
    `}
`;

const SLabel = styled.label`
  ${({ theme }) =>
    css`
      color: ${theme.colors.gray[600]};
    `}
`;

const SInput = styled.input`
  display: block;
  width: 100%;
  border: none !important;

  ${({ theme }) => css`
    font-size: ${theme.fontSizes.base};

    ${smallerThan('mobile')} {
      font-size: ${theme.fontSizes.sm};
    }
  `}
`;

export default SearchBar;
