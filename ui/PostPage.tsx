import Callout from './Callout'
import DateFormatter from './DateFormatter'
import { H1, P } from './typography'

type PostHeaderProps = {
  title: string
  image: string
  publishedAt: string
}

const CalendarIcon = (props: React.SVGAttributes<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
)

const PostHeader = ({ title, image, publishedAt }: PostHeaderProps) => {
  return (
    <div className="max-w-2xl mx-auto flex flex-col gap-6">
      <H1>{title}</H1>
      <div className="flex items-center gap-1.5 text-cerulean-500 dark:text-cerulean-500">
        <CalendarIcon height={18} width={18} className="text-cerulean-500 text-opacity-40" />
        <DateFormatter pattern="LLLL d, yyyy" dateString={publishedAt} />
      </div>
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

export const PostPage = ({ children }) => {
  return <div className="flex flex-col items-center gap-4">{children}</div>
}

PostPage.Header = PostHeader
PostPage.Title = H1
PostPage.Callout = Callout
PostPage.Body = PostBody
