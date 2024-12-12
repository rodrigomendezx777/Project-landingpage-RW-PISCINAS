'use client'
import React, { useState } from 'react';
import styled from 'styled-components';
import stepsData from './InstallationStepsData';

const InstallationSteps = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const goToNext = () => {
    setCurrentStep((prev) => (prev + 1) % stepsData.length);
  };

  const goToPrev = () => {
    setCurrentStep((prev) => (prev - 1 + stepsData.length) % stepsData.length);
  };

  return (
    <Section>
      <Title>COMO FUNCIONA A INSTALAÇÃO?</Title>
      <StepContainer>
        <VideoContainer>
          <video controls>
            <source src={stepsData[currentStep].video} type="video/mp4" />
            Seu navegador não suporta vídeos.
          </video>
        </VideoContainer>
        <DescriptionContainer>
          <h2>{`${currentStep + 1}. ${stepsData[currentStep].title}`}</h2>
          <p>{stepsData[currentStep].description}</p>
          <Navigation>
            <NavButton onClick={goToPrev}>&#8592; Anterior</NavButton>
            <NavButton onClick={goToNext}>Próximo &#8594;</NavButton>
          </Navigation>
        </DescriptionContainer>
      </StepContainer>
    </Section>
  );
};

export default InstallationSteps;

// Styled Components
const Section = styled.section`
  padding: 2rem;
  background-color: #f7f7f7;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 4rem;
  color: #010b54;
  padding: 2.5rem;
  font-weight: 800;
  text-shadow: 2px 3px 5px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    text-align: center;
    font-size: 1.8rem;
    
  }
`;

const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const VideoContainer = styled.div`
  max-width: 250px;
  width: 100%;

  video {
    width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const DescriptionContainer = styled.div`
  max-width: 500px;
  text-align: left;

  h2 {
    font-size: 2.5rem;
    color: #010b54;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.5rem;
    line-height: 1.3;
    color: #333;
  }
`;

const Navigation = styled.div`
justify-content: center;
  margin-top: 1.5rem;
  display: flex;
  gap: 1rem;
`;

const NavButton = styled.button`
  background-color: #010b54;
  color: #fff;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #010841;
  }
`;
