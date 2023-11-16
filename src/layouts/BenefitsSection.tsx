import SectionTitle from '@/components/SectionTitle';
import Container from './Container';
import Section from './Section';
import SliderBenefits from '@/components/SliderBenefits';
import BenefitCount from '@/components/BenefitCount';
import { Locale } from '@/i18n-config';
import { getDictionary } from '@/get-dictionary';

interface IProps {
  lang: Locale;
}

export default async function BenefitsSection({ lang }: IProps) {
  const dictionary = await getDictionary(lang);
  const { title, benefits, counters } = dictionary.benefitsSection;

  return (
    <Section>
      <Container>
        <div className="lg:gap-18 mb-[74px] justify-evenly md:mb-20 lg:mb-24 lg:flex">
          <SectionTitle className="lg:w-[50%]">{title}</SectionTitle>
          <div className="lg:w-[40%]">
            <SliderBenefits data={benefits}/>
          </div>
        </div>
        <div className="flex max-md:flex-wrap max-md:justify-center max-md:gap-10 ">
          {counters.map(({ count, title }) => (
            <BenefitCount key={title} count={count} title={title} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
