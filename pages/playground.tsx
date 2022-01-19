import Layout from '@components/Layout';
import { Section } from '@components/Section';
import { H1 } from '@components/Typography';
import { AppConfig } from '@lib/appConfig';

const Playground = () => {
  return (
    <Layout meta={AppConfig.meta}>
      <Section>
        <H1>{'Dev Playground'}</H1>
      </Section>
    </Layout>
  );
};

export default Playground;
