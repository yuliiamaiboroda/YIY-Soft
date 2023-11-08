import HeroSection from '@/layouts/HeroSection';
import BusinessSection from '@/layouts/BusinessSection';
import FeatureSection from '@/layouts/FeatureSection';
import BenefitsSection from '@/layouts/BenefitsSection';
import PortfolioSection from '@/layouts/PortfolioSection';
import TeamSection from '@/layouts/TeamSection';
import ClientSection from '@/layouts/ClientSection';
import ContactUsSection from '@/layouts/ContactUsSection';
import TechnologySection from '@/layouts/TechnologySection';

import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';

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
      <TeamSection />
      <ClientSection />
      <ContactUsSection />
      <TechnologySection />
    </main>
  );
}
