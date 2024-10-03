import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;
  text-align: center;

  h1 {
    font-size: 3rem;
    margin-bottom: 2rem;
    color: #3498db;
    text-transform: uppercase;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
`;

