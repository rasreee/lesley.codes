import 'styles/global.css'

import { useAnalytics } from 'lib/analytics'
import supabase, { SupabaseContext } from 'lib/supabase'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Seo from 'ui/Seo'

function App({ Component, pageProps }: AppProps) {
  useAnalytics()

  return (
    <>
      <SupabaseContext.Provider value={supabase}>
        <ThemeProvider attribute="class">
          <Seo />
          <Component {...pageProps} />
        </ThemeProvider>
      </SupabaseContext.Provider>
    </>
  )
}

export default App
