import React, { FC, ReactNode } from 'react';

export interface ModalProps {
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

export const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return <div>{children}</div>;
};
