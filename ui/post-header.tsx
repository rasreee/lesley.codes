import DateFormatter from './DateFormatter'
import PostTitle from './post-title'

type Props = {
  title: string
  excerpt: string
  image: string
  publishedAt: string
}

const PostHeader = ({ title, image, excerpt, publishedAt }: Props) => {
  return (
    <div className="max-w-2xl mx-auto">
      <PostTitle>{title}</PostTitle>
      <div className="text text-body">{title}</div>

      <div className="mb-6 text-lg">
        <DateFormatter dateString={publishedAt} />
      </div>
    </div>
  )
}

export default PostHeader
