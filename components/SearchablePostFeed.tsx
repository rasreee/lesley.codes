import { isPast, parseISO } from 'date-fns';
import { useAutoFocus } from 'hooks/useAutoFocus';
import { useDebouncedState } from 'hooks/useDebouncedState';
import { cn } from 'lib/classnames';
import { BlogFrontmatterWithSlug } from 'lib/frontmatter';
import React, {
  ChangeEventHandler,
  forwardRef,
  InputHTMLAttributes,
  Ref,
  SVGProps,
  useEffect,
  useMemo,
  useRef,
} from 'react';

import { PostFeed } from './PostFeed';
import { Section } from './Section';
import { P } from './Typography';

const SearchIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      className={cn(className, 'w-5 h-5 text-gray-400 dark:text-gray-300')}
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

const SearchInput = forwardRef(
  (
    props: InputHTMLAttributes<HTMLInputElement>,
    ref: Ref<HTMLInputElement>
  ) => {
    return (
      <input
        ref={ref}
        aria-label="Search articles"
        type="text"
        placeholder="Search articles"
        className={cn(
          'bg-white dark:bg-gray-800',
          'border border-gray-200 dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500',
          'w-full',
          'text',
          'rounded-md',
          'px-4 py-2'
        )}
        {...props}
      />
    );
  }
);

SearchInput.displayName = `SearchInput`;

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
