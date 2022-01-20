import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useGetOrCreateContentMeta } from '@features/blog/api/contents';
import { P } from '@ui/atoms';
import EyeIcon from '@ui/icons/EyeIcon';
import { useEffect } from 'react';

const ViewsCount = ({ slug }: { slug: string }) => {
  const { data, error } = useGetOrCreateContentMeta(slug);

  useEffect(() => {
    if (error) {
      console.log('❌ ERROR: ', error);
    }
  }, [error]);

  return (
    <>
      {data?.views ?? '--'}
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
