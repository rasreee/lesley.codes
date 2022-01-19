import Modal from '@ui/components/Modal';
import { createContext, ReactNode, useContext, useState } from 'react';

interface ISearchModalContext {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const SearchModalContext = createContext<ISearchModalContext | undefined>(
  undefined
);

export function useSearchModal() {
  const context = useContext(SearchModalContext);
  if (!context)
    throw new Error('SearchModalContext must be defined to use useSearchModal');
  return context;
}

type SearchModalProviderProps = { children: ReactNode };

const SearchModalProvider = ({ children }: SearchModalProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(true);

  return (
    <SearchModalContext.Provider value={{ isOpen, open, close }}>
      {children}
      <Modal isOpen={isOpen} onClose={close}>
        <h1>Search Modal</h1>
      </Modal>
    </SearchModalContext.Provider>
  );
};

export default SearchModalProvider;
