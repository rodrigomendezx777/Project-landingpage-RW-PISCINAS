'use client'
import React from 'react';
import ImageCarousel from './ImageCarousel';
import { CtaWrapper, Title, Description, CtaButton, CarouselContainer,TextContainer } from './CtaSection.style';
import CTAButton1 from './CTABUtton1';
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const CtaSection = () => {
  return (
    <CtaWrapper >
      <TextContainer className={roboto.className}>
        <Title>A PISCINA PERFEITA PARA VOCÊ ESTÁ AQUI</Title>
        <Description>
          Oferecemos as melhores soluções para você. Conheça nossos serviços e veja a diferença no seu bolso.
        </Description>
        {/* <CtaButton href="#contato">Entre em Contato</CtaButton> */}
        <CTAButton1></CTAButton1>
    
      </TextContainer>
      <CarouselContainer>
        <ImageCarousel />
      </CarouselContainer>
    </CtaWrapper>
  );
};

export default CtaSection;
