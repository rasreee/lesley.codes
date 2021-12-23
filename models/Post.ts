export interface PostMetaData {
  slug: string
  image: string
  title: string
  excerpt: string
  publishedAt: string
}

export interface IPost extends PostMetaData {
  content: string
}
