import { BlogFrontmatter } from '@lib/frontmatter';
import DateFormatter from '@ui/components/DateFormatter';
import classNames from 'classnames';
import { useRouter } from 'next/router';

import { Tags } from './Tags';
import { H3, P } from './Typography';
import { ViewsStat } from './ViewsStat';

const buttonStyles = classNames(
  'text-base font-semibold text-gray-500 hover:text-gray-900 dark:hover:text-gray-200 transition-all'
);

export const BlogPostCard = ({ createdAt, slug, title, description, tags }: BlogFrontmatter) => {
  const router = useRouter();

  const handleClick = () => {
    console.log('Selected post: ', slug);
    router.push(`/post/${slug}`);
  };

  return (
    <button className={buttonStyles} onClick={handleClick}>
      <article className={classNames('cursor-pointer', 'flex flex-col gap-3 justify-center')}>
        <div className="flex flex-col items-start gap-2">
          <H3>{title}</H3>
          <P>{description}</P>
        </div>
        <div className="pt-1">
          <Tags tags={tags} />
        </div>
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
