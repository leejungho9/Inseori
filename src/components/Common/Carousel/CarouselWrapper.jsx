import styled from 'styled-components';
import Carousel from './Carousel';
import GallerySkeleton from '../Skeleton/GallerySkeleton';

const CarosuelSection = styled.section`
  position: relative;
`;

const CarouselWrapper = ({
  slides,
  width,
  height,
  padding,
  mobilewidth,
  mobileheight,
  loading,
}) => {
  const options = { loop: true, align: 'start' };

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
            options={options}
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
};

export default CarouselWrapper;
