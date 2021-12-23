import classNames from 'classnames'
import { HTMLAttributes } from 'react'

export const H1 = ({ children }) => {
  return <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl text">{children}</h1>
}

export const H3 = ({ children }) => {
  return <h3 className={classNames('text text-xl md:text-2xl', 'mt-8 mb-4 font-bold tracking-tight')}>{children}</h3>
}

export const H4 = ({ children, className, ...props }) => {
  return (
    <h4 className={classNames('text mb-2 text-lg font-medium', className)} {...props}>
      {children}
    </h4>
  )
}

export const P: React.FC<HTMLAttributes<HTMLParagraphElement>> = ({ children, className, ...props }) => {
  return (
    <p className={classNames('text-lg text', className)} {...props}>
      {children}
    </p>
  )
}
