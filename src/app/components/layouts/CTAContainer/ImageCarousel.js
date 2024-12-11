import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import images from './images';

const ImageCarousel = () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Autoplay]}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image.src} alt={image.alt} style={{ width: '100%', borderRadius: '8px' }} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageCarousel;
