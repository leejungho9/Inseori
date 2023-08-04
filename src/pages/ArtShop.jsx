import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getData } from 'apis/api';
import ReserveButton from 'components/Common/Button/ReserveButton';
import { Banner } from 'components/Common/Carousel/Banner';
import CarouselWrapper from 'components/Common/Carousel/CarouselWrapper';
import useLoading from 'hooks/useLoading';
import styled from 'styled-components';

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
  font-family: 'PretendardSemiBold', 'NotoSans', 'sans-serif';
  margin-bottom: 20px;

  @media screen and (max-width: 991px) {
    margin: 28px 25px;
  }

  @media screen and (max-width: 500px) {
    font-size: var(--text-size-22);
    line-height: 27px;
    letter-spacing: -0.07em;
  }
`;

const ArtShopBannerBox = styled.figure`
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

const ArtShopMenuBox = styled.figure`
  padding-right: 100px;

  @media screen and (max-width: 991px) {
    padding-right: 0px;
  }
`;

const ArtShopName = styled.figcaption`
  font-size: var(--text-size-18);
  font-family: 'PretendardSemiBold', 'NotoSans', 'sans-serif';
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

const ArtShopDescBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;

  @media screen and (max-width: 991px) {
    flex-direction: column;
    margin-bottom: 75px;
  }
`;

const ArtShopDesc = styled.p`
  width: 100%;
  font-size: 16px;
  line-height: 234.5%;
  letter-spacing: -0.07em;
  font-size: var(--text-size-16);
  font-family: 'PretendardRegular', 'NotoSans', 'sans-serif';

  @media screen and (max-width: 991px) {
    margin-bottom: 50px;
    padding: 0 35px;
    width: 100%;
    line-height: 29px;
    text-align: justify;
    letter-spacing: -0.095em;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const ReserveButtonBox = styled.div`
  margin-top: 25px;
  width: 400px;
  height: 40px;

  @media screen and (max-width: 991px) {
    margin-top: 0px;
    width: 100%;
    padding: 0 35px;
  }
`;

//! 줄바꿈
const Break = styled.br`
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const ArtShop = () => {
  const [bannerImage, setBannerImage] = useState([]);
  const [galleryImage, setGalleryImage] = useState([]);
  const navigate = useNavigate();
  const fetchMainBannerImage = async () => {
    const response = await getData('shop/banner/images/', navigate);
    setBannerImage(response);
  };
  const fetchMainGalleryImage = async () => {
    const response = await getData('shop/artworks/', navigate);
    setGalleryImage(response);
  };
  const [getBanner, isBannerLoading] = useLoading(fetchMainBannerImage);
  const [getGallery, isGalleryLoading] = useLoading(fetchMainGalleryImage);

  useEffect(() => {
    getBanner();
    getGallery();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ArtShopContainer>
      <ArtShopWrapper>
        <ArtShopBox>
          <ArtShopTitle>아트샵</ArtShopTitle>
          <ArtShopBannerBox>
            <Banner
              loading={isBannerLoading}
              item={bannerImage && bannerImage}
            />
          </ArtShopBannerBox>
          <ArtShopMenuBox>
            <ArtShopName>일상이 예술, 예술이 일상</ArtShopName>
            <Linebar />
            <ArtShopDescBox>
              <ArtShopDesc>
                작가들의 에디션 작품부터 저렴한 아트포스터까지 다양한 가격대의
                그림이 준비되어 있습니다. <Break /> 선물하기에 좋은 소품들과
                문구류, 아트 굿즈들을 판매하며 지역 작가와 협업하여
                <Break /> 판매를 장려하고 클래스를 기획하는 공간입니다.
              </ArtShopDesc>
              <ReserveButtonBox>
                <ReserveButton url="https://artnedition.com/">
                  구입하기
                </ReserveButton>
              </ReserveButtonBox>
            </ArtShopDescBox>
          </ArtShopMenuBox>
          <CarouselWrapper
            slides={galleryImage}
            width={'450px'}
            height={'450px'}
            padding={'20px'}
            mobilewidth={'270px'}
            mobileheight={'270px'}
            loading={isGalleryLoading}
          />
        </ArtShopBox>
      </ArtShopWrapper>
    </ArtShopContainer>
  );
};

export default ArtShop;
