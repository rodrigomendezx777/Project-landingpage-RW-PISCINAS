'use client'
import React, { useRef, useState } from "react";
import { CarouselContainer, CarouselWrapper, CarouselItem, Button, LeftButton, RightButton } from './Carousel.style';

const Carousel = ({ items }) => {
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseLeaveOrUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Aumenta a sensibilidade ao arrastar
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleLeftClick = () => {
    carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth;
  };

  const handleRightClick = () => {
    carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;
  };

  return (
    <CarouselContainer>
      <LeftButton onClick={handleLeftClick}>{"<"}</LeftButton>
      <CarouselWrapper
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeaveOrUp}
        onMouseUp={handleMouseLeaveOrUp}
        onMouseMove={handleMouseMove}
      >
        {items.map((item, index) => (
          <CarouselItem key={index}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.price}</p>
          </CarouselItem>
        ))}
      </CarouselWrapper>
      <RightButton onClick={handleRightClick}>{">"}</RightButton>
    </CarouselContainer>
  );
};

export default Carousel;
