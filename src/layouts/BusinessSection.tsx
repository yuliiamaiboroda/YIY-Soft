import SectionSubtitle from '@/components/SectionSubtitle';
import SectionTitle from '@/components/SectionTitle';
import SliderBusiness from '@/components/SliderBusiness';
import Container from './Container';
import Section from './Section';
import { Locale } from '@/i18n-config';
import { getDictionary } from '@/get-dictionary';

interface IProps {
  lang: Locale;
}

export default async function BusinessSection({ lang }: IProps) {
  const dictionary = await getDictionary(lang);
  const { title, subtitle, sliders } = dictionary.businessProcess;
  
  return (
    <Section>
      <Container>
        <SectionTitle>{title}</SectionTitle>
        <SectionSubtitle>{subtitle}</SectionSubtitle>
        {/* Slider for mobile screens */}
        <div className="block md:hidden">
          <SliderBusiness isMobile={true} data={sliders} />
        </div>
        {/* Slider for tablet&desktop screens */}
        <div className="hidden md:block">
          <SliderBusiness data={sliders} />
        </div>
      </Container>
    </Section>
  );
}
