import { ContentType } from 'modules/contents/api'

import { ContentDateMeta } from './content'

export interface BlogFrontmatter extends ContentDateMeta {
  slug: string
  title: string
  description: string
  image: string
  tags: string
}

export type PickFrontmatter<T extends ContentType> = T extends 'blog'
  ? BlogFrontmatter
  : ProjectFrontmatter

export type BlogType = {
  code: string
  frontmatter: BlogFrontmatter
}

export interface ProjectFrontmatter extends ContentDateMeta {
  slug: string
  title: string
  description: string
  category?: string
  techs: string
  image: string
  link?: string
  github?: string
  youtube?: string
}

export type ProjectType = {
  code: string
  frontmatter: ProjectFrontmatter
}

export type Frontmatter = BlogFrontmatter | ProjectFrontmatter
