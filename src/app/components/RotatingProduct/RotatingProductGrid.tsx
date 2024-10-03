'use client';

import React from 'react';
import { Section, Title, Marquee, Card, ImageContainer, InfoContainer } from './RotatingProductGrid.styled';
import { piscinas } from './data';

const RotatingProductGrid = () => {
  // Duplicando as piscinas para manter o loop contínuo
  const duplicatedPiscinas = [...piscinas, ...piscinas];

  return (
    <Section>
      <Title>Promoções de Piscinas</Title>
      <Marquee>
        {duplicatedPiscinas.map((pool) => (
          <Card key={pool.id}>
            <ImageContainer>
              <img src={pool.imageUrl} alt={pool.name} />
            </ImageContainer>
            <InfoContainer>
              <h1>{pool.name}</h1>
              <p>{pool.dimensions}</p>
              <p>R$ {pool.price.toLocaleString()}</p>
              <p>
                Ou {pool.installments}x de R$ {pool.installmentPrice.toLocaleString()} sem juros
              </p>
              <p>{pool.description}</p>
            </InfoContainer>
          </Card>
        ))}
      </Marquee>
    </Section>
  );
};

export default RotatingProductGrid;
