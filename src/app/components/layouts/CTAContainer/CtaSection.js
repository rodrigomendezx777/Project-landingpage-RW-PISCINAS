'use client'
import React from 'react';
import ImageCarousel from './ImageCarousel';
import { CtaWrapper, Title, Description, CtaButton, CarouselContainer,TextContainer } from './CtaSection.style';
import CTAButton1 from './CTABUtton1';

const CtaSection = () => {
  return (
    <CtaWrapper>
      <TextContainer>
        <Title>Transforme Seus Sonhos em Realidade</Title>
        <Description>
          Oferecemos as melhores soluções para você. Conheça nossos serviços e veja a diferença.
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
