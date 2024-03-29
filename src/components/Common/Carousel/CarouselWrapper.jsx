import React from 'react';
import styled from 'styled-components';
import GallerySkeleton from '../Skeleton/GallerySkeleton';
import Carousel from './Carousel';

const CarosuelSection = styled.section`
  position: relative;
`;

const CarouselWrapper = React.memo(
  ({ slides, width, height, padding, mobilewidth, mobileheight, loading }) => {
    return (
      <>
        {loading ? (
          <GallerySkeleton
            length={5}
            width={width}
            height={height}
            padding={padding}
            mobilewidth={mobilewidth}
            mobileheight={mobileheight}
          />
        ) : (
          <CarosuelSection>
            <Carousel
              slides={slides}
              width={width}
              height={height}
              padding={padding}
              mobilewidth={mobilewidth}
              mobileheight={mobileheight}
            />
          </CarosuelSection>
        )}
      </>
    );
  },
);
CarouselWrapper.displayName = 'CarouselWrapper';
export default CarouselWrapper;
