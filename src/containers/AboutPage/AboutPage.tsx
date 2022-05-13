import { DownloadLink } from 'ui/links/DownloadLink'
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
            <DownloadLink href="/resume.pdf">Download Resume</DownloadLink>
          </AboutContent>
        </PageHeading>
      </div>
    </section>
  )
}
