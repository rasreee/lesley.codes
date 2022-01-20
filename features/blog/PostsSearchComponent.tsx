import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { SearchField, SearchResults, useSearch } from '@features/search';
import { pseudo } from '@ui/utils';

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
  ${({ theme }) =>
    css`
      color: ${theme.color.textHint};
      font-weight: ${theme.fontWeights.semibold};
      font-size: ${theme.fontSizes.base};

      ${pseudo('_hover')} {
        color: ${theme.color.textHintHover};
      }
    `}
`;

export default PostsSearchComponent;
