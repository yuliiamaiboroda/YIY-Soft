import PortfolioCard from '@/components/PortfolioCard';
import Container from '@/layouts/Container';
import Section from './Section';
import SectionTitle from '@/components/SectionTitle';
import { Locale } from '@/i18n-config';
import { getDictionary } from '@/get-dictionary';

interface IProps {
  lang: Locale;
}

export default async function PortfolioSection({ lang }: IProps) {
  const dictionary = await getDictionary(lang);

  return (
    <Section id="portfolio">
      <Container>
        <SectionTitle>{dictionary.portfolio.sectionTitle}</SectionTitle>
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
