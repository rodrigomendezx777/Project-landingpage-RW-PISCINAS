import React from 'react';
import styled from 'styled-components';

const ButtonContact = () => {
  return (
    <StyledWrapper>
      <a href="https://linktr.ee/RWPISCINAS" target="_blank" rel="Contatos da RWPiscinas">
        <button>CONTATOS</button>
      </a>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  a {
    text-decoration: none;
  }

  button {
    padding: 1.3em 3em;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 700;
    color: #000;
    background-color: #fff;
    border: none;
    border-radius: 45px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
  }

  button:hover {
    background-color: #f4bc33;
    box-shadow: 0px 15px 20px #d6a018;
    color: #fff;
    transform: translateY(-7px);
  }

  button:active {
    transform: translateY(-1px);
  }
`;

export default ButtonContact;
