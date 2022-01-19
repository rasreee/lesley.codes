import React, { FC, ReactNode } from 'react';

interface IModalProps {
  /**
   * Indicates whether modal is visible or not
   */
  isOpen: boolean;
  /**
   * Handler to call when modal should be closed
   */
  onClose: () => void;
  /**
   * Children of modal
   */
  children: ReactNode;
}

const Modal: FC<IModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return <div>{children}</div>;
};

export default Modal;
