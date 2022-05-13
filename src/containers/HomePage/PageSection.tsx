import { ContainerFC } from 'lib/react'

export const PageSection: ContainerFC = ({ children }) => {
  return (
    <section>
      <div className="container">{children}</div>
    </section>
  )
}
