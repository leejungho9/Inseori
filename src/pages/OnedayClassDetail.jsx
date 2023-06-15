import React from 'react';
import styled from 'styled-components';
import ReservationForm from 'components/Common/Form/ReservationForm';
import classBanner from 'assets/images/onedayclass/detail/onedayclassDetail.png';
import onedayCalssImage1 from 'assets/images/onedayclass/detail/onedayClassImage1.png';
import onedayCalssImage2 from 'assets/images/onedayclass/detail/onedayClassImage2.png';
import { useLocation } from 'react-router-dom';

const OnedayClassDetialContainer = styled.main`
  overflow: hidden;
`;

const OnedayClassDetailWrapper = styled.section`
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

const OnedayClassDetailTitle = styled.h1`
  font-family: 'PretendardSemiBold';
  font-size: var(--text-size-22);

  @media screen and (max-width: 991px) {
    margin: 30px 25px;
    font-size: var(--text-size-22);
  }
`;

const ReservationWrapper = styled.article`
  width: 100%;
  @media screen and (max-width: 991px) {
    padding: 0 25px;
  }
`;

const ReservationBanner = styled.figure`
  background-image: url(${classBanner});
  background-repeat: no-repeat;
  background-position: center 55%;
  background-size: cover;
  width: 100%;
  height: 300px;
  border-radius: 20px;
  margin-top: 30px;

  @media screen and (max-width: 991px) {
    width: 100%;
    height: 430px;
  }
`;

const ReservationFormBox = styled.div`
  margin: 45px 0px 0px;
`;

const ReservationFormTitle = styled.h2`
  font-family: 'PretendardSemiBold';
  font-size: var(--text-size-18);
  font-weight: bold;
`;

const Linebar = styled.hr`
  width: 100%;
  border: none;
  background-color: #d9d9d9;
  height: 1px;
  margin-top: 20px;
  margin-bottom: 30px;

  @media screen and (max-width: 991px) {
    margin-bottom: 20px;
    margin-bottom: 45px;
  }
`;

const ReservationImageBox = styled.figure`
  width: 100%;
  display: none;
  margin-top: 93px;
  img:first-child {
    margin-bottom: 20px;
  }

  @media screen and (max-width: 500px) {
    display: block;
  }
`;

const ReservationImage = styled.img`
  width: 100%;
  height: 430px;
  object-fit: cover;

  @media screen and (max-width: 500px) {
    height: 300px;
  }
`;

const OnedayClassDetailDescBox = styled.article`
  padding: 40px 25px 0px;
  line-height: 32px;
  letter-spacing: -0.06em;
  display: none;
  @media screen and (max-width: 500px) {
    display: block;
  }
`;

const OnedayClassDetailDesc = styled.p`
  font-size: var(--text-size-16);
  font-family: PretendardRegular;
  line-height: 32px;
  letter-spacing: -0.06em;
`;
const OnedayClassDetail = () => {
  const location = useLocation();
  const { item } = location.state;

  return (
    <OnedayClassDetialContainer>
      <OnedayClassDetailWrapper>
        <OnedayClassDetailTitle>라탄조명 클래스</OnedayClassDetailTitle>
        <ReservationWrapper>
          <ReservationBanner />
          <ReservationFormBox>
            <ReservationFormTitle>예약신청서</ReservationFormTitle>
            <Linebar />
            <ReservationForm item={item} />
          </ReservationFormBox>
        </ReservationWrapper>
        <ReservationImageBox>
          <ReservationImage src={onedayCalssImage1} />
          <ReservationImage src={onedayCalssImage2} />
        </ReservationImageBox>
        <OnedayClassDetailDescBox>
          <OnedayClassDetailDesc>
            나에게 가장 잘 어울리는, 오직 나만이 가질 수 있는 그 누구도 없는
            나만의 향수를 인서리공원에서 만들어보세요.
          </OnedayClassDetailDesc>
        </OnedayClassDetailDescBox>
      </OnedayClassDetailWrapper>
    </OnedayClassDetialContainer>
  );
};

export default OnedayClassDetail;
