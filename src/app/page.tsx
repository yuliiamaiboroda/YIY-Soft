import HeroSection from '@/components/HeroSection';
import BusinessSection from '@/components/BusinessSection';
import FeatureSection from '@/components/FeatureSection';
import BenefitsSection from '@/components/BenefitsSection';
import PortfolioSection from '@/components/PortfolioSection';
import TeamSection from '@/components/TeamSection';
import ClientSection from '@/components/ClientSection';
import ContactUsSection from '@/components/ContactUsSection';
import TechnologySection from '@/components/TechnologySection';

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
