"use client";
import React from "react";
import {
  PageContainer,
  Section,
  SectionTitle,
  ServicesList,
  ServiceCard,
  CTASection,
  CTAButton,
} from "./services.style";

const Servicos = () => {
  return (
    <PageContainer>
      {/* Seção 1: Introdução */}
      <Section>
        <SectionTitle>Nossos Serviços</SectionTitle>
        <p>
          Oferecemos uma ampla variedade de serviços para ajudar você a construir
          a piscina dos seus sonhos. Veja abaixo algumas das opções que
          disponibilizamos para atender suas necessidades.
        </p>
      </Section>

      {/* Seção 2: Lista de Serviços */}
      <Section>
        <SectionTitle>O que oferecemos</SectionTitle>
        <ServicesList>
          <ServiceCard>
            <h3>Construção de Piscinas</h3>
            <p>Especialistas em construção de piscinas de fibra de vidro personalizadas.</p>
          </ServiceCard>
          <ServiceCard>
            <h3>Manutenção</h3>
            <p>Serviços completos de manutenção, tratamento de água e reparos.</p>
          </ServiceCard>
          <ServiceCard>
            <h3>Acessórios</h3>
            <p>Venda e instalação de acessórios como capas, escadas, e sistemas de filtragem.</p>
          </ServiceCard>
        </ServicesList>
      </Section>

      {/* Seção 3: Chamada para Ação */}
      <CTASection>
        <h2>Entre em Contato</h2>
        <p>Pronto para começar seu projeto de piscina? Entre em contato conosco hoje mesmo!</p>
        <CTAButton href="/contact">Fale Conosco</CTAButton>
      </CTASection>
    </PageContainer>
  );
};

export default Servicos;
