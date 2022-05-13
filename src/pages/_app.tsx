import 'styles/globals.css'

import { Global, ThemeProvider } from '@emotion/react'
import { ContainerFC } from 'lib/react'
import { ProjectModalProvider } from 'modules/projects/contexts'
import { AppProps } from 'next/app'
import { globalStyles, theme } from 'ui/theme'

const Providers: ContainerFC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <ProjectModalProvider>{children}</ProjectModalProvider>
    </ThemeProvider>
  )
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  // Use the layout defined at the page level, if available
  const getLayout = (Component as any).getLayout || ((page: any) => page)

  return <Providers>{getLayout(<Component {...pageProps} />)}</Providers>
}

export default MyApp
