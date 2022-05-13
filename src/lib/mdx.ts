import { readdirSync, readFileSync } from 'fs'
import matter from 'gray-matter'
import { bundleMDX } from 'mdx-bundler'
import { ContentType } from 'modules/contents/api'
import path from 'path'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrism from 'rehype-prism-plus'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

import { PickFrontmatter } from './frontmatters'

const CONTENT_DIR = path.join(process.cwd(), 'public/content')

export async function getFiles(type: ContentType) {
  return readdirSync(path.join(CONTENT_DIR, type))
}

export type ContentInfo = {
  code: string
  frontmatter: { slug: string }
}

export async function getFileBySlug(
  type: ContentType,
  slug: string,
): Promise<ContentInfo> {
  const source = slug
    ? readFileSync(path.join(CONTENT_DIR, type, `${slug}.mdx`), 'utf8')
    : readFileSync(path.join(CONTENT_DIR, `${type}.mdx`), 'utf8')

  const { code } = await bundleMDX({
    source,
    mdxOptions(options) {
      options.remarkPlugins = [...(options?.remarkPlugins ?? []), remarkGfm]
      options.rehypePlugins = [
        ...(options?.rehypePlugins ?? []),
        rehypeSlug,
        rehypePrism,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ['hash-anchor'],
            },
          },
        ],
      ]
      return options
    },
  })

  return {
    code,
    frontmatter: {
      slug,
    },
  }
}

export async function getAllFilesFrontmatter<T extends ContentType>(type: T) {
  const files = readdirSync(path.join(CONTENT_DIR, type))

  return files.reduce((allPosts: Array<PickFrontmatter<T>>, postSlug) => {
    const source = readFileSync(path.join(CONTENT_DIR, type, postSlug), 'utf8')
    const { data } = matter(source)

    const res = [
      {
        ...(data as PickFrontmatter<T>),
        slug: postSlug.replace('.mdx', ''),
      },
      ...allPosts,
    ]
    return res
  }, [])
}
