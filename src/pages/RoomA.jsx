import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ReserveButton from 'components/Common/Button/ReserveButton';
import ban from 'assets/images/room/ban/ban.png';
import ban2 from 'assets/images/room/ban/ban2.png';
import ban3 from 'assets/images/room/ban/ban3.png';
import ban4 from 'assets/images/room/ban/ban4.png';
import room1 from 'assets/images/room/room1.jpg';
import room2 from 'assets/images/room/room2.jpg';
import room3 from 'assets/images/room/room3.jpg';
import room4 from 'assets/images/room/room4.jpg';
import room5 from 'assets/images/room/room5.jpg';
import Accordion from 'components/Common/Accordion/Accordion';
import roomgalleryData from 'data/roomgalleryData';
import CarouselWrapper from 'components/Common/Carousel/CarouselWrapper';
import BannerCarousel from 'components/Common/Carousel/BannerCarousel';
import roombannerData from 'data/roombannerData';

const MainContainer = styled.main`
  overflow: hidden;
`;

const MainWrpper = styled.figure`
  float: right;
  //! 전체너비 - 네브바 너비
  width: calc(100% - 435px);
  position: relative;
  margin-top: 150px;
  padding-bottom: 130px;

  @media screen and (max-width: 991px) {
    width: 100%;
    margin-top: 70px;
    padding-bottom: 70px;
  }
`;

const RoomDescWrapper = styled.section`
  width: 100%;
  display: flex;
  padding: 75px 0 150px;
  padding-right: 100px;

  justify-content: space-between;
  background-color: var(--white);

  @media screen and (max-width: 991px) {
    padding: 55px 25px 50px;
    flex-direction: column;
    align-items: center;
  }
`;
const RoomDescBox = styled.div``;

const RoomTitle = styled.h1`
  font-size: var(--text-size-25);
  font-family: PretendardSemiBold;
  font-weight: bold;
  color: var(--dark);
  letter-spacing: -0.07em;

  @media screen and (max-width: 991px) {
    text-align: center;
    font-size: var(--text-size-24);
  }
  @media screen and (max-width: 500px) {
    font-size: var(--text-size-24);
  }
`;

const RoomSubTitle = styled.p`
  font-size: var(--text-size-18);
  font-family: PretendardRegular;
  color: var(--dark);
  margin-top: 16px;
  letter-spacing: -0.07em;

  @media screen and (max-width: 991px) {
    text-align: center;
    margin-top: 13px;
  }

  @media screen and (max-width: 500px) {
    font-size: var(--text-size-16);
  }
`;

const RoomDesc = styled.p`
  font-size: var(--text-size-18);
  color: var(--gray);
  margin-top: 60px;
  line-height: 1.8;
  font-family: PretendardRegular;
  letter-spacing: -0.07em;

  @media screen and (max-width: 991px) {
    text-align: center;
    margin: 50px 0;
  }
  @media screen and (max-width: 500px) {
    font-size: var(--text-size-16);
  }
`;

const ReserveButtonBox = styled.div`
  width: 120px;
  height: 45px;

  @media screen and (max-width: 991px) {
    width: 200px;
    height: 40px;
    padding: 0 12px;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const RoomImagesContainer = styled.section`
  display: grid;
  align-items: start;
  display: grid;
  grid-row-gap: 20px;

  @media screen and (max-width: 991px) {
    grid-row-gap: 10px;
  }
`;

const HeadImageBox = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
  column-gap: 20px;
  @media screen and (max-width: 991px) {
    column-gap: 10px;
  }
`;
const BodyImageBox = styled.div`
  display: grid;
  grid-template-columns: 65% 35%;
  column-gap: 20px;
  @media screen and (max-width: 991px) {
    column-gap: 10px;
  }
`;
const FootImageBox = styled.div`
  display: grid;
  grid-template-columns: calc(100% + 20px);
  column-gap: 20px;
  @media screen and (max-width: 991px) {
    column-gap: 10px;
  }
`;
const RoomImageWrapper = styled.figure``;

const RoomImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const RoomInfoWrapper = styled.section`
  padding-top: 100px;
  padding-bottom: 130px;
  @media screen and (max-width: 991px) {
    padding-bottom: 120px;
    padding-top: 40px;
  }
  @media screen and (max-width: 500px) {
    padding-bottom: 0px;
  }
`;

