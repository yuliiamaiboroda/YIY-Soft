'use client';

import Slider from 'react-slick';
import { benefitsSliderSettings } from '@/helpers/constants/benefits-slider-settings';
import BenefitCard from './BenefitCard';

interface IProps {
  data: { title: string; subtitle: string; description: string }[];
}

export default function SliderBenefits({ data }: IProps) {
  const settings = benefitsSliderSettings;

  return (
    <Slider {...settings} autoplay={true} autoplaySpeed={4000}>
      {data.map(({ title, subtitle, description }, index) => (
        <BenefitCard
          key={index}
          title={title}
          subtitle={subtitle}
          description={description}
        />
      ))}
    </Slider>
  );
}
