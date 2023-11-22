import SectionSubtitle from '@/components/SectionSubtitle';
import SectionTitle from '@/components/SectionTitle';
import SliderBusiness from '@/components/SliderBusiness';
import Container from './Container';

interface ISlide {
  number: string;
  title: string;
  description: string;
}

interface IProps {
  dictionary: {
    title: string;
    subtitle: string;
    sliders: {
      slide01: ISlide;
      slide02: ISlide;
      slide03: ISlide;
      slide04: ISlide;
      slide05: ISlide;
      slide06: ISlide;
      slide07: ISlide;
      slide08: ISlide;
      slide09: ISlide;
      slide10: ISlide;
      slide11: ISlide;
      slide12: ISlide;
    };
  };
}

export default function BusinessSection({ dictionary }: IProps) {
  const { title, subtitle, sliders } = dictionary;

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
