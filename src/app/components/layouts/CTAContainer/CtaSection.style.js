import styled from 'styled-components';

export const CtaWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 6rem;
  padding-left: 3rem;
  padding-right: 3rem;
  padding-bottom: 4rem;
 // background-color: #010b54; // azul escuro
  /* border-radius: 12px; */
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  gap: 2rem;
  

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const TextContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 1rem;
`;



export const Title = styled.h1`
  font-weight: 800;
  font-size: 4rem;
  color: #f4bc33;
  text-align: left;
  text-shadow: 2px 3px 5px rgba(0, 0, 0, 0.5);
  line-height: 1.2;
  letter-spacing: 1px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    font-size: 2.4rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
  }
`;

export const Description = styled.p`
  font-size: 1.5rem;
  color: #333;
  margin: 1rem 0;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
  }
`;

// export const CtaButton = styled.a`
//   display: inline-block;
//   padding: 1rem 2rem;
//   background-color: #23c483;
//   color: #fff;
//   text-transform: uppercase;
//   font-weight: 600;
//   letter-spacing: 1px;
//   border-radius: 45px;
//   text-decoration: none;
//   transition: background-color 0.3s;

//   &:hover {
//     background-color: #1ea96f;
//   }
// `;

export const CarouselContainer = styled.div`
  width: 50%;
  max-width: 500px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
