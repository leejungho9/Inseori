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
    margin-right: ${({ padding }) => padding && 15 + 'px'};
  }
`;

const Image = styled(SkeletonItem)`
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
const GallerySkeleton = ({ length, width, height, padding }) => {
  const { pathname } = useLocation();
  return (
    <GallerySkeletonWrapper>
      <EmblaViewport>
        <EmblaContainer>
          {new Array(length).fill('').map((_, index) => (
            <EmblaSlide key={index} padding={padding}>
              <Image pathname={pathname} width={width} height={height} />
            </EmblaSlide>
          ))}
        </EmblaContainer>
      </EmblaViewport>
    </GallerySkeletonWrapper>
  );
};

export default GallerySkeleton;
