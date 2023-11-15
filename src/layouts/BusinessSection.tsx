import SectionSubtitle from '@/components/SectionSubTitle';
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

  return (
    <Section>
      <Container>
        <SectionTitle>Business Process</SectionTitle>
        <SectionSubtitle>
          Empowering Your Business Growth with Cutting-Edge Solutions
        </SectionSubtitle>
        {/* Slider for mobile screens */}
        <div className="block md:hidden">
          <SliderBusiness
            isMobile={true}
            data={dictionary.businessProcess.sliders}
          />
        </div>
        {/* Slider for tablet&desktop screens */}
        <div className="hidden md:block">
          <SliderBusiness data={dictionary.businessProcess.sliders} />
        </div>
      </Container>
    </Section>
  );
}
