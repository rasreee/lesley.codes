import classNames from 'classnames'
import { HTMLAttributes } from 'react'

export const H1 = ({ children }) => {
  return <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-4xl dark:text-white">{children}</h1>
}

export const H3 = ({ children }) => {
  return (
    <h3 className={classNames('text-xl md:text-2xl', 'mt-8 mb-4 font-bold tracking-tight text-black dark:text-white')}>
      {children}
    </h3>
  )
}

export const P: React.FC<HTMLAttributes<HTMLParagraphElement>> = ({ children, ...props }) => {
  return (
    <p className={'text-lg text'} {...props}>
      {children}
    </p>
  )
}
