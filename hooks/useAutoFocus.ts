import { MutableRefObject, useEffect } from 'react';

import { useKeyPress } from './useKeyPress';

export const useAutoFocus = (
  ref: MutableRefObject<HTMLInputElement | null>
) => {
  useEffect(() => {
    ref.current?.focus();
  }, []);

  useKeyPress('Escape', () => {
    ref.current?.blur();
  });
};
