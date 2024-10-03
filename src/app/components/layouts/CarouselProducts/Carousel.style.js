import styled from 'styled-components';

export const CarouselContainer = styled.div`
background-color: aqua;
padding: 20px;
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  
`;

export const CarouselWrapper = styled.div`
background-color: blueviolet;
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  cursor: grab;
  user-select: none;
  padding: 10px;
  gap: 10px;
  border: 2px solid black;
  
  &:active {
    cursor: grabbing;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CarouselItem = styled.div`
padding: 20px;
  flex: 0 0 auto;
  margin: 0 10px;
  width: 250px;
  text-align: center;
  border: 2px solid black;

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }

  h3 {
    font-size: 1.2rem;
    margin: 10px 0;
  }

  p {
    color: #888;
  }
`;

export const Button = styled.button`
  background-color: #333;
  color: #fff;
  border: none;
  padding: 10px;
  font-size: 1.5rem;
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;

  &:hover {
    background-color: #555;
  }
`;

export const LeftButton = styled(Button)`
  left: 10px;
`;

export const RightButton = styled(Button)`
  right: 10px;
`;
