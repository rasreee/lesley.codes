import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { smallerThan } from '@ui/utils/breakpoints';
import { spacing } from '@ui/utils/spacing';
import classnames from 'classnames';

export interface ErrorMessageProps {
  children: string | Falsy;
  className?: string;
}

export const ErrorMessage = ({ children, className, ...props }: ErrorMessageProps) => {
  if (!children) return null;

  return (
    <SFlex
      className={classnames(
        className,
        'text-base !text-red-600',
        'flex flex-row items-center gap-1'
      )}
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="ErrorMessage"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span className="ErrorMessage">{children}</span>
    </SFlex>
  );
};

const SFlex = styled.div`
  display: flex;
  align-items: center;

  ${({ theme }) =>
    css`
      color: ${theme.colors.red[600]};
      font-size: ${theme.fontSizes.md};
      ${smallerThan('tablet')} {
        font-size: ${theme.fontSizes.sm};
      }
      line-height: 1.5;
      align-items: flex-start;
      justify-content: space-between;
      width: 100%;
      gap: ${spacing(3)};
      padding: ${spacing(2, 0)};

      svg.ErrorMessage {
        margin-top: ${spacing(1)};
        min-height: 1.25em;
        height: 1.25em;
        min-width: 1.25em;
        width: 1.25em;
      }

      span.ErrorMessage {
        max-width: 90%;
        margin: auto 0;
      }
    `}
`;
