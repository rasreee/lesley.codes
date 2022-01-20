import { registerSearch } from '@db/searches';
import { useColorMode } from '@features/colorMode/useColorMode';
import { useInputFocus } from '@ui/hooks/useInputFocus';
import SearchIcon from '@ui/icons/SearchIcon';
import { ChangeEventHandler, useEffect } from 'react';

import * as S from './SearchField.styles';

const MIN_QUERY_LENGTH = 3;

export interface SearchFieldProps {
  query: string;
  onChange: (value: string) => void;
}

export const SearchField = ({ query, onChange }: SearchFieldProps) => {
  const { isFocused, ...bindInput } = useInputFocus(true);

  useEffect(() => {
    if (query.length < MIN_QUERY_LENGTH) return;

    registerSearch(query);
  }, [query]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) =>
    onChange(event.currentTarget.value);

  const colorMode = useColorMode();

  return (
    <S.InputGroup mode={colorMode} isFocused={isFocused}>
      <S.Input
        onChange={handleChange}
        aria-label="Search articles"
        type="text"
        placeholder="Search articles"
        mode={colorMode}
        {...bindInput}
      />
      <SearchIcon />
    </S.InputGroup>
  );
};
