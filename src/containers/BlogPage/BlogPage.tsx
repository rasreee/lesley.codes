import { sortContentByDate } from 'lib/content'
import { BlogFrontmatter } from 'lib/frontmatters'
import { useDebouncedCallback } from 'lib/hooks/useDebouncedCallback'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { PageDescription, PageHeading, PageTitle } from 'ui/page/page'
import { SearchBar } from 'ui/search/SearchBar'
import { P } from 'ui/typography'

import { EmptyStateContainer, FeedSection } from './styles'
import { ThumbnailPostCard } from './ThumbnailPostCard'

export interface BlogPageProps {
  posts: BlogFrontmatter[]
}

export const BlogPage: React.FC<BlogPageProps> = ({ posts }) => {
  const [query, setQuery] = useState('')

  const [filteredPosts, setFilteredPosts] = useState(posts)

  const submitQuery = useDebouncedCallback(
    (query: string) => {
      setFilteredPosts(
        sortContentByDate(
          posts.filter(
            (post) =>
              post.title.toLowerCase().includes(query.toLowerCase()) ||
              post.description.toLowerCase().includes(query.toLowerCase()),
          ),
        ),
      )
    },
    [posts],
    200,
  )

  useEffect(() => {
    submitQuery(query)
  }, [query, submitQuery])

  return (
    <>
      <section>
        <div className="container">
          <PageHeading>
            <PageTitle>Blog</PageTitle>
            <PageDescription>
              {
                "Notes and tutorials about the technology I've been working with."
              }
            </PageDescription>
          </PageHeading>
        </div>
      </section>
      <section>
        <div className="container">
          <SearchBar query={query} onQueryChange={setQuery} />
        </div>
      </section>
      <section>
        <div className="container">
          {filteredPosts.length ? (
            <FeedSection>
              {filteredPosts.map((item) => (
                <Link key={item.slug} href={`/blog/${item.slug}`}>
                  <a>
                    <ThumbnailPostCard {...item} />
                  </a>
                </Link>
              ))}
            </FeedSection>
          ) : (
            <EmptyStateContainer>
              <P>No posts found.</P>
            </EmptyStateContainer>
          )}
        </div>
      </section>
    </>
  )
}
