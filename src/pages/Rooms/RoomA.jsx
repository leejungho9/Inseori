import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ReserveButton from '../../compoents/Button/ReserveButton';
import ban from '../../assets/images/ban.png';
import ban2 from '../../assets/images/ban2.png';
import ban3 from '../../assets/images/ban3.png';
import ban4 from '../../assets/images/ban4.png';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import RoomACarousel from '../../compoents/Carousel/RoomACarousel';
import RoomAGalleryCarousel from '../../compoents/Carousel/RoomAGalleryCarousel';
import RoomA_1 from '../../assets/images/RoomA/RoomB_1.jpg';
import RoomA_2 from '../../assets/images/RoomA/RoomB_2.jpg';
import RoomA_3 from '../../assets/images/RoomA/RoomB_3.jpg';
import RoomA_4 from '../../assets/images/RoomA/RoomB_4.jpg';
import RoomA_5 from '../../assets/images/RoomA/RoomB_5.jpg';
const MainContainer = styled.main`
  /* position: relative; */
  overflow: hidden;
`;

const MainWrpper = styled.figure`
  float: right;
  width: calc(100% - 435px);
  position: relative;
  margin-top: 150px;

  @media screen and (max-width: 991px) {
    width: 100%;
    margin-top: 70px;
  }
`;

const RoomDescWrapper = styled.section`
  width: 100%;
  display: flex;
  padding: 150px 0 150px;
  justify-content: space-between;
  background-color: var(--white);

  @media screen and (max-width: 991px) {
    padding: 55px 20px 50px;
    flex-direction: column;
    align-items: center;
  }
`;
const RoomDescBox = styled.div`
  width: 370px;
  @media screen and (max-width: 991px) {
    width: 100%;
  }
  @media screen and (max-width: 500px) {
    width: 400px;
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

const RoomImagesWrapper = styled.figure``;

const FirstImageBox = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
  column-gap: 20px;
  @media screen and (max-width: 991px) {
    column-gap: 10px;
  }
`;
const SecondImageBox = styled.div`
  display: grid;
  grid-template-columns: 65% 35%;
  column-gap: 20px;
  @media screen and (max-width: 991px) {
    column-gap: 10px;
  }
`;
const ThreeImageBox = styled.div`
  display: grid;
  grid-template-columns: calc(100% + 20px);
  column-gap: 20px;
  @media screen and (max-width: 991px) {
    column-gap: 10px;
  }
`;

const RoomImages = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const RoomTitle = styled.h1`
  font-size: var(--text-size-25);
  font-weight: bold;
  color: var(--dark);

  @media screen and (max-width: 991px) {
    text-align: center;
    font-size: var(--text-size-20);
  }
  @media screen and (max-width: 500px) {
    font-size: var(--text-size-24);
  }
`;
const RoomSubTitle = styled.p`
  font-size: var(--text-size-18);
  color: var(--dark);
  margin-top: 16px;

  @media screen and (max-width: 991px) {
    text-align: center;
    font-size: var(--text-size-20);
    margin-top: 10px;
  }

  @media screen and (max-width: 500px) {
    font-size: var(--text-size-16);
  }
`;
const RoomDesc = styled.p`
  color: var(--gray);
  margin-top: 60px;
  line-height: 2;
  font-size: var(--text-size-16);

  @media screen and (max-width: 991px) {
    text-align: center;
    font-size: var(--text-size-18);
    margin-top: 50px;
  }
  @media screen and (max-width: 500px) {
    font-size: var(--text-size-16);
  }
`;
const ReserveButtonBox = styled.div`
  padding-right: 100px;
  width: 200px;
  @media screen and (max-width: 991px) {
    width: 100%;
    padding: 0 12px;
  }
  @media screen and (max-width: 500px) {
    margin-top: 60px;
  }
`;
const RoomInfoWrapper = styled.div`
  padding-top: 100px;
  padding-bottom: 130px;
  @media screen and (max-width: 991px) {
    padding-bottom: 120px;
  }
  @media screen and (max-width: 500px) {
    padding-top: 40px;
    padding-bottom: 0px;
  }
`;
const RoomInfoBox = styled.div`
  display: flex;
  padding-right: 100px;
  @media screen and (max-width: 991px) {
    padding-right: 0;
    flex-direction: column;
  }
`;

