import { Section } from '@components/Section';
import { H1 } from '@components/Typography';
import SearchModalToggle from '@ui/components/search/SearchModalToggle';

const Playground = () => {
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
