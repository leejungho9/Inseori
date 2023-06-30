import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ReserveButton from 'components/Common/Button/ReserveButton';
import ban from 'assets/images/room/ban/ban.png';
import ban2 from 'assets/images/room/ban/ban2.png';
import ban3 from 'assets/images/room/ban/ban3.png';
import ban4 from 'assets/images/room/ban/ban4.png';
import Accordion from 'components/Common/Accordion/Accordion';
import CarouselWrapper from 'components/Common/Carousel/CarouselWrapper';
import { getData } from 'apis/api';
import useLoading from 'hooks/useLoading';
import { useParams } from 'react-router-dom';
import { BannerLargeCarousel } from 'components/Common/Carousel/BannerCarousel';

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
  white-space: pre;

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

function Room() {
  const [mobileGallery, setMobileGallery] = useState(false);
  const [roomDetail, setroomDetail] = useState([]);
  const { id } = useParams();
  const fetchMainBannerImage = async () => {
    const response = await getData(`stay/rooms/${id}/`);
    setroomDetail(response);
  };
  const [getRoomDetail, isRoomDetailLoading] = useLoading(fetchMainBannerImage);
  useEffect(() => {
    getRoomDetail();
    if (window.innerWidth < 500) {
      setMobileGallery(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <MainContainer>
      <MainWrpper>
        <BannerLargeCarousel
          slides={roomDetail && roomDetail.banners}
          path={'room '}
          loading={isRoomDetailLoading}
        />
        <RoomDescWrapper>
          <RoomDescBox>
            <RoomTitle>{roomDetail.name}</RoomTitle>
            <RoomSubTitle>{roomDetail.title}</RoomSubTitle>
            <RoomDesc>{roomDetail.description}</RoomDesc>
          </RoomDescBox>
          <ReserveButtonBox>
            <ReserveButton url="https://booking.naver.com/booking/3/bizes/802107/items/4737745">
              예약하기
            </ReserveButton>
          </ReserveButtonBox>
        </RoomDescWrapper>
        {mobileGallery ? (
          <CarouselWrapper
            slides={[
              {
                id: 1,
                image_url: roomDetail.image1_url,
                image_m_url: roomDetail.image1_m_url,
              },
              {
                id: 2,
                image_url: roomDetail.image2_url,
                image_m_url: roomDetail.image2_m_url,
              },
              {
                id: 3,
                image_url: roomDetail.image3_url,
                image_m_url: roomDetail.image3_m_url,
              },
              {
                id: 4,
                image_url: roomDetail.image4_url,
                image_m_url: roomDetail.image4_m_url,
              },
              {
                id: 5,
                image_url: roomDetail.image5_url,
                image_m_url: roomDetail.image5_m_url,
              },
            ]}
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
                <RoomImage src={roomDetail.image1_url} alt="홰경당 이미지" />
              </RoomImageWrapper>
              <RoomImageWrapper className="item">
                <RoomImage src={roomDetail.image2_url} alt="홰경당 이미지" />
              </RoomImageWrapper>
            </HeadImageBox>
            <BodyImageBox>
              <RoomImageWrapper className="item">
                <RoomImage src={roomDetail.image3_url} alt="홰경당 이미지" />
              </RoomImageWrapper>
              <RoomImageWrapper className="item">
                <RoomImage src={roomDetail.image4_url} alt="홰경당 이미지" />
              </RoomImageWrapper>
            </BodyImageBox>
            <FootImageBox>
              <RoomImageWrapper className="item">
                <RoomImage src={roomDetail.image5_url} alt="홰경당 이미지" />
              </RoomImageWrapper>
            </FootImageBox>
          </RoomImagesContainer>
        )}
        <RoomInfoWrapper>
          <RoomTitle>객실정보</RoomTitle>
          <RoomInfoBox>
            <Accordion items={roomDetail} />
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

export default Room;
