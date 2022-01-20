import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ContentMetaApiResponse } from '@features/blog/api/contents';
import { buildApiUrl } from '@lib/routes';
import { isSWRLoading } from '@lib/swr';
import { useQuery } from '@lib/swr';
import { P } from '@ui/components/Typography';
import EyeIcon from '@ui/icons/EyeIcon';
import { useEffect } from 'react';

const ViewsCount = ({ slug }: { slug: string }) => {
  const { data, error } = useQuery<ContentMetaApiResponse>(buildApiUrl('contents', slug));

  useEffect(() => {
    if (isSWRLoading({ data, error })) return;

    if (data?.contentMeta === null) {
      console.log(`WARNING: no contentMeta found for slug=${slug} in Supabase`);
    }
  }, [data, error, slug]);

  return (
    <>
      {data?.contentMeta?.views ?? '--'}
      {' views'}
    </>
  );
};

export const ViewsStat = ({ slug }: { slug: string }) => {
  return (
    <div className="flex items-center gap-2">
      <EyeIcon />
      <SText>
        <ViewsCount slug={slug} />
      </SText>
    </div>
  );
};

const SText = styled(P)`
  ${({ theme }) =>
    css`
      color: ${theme.color.textHint};
      font-size: ${theme.fontSizes.xs};
      font-weight: ${theme.fontWeights.semibold};
    `}
`;
