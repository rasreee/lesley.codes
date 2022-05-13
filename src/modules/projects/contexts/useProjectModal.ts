import invariant from 'lib/invariant'
import { useContext } from 'react'

import {
  IProjectModalContext,
  ProjectModalContext,
} from './ProjectModalContext'

export function useProjectModal(): IProjectModalContext {
  const context = useContext(ProjectModalContext)
  invariant(
    context,
    'useProjectModal called when ProjectModalContext was undefined',
  )
  return context
}
