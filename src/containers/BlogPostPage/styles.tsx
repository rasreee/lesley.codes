import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Image, { ImageProps } from 'next/image'
import { rem } from 'ui/lib/size'
import { responsiveGap } from 'ui/lib/space'

export const MDXPostContainer = styled.div(
  ({ theme }) => css`
    html {
      font-size: 16px;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: var(--font-heading);
      line-height: 1.125;
      font-weight: ${theme.fontWeights.bold};
    }

    p,
    span {
      font-family: var(--font-body);
      line-height: 1.5;
    }

    h1 {
      font-size: ${theme.fontSizes['3xl']};
    }

    h2 {
      font-size: ${theme.fontSizes['2xl']};
    }

    h3 {
      font-size: ${theme.fontSizes['xl']};
    }

    h4 {
      font-size: ${theme.fontSizes['lg']};
    }

    h5 {
      font-size: ${theme.fontSizes['md']};
    }

    h6 {
      font-size: ${theme.fontSizes['md']};
    }

    code {
      border: solid 1px var(--tx-accent);
      border-radius: 5px;
      padding: 2px 5px;
      font-size: 14px;
      font-weight: 500;
    }

    ul {
      padding-left: 20px;
    }

    ol {
      padding-left: 20px;
    }

    article {
      margin-left: auto !important;
      margin-right: auto !important;
    }
  `,
)

export const MDXPostTitle = styled.h1`
  word-break: keep-all;
`

export const MDXPostDate = styled.span(
  ({ theme }) =>
    css`
      font-size: ${theme.fontSizes.sm};
      font-weight: 300;
      word-break: keep-all;
    `,
  ({ theme }) =>
    css`
      color: ${theme.colors.hint};
    `,
)

const thumbnailSize = { height: 300, width: 300 }

export const PostFront = styled.div(
  css`
    display: flex;
    flex-direction: column;
  `,
  responsiveGap(12, 16, 20),
)

export const PostBody = styled.div(
  css`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  `,
)

export const RoundedImageContainer = styled.div(
  css`
    width: 100%;
    min-width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    overflow: hidden;
    max-height: ${rem(thumbnailSize.height)};
    &.post-image {
      height: ${rem(thumbnailSize.height)};
    }
  `,
  ({ theme }) =>
    css`
      border-radius: ${theme.radii.md};
    `,
)

export const PostImage: React.FC<ImageProps> = (props) => {
  return (
    <RoundedImageContainer>
      <Image
        alt="post-image"
        {...props}
        height={rem(thumbnailSize.height)}
        width={rem(thumbnailSize.width)}
        className="post-image"
        objectFit="cover"
      />
    </RoundedImageContainer>
  )
}
