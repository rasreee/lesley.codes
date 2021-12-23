import Callout from './Callout'
import DateFormatter from './DateFormatter'
import { H1, P } from './typography'

type PostHeaderProps = {
  title: string
  image: string
  publishedAt: string
}

const PostHeader = ({ title, image, publishedAt }: PostHeaderProps) => {
  return (
    <div className="max-w-2xl mx-auto flex flex-col gap-6">
      <H1>{title}</H1>
      <DateFormatter className="text-cerulean-500" pattern="LLLL d, yyyy" dateString={publishedAt} />
    </div>
  )
}

type PostBodyProps = {
  content: string
}

const PostBody = ({ content }: PostBodyProps) => {
  return (
    <div className="max-w-2xl mx-auto">
      <P dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}

export const Post = ({ children }) => {
  return <div className="flex flex-col items-center gap-6">{children}</div>
}

Post.Header = PostHeader
Post.Callout = Callout
Post.Body = PostBody
