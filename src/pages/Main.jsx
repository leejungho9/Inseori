import { forwardRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import BannerCarousel from '../components/Common/Carousel/BannerCarousel';
import CarouselWrapper from 'components/Common/Carousel/CarouselWrapper';
import { getData } from 'apis/api';
import useLoading from 'hooks/useLoading';
import BannerSkeleton from 'components/Common/Skeleton/BannerSkeleton';
import GallerySkeleton from 'components/Common/Skeleton/GallerySkeleton';

const MainContainer = styled.main`
  overflow: hidden;
`;

const MainWrpper = styled.figure`
  float: right;
  //! 전체너비 - 네브바 너비
  width: calc(100% - 435px);
  position: relative;
  margin-top: 150px;
  margin-bottom: 130px;

  @media screen and (max-width: 991px) {
    width: 100%;
    margin-top: 70px;
    margin-bottom: 75px;
  }
`;

const MainIntroWrapper = styled.section`
  width: 100%;
  display: flex;
  padding: 100px 0 150px;
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
  font-family: PretendardSemiBold;
  font-size: var(--text-size-25);
  color: var(--dark);
  margin-bottom: 30px;
  letter-spacing: -0.07em;

  @media screen and (max-width: 991px) {
    display: block;
  }

  @media screen and (max-width: 500px) {
    font-size: var(--text-size-24);
  }
`;
const MainIntro = styled.p`
  font-size: var(--text-size-18);
  font-family: PretendardRegular;
  color: var(--gray);
  line-height: 1.8;
  letter-spacing: -0.07em;

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

const Main = forwardRef((props, mainTopRef) => {
  const [bannerImage, setBannerImage] = useState([]);
  const [galleryImage, setGalleryImage] = useState([]);
  const fetchMainBannerImage = async () => {
    const response = await getData('banner/images/');
    setBannerImage(response);
  };
  const fetchMainGalleryImage = async () => {
    const response = await getData('gallery/images/');
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
    <MainContainer>
      <MainWrpper ref={mainTopRef}>
        {isBannerLoading ? (
          <BannerSkeleton />
        ) : (
          <BannerCarousel slides={bannerImage} />
        )}
        <MainIntroWrapper>
          <MainIntroBox>
            <MainTitle>인서리공원</MainTitle>
            <MainIntro>
              인서리공원은 광양시 도시재생 프로젝트로 <Break />
              리노베이션한 한옥 14채를 활용하여 <Break />
              많은 사람들이 쉽게, 더 가까이 예술을 접하고 <Break />
              향유 할 수 있기를 바라는 기대로 만들어진
              <Break />
              복합문화공간입니다.
            </MainIntro>
          </MainIntroBox>
        </MainIntroWrapper>

        {isGalleryLoading ? (
          <GallerySkeleton
            length={4}
            width={'435px'}
            height={'435px'}
            padding={'25px'}
            mobilewidth={'270px'}
            mobileheight={'270px'}
          />
        ) : (
          <CarouselWrapper
            slides={galleryImage}
            width={'435px'}
            height={'435px'}
            padding={'25px'}
            mobilewidth={'270px'}
            mobileheight={'270px'}
          />
        )}
      </MainWrpper>
    </MainContainer>
  );
});

// * displayName 설정
Main.displayName = 'Main';
export default Main;
