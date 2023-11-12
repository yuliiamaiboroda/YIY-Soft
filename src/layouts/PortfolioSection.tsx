import PortfolioCard from '@/components/PortfolioCard';
import Container from '@/layouts/Container';
import Section from './Section';
import SectionHeader from '../components/SectionHeader';

interface IProps {}

export default function PortfolioSection({}: IProps) {
  return (
    <Section>
      <Container>
        <SectionHeader>Portfolio</SectionHeader>
        <div className="flex flex-col gap-10 md:gap-12 lg:gap-[60px]">
          <PortfolioCard />
          <PortfolioCard changeFlexDirection={true} />
        </div>
      </Container>
    </Section>
  );
}
