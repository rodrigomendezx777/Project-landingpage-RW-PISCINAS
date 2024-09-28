'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';  // Importação dos estilos básicos do Swiper
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { TestimonialContainer, TestimonialItem, TestimonialText, AuthorInfo, Avatar, Name } from './TestimonialCarousel.style';
import { useState } from 'react';

// Definição do tipo para os dados de cada testemunho
interface Testimonial {
  id: number;
  text: string;
  name: string;
  avatar: string;
}

// Props do componente
interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialCarousel = ({ testimonials }: TestimonialCarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (swiper: any) => {
    setCurrentSlide(swiper.activeIndex);
  };

  return (
    <TestimonialContainer>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 1000 }}
        loop={true}
        pagination={{ clickable: true }}
        onSlideChange={handleSlideChange}
        navigation
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <TestimonialItem>
              <TestimonialText>{testimonial.text}</TestimonialText>
              <AuthorInfo>
                <Avatar src={testimonial.avatar} alt={`${testimonial.name} avatar`} />
                <Name>{testimonial.name}</Name>
              </AuthorInfo>
            </TestimonialItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </TestimonialContainer>
  );
};

export default TestimonialCarousel;
