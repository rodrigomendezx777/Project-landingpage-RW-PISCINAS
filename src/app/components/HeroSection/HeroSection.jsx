'use client';

import CustomCarousel from '../layouts/BannerCarousel/BannerCarousel.component';

const slides = [
  { id: 1, image: '/images/banners/banner1.png', alt: 'Banner 1 - Piscina pronta em 2 semanas' },
  { id: 2, image: '/images/banners/banner2.png', alt: 'Banner 2 - Instalação de qualidade e garantia' },
  { id: 3, image: '/images/banners/banner3.png', alt: 'Banner 3 - Orçamento gratuito' },
  { id: 4, image: '/images/banners/banner4.png', alt: 'Banner 4 - Contato imediato' }
];

const HeroSection = () => {
  return (
    <div>
      <CustomCarousel slides={slides} uniqueId="hero-carousel" />
    </div>
  );
};

export default HeroSection;
