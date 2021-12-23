import classNames from 'classnames'
import { ReactNode } from 'react'

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
      <DateFormatter dateString={publishedAt} />
    </div>
  )
}

const PostCallout = ({ children }) => {
  return (
    <div className="bg-cultured dark:bg-gray-800 rounded w-full px-4 py-4 max-w-2xl mx-auto">
      <div className="flex items-start gap-3">
        <span className="text-2xl">{'💡'}</span>
        <div className="text markdown align-middle">{children}</div>
      </div>
    </div>
  )
}

type PostBodyProps = {
  content: string
}

const PostBody = ({ content }: PostBodyProps) => {
  return (
    <div className="max-w-2xl mx-auto px-3">
      <div className={classNames('markdown')} dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}

export const Post = ({ children }) => {
  return <div className="flex flex-col items-center gap-6">{children}</div>
}

Post.Header = PostHeader
Post.Title = PostTitle
Post.Callout = PostCallout
Post.Body = PostBody
