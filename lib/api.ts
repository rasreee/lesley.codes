import fs from 'fs'
import matter from 'gray-matter'
import { IPost, PostMetaData } from 'models/post'
import { join } from 'path'

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug: string, fields: string[] = []): IPost {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const post = {} as IPost

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      post[field] = realSlug
    }

    if (field === 'content') {
      post[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      post[field] = data[field]
    }
  })

  return post
}

export function getAllPosts(fields: string[] = []): IPost[] {
  const slugs = getPostSlugs()

  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.publishedAt > post2.publishedAt ? -1 : 1))

  return posts
}
