'use client';

import Slider from 'react-slick';
import BusinessProcessCard from '@/components/BusinessProcessCard';
import SectionSubtitle from '@/components/SectionSubTitle';
import SectionTitle from '@/components/SectionTitle';
import Container from './Container';
import Section from './Section';
import { sliderSettings } from '@/helpers/constants/slider-settings';

interface IProps {}

export default function BusinessSection({}: IProps) {
  const settings = sliderSettings;

  return (
    <Section>
      <Container>
        <SectionTitle>Business Process</SectionTitle>
        <SectionSubtitle>
          Empowering Your Business Growth with Cutting-Edge Solutions
        </SectionSubtitle>
        <Slider {...settings} className="">
          <BusinessProcessCard />
          <BusinessProcessCard />
          <BusinessProcessCard />
          <BusinessProcessCard />
          <BusinessProcessCard />
          <BusinessProcessCard />
        </Slider>
      </Container>
    </Section>
  );
}
