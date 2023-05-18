import React from 'react';
import styled from 'styled-components';
import RoomACarousel from '../../compoents/Carousel/RoomACarousel';
import ReserveButton from '../../compoents/Button/ReserveButton';
import RoomA_1 from '../../assets/images/RoomA/RoomA_1.jpg';
import RoomA_3 from '../../assets/images/RoomA/RoomA_3.jpg';
import RoomA_4 from '../../assets/images/RoomA/RoomA_4.jpg';
import RoomA_5 from '../../assets/images/RoomA/RoomA_5.jpg';
import RoomA_6 from '../../assets/images/RoomA/RoomA_6.jpg';
const MainContainer = styled.main`
  /* position: relative; */
  overflow: hidden;
`;

const MainWrpper = styled.figure`
  float: right;
  width: calc(100% - 435px);
  position: relative;
  margin-top: 150px;
`;

const RoomDescWrapper = styled.section`
  width: 100%;
  display: flex;
  padding: 150px 0 150px;
  background-color: var(--white);
`;
const RoomDescBox = styled.div`
  width: 370px;
`;
const RoomTitle = styled.h1`
  font-size: var(--text-size-25);
  font-weight: bold;
  color: var(--dark);
`;

const RoomSubTitle = styled.p`
  font-size: var(--text-size-18);
  color: var(--dark);
  margin-top: 16px;
`;
const RoomDesc = styled.p`
  color: var(--gray);
  margin-top: 60px;
  line-height: 2;
  font-size: var(--text-size-16);
`;
const ReserveButtonBox = styled.div`
  padding-right: 100px;
`;

const RoomImagesContainer = styled.section`
  display: grid;
  align-items: start;
  display: grid;
  grid-template-rows: repeat(3, 435px);
  grid-row-gap: 20px;

  .item:nth-child(1) {
  }
`;

const RoomImagesWrapper = styled.figure``;

const FirstImageBox = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  column-gap: 20px;
  grid-auto-rows: 435px;
`;
const SecondImageBox = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  column-gap: 20px;
  grid-auto-rows: 435px;
`;
const ThreeImageBox = styled.div`
  display: grid;
  grid-template-columns: calc(100% + 20px);
  grid-auto-rows: 435px;
  column-gap: 20px;
`;

const RoomImages = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const RoomInfoWrapper = styled.div`
  padding-top: 100px;
  padding-bottom: 130px;
`;
const RoomInfoBox = styled.div`
  font-size: var(--text-size-14);
  margin-right: 20px;
  & > div:first-child {
    margin-top: 40px;
  }
  & > div:last-child {
    margin-top: 30px;
  }
`;
const RoomDetailInfo = styled.div`
  width: 400px;
  display: flex;

  padding: 13px 0;
`;
const RoomInfo = styled.span`
  margin-right: 30px;
  width: 60px;
`;
const RoomInfoEtc = styled.span`
  margin-right: 30px;
  width: 100%;
`;

const FlexBox = styled.div`
  display: flex;
`;
function RoomA() {
  return (
    <MainContainer>
      <MainWrpper>
        <RoomACarousel />
        <RoomDescWrapper>
          <RoomDescBox>
            <RoomTitle>홰경당</RoomTitle>
            <RoomSubTitle>한옥을 현대적으로 재해석하다.</RoomSubTitle>
            <RoomDesc>
              홰경당은 인서리공원 Aat 카페와 가장 인접하게 위치하고 있으며
              모던하고 깔끔한 분위기의 젊은이들이 좋아하는 감성숙소의 요소를
              가지고 있습니다.
            </RoomDesc>
          </RoomDescBox>
          <ReserveButtonBox>
            <ReserveButton url="https://booking.naver.com/booking/3/bizes/802107/items/4737745">
              예약하기
            </ReserveButton>
          </ReserveButtonBox>
        </RoomDescWrapper>
        <RoomImagesContainer>
          <FirstImageBox>
            <RoomImagesWrapper className="item">
              <RoomImages src={RoomA_6} alt="홰경당 이미지" />
            </RoomImagesWrapper>
            <RoomImagesWrapper className="item">
              <RoomImages src={RoomA_5} alt="홰경당 이미지" />
            </RoomImagesWrapper>
          </FirstImageBox>
          <SecondImageBox>
            <RoomImagesWrapper className="item">
              <RoomImages src={RoomA_3} alt="홰경당 이미지" />
            </RoomImagesWrapper>
            <RoomImagesWrapper className="item">
              <RoomImages src={RoomA_1} alt="홰경당 이미지" />
            </RoomImagesWrapper>
          </SecondImageBox>
          <ThreeImageBox>
            <RoomImagesWrapper className="item">
              <RoomImages src={RoomA_4} alt="홰경당 이미지" />
            </RoomImagesWrapper>
          </ThreeImageBox>
        </RoomImagesContainer>
        <RoomInfoWrapper>
          <RoomTitle>객실정보</RoomTitle>
          <FlexBox>
            <RoomInfoBox>
              <RoomDetailInfo>
                <RoomInfo>체크인</RoomInfo>
                <RoomInfo> 14:00</RoomInfo>
              </RoomDetailInfo>
              <RoomDetailInfo>
                <RoomInfo>체크아웃</RoomInfo>
                <RoomInfo> 11:00</RoomInfo>
              </RoomDetailInfo>
              <RoomDetailInfo>
                <RoomInfo>기준인원</RoomInfo>
                <RoomInfo>2인</RoomInfo>
              </RoomDetailInfo>
              <RoomDetailInfo>
                <RoomInfoEtc>
                  기준인원 초과시 1인당 50,000원 추가금액 발생
                </RoomInfoEtc>
              </RoomDetailInfo>
            </RoomInfoBox>
            <RoomInfoBox>
              <RoomDetailInfo>
                <RoomInfo>구비용품</RoomInfo>
              </RoomDetailInfo>
              <RoomDetailInfo>
                <RoomInfoEtc>
                  침대, 에어컨, 포트, 인덕션, 정수기, 드라이기, 샴푸, 린스, 칫솔
                </RoomInfoEtc>
              </RoomDetailInfo>
              <RoomDetailInfo>
                <RoomInfoEtc>치약, 바디워시, 수건, 비누</RoomInfoEtc>
              </RoomDetailInfo>
              <RoomDetailInfo>
                <RoomInfoEtc>객실 내 흡연, 취사 일체 불가</RoomInfoEtc>
              </RoomDetailInfo>
            </RoomInfoBox>
          </FlexBox>
        </RoomInfoWrapper>
      </MainWrpper>
    </MainContainer>
  );
}

export default RoomA;
