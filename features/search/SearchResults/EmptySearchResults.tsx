import { css } from '@emotion/react';
import styled from '@emotion/styled';

const EmptySearchResults = () => (
  <SContainer>
    <SHeading>No results found</SHeading>
    <SBody>
      We can’t find anything with that term at the moment, try searching something else.
    </SBody>
  </SContainer>
);

const SContainer = styled.div`
  padding: 3.75rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  text-align: center;
`;

const SHeading = styled.span`
  ${({ theme }) =>
    css`
      color: ${theme.colors.gray[800]};
      font-size: ${theme.fontSizes['lg']};
      font-weight: ${theme.fontWeights.medium};
    `}
`;
const SBody = styled.span`
  ${({ theme }) =>
    css`
      color: ${theme.colors.gray[600]};
    `}
`;

export default EmptySearchResults;
