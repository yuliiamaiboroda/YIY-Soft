import SectionTitle from '@/components/SectionTitle';
import Container from './Container';
import Section from './Section';
import SliderBenefits from '@/components/SliderBenefits';
import BenefitCount from '@/components/BenefitCount';

interface IProps {}

export default function BenefitsSection({}: IProps) {
  return (
    <Section>
      <Container>
        <div className="lg:gap-18  mb-[74px] justify-evenly md:mb-20 lg:mb-24 lg:flex">
          <SectionTitle className="lg:w-[50%]">
            Why people choose us
          </SectionTitle>
          <div className="lg:w-[40%]">
            <SliderBenefits />
          </div>
        </div>
        <div className="flex max-md:flex-wrap max-md:gap-10 max-md:justify-center ">
          <BenefitCount />
          <BenefitCount />
          <BenefitCount />
          <BenefitCount />
        </div>
      </Container>
    </Section>
  );
}
