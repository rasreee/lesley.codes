import classNames from 'classnames'
import { ReactNode } from 'react'

import DateFormatter from './DateFormatter'

type PostHeaderProps = {
  title: string
  excerpt: string
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

const PostHeader = ({ title, image, excerpt, publishedAt }: PostHeaderProps) => {
  return (
    <div className="max-w-2xl mx-auto flex flex-col gap-6">
      <div className="">
        <PostTitle>{title}</PostTitle>
      </div>
      <div className="text-base">
        <DateFormatter dateString={publishedAt} />
      </div>
      <div className="bg-gray-800 rounded-lg w-full p-6">
        <div className="text markdown align-middle">{excerpt}</div>
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
      <div className={classNames('markdown')} dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}

export const Post = ({ children }) => {
  return <div>{children}</div>
}

Post.Header = PostHeader
Post.Title = PostTitle
Post.Body = PostBody
