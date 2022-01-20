import { Tags } from '@components/Tags';
import { ViewsStat } from '@components/ViewsStat';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Post } from '@models/post';
import DateFormatter from '@ui/components/DateFormatter';
import { H3, P } from '@ui/components/Typography';

const PostCard = ({ createdAt, slug, title, description, tags }: Post['frontMatter']) => {
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
        <SText>
          <DateFormatter date={createdAt} />
        </SText>
        <ViewsStat slug={slug} />
      </section>
    </article>
  );
};

const SText = styled(P)`
  ${({ theme }) =>
    css`
      color: ${theme.color.textHint};
      font-size: ${theme.fontSizes.sm};
    `}
`;

export default PostCard;
