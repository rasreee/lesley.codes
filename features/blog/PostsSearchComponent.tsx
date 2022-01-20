import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { SearchField, SearchResults } from '@features/search';
import { useDebouncedState } from '@ui/hooks/useDebouncedState';
import { pseudo } from '@ui/utils';
import { useMemo } from 'react';

import PostCard from './PostCard';
import { PostSearchHit } from './postSearchHit';
import { processHits } from './processHits';

interface PostsSearchComponentProps {
  allPosts: Array<PostSearchHit>;
  onHitClick: (hit: PostSearchHit) => void;
}

const PostsSearchComponent = ({ allPosts, onHitClick }: PostsSearchComponentProps) => {
  const [query, setQuery] = useDebouncedState(``, 300);

  const hits = useMemo(() => {
    const newHits = processHits(allPosts, query);
    console.log('NEW HITS: ', newHits);
    return newHits;
  }, [query, allPosts]);

  const renderHitButton = (hit: SearchData) => {
    const getButtonProps = (hit: SearchData) => ({ onClick: () => onHitClick(hit) });

    return (
      <SearchHitButton {...getButtonProps(hit)}>
        <PostCard {...hit} />
      </SearchHitButton>
    );
  };

  return (
    <div className="flex flex-col gap-3 py-5">
      <SearchField query={query} onChange={setQuery} />
      <SearchResults hits={hits} renderHitButton={renderHitButton} />
    </div>
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
