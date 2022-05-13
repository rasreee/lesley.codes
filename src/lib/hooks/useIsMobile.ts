import { isMobile } from 'lib/environment'
import { useMemo } from 'react'

export const useIsMobile = () => useMemo(isMobile, [])
