import { useClickOutside } from '@ui/hooks/useClickOutside';
import React, { FC, ReactNode, useRef } from 'react';

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
  const ref = useRef<HTMLDivElement | null>(null);

  useClickOutside(ref, () => {
    console.log('👈 clicked outside');
    onClose();
  });

  if (!isOpen) return null;

  return <div ref={ref}>{children}</div>;
};
