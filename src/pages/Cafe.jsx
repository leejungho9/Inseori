import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getData } from 'apis/api';
import { Banner } from 'components/Common/Carousel/Banner';
import CarouselWrapper from 'components/Common/Carousel/CarouselWrapper';
import useLoading from 'hooks/useLoading';
import styled from 'styled-components';

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
  font-family: 'PretendardSemiBold';
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
  height: 35vh;
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

const CafeMenuBox = styled.figure`
  padding-right: 100px;

  @media screen and (max-width: 991px) {
    padding-right: 0px;
  }
`;

const CafeName = styled.figcaption`
  font-size: var(--text-size-18);
  font-family: 'PretendardSemiBold';
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
  margin: 30px 100px 30px 0;
  display: block;

  @media screen and (max-width: 900px) {
    margin: 0px 100px 17px 0;
  }
`;

const CafeDesc = styled.p`
  width: 100%;
  font-size: 16px;
  line-height: 234.5%;
  letter-spacing: -0.07em;
  margin-bottom: 50px;
  font-size: var(--text-size-16);
  font-family: 'PretendardRegular';

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

//! 줄바꿈
const Break = styled.br`
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const Cafe = () => {
  const [bannerImage, setBannerImage] = useState([]);
  const [galleryImage, setGalleryImage] = useState([]);
  const navigate = useNavigate();
  const fetchCafeBanner = async () => {
    const response = await getData('/cafe/banner/images/', navigate);
    setBannerImage(response);
  };

  const fetchCafeGalleryImage = async () => {
    const response = await getData('/cafe/menu/images/', navigate);
    setGalleryImage(response);
  };
  const [getBanner, isBannerLoading] = useLoading(fetchCafeBanner);
  const [getGallery, isGalleryLoading] = useLoading(fetchCafeGalleryImage);

  useEffect(() => {
    getBanner();
    getGallery();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CafeContainer>
      <CafeWrapper>
        <CafeBox>
          <CafeTitle>카페</CafeTitle>
          <CafeBannerBox>
            <Banner
              loading={isBannerLoading}
              item={bannerImage && bannerImage}
            />
          </CafeBannerBox>
          <CafeMenuBox>
            <CafeName>Aat / menu</CafeName>
            <Linebar />
            <CafeDesc>
              Aat 카페는 커피, 식사와 와인 그리고 푸드마켓이 한 공간에 있는
              One-stop-shop입니다. 간단한 <Break />
              식사는 물론 다양한 디저트와 와인리스트를 보유하고 있으며 집으로
              돌아 갈 때는 먹거리와 식재
              <Break />료 구입이 가능한 새로운 라이프 스타일 공간을 추구하고
              있습니다.
            </CafeDesc>
          </CafeMenuBox>
          <CarouselWrapper
            slides={galleryImage}
            width={'450px'}
            height={'450px'}
            padding={'20px'}
            mobilewidth={'270px'}
            mobileheight={'270px'}
            loading={isGalleryLoading}
          />
        </CafeBox>
      </CafeWrapper>
    </CafeContainer>
  );
};

export default Cafe;
