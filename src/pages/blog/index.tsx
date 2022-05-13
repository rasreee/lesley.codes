import { BlogPage, BlogPageProps } from 'containers/BlogPage'
import { sortContentByDate } from 'lib/content'
import { getAllFilesFrontmatter } from 'lib/mdx'
import { GetStaticProps } from 'next'
import { getPage } from 'ui/page/getPage'

export const getStaticProps: GetStaticProps<BlogPageProps> = async () => {
  const files = await getAllFilesFrontmatter('blog')
  const posts = sortContentByDate(files)

  return {
    props: { posts },
  }
}

export default getPage(BlogPage)
