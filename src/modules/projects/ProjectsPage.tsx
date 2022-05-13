import { VStack } from 'ui/atoms/stack'
import { PageDescription, PageHeading, PageTitle } from 'ui/page/page'

import { projects } from '../contents/projects'
import { ProjectCard } from './ProjectCard'

export const ProjectsPage: React.FC = () => {
  return (
    <>
      <section>
        <div className="container">
          <PageHeading>
            <PageTitle>Projects</PageTitle>
            <PageDescription>
              {
                "Things I've built on my own time for various reasons, including NPM packages, websites, and an admin dashboard that is being used by a small business in Georgia."
              }
            </PageDescription>
          </PageHeading>
        </div>
      </section>
      <section>
        <div className="container">
          <VStack alignItems="center" gap={6}>
            <>
              {projects.map((item) => (
                <ProjectCard key={item.slug} {...item} />
              ))}
            </>
          </VStack>
        </div>
      </section>
    </>
  )
}
