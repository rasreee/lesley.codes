import { Modal, ModalProps } from '@ui/components/Modal/Modal';
import SearchIcon from '@ui/icons/SearchIcon';
import { ChangeEventHandler, useEffect, useRef, useState } from 'react';

import { mockSearchHits } from './mocks';
import { SearchHit } from './SearchHit';

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

interface SearchDropdownProps {
  data: SearchHit[];
}

const SearchDropdown = ({ data }: SearchDropdownProps) => {
  return (
    <div>
      <ul>
        {data.map((searchHit: SearchHit) => (
          <li key={searchHit.id}>{searchHit.title}</li>
        ))}
      </ul>
    </div>
  );
};

type SearchModalProps = Omit<ModalProps, 'children'>;

const SearchModal = (props: SearchModalProps) => {
  const [query, setQuery] = useState('');

  return (
    <Modal {...props}>
      <SearchBar query={query} onQueryChange={setQuery} />
      <SearchDropdown data={mockSearchHits} />
    </Modal>
  );
};

export default SearchModal;
