import React from 'react';
import styled from 'styled-components';
import CarouselWrapper from 'components/Common/Carousel/CarouselWrapper';
import ReserveButton from 'components/Common/Button/ReserveButton';
import artshopData from 'data/artshopData';

const ArtShopContainer = styled.main`
  overflow: hidden;
`;
const ArtShopWrapper = styled.section`
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

const ArtShopBox = styled.article``;

const ArtShopTitle = styled.h1`
  font-size: var(--text-size-18);
  font-family: 'PretendardBold';
  font-weight: bold;
  margin-bottom: 20px;

  @media screen and (max-width: 991px) {
    margin: 30px 25px;
  }

  @media screen and (max-width: 500px) {
    font-size: var(--text-size-22);
  }
`;

const ArtShopBannerBox = styled.figure`
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

const ArtShopBanner = styled.div`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${({ url }) => url && url});
  background-position: center;
`;

const ArtShopMenuBox = styled.figure`
  padding-right: 100px;
`;

const ArtShopName = styled.figcaption`
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
const ArtShopDescBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
`;

const ArtShopDesc = styled.p`
  width: 541px;
  font-size: 16px;
  line-height: 234.5%;
  letter-spacing: -0.07em;

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

const ReserveButtonBox = styled.div`
  margin-top: 25px;
  width: 400px;
  height: 40px;
`;

const ArtShop = () => {
  return (
    <ArtShopContainer>
      <ArtShopWrapper>
        {artshopData && (
          <ArtShopBox>
            <ArtShopTitle>아트샵</ArtShopTitle>
            <ArtShopBannerBox>
              <ArtShopBanner url={artshopData.banner} />
            </ArtShopBannerBox>
            <ArtShopMenuBox>
              <ArtShopName>{artshopData.title}</ArtShopName>
              <Linebar />
              <ArtShopDescBox>
                <ArtShopDesc>{artshopData.desc}</ArtShopDesc>
                <ReserveButtonBox>
                  <ReserveButton>구입하기</ReserveButton>
                </ReserveButtonBox>
              </ArtShopDescBox>
            </ArtShopMenuBox>
            <CarouselWrapper
              slides={artshopData.gallery}
              width={'450px'}
              height={'450px'}
              padding={'20px'}
            />
          </ArtShopBox>
        )}
      </ArtShopWrapper>
    </ArtShopContainer>
  );
};

export default ArtShop;
