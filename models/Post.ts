export type PostMetaData = {
  slug: string
  image: string
  title: string
  summary: string
  publishedAt: string
}

export type IPost = PostMetaData & { content: string }
