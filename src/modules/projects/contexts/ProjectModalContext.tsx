import { Project } from 'modules/contents/projects'
import { createContext, Dispatch, SetStateAction } from 'react'

export interface IProjectModalContext {
  selectedProject: Project | null
  setSelectedProject: Dispatch<SetStateAction<Project | null>>
  onRequestClose: () => void
}

export const ProjectModalContext = createContext<
  IProjectModalContext | undefined
>(undefined)
