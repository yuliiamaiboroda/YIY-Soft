import HeroSection from '@/layouts/HeroSection';
import BusinessSection from '@/layouts/BusinessSection';
import FeatureSection from '@/layouts/FeatureSection';
import BenefitsSection from '@/layouts/BenefitsSection';
import PortfolioSection from '@/layouts/PortfolioSection';
import TeamSection from '@/layouts/TeamSection';
import ClientSection from '@/layouts/ClientSection';
import ContactUsSection from '@/layouts/ContactUsSection';
import TechnologySection from '@/layouts/TechnologySection';

export default function Home() {
  return (
    <main>
      <HeroSection />
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
