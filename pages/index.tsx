import { BlogSearch } from '@components/BlogSearch';
import Meta from '@components/Meta';
import { Section } from '@components/Section';
import { H1, P } from '@components/Typography';
import { AppConfig } from '@lib/appConfig';
import NextLink from '@ui/components/NextLink';
import RightArrowIcon from '@ui/icons/RightArrowIcon';

const Index = () => {
  return (
    <>
      <Meta />
      <Section>
        <H1>{AppConfig.meta.title}</H1>
        <P>{AppConfig.meta.description}</P>
      </Section>
      <Section>
        <BlogSearch />
      </Section>
      <Section>
        <NextLink href="/blog" className="flex mt-8">
          Read all posts
          <RightArrowIcon />
        </NextLink>
      </Section>
    </>
  );
};

export default Index;
