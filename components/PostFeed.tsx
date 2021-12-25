import { cn } from 'lib/classnames';
import { BlogFrontmatterWithSlug } from 'lib/frontmatter';
import React from 'react';

import { BlogPostCard } from './BlogPostCard';

export interface PostFeedProps {
  posts: BlogFrontmatterWithSlug[];
  className?: string;
}

export const PostFeed: React.FunctionComponent<PostFeedProps> = ({
  posts,
  className,
}) => {
  return (
    <ul className={cn(className, 'flex flex-col')}>
      {posts.map((post) => (
        <BlogPostCard key={post.title} {...post} />
      ))}
    </ul>
  );
};
