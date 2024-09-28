import styled from 'styled-components';

export const TestimonialContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const TestimonialItem = styled.div`
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 50px;
  margin: 20px 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const TestimonialText = styled.p`
  font-size: 18px;
  color: #333;
  margin-bottom: 20px;
  font-style: italic;
`;

export const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const Name = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #555;
`;
