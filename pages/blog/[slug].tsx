import { getAllPosts, getPostBySlug } from 'lib/api'
import markdownToHtml from 'lib/markdownToHtml'
import { normalizeQueryParam } from 'lib/query'
import { useViews } from 'lib/viewsApi'
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

export default function Post({ post }: Props) {
  const router = useRouter()

  let param = 'slug' in router.query ? router.query['slug'] : null
  const slug = param ? normalizeQueryParam(param) : null
  const { views, error } = useViews(slug)

  if (error) {
    return <ErrorPage statusCode={404} />
  }

  if (!views) {
    return <div>LOADING!!!</div>
  }

  return (
    <Page title={post.title} description={post.excerpt}>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article className="mb-32">
            <PostHeader
              title={post.title}
              image={post.image}
              publishedAt={post.publishedAt}
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
