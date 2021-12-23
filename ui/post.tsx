import classNames from 'classnames'
import { ReactNode } from 'react'

import Callout from './Callout'
import DateFormatter from './DateFormatter'

type PostHeaderProps = {
  title: string
  image: string
  publishedAt: string
}

type PostTitleProps = {
  children?: ReactNode
}

const PostTitle = ({ children }: PostTitleProps) => {
  return (
    <h1
      className={classNames(
        'text md:text-3xl lg:text-4xl font-bold tracking-tighter md:leading-tight text-center md:text-left'
      )}
    >
      {children}
    </h1>
  )
}

const PostHeader = ({ title, image, publishedAt }: PostHeaderProps) => {
  return (
    <div className="max-w-2xl mx-auto flex flex-col gap-6">
      <PostTitle>{title}</PostTitle>
      <DateFormatter className="text-cerulean" pattern="LLLL d, yyyy" dateString={publishedAt} />
    </div>
  )
}

type PostBodyProps = {
  content: string
}

const PostBody = ({ content }: PostBodyProps) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className={classNames('markdown')} dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}

export const Post = ({ children }) => {
  return <div className="flex flex-col items-center gap-6">{children}</div>
}

Post.Header = PostHeader
Post.Title = PostTitle
Post.Callout = Callout
Post.Body = PostBody
