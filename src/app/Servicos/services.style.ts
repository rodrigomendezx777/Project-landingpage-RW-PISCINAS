import styled from "styled-components";

// Container principal da página
export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
`;

// Cada seção da página
export const Section = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 40px 0;
  text-align: center;
  padding: 20px;

  p {
    font-size: 1.1rem;
    color: #555;
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

// Título das seções
export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

// Lista de serviços (grid responsivo)
export const ServicesList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

// Cartão de cada serviço
export const ServiceCard = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: left;

  h3 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    color: #666;
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 1.3rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`;

// Seção de chamada para ação (CTA)
export const CTASection = styled(Section)`
  background-color: #333;
  color: #fff;
  border-radius: 10px;
  padding: 40px 20px;

  h2 {
    font-size: 2.2rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 30px;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.8rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

// Botão de CTA
export const CTAButton = styled.a`
  background-color: #ff6347;
  color: #fff;
  padding: 15px 30px;
  text-decoration: none;
  border-radius: 30px;
  font-size: 1.2rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e5533d;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 12px 25px;
  }
`;
