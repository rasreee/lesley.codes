import { ContainerFC } from 'lib/react'
import { Project } from 'modules/contents/projects'
import { useState } from 'react'

import ProjectModal from '../ProjectModal'
import { ProjectModalContext } from './ProjectModalContext'

const ProjectModalProvider: ContainerFC = ({ children }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const onRequestClose = () => {
    setSelectedProject(null)
  }

  return (
    <ProjectModalContext.Provider
      value={{ selectedProject, setSelectedProject, onRequestClose }}
    >
      {children}
      <ProjectModal />
    </ProjectModalContext.Provider>
  )
}

export default ProjectModalProvider
