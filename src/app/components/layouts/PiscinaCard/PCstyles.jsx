import styled from 'styled-components';

export const Card = styled.div`
  background-color: #fff;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  position: relative;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.1));
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  &:hover:before {
    opacity: 1;
  }
`;

export const ImageWrapper = styled.div`
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`;

export const InfoWrapper = styled.div`
  padding: 1.5rem;
  text-align: left;
`;

export const PoolName = styled.h2`
  font-size: 1.5rem;
  color: #2c3e50;
`;

export const PoolDetails = styled.p`
  font-size: 1rem;
  color: #7f8c8d;
  margin: 0.5rem 0;
`;

export const PriceWrapper = styled.div`
  margin-top: 1rem;
  font-size: 1.25rem;
  color: #e74c3c;
  font-weight: bold;
`;

export const InstallmentPrice = styled.span`
  display: block;
  font-size: 0.9rem;
  color: #95a5a6;
`;
