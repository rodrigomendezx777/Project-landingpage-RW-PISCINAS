import styled from 'styled-components';

export const FeaturesWrapper = styled.section`
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;

  .features-container {
    display: flex;
    justify-content: space-around;
    gap: 1.5rem;
    flex-wrap: wrap;
    margin-top: 2rem;
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  color: #333;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #555;
  margin: 1rem 0;
`;

export const FeatureCard = styled.div`
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 300px;
  text-align: center;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-10px);
  }

  h3 {
    margin: 1rem 0 0.5rem;
    font-size: 1.2rem;
    color: #222;
  }

  p {
    font-size: 0.9rem;
    color: #666;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
`;
