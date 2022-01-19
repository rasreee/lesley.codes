import { isPast, parseISO } from 'date-fns';
import { useAutoFocus } from 'hooks/useAutoFocus';
import { useDebouncedState } from 'hooks/useDebouncedState';
import { BlogFrontmatterWithSlug } from 'lib/frontmatter';
import React, { ChangeEventHandler, useEffect, useMemo, useRef } from 'react';

import { PostFeed } from './PostFeed';
import { SearchIcon } from './SearchIcon';
import { SearchInput } from './SearchInput';
import { Section } from './Section';
import { P } from './Typography';
interface SearchablePostFeedProps {
  posts: BlogFrontmatterWithSlug[];
}

export const SearchablePostFeed: React.FunctionComponent<
  SearchablePostFeedProps
> = ({ posts }) => {
  const [query, setQuery] = useDebouncedState(``, 300);

  const filteredBlogPosts = useMemo(
    () =>
      posts
        .filter((post) =>
          post.title.toLowerCase().includes(query.toLowerCase())
        )
        .filter((post) => isPast(parseISO(post.publishedAt))),
    [posts, query]
  );

  useEffect(() => {
    console.log(`Query: `, query);
  }, [query]);

  const inputRef = useRef<HTMLInputElement | null>(null);

  useAutoFocus(inputRef);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const newValue = event.currentTarget.value;
    setQuery(newValue);
  };

  return (
    <>
      <Section className="relative w-full">
        <SearchInput ref={inputRef} onChange={handleChange} />
        <SearchIcon className="absolute right-3 top-[1.125rem]" />
      </Section>
      {!filteredBlogPosts.length && <P>No posts found.</P>}
      <Section>
        <PostFeed posts={filteredBlogPosts} className="gap-10" />
      </Section>
    </>
  );
};
