import { useEffect, useState } from 'react';
import styled from 'styled-components';
import CarouselWrapper from 'components/Common/Carousel/CarouselWrapper';
import ReserveButton from 'components/Common/Button/ReserveButton';
import artshopData from 'data/artshopData';
import { getData } from 'apis/api';
import useLoading from 'hooks/useLoading';
import BannerSkeleton from 'components/Common/Skeleton/BannerSkeleton';
import CardSkeleton from 'components/Common/Skeleton/CardSkeleton';

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

const ArtShopBanner = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  width: 541px;
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

const ArtShop = () => {
  const [bannerImage, setBannerImage] = useState([]);
  // ! api 수정되면 적용
  const [galleryImage, setGalleryImage] = useState([]);
  const fetchMainBannerImage = async () => {
    const response = await getData('shop/banner/images/');
    setBannerImage(response);
  };
  const fetchMainGalleryImage = async () => {
    const response = await getData('shop/artworks/');
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
        {artshopData && (
          <ArtShopBox>
            <ArtShopTitle>아트샵</ArtShopTitle>
            <ArtShopBannerBox>
              {isBannerLoading ? (
                <BannerSkeleton />
              ) : (
                <picture>
                  <source
                    media="(max-width : 500px)"
                    srcSet={
                      bannerImage[0].image_m_url === 'no-image-error'
                        ? bannerImage[0].image_url
                        : bannerImage[0].image_m_url
                    }
                  />
                  <ArtShopBanner
                    src={bannerImage[0].image_url}
                    alt="artshop_banner"
                  />
                </picture>
              )}
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
            {isGalleryLoading ? (
              <CardSkeleton
                length={4}
                width={'450px'}
                height={'450px'}
                padding={'20px'}
                mobilewidth={'270px'}
                mobileheight={'270px'}
              />
            ) : (
              <CarouselWrapper
                slides={galleryImage}
                width={'450px'}
                height={'450px'}
                padding={'20px'}
                mobilewidth={'270px'}
                mobileheight={'270px'}
              />
            )}
          </ArtShopBox>
        )}
      </ArtShopWrapper>
    </ArtShopContainer>
  );
};

export default ArtShop;
