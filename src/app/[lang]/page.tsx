import { Locale } from '@/i18n-config';
import HeroSection from '@/layouts/HeroSection';
import BusinessSection from '@/layouts/BusinessSection';
import FeatureSection from '@/layouts/FeatureSection';
import BenefitsSection from '@/layouts/BenefitsSection';
import PortfolioSection from '@/layouts/PortfolioSection';
import ClientSection from '@/layouts/ClientSection';
import ContactUsSection from '@/layouts/ContactUsSection';
import TechnologySection from '@/layouts/TechnologySection';

export default function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return (
    <main>
      <HeroSection lang={lang} />
      <p>Current locale: {lang}</p>
      <BusinessSection />
      <FeatureSection />
      <BenefitsSection />
      <PortfolioSection />
      <ClientSection />
      <ContactUsSection />
      <TechnologySection />
    </main>
  );
}
