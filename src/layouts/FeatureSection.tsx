import FeatureSectionCard from '@/components/FeatureSectionCard';
import SectionSubtitle from '@/components/SectionSubtitle';
import SectionTitle from '@/components/SectionTitle';
import Container from './Container';
import Section from './Section';

interface IProps {
  dictionary: {
    title: string;
    subtitle: string;
    cards: {
      iconId: string;
      title: string;
      description: string;
    }[];
  };
}

export default function FeatureSection({ dictionary }: IProps) {
  const { title, subtitle, cards } = dictionary;

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
