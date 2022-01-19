import { Modal, ModalProps } from '@ui/components/Modal';
import { useEffect, useState } from 'react';

import { getSearchHitsForQuery } from './getSearchHitsForQuery';
import SearchBar from './SearchBar';
import SearchDropdown from './SearchDropdown';
import { SearchHit } from './SearchHit';

type SearchModalProps = Omit<ModalProps, 'children'>;

const SearchModal = (props: SearchModalProps) => {
  const [query, setQuery] = useState('');
  const [hits, setHits] = useState<SearchHit[]>([]);

  useEffect(() => {
    getSearchHitsForQuery(query).then(setHits);
  }, [query]);

  return (
    <Modal {...props}>
      <SearchBar query={query} onQueryChange={setQuery} />
      <SearchDropdown data={hits} />
    </Modal>
  );
};

export default SearchModal;
