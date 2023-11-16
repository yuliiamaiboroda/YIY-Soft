'use client';

import Slider from 'react-slick';
import { benefitsSliderSettings } from '@/helpers/constants/benefits-slider-settings';
import BenefitCard from './BenefitCard';

interface IProps {
  data?: {
    [key: string]: { number: string; title: string; description: string };
  };
}

export default function SliderBenefits({ data }: IProps) {
  const settings = benefitsSliderSettings;

  return (
    <Slider {...settings} >
      <BenefitCard />
      <BenefitCard />
    </Slider>
  );
}
