import PortfolioCard from '@/components/PortfolioCard';
import Container from '@/layouts/Container';
import Section from './Section';
import SectionHeader from '../components/SectionHeader';
import { Locale } from '@/i18n-config';
import { getDictionary } from '@/get-dictionary';

interface IProps {
  lang: Locale;
}

export default async function PortfolioSection({ lang }: IProps) {
  const dictionary = await getDictionary(lang);

  return (
    <Section>
      <Container>
        <SectionHeader>{dictionary.portfolio.sectionTitle}</SectionHeader>
        <div className="flex flex-col items-center gap-10 md:items-stretch md:gap-12 lg:gap-[60px]">
          <PortfolioCard
            imageUrl="/images/portfolio/userPage.jpg"
            data={dictionary.portfolio.userPage}
          />
          <PortfolioCard
            imageUrl="/images/portfolio/adminPage.jpg"
            data={dictionary.portfolio.adminPage}
            changeFlexDirection={true}
          />
          <PortfolioCard
            imageUrl="/images/portfolio/backend.jpg"
            data={dictionary.portfolio.backend}
          />
        </div>
      </Container>
    </Section>
  );
}
