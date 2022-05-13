import { useFocus } from 'lib/hooks/useFocus'

import { SearchIcon } from './SearchIcon'
import * as S from './styles'

interface SearchBarProps {
  query: string
  onQueryChange: (query: string) => any
}

export const SearchBar: React.FC<SearchBarProps> = ({
  query,
  onQueryChange,
}) => {
  const { isFocused, ...bindInput } = useFocus<HTMLInputElement>(true)

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    onQueryChange(e.currentTarget.value)
  }

  return (
    <S.Container isFocused={isFocused}>
      <S.Input
        placeholder="Search..."
        {...bindInput}
        value={query}
        onChange={handleChange}
      />
      <SearchIcon />
    </S.Container>
  )
}
