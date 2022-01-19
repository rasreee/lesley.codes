import { useSearchModal } from './SearchModalProvider';

const SearchModalToggle = () => {
  const searchModal = useSearchModal();

  return <button onClick={searchModal.open}>Quick search...</button>;
};

export default SearchModalToggle;
