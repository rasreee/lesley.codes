import { cn } from 'lib/classnames';
import { BlogFrontmatterWithSlug } from 'lib/frontmatter';

import { DateFormatter } from './DateFormatter';
import { NavLink } from './NavLink';
import { Tags } from './Tags';
import { H3, P } from './Typography';
import { ViewsStat } from './ViewsStat';

export const BlogPostCard: React.FC<
  BlogFrontmatterWithSlug & { slug: string }
> = ({ publishedAt, slug, title, description, tags }) => {
  return (
    <NavLink href={`/blog/${slug}`}>
      <article
        className={cn('cursor-pointer', 'flex flex-col gap-3 justify-center')}
      >
        <section className="flex flex-col gap-2">
          <H3>{title}</H3>
        </section>
        <section className="mb-1">
          <P>{description}</P>
        </section>
        <Tags tags={tags} />
        <section className="flex items-center justify-start gap-6">
          <P color="text-hint" size="text-sm">
            <DateFormatter dateString={publishedAt} />
          </P>
          <ViewsStat slug={slug} />
        </section>
      </article>
    </NavLink>
  );
};