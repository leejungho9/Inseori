import React from 'react';
import Header from '../../compoents/Header/Header';
import Nav from '../../compoents/Nav/Nav';
import { Wrapper } from '../../styles/GlobalStyle';
import styled from 'styled-components';
import MainBannerCarousel from '../../compoents/Carousel/MainBannerCarousel';
import MainImageCarousel from '../../compoents/Carousel/MainImageCarousel';
import Footer from '../../compoents/Footer/Footer';

const MainBox = styled.div`
  display: flex;
`;
const MainIntroContainer = styled.div`
  padding: 200px 0;
`;

const MainIntroWrapper = styled.div`
  width: 480px;
  text-align: center;
  line-height: 2;
  margin: 0 auto;
`;
const MainIntroSpan = styled.span`
  font-size: 14px;
`;

const MainImageBox = styled.div`
  margin-bottom: 130px;
`;
function Main() {
  return (
    <>
      <Header />
      <Wrapper>
        <MainBox>
          <Nav />
          <MainBannerCarousel />
        </MainBox>
        <MainIntroContainer>
          <MainIntroWrapper>
            <MainIntroSpan>
              인서리공원은 광양시에서 도시재생 프로그램으로 리노베이션한 크고
              작은 14채 공간을 활용하여 보다 많은 사람들이 더 쉽게 그리고 더
              가까이 예술을 접하고 향유 할 수 있기를 바라는 기대로 만들어진
              복합문화공간입니다.
            </MainIntroSpan>
          </MainIntroWrapper>
        </MainIntroContainer>
        <MainImageBox>
          <MainImageCarousel />
        </MainImageBox>
      </Wrapper>
      <Footer />
    </>
  );
}

export default Main;
