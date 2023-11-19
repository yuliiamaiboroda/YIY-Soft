import SectionSubtitle from '@/components/SectionSubtitle';
import SectionTitle from '@/components/SectionTitle';
import SliderBusiness from '@/components/SliderBusiness';
import Container from './Container';
import { Locale } from '@/i18n-config';
import { getDictionary } from '@/get-dictionary';

interface IProps {
  lang: Locale;
}

export default async function BusinessSection({ lang }: IProps) {
  const dictionary = await getDictionary(lang);
  const { title, subtitle, sliders } = dictionary.businessProcess;

  return (
    <section
      className="pb-[50px] pt-[100px] md:pb-[60px] md:pt-[120px]
                lg:pb-[70px] lg:pt-[140px] xl:pb-20 xl:pt-40"
    >
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
    </section>
  );
}
