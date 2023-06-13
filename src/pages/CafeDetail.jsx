import React from 'react';
import styled from 'styled-components';
import ReserveButton from 'components/Common/Button/ReserveButton';
import { useLocation } from 'react-router-dom';

const CafeDetailContainer = styled.main`
  overflow: hidden;
`;

const CafeDetailWrapper = styled.section`
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

const CafeDetailTitle = styled.h1`
  display: none;

  @media screen and (max-width: 991px) {
    font-size: 22px;
    font-weight: bold;
    margin: 30px 25px;
    display: inline-block;
    font-family: 'PretendardSemiBold';
  }
`;

const CafeDetailBox = styled.article`
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

const CafeImageBox = styled.figure`
  width: 450px;
  height: 450px;

  @media screen and (max-width: 500px) {
    width: 100%;
    height: 380px;
  }
`;

const CafeImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
`;

const CafeInfoBox = styled.article`
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

const CafeTitle = styled.h2`
  font-family: 'PretendardSemiBold';
  font-weight: bold;
  font-size: var(--text-size-25);

  @media screen and (max-width: 500px) {
    font-size: var(--text-size-18);
  }
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
const CafeTextBox = styled.div`
  display: flex;
  height: 27px;
  margin-bottom: 20px;
  align-items: center;

  @media screen and (max-width: 991px) {
    margin-bottom: 15px;
  }
`;

const CafeInfoLable = styled.span`
  width: 56px;
  margin-right: 87px;
  font-family: 'PretendardSemiBold';
  font-weight: bold;
  font-size: var(--text-size-16);
  display: inline-block;

  @media screen and (max-width: 991px) {
    margin-right: 62px;
  }
`;

const CafeInfoValue = styled.span`
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

const CafeDetailImageWrapper = styled.section`
  padding-top: 40px;

  @media screen and (max-width: 991px) {
    padding-top: 74px;
  }
`;

const CafeDetailText = styled.h2`
  font-family: 'PretendardBold';
  font-size: 18px;
  margin-bottom: 30px;

  @media screen and (max-width: 991px) {
    display: none;
  }
`;

const CafeDetailImageBox = styled.figure`
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

const CafeDetailImage = styled.img`
  width: 100%;
  height: 467px;
  object-fit: cover;

  @media screen and (max-width: 500px) {
    height: 300px;
  }
`;

const CafeDetail = () => {
  const location = useLocation();
  const { item } = location.state;

  return (
    <CafeDetailContainer>
      <CafeDetailWrapper>
        <CafeDetailTitle>카페</CafeDetailTitle>
        <CafeDetailBox>
          <CafeImageBox>
            <CafeImage src={item.url} />
          </CafeImageBox>
          <CafeInfoBox>
            <CafeTitle>{item.name}</CafeTitle>
            <Linebar />
            <CafeTextBox>
              <CafeInfoLable>제조사</CafeInfoLable>
              <CafeInfoValue>{item.manufacturer}</CafeInfoValue>
            </CafeTextBox>
            <CafeTextBox>
              <CafeInfoLable>원산지</CafeInfoLable>
              <CafeInfoValue>{item.origin}</CafeInfoValue>
            </CafeTextBox>
            <CafeTextBox>
              <CafeInfoLable>컵노트</CafeInfoLable>
              <CafeInfoValue>{item.cupnote} 잔</CafeInfoValue>
            </CafeTextBox>
            <CafeTextBox>
              <CafeInfoLable>용량</CafeInfoLable>
              <CafeInfoValue>{item.capacity} kg</CafeInfoValue>
            </CafeTextBox>
            <CafeTextBox>
              <CafeInfoLable>가격</CafeInfoLable>
              <CafeInfoValue>{item.price} 원</CafeInfoValue>
            </CafeTextBox>
            <ReserveButtonBox>
              <ReserveButton>구입하기</ReserveButton>
            </ReserveButtonBox>
          </CafeInfoBox>
        </CafeDetailBox>
        <CafeDetailImageWrapper>
          <CafeDetailText>상세이미지</CafeDetailText>
          <CafeDetailImageBox>
            <CafeDetailImage src={item.detailurl}></CafeDetailImage>
            <CafeDetailImage src={item.detailurl}></CafeDetailImage>
          </CafeDetailImageBox>
        </CafeDetailImageWrapper>
      </CafeDetailWrapper>
    </CafeDetailContainer>
  );
};

export default CafeDetail;
