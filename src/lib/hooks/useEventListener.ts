import { RefObject, useEffect, useMemo } from 'react'

import { useIsMounted } from './useIsMounted'
import { useSyncedRef } from './useSyncedRef'

export function useEventListener<T extends EventTarget>(
  target: RefObject<T> | T | null,
  ...params:
    | Parameters<T['addEventListener']>
    | [
        string,
        EventListenerOrEventListenerObject | ((...args: any[]) => any),
        ...any,
      ]
): void {
  const isMounted = useIsMounted()

  // create static event listener
  const listenerRef = useSyncedRef(params[1])

  const eventListener = useMemo<EventListener>(
    () =>
      // as some event listeners designed to be used through `this`
      // it is better to make listener a conventional function as it
      // infers call context
      // eslint-disable-next-line func-names
      function someFn(this: T, ...args) {
        // normally, such situation should not happen, but better to
        // have back covered
        /* istanbul ignore next */
        if (!isMounted()) return

        // we dont care if non-listener provided, simply dont do anything
        /* istanbul ignore else */
        if (typeof listenerRef.current === 'function') {
          listenerRef.current.apply(this, args)
        } else if (
          typeof (listenerRef.current as EventListenerObject).handleEvent ===
          'function'
        ) {
          // eslint-disable-next-line prettier/prettier
          ;(listenerRef.current as EventListenerObject).handleEvent.apply(
            this,
            args,
          )
        }
      },

    [],
  )

  useEffect(() => {
    const tgt = target && 'current' in target ? target.current : target
    if (!tgt) return undefined

    const restParams = params.slice(2)

    tgt.addEventListener(params[0], eventListener, ...restParams)

    return () =>
      tgt.removeEventListener(params[0], eventListener, ...restParams)
  }, [target, params[0]])
}
