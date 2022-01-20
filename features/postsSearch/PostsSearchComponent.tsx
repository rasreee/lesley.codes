import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { SearchField, SearchResults, useSearch } from '@ui/search';
import { pseudo } from '@ui/utils/pseudo';

import PostCard from './PostCard';
import { PostSearchHit } from './postSearchHit';
import { processHits } from './processHits';

interface PostsSearchComponentProps {
  allData: Array<PostSearchHit>;
  onHitClick: (hit: PostSearchHit) => void;
}

const PostsSearchComponent = ({ allData, onHitClick }: PostsSearchComponentProps) => {
  const { hits, query, setQuery } = useSearch(allData, processHits(allData));

  const renderHitButton = (hit: SearchData) => {
    const getButtonProps = (hit: SearchData) => ({ onClick: () => onHitClick(hit) });

    return (
      <SearchHitButton {...getButtonProps(hit)}>
        <PostCard {...hit} />
      </SearchHitButton>
    );
  };

  return (
    <>
      <SearchField query={query} onChange={setQuery} />
      <SearchResults hits={hits} renderHitButton={renderHitButton} />
    </>
  );
};

const SearchHitButton = styled.button`
  transition-property: all !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
  transition-duration: 150ms !important;

  ${({ theme }) =>
    css`
      color: ${theme.colors.gray[500]};
      font-weight: ${theme.fontWeights.semibold};
      font-size: ${theme.fontSizes.base};

      ${pseudo('_hover')} {
        color: ${theme.colors.gray[900]};
        background: ${theme.colors.gray[100]};
      }
      ${pseudo('_active')} {
        color: ${theme.colors.gray[200]};
        background: ${theme.colors.gray[200]};
      }
    `}
`;

export default PostsSearchComponent;
