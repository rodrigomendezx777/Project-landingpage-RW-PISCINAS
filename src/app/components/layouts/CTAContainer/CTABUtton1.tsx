import React from 'react';
import styled from 'styled-components';

const CTAButton1 = () => {
  return (
    <StyledWrapper>
      <a href="https://linktr.ee/RWPISCINAS" target="_blank" rel="Contatos da RWPiscinas">
        <button>ENTRE EM CONTATO</button>
      </a>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  a {
    text-decoration: none;
  }

  button {
    margin-top: 1rem;
    padding: 0.7em 4em;
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 700;
    color: #fff;
    background-color: #010b54;
    border: none;
    border-radius: 45px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;

    @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
  }

  button:hover {
    background-color: #f4bc33;
    box-shadow: 0px 6px 20px #d6a018;
    color: #fff;
    transform: translateY(-7px);
  }

  button:active {
    transform: translateY(-1px);
  }
`;

export default CTAButton1;
