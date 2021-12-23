import classNames from 'classnames'
import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <h1
      className={classNames(
        'text md:text-3xl lg:text-4xl font-bold tracking-tighter md:leading-tight mb-12 text-center md:text-left'
      )}
    >
      {children}
    </h1>
  )
}

export default PostTitle
