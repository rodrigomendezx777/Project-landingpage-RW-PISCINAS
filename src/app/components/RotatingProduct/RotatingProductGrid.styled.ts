import styled from 'styled-components';

export const Section = styled.section`
  padding: 20px;
  background-color: #f9f9f9;
  text-align: center;
  overflow: hidden; /* Esconde o conteúdo que ultrapassa o container */
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
`;

export const Marquee = styled.div`
  display: flex;
  animation: marquee 15s linear infinite; /* Animação contínua para o efeito de letreiro */
  padding: 50px;
  
  @keyframes marquee {
    0% {
      transform: translateX(100%); /* Começa fora da tela à direita */
    }
    100% {
      transform: translateX(-300%); /* Move para fora da tela à esquerda */
    }
  }
`;

export const Card = styled.div`
  display: flex;
  background: #fff;
  border-radius: 10px;
  margin: 0 10px; /* Espaçamento entre os cards */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  flex: 0 0 auto;
  width: 600px; /* Ajuste a largura do card conforme necessário */
  height: auto;
  padding: 30px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05); /* Efeito de hover */
  }
`;

export const ImageContainer = styled.div`
  img {
    width: 100%;
    height: auto;

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
