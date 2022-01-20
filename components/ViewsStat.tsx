import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { P } from '@ui/components/Typography';
import EyeIcon from '@ui/icons/EyeIcon';

import { ViewsCount } from './ViewsCount';

export const ViewsStat = ({ slug }: { slug: string }) => {
  return (
    <div className="flex items-center gap-2 text-hint">
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
      font-size: ${theme.fontSizes.sm};
      font-weight: ${theme.fontWeights.semibold};
    `}
`;
