import { AppConfig } from 'lib/AppConfig'
import { DefaultSeo } from 'next-seo'

const Seo = (): JSX.Element => {
  return <DefaultSeo {...AppConfig} />
}

export default Seo
