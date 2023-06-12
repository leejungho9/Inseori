import React from 'react';
import styled from 'styled-components';
import Carousel from './Carousel';

const CarosuelSection = styled.section`
  position: relative;
`;

const CarouselWrapper = ({ slides, width, height, padding }) => {
  const options = { loop: true, align: 'start' };

  return (
    <CarosuelSection>
      <Carousel
        slides={slides}
        options={options}
        width={width}
        height={height}
        padding={padding}
      />
    </CarosuelSection>
  );
};

export default CarouselWrapper;
