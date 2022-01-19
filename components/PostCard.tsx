import { BlogFrontmatter } from '@lib/frontmatter';
import DateFormatter from '@ui/components/DateFormatter';

import { Tags } from './Tags';
import { H3, P } from './Typography';
import { ViewsStat } from './ViewsStat';

const PostCard = ({ createdAt, slug, title, description, tags }: BlogFrontmatter) => {
  return (
    <article className={'flex flex-col gap-3 justify-center py-5'}>
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
  );
};

export default PostCard;
