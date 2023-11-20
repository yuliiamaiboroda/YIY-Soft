'use client';

import Slider from 'react-slick';
import { clientsSliderSettings } from '@/helpers/constants/clients-slider-settings';
import ClientCard from './ClientCard';

interface IProps {
  data: { name: string; review: string }[];
}

export default function SliderClients({ data }: IProps) {
  const settings = clientsSliderSettings;

  return (
    <Slider {...settings}>
      {data.map(({ name, review }) => (
        <ClientCard key={name} name={name} review={review} />
      ))}
    </Slider>
  );
}
