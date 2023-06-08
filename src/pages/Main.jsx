import React, { forwardRef } from 'react';
import styled from 'styled-components';
import MainGalleryCarousel from '../components/Common/Carousel/MainGalleryCarousel';
import MainBannerCarousel from '../components/Common/Carousel/MainBannerCarousel';

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
    margin-top: 70px;
  }
`;

const MainIntroWrapper = styled.section`
  width: 100%;
  display: flex;
  padding: 150px 0 150px;

  @media screen and (max-width: 991px) {
    padding: 55px 20px 90px;
  }
  @media screen and (max-width: 500px) {
    padding: 55px 20px 70px;
  }
`;
const MainIntroBox = styled.div`
  width: 510px;
  text-align: center;
  margin: 0 auto;
  @media screen and (max-width: 991px) {
    width: 100%;
  }
`;

const MainTitle = styled.h1`
  display: none;
  @media screen and (max-width: 991px) {
    display: block;
    font-weight: bold;
    font-size: var(--text-size-20);
    color: var(--dark);
    margin-bottom: 20px;
  }
  @media screen and (max-width: 500px) {
    font-size: var(--text-size-24);
    margin-bottom: 30px;
  }
`;
const MainIntroP = styled.p`
  font-size: var(--text-size-15);
  color: var(--gray);
  line-height: 1.9;

  @media screen and (max-width: 991px) {
    font-size: var(--text-size-20);
  }
  @media screen and (max-width: 500px) {
    font-size: var(--text-size-16);
  }
`;
//! 줄바꿈
const Break = styled.br`
  display: none;
  @media screen and (max-width: 991px) {
    display: block;
  }
`;

const MainGalleryCarouselWrapper = styled.figure`
  float: right;
  width: 100%;
  margin-bottom: 130px;
  position: relative;
  @media screen and (max-width: 991px) {
    margin-bottom: 120px;
  }
  @media screen and (max-width: 500px) {
    margin-bottom: 75px;
  }
`;

const Main = forwardRef((props, mainTopRef) => {
  return (
    <MainContainer>
      <MainWrpper ref={mainTopRef}>
        <MainBannerCarousel />
        <MainIntroWrapper>
          <MainIntroBox>
            <MainTitle>인서리공원</MainTitle>
            <MainIntroP>
              인서리공원은 광양시 도시재생 프로젝트로 <Break />
              리노베이션한 한옥 14채를 활용하여 <Break />
              많은 사람들이 쉽게, 더 가까이 예술을 접하고 <Break />
              향유 할 수 있기를 바라는 기대로 만들어진
              <Break />
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
