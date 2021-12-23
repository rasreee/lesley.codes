import { getAllPosts, getPostBySlug } from 'lib/api'
import markdownToHtml from 'lib/markdownToHtml'
import { normalizeQueryParam } from 'lib/query'
import { useViews } from 'lib/viewsApi'
import { IPost } from 'models/post'
import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import Page from 'ui/Page'
import { Post } from 'ui/post'

type Props = {
  post: IPost
  morePosts: IPost[]
  preview?: boolean
}

export default function PostRoute({ post }: Props) {
  const router = useRouter()

  let param = 'slug' in router.query ? router.query['slug'] : null
  const slug = param ? normalizeQueryParam(param) : null
  const { views, error } = useViews(slug)

  if (error) {
    return <ErrorPage statusCode={404} />
  }

  if (!views) {
    return null
  }

  return (
    <Page title={post.title} description={post.excerpt}>
      {router.isFallback ? (
        <Post.Title>Loading…</Post.Title>
      ) : (
        <>
          <article className="mb-32">
            <Post.Header title={post.title} excerpt={post.excerpt} image={post.image} publishedAt={post.publishedAt} />
            <Post.Body content={post.content} />
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
  const post = getPostBySlug(params.slug, ['title', 'image', 'excerpt', 'publishedAt', 'content'])
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
