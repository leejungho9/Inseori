import React from 'react';
import styled from 'styled-components';
import ReserveButton from 'components/Common/Button/ReserveButton';
import artshop from 'assets/images/artshop/artshop1.png';
import artshopDetail1 from 'assets/images/artshop/artshopDetail1.png';
import artshopDetail2 from 'assets/images/artshop/artshopDetail2.png';

const ArtShopDetailContainer = styled.main`
  overflow: hidden;
`;

const ArtShopDetailWrapper = styled.section`
  float: right;
  //! 전체너비 - 네브바 너비
  width: calc(100% - 435px);
  position: relative;
  margin-top: 150px;
  padding-bottom: 130px;
  padding-right: 100px;

  @media screen and (max-width: 991px) {
    width: 100%;
    margin-top: 70px;
    padding-bottom: 75px;
    padding-right: 0;
  }
`;

const ArtShopDetailTitle = styled.h1`
  display: none;

  @media screen and (max-width: 991px) {
    font-size: 22px;
    font-weight: bold;
    margin: 30px 25px;
    display: inline-block;
  }
`;

const ArtShopDetailBox = styled.article`
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 1440px) {
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 991px) {
    padding: 0 25px;
  }
`;

const ArtShopImageBox = styled.figure`
  width: 450px;
  height: 450px;

  @media screen and (max-width: 500px) {
    width: 100%;
    height: 380px;
  }
`;

const ArtShopImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
`;

const ArtShopInfoBox = styled.article`
  flex-grow: 1;
  padding-left: 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 1440px) {
    width: 100%;
    padding-left: 0;
    padding-top: 45px;
  }
`;

const ArtShopTitle = styled.h2`
  font-family: 'PretendardBold';
  font-weight: bold;
  font-size: var(--text-size-25);
`;

const Linebar = styled.hr`
  width: 100%;
  border: none;
  background-color: #d9d9d9;
  height: 1px;
  margin: 30px 0;

  @media screen and (max-width: 991px) {
    margin: 15px 0;
  }
`;
const ArtShopTextBox = styled.div`
  display: flex;
  height: 27px;
  margin-bottom: 20px;
  align-items: center;

  @media screen and (max-width: 991px) {
    margin-bottom: 15px;
  }
`;

const ArtShopInfoLable = styled.span`
  width: 56px;
  margin-right: 87px;
  font-family: 'PretendardBold';
  font-weight: bold;
  font-size: var(--text-size-16);
  display: inline-block;

  @media screen and (max-width: 991px) {
    margin-right: 62px;
  }
`;

const ArtShopInfoValue = styled.span`
  font-family: 'PretendardRegular';
  font-size: var(--text-size-16);
`;

const ReserveButtonBox = styled.div`
  width: 400px;
  height: 40px;
  margin-top: 30px;
  @media screen and (max-width: 1440px) {
    width: 100%;
  }
  @media screen and (max-width: 991px) {
    margin-top: 47px;
  }
`;

const ArtShopDetailImageWrapper = styled.section`
  padding-top: 40px;

  @media screen and (max-width: 991px) {
    padding-top: 74px;
  }
`;

const ArtShopDetailText = styled.h2`
  font-family: 'PretendardBold';
  font-size: 18px;
  margin-bottom: 30px;

  @media screen and (max-width: 991px) {
    display: none;
  }
`;

const ArtShopDetailImageBox = styled.figure`
  width: 100%;

  img:first-child {
    margin-bottom: 15px;
  }

  @media screen and (max-width: 991px) {
    img:first-child {
      margin-bottom: 20px;
    }
  }
`;

const ArtShopDetailImage = styled.img`
  width: 100%;
  height: 467px;
  object-fit: cover;

  @media screen and (max-width: 500px) {
    height: 300px;
  }
`;

const ArtShopDetail = () => {
  return (
    <ArtShopDetailContainer>
      <ArtShopDetailWrapper>
        <ArtShopDetailTitle>아트샵</ArtShopDetailTitle>
        <ArtShopDetailBox>
          <ArtShopImageBox>
            <ArtShopImage src={artshop} />
          </ArtShopImageBox>
          <ArtShopInfoBox>
            <ArtShopTitle>Solo series</ArtShopTitle>
            <Linebar />
            <ArtShopTextBox>
              <ArtShopInfoLable>작가명</ArtShopInfoLable>
              <ArtShopInfoValue>갑빠오</ArtShopInfoValue>
            </ArtShopTextBox>
            <ArtShopTextBox>
              <ArtShopInfoLable>에디션</ArtShopInfoLable>
              <ArtShopInfoValue>오픈에디션</ArtShopInfoValue>
            </ArtShopTextBox>
            <ArtShopTextBox>
              <ArtShopInfoLable>제작방식</ArtShopInfoLable>
              <ArtShopInfoValue>핸드페인팅</ArtShopInfoValue>
            </ArtShopTextBox>
            <ArtShopTextBox>
              <ArtShopInfoLable>사이즈</ArtShopInfoLable>
              <ArtShopInfoValue>W 50.0 x H 50.0cm</ArtShopInfoValue>
            </ArtShopTextBox>
            <ArtShopTextBox>
              <ArtShopInfoLable>가격</ArtShopInfoLable>
              <ArtShopInfoValue>500,000원</ArtShopInfoValue>
            </ArtShopTextBox>
            <ReserveButtonBox>
              <ReserveButton>구입하기</ReserveButton>
            </ReserveButtonBox>
          </ArtShopInfoBox>
        </ArtShopDetailBox>
        <ArtShopDetailImageWrapper>
          <ArtShopDetailText>상세이미지</ArtShopDetailText>
          <ArtShopDetailImageBox>
            <ArtShopDetailImage src={artshopDetail1}></ArtShopDetailImage>
            <ArtShopDetailImage src={artshopDetail2}></ArtShopDetailImage>
          </ArtShopDetailImageBox>
        </ArtShopDetailImageWrapper>
      </ArtShopDetailWrapper>
    </ArtShopDetailContainer>
  );
};

export default ArtShopDetail;
