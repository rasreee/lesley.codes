import { ContainerFC } from 'lib/react'

import Footer from './Footer'
import Header from './Header'

export const Layout: ContainerFC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
