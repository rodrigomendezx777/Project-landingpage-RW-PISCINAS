import styled from 'styled-components';

export const Section = styled.section`
  padding: 20px;
  background-color: #f9f9f9;
  text-align: center;
  overflow: hidden;
  width: 100%; /* Garante que ocupa toda a largura */
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
`;

export const Marquee = styled.div`
  display: flex;
  animation: marquee 20s linear infinite;
  padding: 50px;
  width: fit-content;

  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%); /* Ajuste para metade do conteúdo duplicado */
    }
  }

  
`;


export const Card = styled.div`
  display: flex;
  background: #fff;
  border-radius: 10px;
  margin: 0 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  flex: 0 0 auto;
  width: 100%;
  max-width: 600px; /* Limite máximo para telas maiores */
  padding: 20px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;


export const ImageContainer = styled.div`
  width: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    object-fit: cover; /* Garante que a imagem se ajusta ao contêiner */
  }
`;


export const InfoContainer = styled.div`
  padding: 15px;

  h2 {
    font-size: 1.5rem;
    margin: 0;
  }

  p {
    font-size: 1rem;
    color: #666;
  }
`;
