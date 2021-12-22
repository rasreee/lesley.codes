import BlogLayout from 'layouts/blog'
import { getAllPosts, getPostBySlug } from 'lib/api'
import markdownToHtml from 'lib/markdownToHtml'
import { IPost } from 'models/post'
import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import Page from 'ui/Page'
import PostBody from 'ui/post-body'
import PostHeader from 'ui/post-header'
import PostTitle from 'ui/post-title'

type Props = {
  post: IPost
  morePosts: IPost[]
  preview?: boolean
}

export default function Post({ post, morePosts, preview }: Props) {
  const router = useRouter()

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Page title={post.title} description={post.summary}>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article className="mb-32">
            <PostHeader
              title={post.title}
              coverImage={post.image}
              date={post.publishedAt}
              author={{ name: 'Lesley Chang', picture: 'avatar.png' }}
            />
            <PostBody content={post.content} />
          </article>
        </>
      )}
    </Page>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, ['title', 'image', 'title', 'summary', 'publishedAt', 'content'])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content
      }
    }
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug
        }
      }
    }),
    fallback: false
  }
}
