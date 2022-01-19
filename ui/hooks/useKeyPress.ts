import { useKeyboardEvent } from './useKeyboardEvent';

export enum EventKeys {
  ARROW_DOWN = 'ArrowDown',
  ARROW_UP = 'ArrowUp',
  ARROW_RIGHT = 'ArrowRight',
  ENTER = 'Enter',
  SPACE = 'Space',
  TAB = 'Tab',
  BACKSPACE = 'Backspace',
  CONTROL = 'Control',
  META = 'Meta',
  HOME = 'Home',
  END = 'End',
  PAGE_DOWN = 'PageDown',
  DELETE = 'Delete',
  ESCAPE = 'Escape',
  SHIFT = 'Shift'
}

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
        passive: true
      }
    }
  );
}