const RoomInfoContentBox = styled.div`
  flex-grow: 1;
  width: 70%;
  @media screen and (max-width: 991px) {
    width: 100%;
    padding: 0 15px;
  }
`;
const RoomInfoSubTitleBox = styled.div`
  display: flex;
  padding-top: 30px;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  @media screen and (max-width: 500px) {
    padding-top: 50px;
  }
`;
const RoomInfoSubTitle = styled.h3`
  font-size: var(--text-size-16);
  color: var(--dark);
  margin-left: 20px;
  @media screen and (max-width: 500px) {
    font-weight: bold;
  }
`;

const SplitLine = styled.div`
  height: 1px;
  background-color: var(--gray);
  margin: 10px 0;
`;

const RoomIconBox = styled.div`
  padding: 70px 140px;
  width: 30%;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 991px) {
    width: 100%;
    flex-direction: row;
    justify-content: center;
    padding: 95px 50px 0px;
  }

  @media screen and (max-width: 500px) {
    padding: 95px 46px 67px;
    justify-content: space-between;
  }
`;

const IconBox = styled.div`
  width: 50px;
  height: 50px;
  margin-bottom: 50px;
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

const RoomInfoDescBox = styled.div`
  height: ${({ AccordiItemVisible }) => (AccordiItemVisible ? '165px' : '0')};
  opacity: ${({ AccordiItemVisible }) => (AccordiItemVisible ? 100 : 0)};
  visibility: ${({ AccordiItemVisible }) =>
    AccordiItemVisible ? 'visible' : 'hidden'};
  transition: 0.5s;

  @media screen and (max-width: 500px) {
    height: ${({ AccordiItemVisible }) => (AccordiItemVisible ? '200px' : '0')};
  }
`;

const RoomInfoDesc = styled.p`
  font-size: var(--text-size-16);
  color: var(--dark);
  line-height: 180.5%;
  padding: 10px;

  @media screen and (max-width: 991px) {
    font-size: var(--text-size-16);
  }
  @media screen and (max-width: 500px) {
    font-size: var(--text-size-16);
    text-align: justify;
    letter-spacing: -0.085em;
  }
`;

const MinusIcon = styled(AiOutlineMinus)`
  margin-right: 20px;
`;
const PlusIcon = styled(AiOutlinePlus)`
  margin-right: 20px;
