import BlogLayout from 'layouts/blog'
import { getAllPosts, getPostBySlug } from 'lib/api'
import fetcher from 'lib/fetcher'
import markdownToHtml from 'lib/markdownToHtml'
import { normalizeQueryParam } from 'lib/query'
import { getViews, useViews } from 'lib/viewsApi'
import { IPost } from 'models/post'
import { Views } from 'models/views'
import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import useSWR from 'swr'
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

  let param = 'slug' in router.query ? router.query['slug'] : null
  const slug = param ? normalizeQueryParam(param) : null
  const { views, error } = useViews(slug)

  if (typeof views === 'undefined' && typeof error === 'undefined') {
    return <div>LOADING!!!</div>
  }

  if (error) {
    console.log(`/api/views/${slug} returned error: `, error)

    return <ErrorPage statusCode={404} />
  }

  if (!router.isFallback || !views) {
    return <ErrorPage statusCode={404} />
  }

  console.log('Views: ', views)
  // useEffect(() => {
  //   if (!param) return

  //   const postFetcher = async () => {
  //     setLoading(true)

  //     const rawPost = getPostBySlug(slug, ['title', 'image', 'summary', 'publishedAt', 'content'])
  //     const { content: rawContent, ...restPost } = rawPost
  //     const content = await markdownToHtml(rawContent || '')

  //     setFoundPost({ ...restPost, content })
  //     setLoading(false)
  //   }

  //   postFetcher()
  // }, [param])

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
  const post = getPostBySlug(params.slug, ['title', 'image', 'summary', 'publishedAt', 'content'])
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
