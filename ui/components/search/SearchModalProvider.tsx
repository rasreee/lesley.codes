import Modal from '@ui/components/Modal';
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';

interface ISearchModalContext {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const SearchModalContext = createContext<ISearchModalContext | undefined>(
  undefined
);

type SearchModalProviderProps = { children: ReactNode };

const SearchModalProvider = ({ children }: SearchModalProviderProps) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <SearchModalContext.Provider value={{ open, setOpen }}>
      {children}
      <Modal isOpen={open} onClose={handleClose}>
        <h1>Search Modal</h1>
      </Modal>
    </SearchModalContext.Provider>
  );
};

export default SearchModalProvider;
