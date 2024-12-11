'use client'
import React from 'react';
import { FeaturesWrapper, FeatureCard, Title, Description, Image } from './FeaturesSection.style';
import features from './features';

const FeaturesSection = () => {
  return (
    <FeaturesWrapper>
      <Title>Principais Características</Title>
      <Description>
        Destaque os benefícios ou pontos de venda do seu serviço. O que torna este serviço a melhor escolha?
      </Description>
      <div className="features-container">
        {features.map((feature, index) => (
          <FeatureCard key={index}>
            <Image src={feature.image} alt={feature.title} />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </FeatureCard>
        ))}
      </div>
    </FeaturesWrapper>
  );
};

export default FeaturesSection;
