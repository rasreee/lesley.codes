import { Section } from '@components/Section';
import { H1 } from '@components/Typography';
import { isProduction } from '@lib/environment';
import Redirect from '@ui/components/Redirect';
import SearchModalToggle from '@ui/components/search/SearchModalToggle';

const Playground = () => {
  if (isProduction()) return <Redirect to="/" />;

  return (
    <>
      <Section>
        <H1>{'Dev Playground'}</H1>
      </Section>
      <Section>
        <SearchModalToggle />
      </Section>
    </>
  );
};

export default Playground;
