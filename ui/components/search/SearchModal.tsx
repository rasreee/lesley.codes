import { Modal, ModalProps } from '../Modal';

const SearchModal = (props: Omit<ModalProps, 'children'>) => {
  return (
    <Modal {...props}>
      <h1>Search Modal</h1>
    </Modal>
  );
};

export default SearchModal;
