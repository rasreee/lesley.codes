import { isPast, parseISO } from 'date-fns';
import { useDebouncedState } from 'hooks/useDebouncedState';
import { BlogFrontmatterWithSlug } from 'lib/frontmatter';
import React, { useMemo } from 'react';

import { PostFeed } from './PostFeed';
import { SearchIcon } from './SearchIcon';
import { SearchInput } from './SearchInput';
import { Section } from './Section';
import { P } from './Typography';

export interface SearchablePostFeedProps {
  posts: BlogFrontmatterWithSlug[];
}

export const SearchablePostFeed: React.FunctionComponent<
  SearchablePostFeedProps
> = ({ posts }) => {
  const [searchValue, setSearchValue] = useDebouncedState('', 300);

  const filteredBlogPosts = useMemo(
    () =>
      posts
        .filter((post) =>
          post.title.toLowerCase().includes(searchValue.toLowerCase())
        )
        .filter((post) => isPast(parseISO(post.publishedAt))),
    [posts, searchValue]
  );

  return (
    <>
      <Section className="relative w-full">
        <SearchInput value={searchValue} onChange={setSearchValue} />
        <SearchIcon className="absolute right-3 top-[1.125rem]" />
      </Section>
      {!filteredBlogPosts.length && <P>No posts found.</P>}
      <Section>
        <PostFeed posts={filteredBlogPosts} className="gap-10" />
      </Section>
    </>
  );
};