const RoomInfoBox = styled.div`
  display: flex;
  padding-right: 240px;
  @media screen and (max-width: 991px) {
    padding-right: 0;
    flex-direction: column;
  }
`;

const RoomIconBox = styled.div`
  width: 20%;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  padding-top: 50px;

  @media screen and (max-width: 991px) {
    width: 100%;
    flex-direction: row;
    justify-content: center;
    padding: 95px 50px 0px;
  }

  @media screen and (max-width: 500px) {
    padding: 95px 25px 0;
    justify-content: space-between;
  }
`;

const IconBox = styled.figure`
  width: 50px;
  height: 50px;
  margin-bottom: 53px;
  @media screen and (max-width: 991px) {
    margin-bottom: 0;
    margin-right: 20px;
    margin-left: 20px;
  }

  @media screen and (max-width: 500px) {
    width: 52px;
    height: 52px;
    margin-right: 0px;
    margin-left: 0px;
  }
`;

const IconImage = styled.img`
  width: 100%;
  height: auto;
`;

//! 줄바꿈
const Break = styled.br``;

function RoomA() {
  const [mobileGallery, setMobileGallery] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 500) {
      setMobileGallery(true);
    }
  }, []);
  return (
    <MainContainer>
      <MainWrpper>
        <BannerCarousel slides={roombannerData} />
        <RoomDescWrapper>
          <RoomDescBox>
            <RoomTitle>홰경당</RoomTitle>
            <RoomSubTitle>한옥을 현대적으로 재해석하다.</RoomSubTitle>
            <RoomDesc>
              홰경당은 인서리공원 Aat 카페와 가장 인접하게 위치하고 <Break />
              있으며 젊은 사람들이 좋아하는 감성요소들로 채워진 <Break />
              모던한 숙소입니다.
            </RoomDesc>
          </RoomDescBox>
          <ReserveButtonBox>
            <ReserveButton url="https://booking.naver.com/booking/3/bizes/802107/items/4737745">
              예약하기
            </ReserveButton>
          </ReserveButtonBox>
        </RoomDescWrapper>
        {mobileGallery ? (
          <CarouselWrapper
            slides={roomgalleryData}
            width={'436px'}
            height={'436px'}
            padding={'25px'}
            mobilewidth={'300px'}
            mobileheight={'300px'}
          />
        ) : (
          <RoomImagesContainer>
            <HeadImageBox>
              <RoomImageWrapper className="item">
                <RoomImage src={room1} alt="홰경당 이미지" />
              </RoomImageWrapper>
              <RoomImageWrapper className="item">
                <RoomImage src={room2} alt="홰경당 이미지" />
              </RoomImageWrapper>
            </HeadImageBox>
            <BodyImageBox>
              <RoomImageWrapper className="item">
                <RoomImage src={room3} alt="홰경당 이미지" />
              </RoomImageWrapper>
              <RoomImageWrapper className="item">
                <RoomImage src={room4} alt="홰경당 이미지" />
              </RoomImageWrapper>
            </BodyImageBox>
            <FootImageBox>
              <RoomImageWrapper className="item">
                <RoomImage src={room5} alt="홰경당 이미지" />
              </RoomImageWrapper>
            </FootImageBox>
          </RoomImagesContainer>
        )}
        <RoomInfoWrapper>
          <RoomTitle>객실정보</RoomTitle>
          <RoomInfoBox>
            <Accordion />
            <RoomIconBox>
              <IconBox>
                <IconImage src={ban} ait="고성방가 금지"></IconImage>
              </IconBox>
              <IconBox>
                <IconImage src={ban2} alt="실내흡연 금지"></IconImage>
              </IconBox>
              <IconBox>
                <IconImage src={ban3} alt="애완동물 금지"></IconImage>
              </IconBox>
              <IconBox>
                <IconImage src={ban4} alt="주차 가능"></IconImage>
              </IconBox>
            </RoomIconBox>
          </RoomInfoBox>
        </RoomInfoWrapper>
      </MainWrpper>
    </MainContainer>
  );
}

export default RoomA;
