import { useLocation } from 'react-router-dom';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
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
    margin-right: ${({ padding }) => padding && 15 + 'px'};
  }
`;

const Image = styled.img`
  height: ${({ height }) => height && height};
  width: ${({ width }) => width && width};
  display: block;
  object-fit: cover;

  @media screen and (max-width: 500px) {
    width: ${({ pathname }) => pathname === '/' && 250 + 'px'};
    height: ${({ pathname }) => pathname === '/' && 250 + 'px'};
    width: ${({ pathname }) => pathname === '/roomA' && 300 + 'px'};
    height: ${({ pathname }) => pathname === '/roomA' && 300 + 'px'};
    width: ${({ pathname }) =>
      pathname === '/cafe' || ('/artshop' && 270 + 'px')};
    height: ${({ pathname }) =>
      pathname === '/cafe' || ('/artshop' && 270 + 'px')};
  }
`;

const Carousel = ({ slides, options, width, height, padding }) => {
  const { pathname } = useLocation();
  const [emblaRef] = useEmblaCarousel(options, [Autoplay({ delay: 2000 })]);

  return (
    <Embla>
      <EmblaViewport ref={emblaRef}>
        <EmblaContainer>
          {slides.map((slide, index) => (
            <EmblaSlide key={index} padding={padding}>
              <Image
                src={slide.image_url}
                alt={slide.title}
                pathname={pathname}
                width={width}
                height={height}
              />
            </EmblaSlide>
          ))}
        </EmblaContainer>
      </EmblaViewport>
    </Embla>
  );
};

export default Carousel;
