import React from 'react';
import styled from 'styled-components';
import cafebanner from 'assets/images/cafe/banner.png';
import CarouselWrapper from 'components/Common/Carousel/CarouselWrapper';
import cafeData from 'data/cafeData';

const CafeContainer = styled.main`
  overflow: hidden;
`;
const CafeWrapper = styled.section`
  float: right;
  //! 전체너비 - 네브바 너비
  width: calc(100% - 435px);
  position: relative;
  margin-top: 150px;
  padding-bottom: 130px;

  @media screen and (max-width: 991px) {
    width: 100%;
    margin-top: 70px;
    padding-bottom: 75px;
  }
`;

const CafeBox = styled.article``;

const CafeTitle = styled.h1`
  font-size: var(--text-size-18);
  font-family: 'PretendardBold';
  margin-bottom: 20px;

  @media screen and (max-width: 991px) {
    margin: 28px 25px;
  }

  @media screen and (max-width: 500px) {
    font-family: 'PretendardSemiBold';
    font-size: var(--text-size-22);
    line-height: 27px;
    letter-spacing: -0.07em;
  }
`;

const CafeBannerBox = styled.figure`
  height: 300px;
  padding-right: 100px;

  @media screen and (max-width: 991px) {
    width: 100%;
    padding-right: 0;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 240px;
  }
`;

const CafeBanner = styled.div`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${cafebanner});
  background-position: center;
`;

const CafeMenuBox = styled.figure`
  padding-right: 100px;

  @media screen and (max-width: 991px) {
    padding-right: 0px;
  }
`;

const CafeName = styled.figcaption`
  font-size: var(--text-size-18);
  font-family: 'PretendardBold';
  margin-top: 30px;

  @media screen and (max-width: 991px) {
    margin: 50px 35px 17px;
  }

  @media screen and (max-width: 500px) {
    font-size: var(--text-size-15);
  }
`;

const Linebar = styled.hr`
  width: 100%;
  height: 1px;
  background-color: #e4e4e4;
  border: none;
  margin: 20px 100px 30px 0;
  display: block;

  @media screen and (max-width: 900px) {
    margin: 0px 100px 17px 0;
  }
`;

const CafeDesc = styled.p`
  width: 541px;
  font-size: 16px;
  line-height: 234.5%;
  letter-spacing: -0.07em;
  margin-bottom: 50px;
  font-size: var(--text-size-16);

  @media screen and (max-width: 991px) {
    margin-bottom: 46px;
    padding: 0 35px;
    width: 100%;
    line-height: 29px;
    text-align: justify;
    letter-spacing: -0.095em;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    line-height: 29px;
    text-align: justify;
    letter-spacing: -0.095em;
  }
`;

const Cafe = () => {
  return (
    <CafeContainer>
      <CafeWrapper>
        {cafeData && (
          <CafeBox>
            <CafeTitle>카페</CafeTitle>
            <CafeBannerBox>
              <CafeBanner />
            </CafeBannerBox>
            <CafeMenuBox>
              <CafeName>Aat/menu</CafeName>
              <Linebar />
              <CafeDesc>{cafeData.desc}</CafeDesc>
            </CafeMenuBox>
            <CarouselWrapper
              slides={cafeData.gallery}
              width={'450px'}
              height={'450px'}
              padding={'20px'}
            />
          </CafeBox>
        )}
      </CafeWrapper>
    </CafeContainer>
  );
};

export default Cafe;
