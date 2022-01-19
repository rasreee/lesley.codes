import { useEffect, useRef, useState } from 'react';

export function useInputFocus(autoFocus = false) {
  const ref = useRef<HTMLInputElement | null>(null);

  /* Auto-focus input upon mounting */
  useEffect(() => {
    if (!autoFocus) return;
    ref.current?.focus();
    focus();
  }, []);

  const [isFocused, setIsFocused] = useState(autoFocus);

  const onFocus = () => setIsFocused(true);
  const onBlur = () => setIsFocused(false);

  return { isFocused, ref, onFocus, onBlur };
}
