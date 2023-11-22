import SectionTitle from '@/components/SectionTitle';
import SliderClients from '@/components/SliderClients';
import Container from './Container';
import Section from './Section';

interface IProps {
  dictionary: {
    title: string;
    reviews: {
      name: string;
      review: string;
    }[];
  };
}

export default function ClientSection({ dictionary }: IProps) {
  const { title, reviews } = dictionary;

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
