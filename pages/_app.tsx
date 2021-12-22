import 'styles/global.css'

import { useAnalytics } from 'lib/analytics'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Seo from 'ui/Seo'

function App({ Component, pageProps }: AppProps) {
  useAnalytics()

  return (
    <>
      <ThemeProvider attribute="class">
        <Seo />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
