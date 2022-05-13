import { css } from '@emotion/react'
import { getDateMeta } from 'lib/content'
import { BlogFrontmatter } from 'lib/frontmatters'
import { ViewsMeta } from 'modules/contents/ui/ViewsMeta'
import Image from 'next/image'
import { DateMeta } from 'ui/date/DateMeta'
import { AboveSm } from 'ui/responsive'

import {
  CardText,
  ThumbnailCard,
  ThumbnailCardDescription,
  ThumbnailCardTitle,
  ThumbnailImageContainer,
  thumbnailImageSize,
} from './styles'

const ThumbnailPostCard: React.FC<BlogFrontmatter> = (props) => {
  const { title, description, image, slug } = props

  return (
    <ThumbnailCard>
      <AboveSm>
        <ThumbnailImageContainer>
          <Image
            className="thumbnail"
            alt="thumbnail"
            width={thumbnailImageSize.width}
            height={thumbnailImageSize.height}
            objectFit="cover"
            src={image}
          />
        </ThumbnailImageContainer>
      </AboveSm>
      <CardText>
        <ThumbnailCardTitle>{title}</ThumbnailCardTitle>
        <ThumbnailCardDescription>{description}</ThumbnailCardDescription>
        <div
          css={css`
            display: flex;
            align-items: center;
            gap: 1.5rem;
          `}
        >
          <DateMeta date={getDateMeta(props)} />
          <ViewsMeta type="blog" slug={slug} />
        </div>
      </CardText>
    </ThumbnailCard>
  )
}

export { ThumbnailPostCard }
