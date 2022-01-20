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
          <div
            className={classNames(
              'cursor-pointer rounded',
              'bg-gray-100 dark:bg-gray-700 dark:bg-opacity-70',
              'flex items-center',
              'py-1 px-2.5'
            )}
          >
            <SText>{tag}</SText>
          </div>
        </li>
      ))}
    </ul>
  );
};

const SText = styled(Span)`
  margin: auto unset;
  ${({ theme }) =>
    css`
      color: ${theme.color.textHint};
      font-size: ${theme.fontSizes.xs};
      font-weight: ${theme.fontWeights.semibold};

      ${pseudo('_hover')} {
        color: ${theme.color.textHintHover};
      }
    `}
`;
