import { cn } from '@lib/classnames';
import { BlogFrontmatterWithSlug } from '@lib/frontmatter';
import DateFormatter from '@ui/components/DateFormatter';
import { useRouter } from 'next/router';

import { Tags } from './Tags';
import { H3, P } from './Typography';
import { ViewsStat } from './ViewsStat';

const buttonStyles =
  'text-base font-semibold text-gray-500 hover:text-gray-900 dark:hover:text-gray-200 transition-all';

interface BlogPostCardProps extends BlogFrontmatterWithSlug {}

export const BlogPostCard: React.FC<BlogPostCardProps> = ({
  createdAt,
  slug,
  title,
  description,
  tags
}) => {
  const router = useRouter();

  const handleClick = () => {
    console.log('Selected post: ', slug);
    router.push(`/post/${slug}`);
  };

  return (
    <button className={buttonStyles} onClick={handleClick}>
      <article className={cn('cursor-pointer', 'flex flex-col gap-3 justify-center')}>
        <section className="flex flex-col gap-2">
          <H3>{title}</H3>
        </section>
        <section className="mb-1">
          <P>{description}</P>
        </section>
        <Tags tags={tags} />
        <section className="flex items-center justify-start gap-6">
          <P color="text-hint" size="text-sm">
            <DateFormatter date={createdAt} />
          </P>
          <ViewsStat slug={slug} />
        </section>
      </article>
    </button>
  );
};
