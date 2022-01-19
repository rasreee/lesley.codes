/* eslint-disable simple-import-sort/imports */
import { useEffect, useMemo, useState } from 'react';

import { useKeyboardEvent } from './useKeyboardEvent';

export function useHotKeys(combo: string, callback: () => void) {
  const [keysPressed, setKeysPressed] = useState<string[]>([]);

  const currentSequence = useMemo(
    () => (keysPressed.length ? keysPressed.join('+') : ''),
    [keysPressed]
  );

  useKeyboardEvent(
    true,
    (e) => setKeysPressed((prev) => prev.slice(-5).concat([e.key])),
    [],
    {
      eventOptions: {
        passive: true,
      },
    }
  );

  useEffect(() => {
    if (currentSequence.includes(combo)) {
      callback();
      setKeysPressed([]);
    }
  }, [currentSequence, combo]);
}
