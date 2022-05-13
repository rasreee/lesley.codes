import { Project } from 'modules/contents/projects'
import { getTechnologyIcon } from 'modules/contents/technology'
import { ViewsMeta } from 'modules/contents/ui/ViewsMeta'
import { SpaceBetweenFlex } from 'ui/atoms/flex'
import { IconButton } from 'ui/buttons/IconButton'
import { ResponsiveCardTitle } from 'ui/card'
import { ExpandIcon } from 'ui/icons/ExpandIcon'

import { useProjectModal } from '../contexts'
import * as S from './styles'

export const ProjectCard = (project: Project) => {
  const { title, description, tags, slug } = project

  const { setSelectedProject } = useProjectModal()

  const onRequestExpand = () => {
    setSelectedProject(project)
  }

  return (
    <S.Container onClick={onRequestExpand}>
      <S.TextCol>
        <ResponsiveCardTitle>{title}</ResponsiveCardTitle>
        {Array.isArray(tags) && (
          <S.TechnologiesMeta>
            {tags.map((technology) => (
              <IconButton
                key={technology.name}
                icon={getTechnologyIcon(technology.name)}
              />
            ))}
          </S.TechnologiesMeta>
        )}
        <S.DescriptionPreview className="card-description">
          {description}
        </S.DescriptionPreview>
      </S.TextCol>
      <SpaceBetweenFlex>
        <ViewsMeta type="project" slug={slug} />
        <IconButton icon={ExpandIcon} onClick={onRequestExpand} />
      </SpaceBetweenFlex>
    </S.Container>
  )
}
