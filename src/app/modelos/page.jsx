'use client'

import React from 'react';
import PiscinaCard from '../components/layouts/PiscinaCard/PiscinaCard';
import { Container, Grid } from './ModelosPage.styles';

const products = [
  {
    id: 1,
    name: 'Piscina Modelo A',
    dimensions: '8.40 X 3.35 X 1.45',
    color: 'Azul',
    price: 15000,
    installmentPrice: 1250,
    imageUrl: '/images/piscinas/Violeta 2x2.png',
    hasBeach: true,
  },
  {
    id: 2,
    name: 'Piscina Modelo B',
    dimensions: '7.00 X 3.00 X 1.30',
    color: 'Branco',
    price: 13000,
    installmentPrice: 1083.33,
    imageUrl: '/images/piscinas/Girassol 2.20 x 2.20.png',
    hasBeach: false,
  },
  {
    id: 3,
    name: 'Piscina Modelo C',
    dimensions: '9.00 X 4.00 X 1.60',
    color: 'Verde',
    price: 18000,
    installmentPrice: 1500,
    imageUrl: '/images/piscinas/Angélica 2.65 x 1.65.png',
    hasBeach: true,
  },
  {
    id: 4,
    name: 'Piscina Modelo D',
    dimensions: '6.50 X 3.20 X 1.20',
    color: 'Azul Claro',
    price: 12000,
    installmentPrice: 1000,
    imageUrl: '/images/piscinas/Gerbera 3.00 x 2.00.png',
    hasBeach: false,
  },
  {
    id: 5,
    name: 'Piscina Modelo E',
    dimensions: '8.00 X 3.50 X 1.50',
    color: 'Branco',
    price: 16000,
    installmentPrice: 1333.33,
    imageUrl: '/images/piscinas/Anis 3.46 x 2.46.png',
    hasBeach: true,
  },
  {
    id: 6,
    name: 'Piscina Modelo F',
    dimensions: '7.50 X 3.00 X 1.40',
    color: 'Azul Escuro',
    price: 14500,
    installmentPrice: 1208.33,
    imageUrl: '/images/piscinas/Jasmim 4.30 x 2.40.png',
    hasBeach: false,
  },
  {
    id: 7,
    name: 'Piscina Modelo G',
    dimensions: '9.50 X 4.50 X 1.70',
    color: 'Ciano',
    price: 20000,
    installmentPrice: 1666.67,
    imageUrl: '/images/piscinas/Dália 4.60 x 2.43.png',
    hasBeach: true,
  },
  {
    id: 8,
    name: 'Piscina Modelo H',
    dimensions: '6.00 X 2.80 X 1.10',
    color: 'Branco',
    price: 11000,
    installmentPrice: 916.67,
    imageUrl: '/images/piscinas/Azaléia 4.65 x 2.65.png',
    hasBeach: false,
  },
  {
    id: 9,
    name: 'Piscina Modelo I',
    dimensions: '8.20 X 3.40 X 1.55',
    color: 'Verde Água',
    price: 15500,
    installmentPrice: 1291.67,
    imageUrl: '/images/piscinas/Prímula 4.65 x 2.65.png',
    hasBeach: true,
  },
  {
    id: 10,
    name: 'Piscina Modelo J',
    dimensions: '7.80 X 3.30 X 1.35',
    color: 'Bege',
    price: 13500,
    installmentPrice: 1125,
    imageUrl: '/images/piscinas/Ágape 5.30 x 2.80.png',
    hasBeach: false,
  },
  {
    id: 11,
    name: 'Piscina Modelo K',
    dimensions: '8.50 X 3.60 X 1.60',
    color: 'Azul Royal',
    price: 17500,
    installmentPrice: 1458.33,
    imageUrl: '/images/piscinas/Caspia 6.40 x 3.35.png',
    hasBeach: true,
  },
  {
    id: 12,
    name: 'Piscina Modelo y',
    dimensions: '8.50 X 3.60 X 1.60',
    color: 'Azul Royal',
    price: 17500,
    installmentPrice: 1458.33,
    imageUrl: '/images/piscinas/Açucena 7.17x3.19.png',
    hasBeach: true,
  },
  {
    id: 13,
    name: 'Piscina Modelo z',
    dimensions: '8.50 X 3.60 X 1.60',
    color: 'Azul Royal',
    price: 17500,
    installmentPrice: 1458.33,
    imageUrl: '/images/piscinas/Begõnia 7.40 x 3.35.png',
    hasBeach: true,
  },
  {
    id: 14,
    name: 'Piscina Modelo z',
    dimensions: '8.50 X 3.60 X 1.60',
    color: 'Azul Royal',
    price: 17500,
    installmentPrice: 1458.33,
    imageUrl: '/images/piscinas/Hortênsia 7.40 x 3.35.png',
    hasBeach: true,
  },
  {
    id: 15,
    name: 'Piscina Modelo z',
    dimensions: '8.50 X 3.60 X 1.60',
    color: 'Azul Royal',
    price: 17500,
    installmentPrice: 1458.33,
    imageUrl: '/images/piscinas/Gardênia 8.40 x 3.35.png',
    hasBeach: true,
  },
  {
    id: 16,
    name: 'Piscina Modelo z',
    dimensions: '8.50 X 3.60 X 1.60',
    color: 'Azul Royal',
    price: 17500,
    installmentPrice: 1458.33,
    imageUrl: '/images/piscinas/Amarílis 8.50 x 3.35.png',
    hasBeach: true,
  },
  // Continue com os outros modelos...
];

const ModelosPage = () => {
  return (
    <Container>
      <h1>Nossos Modelos de Piscinas</h1>
      <Grid>
        {products.map((product) => (
          <PiscinaCard key={product.id} product={product} />
        ))}
      </Grid>
    </Container>
  );
};

export default ModelosPage;
