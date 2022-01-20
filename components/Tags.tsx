import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Span } from '@ui/components/Typography';
import { pseudo } from '@ui/utils/pseudo';
import classNames from 'classnames';
import { useMemo } from 'react';

type TagsProps = { tags: string; className?: string };

export const Tags: React.FC<TagsProps> = ({ tags, className }) => {
  const parsedTags = useMemo(() => tags.replace('{', '').replace('}', '').split(','), [tags]);

  return (
    <ul className={classNames(className, 'flex gap-2 items-center', 'overflow-auto')}>
      {parsedTags.map((tag) => (
        <li key={tag}>
          <SContainer>
            <SText>{tag}</SText>
          </SContainer>
        </li>
      ))}
    </ul>
  );
};

const SContainer = styled.div`
  display: flex;
  align-items: center;

  padding-top: 0.25rem /* 4px */ !important;
  padding-bottom: 0.25rem /* 4px */ !important;
  padding-left: 0.625rem /* 10px */ !important;
  padding-right: 0.625rem /* 10px */ !important;

  cursor: pointer;
  ${({ theme }) => css`
    border-radius: ${theme.radii.DEFAULT};
    background: ${theme.color.muted};

    font-size: ${theme.fontSizes.xs};
    font-weight: ${theme.fontWeights.medium};
  `}
`;

const SText = styled(Span)`
  margin: auto unset;
  ${({ theme }) =>
    css`
      color: ${theme.color.textHint};
      ${pseudo('_hover')} {
        color: ${theme.color.textHintHover};
      }
    `}
`;
