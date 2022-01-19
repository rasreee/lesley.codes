import SearchIcon from '@ui/icons/SearchIcon';
import { ChangeEventHandler, useEffect, useRef } from 'react';

interface SearchBarProps {
  query: string;
  onQueryChange: (query: string) => void;
}

const SearchBar = ({ query, onQueryChange }: SearchBarProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  /* Auto-focus input upon mounting */
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) =>
    onQueryChange(event.currentTarget.value);

  return (
    <div>
      <label>
        <SearchIcon />
      </label>
      <input
        ref={inputRef}
        type="search"
        name="search"
        placeholder="Search"
        value={query}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
