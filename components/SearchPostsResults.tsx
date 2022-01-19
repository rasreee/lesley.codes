import { useSearch } from '@features/search/useSearch';
import React from 'react';

import { BlogPostCard } from './BlogPostCard';
import { Section } from './Section';

export interface SearchPostsResultsProps {}

export const SearchPostsResults: React.FunctionComponent<SearchPostsResultsProps> = () => {
  const { hits: sortedAndFilteredPosts } = useSearch();

  return (
    <Section>
      <ul className={'flex flex-col gap-10'}>
        {sortedAndFilteredPosts.map((post) => (
          <BlogPostCard key={post.title} {...post} />
        ))}
      </ul>
    </Section>
  );
};
