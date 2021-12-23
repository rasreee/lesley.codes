import { getAllPosts } from 'lib/api'
import { Post } from 'modules/post/Post'
import { useState } from 'react'
import Page from 'ui/Page'
import PostPreview from 'ui/post-preview'
import { H1, H3 } from 'ui/typography'

type Props = {
  allPosts: Post[]
}

export default function Blog({ allPosts }: Props) {
  const [searchValue, setSearchValue] = useState('')

  const filteredBlogPosts = allPosts.filter((post) => post.title.toLowerCase().includes(searchValue.toLowerCase()))

  return (
    <Page
      title="Blog – Lesley Chang"
      description="Thoughts on the software industry, programming, tech, videography, music, and my personal life."
    >
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <div className="mb-4">
          <H1>Blog</H1>
        </div>
        <div className="mb-4">
          <p className="mb-4 text-gray-600 dark:text-gray-400 text-body">
            {`I've been writing online since 2014, mostly about web development and tech careers.
            In total, I've written ${allPosts.length} articles on my blog.
            Use the search below to filter by title.`}
          </p>
        </div>
        <div className="relative w-full mb-4">
          <input
            aria-label="Search articles"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search articles"
            className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800  dark:text-gray-100"
          />
          <svg
            className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
            []
          </svg>
        </div>
        {!searchValue && (
          <>
            <H3>Most Popular</H3>
            <PostPreview {...filteredBlogPosts[0]} />
          </>
        )}
        <H3>All Posts</H3>
        {!filteredBlogPosts.length && <p className="mb-4 text-gray-600 dark:text-gray-400">No posts found.</p>}
        {filteredBlogPosts.map((post) => (
          <PostPreview key={post.title} {...post} />
        ))}
      </div>
    </Page>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts()

  return {
    props: { allPosts }
  }
}
