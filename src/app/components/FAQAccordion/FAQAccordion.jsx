// FAQAccordion.jsx
'use client';

import { useState } from 'react';
import styled from 'styled-components';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { question: 'Quanto tempo leva a instalação da piscina?', answer: 'A instalação geralmente leva de 7 a 10 dias, dependendo das condições do solo e do clima.' },
    { question: 'Quais são os cuidados necessários após a instalação?', answer: 'Após a instalação, é importante seguir as orientações do técnico sobre a limpeza e o uso adequado de produtos químicos.' },
    { question: 'Quais os custos adicionais além da instalação?', answer: 'Os custos adicionais podem incluir a preparação do terreno e acessórios extras, como iluminação ou cascatas.' },
    { question: 'A piscina vem com garantia?', answer: 'Sim, todas as nossas piscinas possuem garantia de 5 anos para defeitos de fabricação.' }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Alterna entre abrir e fechar
  };

  return (
<FAQSection>

    <FAQTitle>Duvidas frequêntes</FAQTitle>

        <FAQContainer>
            {faqs.map((faq, index) => (
                <AccordionItem key={index}>
                <AccordionHeader onClick={() => toggleAccordion(index)}>
                    <Question>{faq.question}</Question>
                    {activeIndex === index ? <FiChevronUp size={24} /> : <FiChevronDown size={24} />}
                </AccordionHeader>
                <AccordionContent $isOpen={activeIndex === index}>
                    <Answer>{faq.answer}</Answer>
                </AccordionContent>
                </AccordionItem>
            ))}
        </FAQContainer>
    </FAQSection>
  );
};

export default FAQAccordion;

// Styled Components


const FAQSection = styled.section`
    width: 100%;
    height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;

`;

const FAQTitle = styled.h1`
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-weight: 500;
font-size: 30px;

`;


const FAQContainer = styled.div`
  max-width: 800px;
  margin: 20px 20px;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const AccordionItem = styled.div`
  border-bottom: 1px solid #ddd;
  &:last-child {
    border-bottom: none;
  }
`;

const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 8px;
  
  &:hover {
    background-color: #eaeaea;
  }
`;

const Question = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  color: #333;
`;

const AccordionContent = styled.div`
  max-height: ${({ $isOpen }) => ($isOpen ? '150px' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease;
  padding: ${({ $isOpen }) => ($isOpen ? '15px' : '0 15px')};
`;

const Answer = styled.p`
  margin: 0;
  font-size: 16px;
  color: #555;
`;

