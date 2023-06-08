import React from 'react';
import styled from 'styled-components';
import classBanner from '../assets/images/OneDayClassDetail/onedayclassDetail.png';
import ReserveButton from '../compoents/Button/ReserveButton';
const OneDayCalssDetialContainer = styled.main`
  /* position: relative; */
  overflow: hidden;
`;
const OneDayCalssDetailWrapper = styled.div`
  float: right;
  width: calc(100% - 435px);
  position: relative;
  margin-top: 150px;
  padding-bottom: 130px;
  padding-right: 100px;
`;
const OneDayClassDetailTitle = styled.h1`
  font-size: var(--text-size-18);
  font-weight: bold;
`;

const OneDayCalssContentWrapper = styled.section`
  width: 100%;
`;

const OneDayClaasBanner = styled.figure`
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
const ReservationForm = styled.h2`
  font-size: var(--text-size-18);
  font-weight: bold;
`;

const BorderLine = styled.div`
  width: 100%;
  background-color: #d9d9d9;
  height: 1px;
  margin-top: 20px;
  margin-bottom: 30px;
`;

const ReservationBox = styled.div`
  display: flex;
`;

const ClassInfoBox = styled.div`
  width: 50%;
  div:last-child {
    margin-top: 40px;
  }
`;
const ClassInfoInputBox = styled.div`
  padding-left: 68px;
  width: 50%;
`;
const ClassInfoTextBox = styled.div`
  height: 48px;
  margin-bottom: 6px;
  display: flex;
  align-items: center;
`;
const ClassCheckbox = styled.input``;
const ClassCheckBoxLable = styled.label`
  font-size: var(--text-size-16);
  margin: 0 5px;
  cursor: pointer;
  font-family: 'PretendardRegular';
`;
const ClassInfoTitle = styled.span`
  width: 80px;
  margin-right: 76px;
  font-size: var(--text-size-16);
  font-family: 'PretendardBold';
`;
const ClassInfoContent = styled.span`
  font-size: var(--text-size-16);
`;

const ClasasInfoDesc = styled.div`
  width: 100%;
  height: 48px;
  font-size: var(--text-size-16);
  margin-top: 43px;
  margin-bottom: 30px;
  font-family: PretendardRegular;
`;

const ClassInfoLabel = styled.label`
  width: 156px;
  font-size: var(--text-size-16);
  font-family: 'PretendardBold';
  cursor: pointer;
`;

const ClassInfoInput = styled.input`
  outline: none;
  border: 0;
  border-bottom: 1px solid #d9d9d9;
  width: 100%;
  font-size: var(--text-size-16);
`;

const OneDayCalssDetail = () => {
  return (
    <OneDayCalssDetialContainer>
      <OneDayCalssDetailWrapper>
        <OneDayClassDetailTitle>라탄조명 클래스</OneDayClassDetailTitle>
        <OneDayCalssContentWrapper>
          <OneDayClaasBanner />
          <ReservationFormBox>
            <ReservationForm>예약신청서</ReservationForm>
            <BorderLine />
            <ReservationBox>
              <ClassInfoBox>
                <ClassInfoTextBox>
                  <ClassInfoTitle>날짜</ClassInfoTitle>
                  <ClassInfoContent>2023.5.13(토)</ClassInfoContent>
                </ClassInfoTextBox>
                <ClassInfoTextBox>
                  <ClassInfoTitle>시간</ClassInfoTitle>
                  <ClassInfoContent>11:00~13:00</ClassInfoContent>
                </ClassInfoTextBox>
                <ClassInfoTextBox>
                  <ClassInfoTitle>예약마감</ClassInfoTitle>
                  <ClassInfoContent>2023.5.10(수)</ClassInfoContent>
                </ClassInfoTextBox>
                <ClassInfoTextBox>
                  <ClassInfoTitle>수강료</ClassInfoTitle>
                  <ClassInfoContent>45,000원</ClassInfoContent>
                </ClassInfoTextBox>
                <ClassInfoTextBox>
                  <ClassInfoTitle>입금계좌</ClassInfoTitle>
                  <ClassInfoContent>
                    우리은행 1002-151-887345 이정수
                  </ClassInfoContent>
                </ClassInfoTextBox>
                <ClassInfoTextBox>
                  <ClassCheckbox type="checkbox" id="check" />
                  <ClassCheckBoxLable htmlFor="check">
                    위 내용을 모두 확인하였습니다.
                  </ClassCheckBoxLable>
                </ClassInfoTextBox>
              </ClassInfoBox>
              <ClassInfoInputBox>
                <ClassInfoTextBox>
                  <ClassInfoLabel htmlFor="name">이름</ClassInfoLabel>
                  <ClassInfoInput id="name" />
                </ClassInfoTextBox>
                <ClassInfoTextBox>
                  <ClassInfoLabel htmlFor="phone">전화번호</ClassInfoLabel>
                  <ClassInfoInput id="phone" />
                </ClassInfoTextBox>
                <ClassInfoTextBox>
                  <ClassInfoLabel htmlFor="numberPeople">인원수</ClassInfoLabel>
                  <ClassInfoInput id="numberPeople" />
                </ClassInfoTextBox>
                <ClassInfoTextBox>
                  <ClassInfoLabel htmlFor="age">체험자 나이</ClassInfoLabel>
                  <ClassInfoInput id="age" />
                </ClassInfoTextBox>
                <ClassInfoTextBox>
                  <ClassInfoLabel htmlFor="request">요청사항</ClassInfoLabel>
                  <ClassInfoInput id="request" />
                </ClassInfoTextBox>
                <ClasasInfoDesc>
                  원데이클래스 참여가능여부 확인되면 핸드폰으로 개별
                  연락드립니다.
                </ClasasInfoDesc>
                <ReserveButton color={'black'}>예약하기</ReserveButton>
              </ClassInfoInputBox>
            </ReservationBox>
          </ReservationFormBox>
        </OneDayCalssContentWrapper>
      </OneDayCalssDetailWrapper>
    </OneDayCalssDetialContainer>
  );
};

export default OneDayCalssDetail;
