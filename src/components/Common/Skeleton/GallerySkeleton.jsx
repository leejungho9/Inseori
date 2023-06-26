import React from 'react';
import styled from 'styled-components';
import SkeletonItem from './SkeletonItem';
import { useLocation } from 'react-router-dom';

const GallerySkeletonWrapper = styled.section`
  position: relative;
`;

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

const Image = styled(SkeletonItem)`
  height: ${({ height }) => height && height};
  width: ${({ width }) => width && width};
  display: block;
  object-fit: cover;

  @media screen and (max-width: 500px) {
    width: ${({ mobilewidth }) => mobilewidth && mobilewidth};
    height: ${({ mobileheight }) => mobileheight && mobileheight};
  }
`;
const GallerySkeleton = ({
  length,
  width,
  height,
  padding,
  mobilewidth,
  mobileheight,
}) => {
  const { pathname } = useLocation();
  return (
    <GallerySkeletonWrapper>
      <EmblaViewport>
        <EmblaContainer>
          {new Array(length).fill('').map((_, index) => (
            <EmblaSlide key={index} padding={padding}>
              <Image
                pathname={pathname}
                width={width}
                height={height}
                mobilewidth={mobilewidth}
                mobileheight={mobileheight}
              />
            </EmblaSlide>
          ))}
        </EmblaContainer>
      </EmblaViewport>
    </GallerySkeletonWrapper>
  );
};

export default GallerySkeleton;
