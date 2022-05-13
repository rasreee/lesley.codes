import { useRegisterContentView } from 'modules/contents/hooks'
import { Project } from 'modules/contents/projects'
import { getTechnologyIcon } from 'modules/contents/technology'
import { HStack, VStack } from 'ui/atoms/stack'
import { CloseIconButton } from 'ui/buttons/CloseIconButton'
import { IconButton } from 'ui/buttons/IconButton'
import { Modal } from 'ui/Modal'

import { useProjectModal } from '../contexts'
import { ProjectLinks } from '../ProjectLinks'
import { DemoImage } from './DemoImage'
import { LiveDemoLink } from './LiveDemoLink'
import {
  BottomMetaContainer,
  Demo,
  MetaLabel,
  ModalBody,
  ModalHeader,
  ModalTitle,
  Paragraph,
  ProjectDetailsContainer,
} from './ProjectModal.styles'

const ProjectDetailsBottomMeta = ({ project }: { project: Project }) => (
  <BottomMetaContainer>
    <VStack gap={1.5}>
      <MetaLabel>{'Technologies:'}</MetaLabel>
      <HStack gap={4}>
        {project.tags.map((technology) => (
          <IconButton
            key={technology.name}
            icon={getTechnologyIcon(technology.name)}
          />
        ))}
      </HStack>
    </VStack>
    <VStack gap={1.5}>
      <MetaLabel>{'Links:'}</MetaLabel>
      <ProjectLinks links={project.links} />
    </VStack>
  </BottomMetaContainer>
)

const ProjectDetails = ({
  project,
  onRequestClose,
}: {
  project: Project
  onRequestClose: () => void
}) => {
  useRegisterContentView({ type: 'project', slug: project.slug })

  return (
    <ProjectDetailsContainer>
      <ModalHeader>
        <ModalTitle>{project.title}</ModalTitle>
        <CloseIconButton onClick={onRequestClose} />
      </ModalHeader>
      <ModalBody>
        <Demo>
          {project.gifSrc && <DemoImage src={project.gifSrc} />}
          {!project.gifSrc && project.imageSrc && (
            <DemoImage src={project.imageSrc} />
          )}
          {project.websiteUrl && (
            <LiveDemoLink websiteUrl={project.websiteUrl} />
          )}
        </Demo>
        <Paragraph>{project.description}</Paragraph>
        <ProjectDetailsBottomMeta project={project} />
      </ModalBody>
    </ProjectDetailsContainer>
  )
}

export const ProjectModal = () => {
  const { selectedProject, setSelectedProject } = useProjectModal()

  const onRequestClose = () => {
    setSelectedProject(null)
  }

  return (
    <Modal isOpen={Boolean(selectedProject)} onRequestClose={onRequestClose}>
      <ProjectDetails
        project={selectedProject!}
        onRequestClose={onRequestClose}
      />
    </Modal>
  )
}
