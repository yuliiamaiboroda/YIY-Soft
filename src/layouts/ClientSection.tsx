import SectionTitle from '@/components/SectionTitle';
import SliderClients from '@/components/SliderClients';
import Container from './Container';
import Section from './Section';
import { Locale } from '@/i18n-config';
import { getDictionary } from '@/get-dictionary';

interface IProps {
  lang: Locale;
}

export default async function ClientSection({ lang }: IProps) {
  const dictionary = await getDictionary(lang);
  const { title, reviews } = dictionary.clientSection;

  return (
    <div>
      <Section>
        <Container>
          <SectionTitle>{title}</SectionTitle>
          <SliderClients data={reviews} />
        </Container>
      </Section>
    </div>
  );
}
