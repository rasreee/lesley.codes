import { BlogPostPage } from 'containers/BlogPostPage'
import invariant from 'lib/invariant'
import { ContentInfo, getFileBySlug, getFiles } from 'lib/mdx'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getPage } from 'ui/page/getPage'

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getFiles('blog')

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<ContentInfo> = async ({
  params,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const post = await getFileBySlug('blog', params?.slug as string)
  invariant(post, 'post not found for slug: ' + params?.slug)

  const props: ContentInfo = {
    code: post.code,
    frontmatter: post.frontmatter,
  }

  return { props }
}

export default getPage(BlogPostPage)
