import styles from './slick-benefits.module.css';

export const benefitsSliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  dotsClass: `slick-dots ${styles.dots}`,
};
