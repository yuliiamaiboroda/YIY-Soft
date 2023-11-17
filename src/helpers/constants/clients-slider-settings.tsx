import styles from './slick.module.css';

export const clientsSliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  dotsClass: `slick-dots ${styles.dots}`,
};
