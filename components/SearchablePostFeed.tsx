import { BlogFrontmatterWithSlug } from '@lib/frontmatter';
import { useDebouncedState } from '@ui/hooks/useDebouncedState';
import SearchIcon from '@ui/icons/SearchIcon';
import isBefore from 'date-fns/isBefore';
import isPast from 'date-fns/isPast';
import parseISO from 'date-fns/parseISO';
import React, { useMemo } from 'react';

import { PostFeed } from './PostFeed';
import { Section } from './Section';
import { P } from './Typography';
import { WideSearchInput } from './WideSearchInput';

interface SearchablePostFeedProps {
  posts: BlogFrontmatterWithSlug[];
}

export const SearchablePostFeed: React.FunctionComponent<SearchablePostFeedProps> = ({ posts }) => {
  const [query, setQuery] = useDebouncedState(``, 300);

  const sortedAndFilteredPosts = useMemo(
    () =>
      posts
        .filter((post) => post.title.toLowerCase().includes(query.toLowerCase()))
        .filter((post) => isPast(parseISO(post.publishedAt)))
        .sort((a, b) => (isBefore(parseISO(a.publishedAt), parseISO(b.publishedAt)) ? 1 : -1)),
    [posts, query]
  );

  return (
    <>
      <Section className="relative w-full">
        <WideSearchInput query={query} onChange={setQuery} />
        <SearchIcon className="absolute right-3 top-[1.125rem]" />
      </Section>
      {!sortedAndFilteredPosts.length && <P>No posts found.</P>}
      <Section>
        <PostFeed posts={sortedAndFilteredPosts} className="gap-10" />
      </Section>
    </>
  );
};
