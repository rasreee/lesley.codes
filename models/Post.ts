export interface IPost {
  slug: string
  image: string
  title: string
  excerpt: string
  publishedAt: string
  content: string
}

export const allPostFields = ['slug', 'image', 'title', 'excerpt', 'publishedAt', 'content']
