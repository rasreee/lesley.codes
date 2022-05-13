import { useEffect, useRef, useState } from 'react'

interface UseFocusResult {
  isFocused: boolean
  ref: React.MutableRefObject<HTMLElement | null>
  onFocus: () => void
  onBlur: () => void
}

function useFocus<T extends HTMLElement = HTMLElement>(
  autoFocus = false,
): UseFocusResult {
  const [isFocused, setIsFocused] = useState(autoFocus)

  const ref = useRef<T | null>(null)

  /* Auto-focus upon mounting */
  useEffect(() => {
    if (!autoFocus) return
    ref.current?.focus()
    focus()
  }, [])

  const onFocus = () => setIsFocused(true)
  const onBlur = () => setIsFocused(false)

  return { isFocused, ref, onFocus, onBlur }
}

export { useFocus }

export type { UseFocusResult }
