import React from 'react';
import styled from 'styled-components';
import classBanner from 'assets/images/OneDayClassDetail/onedayclassDetail.png';
import ReservationForm from 'components/Common/Form/ReservationForm';

const OnedayClassDetialContainer = styled.main`
  overflow: hidden;
`;

const OnedayClassDetailWrapper = styled.section`
  float: right;
  width: calc(100% - 435px);
  position: relative;
  margin-top: 150px;
  padding-bottom: 130px;
  padding-right: 100px;
`;

const OnedayClassDetailTitle = styled.h1`
  font-size: var(--text-size-18);
  font-weight: bold;
`;

const ReservationWrapper = styled.article`
  width: 100%;
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
`;

const ReservationFormBox = styled.div`
  margin: 30px 0;
`;
const ReservationFormTitle = styled.h2`
  font-size: var(--text-size-18);
  font-weight: bold;
`;

const BorderLine = styled.hr`
  width: 100%;
  border: none;
  background-color: #d9d9d9;
  height: 1px;
  margin-top: 20px;
  margin-bottom: 30px;
`;

const OnedayClassDetail = () => {
  return (
    <OnedayClassDetialContainer>
      <OnedayClassDetailWrapper>
        <OnedayClassDetailTitle>라탄조명 클래스</OnedayClassDetailTitle>
        <ReservationWrapper>
          <ReservationBanner />
          <ReservationFormBox>
            <ReservationFormTitle>예약신청서</ReservationFormTitle>
            <BorderLine />
            <ReservationForm />
          </ReservationFormBox>
        </ReservationWrapper>
      </OnedayClassDetailWrapper>
    </OnedayClassDetialContainer>
  );
};

export default OnedayClassDetail;
