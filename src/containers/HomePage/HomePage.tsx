import { BlogFrontmatter } from 'lib/frontmatters'
import { projects } from 'modules/contents/projects'
import { ProjectCard } from 'modules/projects/ProjectCard'

import { PagePreviewSection } from './PagePreviewSection'
import { PreviewPostCard } from './PreviewPostCard'
import { ProfileSection } from './ProfileSection'

export interface HomePageProps {
  recentPosts: BlogFrontmatter[]
}

const FEATURED_PROJECTS = ['rust-labs', 'cmd-k-search-modal', 'pg-data-utils']

export const HomePage: React.FC<HomePageProps> = ({ recentPosts }) => {
  function ProjectsSection() {
    return (
      <PagePreviewSection
        title="Projects"
        pageHref="/projects"
        items={projects.filter((project) =>
          FEATURED_PROJECTS.includes(project.slug),
        )}
        idKey="slug"
        renderItem={ProjectCard}
      />
    )
  }

  function PostsSection() {
    return (
      <PagePreviewSection
        title="Blog"
        pageHref="/blog"
        items={recentPosts as any}
        idKey="slug"
        renderItem={PreviewPostCard}
      />
    )
  }

  return (
    <div className="flex flex-col space-y-6 pb-8">
      <ProfileSection />
      <ProjectsSection />
      <PostsSection />
    </div>
  )
}
