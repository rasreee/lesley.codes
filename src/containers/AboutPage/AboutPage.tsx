import { PageHeading, PageTitle } from 'ui/page/page'

import { AboutProfileIntro } from './AboutProfileIntro'
import { AboutContent } from './styles'

export const AboutPage: React.FC = () => {
  return (
    <section>
      <div className="container">
        <PageHeading>
          <PageTitle>About</PageTitle>
          <AboutContent>
            <AboutProfileIntro />
          </AboutContent>
        </PageHeading>
      </div>
    </section>
  )
}
