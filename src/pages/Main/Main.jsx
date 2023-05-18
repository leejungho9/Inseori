import React from 'react';
import styled from 'styled-components';
import MainGalleryCarousel from '../../compoents/Carousel/MainGalleryCarousel';
import MainBannerCarousel from '../../compoents/Carousel/MainBannerCarousel';

const MainContainer = styled.main`
  position: relative;
  overflow: hidden;
`;

const MainWrpper = styled.figure`
  float: right;
  width: calc(100% - 535px);
  position: relative;
  z-index: 2;
`;

const MainIntroWrapper = styled.section`
  width: 100%;
  display: flex;
  padding: 200px 0;
  padding-top: 150px;
`;
const MainIntroBox = styled.div`
  width: 510px;
  text-align: center;
  line-height: 2;
  margin: 0 auto;
`;
const MainIntroSpan = styled.span`
  font-size: 15px;
`;

const MainGalleryCarouselWrapper = styled.figure`
  float: right;
  width: 100%;
  margin-bottom: 150px;
  position: relative;
`;

function Main() {
  return (
    <MainContainer>
      <MainWrpper>
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
}

export default Main;
