import React, { forwardRef } from 'react';
import styled from 'styled-components';
import MainGalleryCarousel from '../../compoents/Carousel/MainGalleryCarousel';
import MainBannerCarousel from '../../compoents/Carousel/MainBannerCarousel';

const MainContainer = styled.main`
  //! 추후에 사용
  /* position: relative; */
  overflow: hidden;
`;

const MainWrpper = styled.figure`
  float: right;
  //! 전체너비 - 네브바 너비
  width: calc(100% - 435px);
  position: relative;
  margin-top: 150px;
`;

const MainIntroWrapper = styled.section`
  width: 100%;
  display: flex;
  padding: 150px 0 150px;
`;
const MainIntroBox = styled.div`
  width: 510px;
  text-align: center;
  line-height: 2;
  margin: 0 auto;
`;
const MainIntroSpan = styled.span`
  font-size: var(--text-size-15);
`;

const MainGalleryCarouselWrapper = styled.figure`
  float: right;
  width: 100%;
  margin-bottom: 150px;
  position: relative;
`;

const Main = forwardRef((props, mainTopRef) => {
  return (
    <MainContainer>
      <MainWrpper ref={mainTopRef}>
        <MainBannerCarousel />
        <MainIntroWrapper>
          <MainIntroBox>
            <MainIntroSpan>
              인서리공원은 광양시에서 도시재생 프로그램으로 리노베이션한 크고
              작은 14채 공간을 활용하여 보다 많은 사람들이 더 쉽게 그리고 더
              가까이 예술을 접하고 향유 할 수 있기를 바라는 기대로 만들어진
              복합문화공간입니다.
            </MainIntroSpan>
          </MainIntroBox>
        </MainIntroWrapper>
        <MainGalleryCarouselWrapper>
          <MainGalleryCarousel />
        </MainGalleryCarouselWrapper>
      </MainWrpper>
    </MainContainer>
  );
});

// * displayName 설정
Main.displayName = 'Main';
export default Main;
