import { HomePage, HomePageProps } from 'containers/HomePage'
import { sortContentByDate } from 'lib/content'
import { getAllFilesFrontmatter } from 'lib/mdx'
import { GetStaticProps } from 'next'
import { getPage } from 'ui/page/getPage'
export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const files = await getAllFilesFrontmatter('blog')
  const recentPosts = sortContentByDate(files)

  return {
    props: { recentPosts },
  }
}

export default getPage(HomePage)