`;
//! 줄바꿈
const Break = styled.br``;

function RoomA() {
  const [AccordiItemVisible, setAccordiItemVisible] = useState('itemA');

  console.log(AccordiItemVisible);

  //! 아코디언 활성화 함수
  const handleShowAccordion = (menu) => {
    if (menu === AccordiItemVisible) {
      setAccordiItemVisible('');
    } else {
      setAccordiItemVisible(menu);
    }
  };
  const [mobileGallery, setMobileGallery] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 500) {
      setMobileGallery(true);
    }
  }, []);
  return (
    <MainContainer>
      <MainWrpper>
        <RoomACarousel />
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
          <RoomAGalleryCarousel />
        ) : (
          <RoomImagesContainer>
            <FirstImageBox>
              <RoomImagesWrapper className="item">
                <RoomImages src={RoomA_1} alt="홰경당 이미지" />
              </RoomImagesWrapper>
              <RoomImagesWrapper className="item">
                <RoomImages src={RoomA_2} alt="홰경당 이미지" />
              </RoomImagesWrapper>
            </FirstImageBox>
            <SecondImageBox>
              <RoomImagesWrapper className="item">
                <RoomImages src={RoomA_3} alt="홰경당 이미지" />
              </RoomImagesWrapper>
              <RoomImagesWrapper className="item">
                <RoomImages src={RoomA_4} alt="홰경당 이미지" />
              </RoomImagesWrapper>
            </SecondImageBox>
            <ThreeImageBox>
              <RoomImagesWrapper className="item">
                <RoomImages src={RoomA_5} alt="홰경당 이미지" />
              </RoomImagesWrapper>
            </ThreeImageBox>
          </RoomImagesContainer>
        )}
        <RoomInfoWrapper>
          <RoomTitle>객실정보</RoomTitle>
          <RoomInfoBox>
            <RoomInfoContentBox>
              <RoomInfoSubTitleBox onClick={() => handleShowAccordion('itemA')}>
                <RoomInfoSubTitle>정보</RoomInfoSubTitle>
                {AccordiItemVisible === 'itemA' ? <MinusIcon /> : <PlusIcon />}
              </RoomInfoSubTitleBox>
              <SplitLine />
              <RoomInfoDescBox
                AccordiItemVisible={AccordiItemVisible === 'itemA'}
              >
                <RoomInfoDesc>
                  스테이 아트앤은 (주)아트앤라이프에서 기획하고 운영하는
                  복합문화공간인 인서리공원 내에 있는 스테이입니다. 광양 내
                  100년된 한옥을 리노베이션 한 다경당, 근대시대에 있을 법한
                  공간으로 꾸며진 예린의 집, 한옥이 더 이상 옛것이 아닌 현대의
                  펍한 공안으로 거듭난 홰경당이 있으며 더 다양하고 아름다운
                  공간을 만들어 갈 계획을 가지고 있습니다.
                </RoomInfoDesc>
              </RoomInfoDescBox>
              <RoomInfoSubTitleBox onClick={() => handleShowAccordion('itemB')}>
                <RoomInfoSubTitle>주의사항</RoomInfoSubTitle>
                {AccordiItemVisible === 'itemB' ? <MinusIcon /> : <PlusIcon />}
              </RoomInfoSubTitleBox>
              <SplitLine />
              <RoomInfoDescBox
                AccordiItemVisible={AccordiItemVisible === 'itemB'}
              >
                <RoomInfoDesc>
                  스테이 아트앤은 (주)아트앤라이프에서 기획하고 운영하는
                  복합문화공간인 인서리공원 내에 있는 스테이입니다. 광양 내
                  100년된 한옥을 리노베이션 한 다경당, 근대시대에 있을 법한
                  공간으로 꾸며진 예린의 집, 한옥이 더 이상 옛것이 아닌 현대의
                  펍한 공안으로 거듭난 홰경당이 있으며 더 다양하고 아름다운
                  공간을 만들어 갈 계획을 가지고 있습니다.
                </RoomInfoDesc>
              </RoomInfoDescBox>
              <RoomInfoSubTitleBox onClick={() => handleShowAccordion('itemC')}>
                <RoomInfoSubTitle>어매니티</RoomInfoSubTitle>
                {AccordiItemVisible === 'itemC' ? <MinusIcon /> : <PlusIcon />}
              </RoomInfoSubTitleBox>
              <SplitLine />
              <RoomInfoDescBox
                AccordiItemVisible={AccordiItemVisible === 'itemC'}
              >
                <RoomInfoDesc>
                  스테이 아트앤은 (주)아트앤라이프에서 기획하고 운영하는
                  복합문화공간인 인서리공원 내에 있는 스테이입니다. 광양 내
                  100년된 한옥을 리노베이션 한 다경당, 근대시대에 있을 법한
                  공간으로 꾸며진 예린의 집, 한옥이 더 이상 옛것이 아닌 현대의
                  펍한 공안으로 거듭난 홰경당이 있으며 더 다양하고 아름다운
                  공간을 만들어 갈 계획을 가지고 있습니다.
                </RoomInfoDesc>
              </RoomInfoDescBox>
              <RoomInfoSubTitleBox onClick={() => handleShowAccordion('itemD')}>
                <RoomInfoSubTitle>추가요금 안내</RoomInfoSubTitle>
                {AccordiItemVisible === 'itemD' ? <MinusIcon /> : <PlusIcon />}
              </RoomInfoSubTitleBox>
              <SplitLine />
              <RoomInfoDescBox
                AccordiItemVisible={AccordiItemVisible === 'itemD'}
              >
                <RoomInfoDesc>
                  스테이 아트앤은 (주)아트앤라이프에서 기획하고 운영하는
                  복합문화공간인 인서리공원 내에 있는 스테이입니다. 광양 내
                  100년된 한옥을 리노베이션 한 다경당, 근대시대에 있을 법한
                  공간으로 꾸며진 예린의 집, 한옥이 더 이상 옛것이 아닌 현대의
                  펍한 공안으로 거듭난 홰경당이 있으며 더 다양하고 아름다운
                  공간을 만들어 갈 계획을 가지고 있습니다.
                </RoomInfoDesc>
              </RoomInfoDescBox>
            </RoomInfoContentBox>
            <RoomIconBox>
              <IconBox>
                <IconImage src={ban}></IconImage>
              </IconBox>
              <IconBox>
                <IconImage src={ban2}></IconImage>
              </IconBox>
              <IconBox>
                <IconImage src={ban3}></IconImage>
              </IconBox>
              <IconBox>
                <IconImage src={ban4}></IconImage>
              </IconBox>
            </RoomIconBox>
          </RoomInfoBox>
        </RoomInfoWrapper>
      </MainWrpper>
    </MainContainer>
  );
}

export default RoomA;
