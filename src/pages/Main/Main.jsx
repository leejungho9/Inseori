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

  @media screen and (max-width: 991px) {
    width: 100%;
  }
`;

const MainIntroWrapper = styled.section`
  width: 100%;
  display: flex;
  padding: 150px 0 150px;
  @media screen and (max-width: 991px) {
    padding: 100px 0 155px;
  }
  @media screen and (max-width: 500px) {
    padding: 100px 20px 155px;
  }
`;
const MainIntroBox = styled.div`
  width: 510px;
  text-align: center;
  line-height: 2;
  margin: 0 auto;
  @media screen and (max-width: 991px) {
    width: 450px;
  }
`;
const MainIntroP = styled.span`
  font-size: var(--text-size-15);
  @media screen and (max-width: 991px) {
    font-size: var(--text-size-20);
    word-break: keep-all;
  }
  @media screen and (max-width: 500px) {
    font-size: var(--text-size-16);
    word-break: keep-all;
  }
`;

const MainGalleryCarouselWrapper = styled.figure`
  float: right;
  width: 100%;
  margin-bottom: 150px;
  position: relative;
  @media screen and (max-width: 991px) {
    margin-bottom: 120px;
  }
`;

const Main = forwardRef((props, mainTopRef) => {
  return (
    <MainContainer>
      <MainWrpper ref={mainTopRef}>
        <MainBannerCarousel />
        <MainIntroWrapper>
          <MainIntroBox>
            <MainIntroP>
              인서리공원은 광양시에서 도시재생 프로그램으로 리노베이션한 크고
              작은 14채 공간을 활용하여 보다 많은 사람들이 더 쉽게 그리고 더
              가까이 예술을 접하고 향유 할 수 있기를 바라는 기대로 만들어진
              복합문화공간입니다.
            </MainIntroP>
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
