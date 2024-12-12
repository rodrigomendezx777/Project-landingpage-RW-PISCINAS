

import React from 'react';
import {
  Card,
  ImageWrapper,
  InfoWrapper,
  PoolName,
  PoolDetails,
  PriceWrapper,
  InstallmentPrice,
} from './PCstyles';

const PiscinaCard = ({ product }) => {
  return (
    <Card>
      <ImageWrapper>
        <img src={product.imageUrl} alt={product.name} />
      </ImageWrapper>
      <InfoWrapper>
        <PoolName>{product.name}</PoolName>
        <PoolDetails>
          Dimensões: {product.dimensions} <br />
          Cor: {product.color} <br />
          {product.hasBeach ? 'Com Praia' : 'Sem Praia'}
        </PoolDetails>
        <PriceWrapper>
          R$ {product.price.toLocaleString('pt-BR')}
          <InstallmentPrice>
            ou {product.installmentPrice.toLocaleString('pt-BR')}x sem juros
          </InstallmentPrice>
        </PriceWrapper>
      </InfoWrapper>
    </Card>
  );
};

export default PiscinaCard;
