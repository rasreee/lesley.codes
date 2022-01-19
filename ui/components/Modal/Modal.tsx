import { useClickOutside } from '@ui/hooks/useClickOutside';
import { EventKeys, useKeyPress } from '@ui/hooks/useKeyPress';
import React, { FC, ReactNode, useRef } from 'react';

import * as S from './styles';

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

  useClickOutside(ref, onClose);

  useKeyPress(EventKeys.ESCAPE, onClose);

  if (!isOpen) return null;

  return (
    <S.Backdrop>
      <S.Container ref={ref}>{children}</S.Container>
    </S.Backdrop>
  );
};
