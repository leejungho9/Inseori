import React from 'react';
import styled from 'styled-components';
import cafebanner from 'assets/images/cafe/banner.png';
import CafeShopCard from 'components/Common/Card/CafeCard';
import Pagination from 'components/Common/Pagination/Pagination';
import CarouselWrapper from 'components/Common/Carousel/CarouselWrapper';
import cafegalleryData from 'data/cafegalleryData';

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
const CafeTitle = styled.h1`
  font-size: var(--text-size-18);
  font-family: 'PretendardSemiBold';
  font-weight: bold;
  margin-bottom: 20px;

  @media screen and (max-width: 991px) {
    margin: 30px 25px;
  }

  @media screen and (max-width: 500px) {
    font-size: 22px;
  }
`;

const CafeBannerBox = styled.figure`
  height: 300px;
  padding-right: 100px;

  @media screen and (max-width: 991px) {
    padding: 0 25px;
  }
  @media screen and (max-width: 500px) {
    height: 430px;
    height: 220px;
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

const CafeMenuBox = styled.figure``;

const CafeName = styled.figcaption`
  font-size: var(--text-size-18);
  font-family: 'PretendardBold';
  margin-top: 30px;

  @media screen and (max-width: 991px) {
    margin: 50px 25px 36px;
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
  @media screen and (max-width: 991px) {
    display: none;
  }
`;

const CafeDesc = styled.p`
  width: 541px;
  font-size: 16px;
  line-height: 234.5%;
  letter-spacing: -0.07em;
  margin-bottom: 50px;

  @media screen and (max-width: 991px) {
    margin-bottom: 45px;
    padding: 0 25px;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    line-height: 29px;
    text-align: justify;
    letter-spacing: -0.095em;
  }
`;

const CafeShopBox = styled.figure`
  padding-right: 100px;
  padding-bottom: 145px;

  @media screen and (max-width: 991px) {
    padding-right: 0px;
    padding-bottom: 75px;
  }
`;

const CafeShopName = styled.figcaption`
  font-size: var(--text-size-18);
  font-family: 'PretendardBold';
  margin-top: 60px;

  @media screen and (max-width: 991px) {
    margin: 50px 25px 0px;
  }

  @media screen and (max-width: 500px) {
    font-size: var(--text-size-15);
  }
`;

const PaginationBox = styled.section`
  display: flex;
  justify-content: center;
`;
const Cafe = () => {
  return (
    <CafeContainer>
      <CafeWrapper>
        <CafeTitle>카페</CafeTitle>
        <CafeBannerBox>
          <CafeBanner />
        </CafeBannerBox>
        <CafeMenuBox>
          <CafeName>Aat/menu</CafeName>
          <Linebar />
          <CafeDesc>
            Aat 카페는 커피, 식사와 와인 그리고 푸드마켓이 한 공간에 있는
            One-stop-shop입니다. 간단한 식사는 물론 다양한 디저트와 와인리스트를
            보유하고 있으며 집으로 돌아 갈 때는 먹거리와 식재료 구입이 가능한
            새로운 라이프 스타일 공간을 추구하고 있습니다.
          </CafeDesc>
          <CarouselWrapper
            slides={cafegalleryData}
            width={'450px'}
            height={'450px'}
            padding={'20px'}
          />
        </CafeMenuBox>
        <CafeShopBox>
          <CafeShopName>Shop</CafeShopName>
          <Linebar />
          <CafeShopCard />
        </CafeShopBox>
        <PaginationBox>
          <Pagination />
        </PaginationBox>
      </CafeWrapper>
    </CafeContainer>
  );
};

export default Cafe;
