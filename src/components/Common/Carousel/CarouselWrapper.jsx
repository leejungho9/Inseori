import styled from 'styled-components';
import Carousel from './Carousel';

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
}) => {
  const options = { loop: true, align: 'start' };

  return (
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
  );
};

export default CarouselWrapper;
