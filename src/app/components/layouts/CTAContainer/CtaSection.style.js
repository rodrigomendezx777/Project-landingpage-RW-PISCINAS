import styled from 'styled-components';

export const CtaWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 5rem;
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
  font-size: 3.8rem;
  color: #f4bc33; // amarelo sol da rw
  text-align: left;
`;

export const Description = styled.p`
  font-size: 1.5rem;
  color: #333;
  margin: 1rem 0;
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
  max-width: 600px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
