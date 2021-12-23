import Author from '../types/author'
import CoverImage from './cover-image'
import DateFormatter from './DateFormatter'
import PostTitle from './post-title'

type Props = {
  title: string
  image: string
  publishedAt: string
  author: Author
}

const PostHeader = ({ title, image, publishedAt, author }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={image} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg">
          <DateFormatter dateString={publishedAt} />
        </div>
      </div>
    </>
  )
}

export default PostHeader
