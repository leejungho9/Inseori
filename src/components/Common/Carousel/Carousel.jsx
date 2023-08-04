import React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import styled from 'styled-components';

const Embla = styled.div``;

const EmblaViewport = styled.div`
  overflow: hidden;
`;

const EmblaContainer = styled.div`
  display: flex;
`;

const EmblaSlide = styled.div`
  margin-right: ${({ padding }) => padding && padding};

  @media screen and (max-width: 500px) {
    margin-right: 15px;
  }
`;

const Image = styled.img`
  height: ${({ height }) => height && height};
  width: ${({ width }) => width && width};
  display: block;
  object-fit: cover;

  @media screen and (max-width: 500px) {
    width: ${({ mobilewidth }) => mobilewidth && mobilewidth};
    height: ${({ mobileheight }) => mobileheight && mobileheight};
  }
`;

const Carousel = React.memo(
  ({ slides, width, height, padding, mobilewidth, mobileheight }) => {
    const options = { loop: true, align: 'start' };
    const [emblaRef] = useEmblaCarousel(options, [Autoplay({ delay: 2000 })]);
    return (
      <Embla>
        <EmblaViewport ref={emblaRef}>
          <EmblaContainer>
            {slides &&
              slides.map((slide, index) => (
                <EmblaSlide key={index} padding={padding}>
                  <picture>
                    <source
                      srcSet={
                        slide.image_m_url === 'no-image-error'
                          ? slide.image_url
                          : slide.image_m_url
                      }
                      media="(max-width : 500px)"
                    />
                    <Image
                      src={slide.image_url}
                      alt={slide.title}
                      width={width}
                      height={height}
                      mobilewidth={mobilewidth}
                      mobileheight={mobileheight}
                    />
                  </picture>
                </EmblaSlide>
              ))}
          </EmblaContainer>
        </EmblaViewport>
      </Embla>
    );
  },
);

Carousel.displayName = 'Carousel';
export default Carousel;
