import { isPast, parseISO } from 'date-fns';
import { useKeyPress } from 'hooks/useKeyPress';
import { cn } from 'lib/classnames';
import { BlogFrontmatterWithSlug } from 'lib/frontmatter';
import React, { useEffect, useRef, useState } from 'react';

import { PostFeed } from './PostFeed';
import { Section } from './Section';
import { P } from './Typography';

export interface SearchablePostFeedProps {
  posts: BlogFrontmatterWithSlug[];
}

export const SearchablePostFeed: React.FunctionComponent<
  SearchablePostFeedProps
> = ({ posts }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useKeyPress('Escape', () => {
    inputRef.current?.blur();
  });

  const [searchValue, setSearchValue] = useState('');

  const filteredBlogPosts = posts
    .filter((post) =>
      post.title.toLowerCase().includes(searchValue.toLowerCase())
    )
    .filter((post) => isPast(parseISO(post.publishedAt)));

  return (
    <>
      <Section className="relative w-full">
        <input
          ref={inputRef}
          aria-label="Search articles"
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search articles"
          className={cn(
            'bg-white dark:bg-gray-800',
            'block w-full px-4 py-2 text-gray-900 border border-gray-200 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:text-gray-100'
          )}
        />
        <SearchIcon />
      </Section>
      {!filteredBlogPosts.length && <P>No posts found.</P>}
      <Section>
        <PostFeed posts={filteredBlogPosts} className="gap-10" />
      </Section>
    </>
  );
};

export const SearchIcon = () => {
  return (
    <svg
      className={cn(
        'w-5 h-5 text-gray-400 dark:text-gray-300',
        'absolute right-3 top-[1.125rem]'
      )}
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
    </svg>
  );
};
