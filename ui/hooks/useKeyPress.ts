import { useKeyboardEvent } from './useKeyboardEvent';

export type EventKeys =
  | 'ArrowDown'
  | 'ArrowUp'
  | 'ArrowLeft'
  | 'ArrowRight'
  | 'Enter'
  | 'Space'
  | 'Tab'
  | 'Backspace'
  | 'Control'
  | 'Meta'
  | 'Home'
  | 'End'
  | 'PageDown'
  | 'PageUp'
  | 'Delete'
  | 'Escape'
  | ' '
  | 'Shift';

export function useKeyPress(key: EventKeys, callback: () => void) {
  useKeyboardEvent(
    true,
    (e) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      e.key === key && callback();
    },
    [],
    {
      eventOptions: {
        passive: true,
      },
    }
  );
}
