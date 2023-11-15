'use client';

import Slider from 'react-slick';
import { sliderSettings } from '@/helpers/constants/slider-settings';
import BusinessProcessCard from '@/components/BusinessProcessCard';

interface IProps {
  isMobile?: boolean;
  data: {
    [key: string]: { number: string; title: string; description: string };
  };
}

export default function SliderBusiness({ isMobile = false, data }: IProps) {
  const settings = sliderSettings;

  return (
    <>
      {isMobile ? (
        <Slider {...settings}>
          <div>
            <BusinessProcessCard data={data.slide01} />
            <BusinessProcessCard data={data.slide02} />
          </div>
          <div>
            <BusinessProcessCard data={data.slide03} />
            <BusinessProcessCard data={data.slide04} />
          </div>
          <div>
            <BusinessProcessCard data={data.slide05} />
            <BusinessProcessCard data={data.slide06} />
          </div>
          <div>
            <BusinessProcessCard data={data.slide07} />
            <BusinessProcessCard data={data.slide08} />
          </div>
          <div>
            <BusinessProcessCard data={data.slide09} />
            <BusinessProcessCard data={data.slide10} />
          </div>
          <div>
            <BusinessProcessCard data={data.slide11} />
            <BusinessProcessCard data={data.slide12} />
          </div>
        </Slider>
      ) : (
        <Slider {...settings}>
          <BusinessProcessCard data={data.slide01} />
          <BusinessProcessCard data={data.slide02} />
          <BusinessProcessCard data={data.slide03} />
          <BusinessProcessCard data={data.slide04} />
          <BusinessProcessCard data={data.slide05} />
          <BusinessProcessCard data={data.slide06} />
          <BusinessProcessCard data={data.slide07} />
          <BusinessProcessCard data={data.slide08} />
          <BusinessProcessCard data={data.slide09} />
          <BusinessProcessCard data={data.slide10} />
          <BusinessProcessCard data={data.slide11} />
          <BusinessProcessCard data={data.slide12} />
        </Slider>
      )}
    </>
  );
}
