import styled from 'styled-components';


export const TitleCatalogPool = styled.h1`
  font-size: 4rem;
  color: #f4bc33; // amarelo sol da rw
  
  text-align: center;
  margin: 40px;
  text-shadow: 2px 3px 5px rgba(0, 0, 0, 0.5);
  font-family: sans-serif;
  font-weight: 800;
  text-transform: uppercase;
  
  @media (max-width: 768px) {
    font-size: 2.4rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    text-align: center;
    font-size: 2.5rem;
    
  }
`;

export const ProductListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around; /* Ajusta o espaçamento entre os cards */
  /* margin: 20px 20px; Adiciona margens para separação */
  background-color: #f4bc33;
  border-radius: 12px;
`;

export const ProductCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 300px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
  background-color: white;
  text-align: center;
  margin: 30px;
  padding: 10px;
  gap: 5px;

  &.hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }

  img {
    width: 100%;
    height: auto;
    display: block;
    box-shadow: inset 0 -15px 15px -10px rgba(0, 0, 0, 0.2);
  }

  h2 {
    margin: 10px 0;
  }

  .view-more {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  position: relative;
  width: 400px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #333;
`;
