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
  const dictionary = await getDictionary(lang);
  return (
    <main>
      <HeroSection dictionary={dictionary.hero} />
      <BusinessSection dictionary={dictionary.businessProcess} />
      <FeatureSection dictionary={dictionary.professionalFeature} />
      <BenefitsSection dictionary={dictionary.benefitsSection} />
      <PortfolioSection dictionary={dictionary.portfolio} />
      <ClientSection dictionary={dictionary.clientSection} />
      <ContactUsSection dictionary={dictionary.contactsSection} />
    </main>
  );
}
