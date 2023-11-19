import FeatureSectionCard from '@/components/FeatureSectionCard';
import SectionSubtitle from '@/components/SectionSubtitle';
import SectionTitle from '@/components/SectionTitle';
import Container from './Container';
import Section from './Section';
import { Locale } from '@/i18n-config';
import { getDictionary } from '@/get-dictionary';

interface IProps {
  lang: Locale;
}

export default async function FeatureSection({ lang }: IProps) {
  const dictionary = await getDictionary(lang);
  const { title, subtitle, cards } = dictionary.professionalFeature;

  return (
    <Section id="services">
      <Container>
        <SectionTitle>{title}</SectionTitle>
        <SectionSubtitle>{subtitle}</SectionSubtitle>
        <ul className="flex flex-wrap gap-6 lg:flex-nowrap lg:gap-5 ">
          {cards.map(({ iconId, title, description }) => (
            <FeatureSectionCard
              key={iconId}
              iconId={iconId}
              title={title}
              description={description}
            />
          ))}
        </ul>
      </Container>
    </Section>
  );
}
