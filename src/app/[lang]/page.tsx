import { Locale } from '@/i18n-config';
import { getDictionary } from '@/get-dictionary';
import HeroSection from '@/layouts/HeroSection';
import BusinessSection from '@/layouts/BusinessSection';
import FeatureSection from '@/layouts/FeatureSection';
import BenefitsSection from '@/layouts/BenefitsSection';
import PortfolioSection from '@/layouts/PortfolioSection';
import ClientSection from '@/layouts/ClientSection';
import ContactUsSection from '@/layouts/ContactUsSection';

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dicitonary = await getDictionary(lang);
  return (
    <main>
      <HeroSection lang={lang} />
      <BusinessSection lang={lang} />
      <FeatureSection />
      <BenefitsSection lang={lang} />
      <PortfolioSection lang={lang} />
      <ClientSection lang={lang} />
      <ContactUsSection dictionary={dicitonary.contactsSection} />
    </main>
  );
}
