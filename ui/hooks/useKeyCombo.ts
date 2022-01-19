/* eslint-disable simple-import-sort/imports */
import { useEffect, useMemo, useState } from 'react';
import { useKeyboardEvent } from './useKeyboardEvent';
import { EventKeys } from './useKeyPress';

export function useKeyCombo(
  combo: (EventKeys | string)[],
  callback: () => void
) {
  const [keysPressed, setKeysPressed] = useState<string[]>([]);

  const pressedCombo = useMemo(
    () => (keysPressed.length ? keysPressed.join('+') : ''),
    [keysPressed]
  );

  useKeyboardEvent(
    true,
    (e) => {
      setKeysPressed((prev) => prev.slice(-5).concat([e.key]));
    },
    [],
    {
      eventOptions: {
        passive: true,
      },
    }
  );

  useEffect(() => {
    if (pressedCombo.includes(combo.join('+'))) {
      callback();
      setKeysPressed([]);
    }
  }, [keysPressed]);
}
