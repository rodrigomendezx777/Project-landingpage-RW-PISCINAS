'use client';
import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;

  .slick-slide {
    transition: all 0.3s ease;
  }

  .slick-slide img {
    width: 100%;
    height: auto;
    object-fit: cover;
    cursor: grab;
  }

  .slick-prev,
  .slick-next {
    z-index: 1;
    color: white; /* Cor dos ícones de navegação */
  }

  .slick-dots {
    bottom: 10px; /* Posicionamento dos dots */
    cursor: inherit;
  }

  .slick-dots li button:before {
    font-size: 12px; /* Tamanho dos dots */
    color: white; /* Cor dos dots */
    opacity: 0.5; /* Opacidade dos dots inativos */
  }

  .slick-dots li.slick-active button:before {
    opacity: 1; /* Opacidade do dot ativo */
  }
`;

const BannerCarousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Comece com um slide
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
    autoplay: true, // Habilitar rolagem automática
    autoplaySpeed: 3000, // Velocidade da rolagem automática
    responsive: [
      {
        breakpoint: 768, // Para telas menores que 768px
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024, // Para telas entre 768px e 1024px
        settings: {
          slidesToShow: 2, // Mostrar 2 slides
        },
      },
      {
        breakpoint: 1440, // Para telas entre 1024px e 1440px
        settings: {
          slidesToShow: 1, // Mostrar 1 slide
        },
      },
    ],
  };

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <img src={src} alt={`Banner ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </CarouselContainer>
  );
};

export default BannerCarousel;
