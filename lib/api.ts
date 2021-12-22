import fs from 'fs'
import matter from 'gray-matter'
import { IPost, PostMetaData } from 'models/post'
import { join, resolve } from 'path'

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export const DEBUG_LOG = resolve(__dirname, '../debug.log')

export function getPostBySlug(slug: string, fields: string[] = []): IPost {
  console.log(`👋 getPostBySlug():\nslug=${slug}\nfields=${fields.join(', ')}`)

  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)

  try {
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

    console.log('post: ', post)

    return post
  } catch (err) {
    const msg = `[ERROR] getPostBySlug() failed when calling fs.readFileSync() on path ${fullPath}`
    console.error(msg)
    fs.appendFileSync(DEBUG_LOG, msg)
    throw new Error(msg)
  }
}

export function getAllPosts(fields: string[] = []): IPost[] {
  const slugs = getPostSlugs()

  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.publishedAt > post2.publishedAt ? -1 : 1))

  return posts
}
