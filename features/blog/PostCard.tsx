import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Post, ViewsStat } from '@features/blog';
import { H3, P } from '@ui/atoms';
import DateFormatter from '@ui/components/DateFormatter';
import { Tags } from '@ui/components/Tags';

const PostCard = ({ createdAt, slug, title, description, tags }: Post['frontMatter']) => {
  return (
    <article className={'flex flex-col gap-3 justify-center py-5 text-left'}>
      <div className="flex flex-col items-start gap-2">
        <H3>{title}</H3>
        <P>{description}</P>
      </div>
      <div className="pt-1">
        <Tags tags={tags} />
      </div>
      <section className="flex items-center justify-start gap-6">
        <HintText>
          <DateFormatter date={createdAt} />
        </HintText>
        <ViewsStat slug={slug} />
      </section>
    </article>
  );
};

const HintText = styled.div`
  ${({ theme }) =>
    css`
      color: ${theme.color.textHint};
    `}
`;

export default PostCard;
