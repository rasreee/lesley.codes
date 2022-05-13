import { ContainerFC } from 'lib/react'
import { StaticImageData } from 'next/image'
import { DateFormatter } from 'ui/date/DateFormatter'

import {
  MDXPostContainer,
  MDXPostDate,
  MDXPostTitle,
  PostBody,
  PostFront,
  PostImage,
} from './styles'
interface MDXPostProps {
  title: string
  image: StaticImageData | string
  publishedAt: string
}

const MDXPost: ContainerFC<MDXPostProps> = ({
  title,
  image,
  publishedAt,
  children,
}) => {
  return (
    <MDXPostContainer>
      <section>
        <PostFront className="container">
          <PostImage src={image} />
          <MDXPostTitle>{title}</MDXPostTitle>
          <MDXPostDate>
            <DateFormatter date={publishedAt} />
          </MDXPostDate>
        </PostFront>
      </section>
      <section className="container">
        <PostBody>
          <article>{children}</article>
        </PostBody>
      </section>
    </MDXPostContainer>
  )
}

export { MDXPost }
