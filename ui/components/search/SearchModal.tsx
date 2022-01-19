import { Modal, ModalProps } from '@ui/components/Modal/Modal';
import SearchIcon from '@ui/icons/SearchIcon';

type SearchModalProps = Omit<ModalProps, 'children'>;

const SearchBar = () => {
  return (
    <div>
      <label>
        <SearchIcon />
      </label>
      <input type="search" name="search" placeholder="Search" />
    </div>
  );
};

const SearchDropdown = () => {
  return (
    <div>
      <ul>SearchDropdown</ul>
    </div>
  );
};

const SearchModal = (props: SearchModalProps) => {
  return (
    <Modal {...props}>
      <SearchBar />
      <SearchDropdown />
    </Modal>
  );
};

export default SearchModal;
