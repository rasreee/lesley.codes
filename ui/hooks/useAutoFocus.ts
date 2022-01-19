import { MutableRefObject, useEffect } from 'react';

import { EventKeys, useKeyPress } from './useKeyPress';

export const useAutoFocus = (
  ref: MutableRefObject<HTMLInputElement | null>
) => {
  useEffect(() => {
    ref.current?.focus();
  }, []);

  useKeyPress(EventKeys.ESCAPE, () => {
    ref.current?.blur();
  });
};
