import { useEffect, useState } from 'react';
import { Modal, ModalProps } from 'ui/components/Modal';

import { getSearchResultsForQuery } from './getSearchResultsForQuery';
import SearchBar from './SearchBar';
import { SearchResultData } from './SearchResultData';
import SearchResults from './SearchResults';

type SearchModalProps = Omit<ModalProps, 'children'>;

const SearchModal = (props: SearchModalProps) => {
  const [query, setQuery] = useState('');
  const [hits, setHits] = useState<SearchResultData[]>([]);

  useEffect(() => {
    getSearchResultsForQuery(query).then(setHits);
  }, [query]);

  return (
    <Modal {...props}>
      <SearchBar query={query} onQueryChange={setQuery} />
      <SearchResults data={hits} />
    </Modal>
  );
};

export default SearchModal;
