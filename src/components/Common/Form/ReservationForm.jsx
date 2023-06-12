import React, { useRef, useState } from 'react';
import { Form } from 'react-router-dom';
import styled from 'styled-components';
import reservationValidate from 'utils/reservationValidate';
import ReserveButton from '../Button/ReserveButton';

const ClassInfoForm = styled(Form)`
  display: flex;

  @media screen and (max-width: 1300px) {
    flex-direction: column;
  }
`;

const ClassInfoBox = styled.section`
  width: 50%;
  div:last-child {
    margin-top: 37px;
  }
  @media screen and (max-width: 1300px) {
    width: 100%;
    div:last-child {
      margin-top: 55px;
      margin-bottom: 75px;
    }
  }
`;

const ClassInfoTextBox = styled.div`
  height: 48px;
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 1300px) {
    height: 40px;
  }
  @media screen and (max-width: 991px) {
    height: 20px;
    margin-bottom: 20px;
  }
`;

const ClassInfoTextLabel = styled.span`
  width: 80px;
  margin-right: 76px;
  font-size: var(--text-size-16);
  font-family: 'PretendardSemiBold';

  @media screen and (max-width: 500px) {
    margin-right: 15px;
  }
`;

const ClassInfoTextValue = styled.span`
  font-family: PretendardRegular;
  font-size: var(--text-size-16);
`;

const ClassCheckbox = styled.input``;

const ClassCheckLable = styled.label`
  font-size: var(--text-size-16);
  margin: 0 5px;
  cursor: pointer;
  font-family: 'PretendardRegular';

  @media screen and (max-width: 500px) {
    font-size: var(--text-size-13);
  }
`;

const ClassInfoInputBox = styled.section`
  padding-left: 68px;
  width: 50%;

  @media screen and (max-width: 1300px) {
    width: 100%;
    padding-left: 0;
  }
`;

const ClassInfoLabel = styled.label`
  width: 156px;
  font-size: var(--text-size-16);
  font-family: 'PretendardSemiBold';
  cursor: pointer;
`;

const ClassInfoInput = styled.input`
  outline: none;
  border: 0;
  border-bottom: 1px solid #d9d9d9;
  width: 100%;
  font-size: var(--text-size-16);
  font-family: 'PretendardRegular';
`;

const ClassInfoDescBox = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  margin-top: 37px;
  margin-bottom: 30px;
  font-family: PretendardRegular;

  @media screen and (max-width: 500px) {
    margin-top: 30px;
  }
`;

const ClassInfoDesc = styled.p`
  font-size: var(--text-size-16);
  @media screen and (max-width: 500px) {
    font-size: var(--text-size-13);
  }
`;
const ReservationForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [headCount, setHeadCount] = useState('');
  const [classRequest, setclassRequest] = useState('');
  const [reservationCheck, setReservationCheck] = useState(false);

  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const ageRef = useRef(null);
  const headCountRef = useRef(null);
  const classRequestRef = useRef(null);
  const reservationCheckRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    validateReservationForm();
  };

  const validateReservationForm = () => {
    const { errorData, errorMessage, successMessage } = reservationValidate(
      name,
      phone,
      age,
      headCount,
      classRequest,
      reservationCheck,
    );

    if (!successMessage) {
      if (errorData === 'name') {
        alert(errorMessage);
        nameRef.current.focus();
        return;
      }
      if (errorData === 'phone') {
        alert(errorMessage);
        phoneRef.current.focus();
        return;
      }
      if (errorData === 'headCount') {
        alert(errorMessage);
        headCountRef.current.focus();
        return;
      }
      if (errorData === 'age') {
        alert(errorMessage);
        ageRef.current.focus();
        return;
      }
      if (errorData === 'classRequest') {
        // alert(errorMessage);

        classRequestRef.current.focus();
        classRequestRef.current.selectionStart =
          classRequestRef.current.selectionEnd =
            classRequestRef.current.value.length;
        return;
      }
      if (errorData === 'reservationCheck') {
        alert(errorMessage);
        return;
      }
    }
  };

  const handleChange = (event) => {
    const { name, value, checked } = event.target;

    if (name === 'name') {
      setName(value);
      return;
    }
    if (name === 'phone') {
      setPhone(value);
      return;
    }
    if (name === 'age') {
      setAge(value);
      return;
    }
    if (name === 'headCount') {
      setHeadCount(value);
      return;
    }
    if (name === 'classRequest') {
      setclassRequest(value);
      return;
    }
    if (name === 'reservationCheck') {
      setReservationCheck(checked);
      return;
    }
  };

  return (
    <ClassInfoForm method="post" onSubmit={handleSubmit}>
      <ClassInfoBox>
        <ClassInfoTextBox>
          <ClassInfoTextLabel>날짜</ClassInfoTextLabel>
          <ClassInfoTextValue>2023.5.13(토)</ClassInfoTextValue>
        </ClassInfoTextBox>
        <ClassInfoTextBox>
          <ClassInfoTextLabel>시간</ClassInfoTextLabel>
          <ClassInfoTextValue>11:00~13:00</ClassInfoTextValue>
        </ClassInfoTextBox>
        <ClassInfoTextBox>
          <ClassInfoTextLabel>예약마감</ClassInfoTextLabel>
          <ClassInfoTextValue>2023.5.10(수)</ClassInfoTextValue>
        </ClassInfoTextBox>
        <ClassInfoTextBox>
          <ClassInfoTextLabel>수강료</ClassInfoTextLabel>
          <ClassInfoTextValue>45,000원</ClassInfoTextValue>
        </ClassInfoTextBox>
        <ClassInfoTextBox>
          <ClassInfoTextLabel>입금계좌</ClassInfoTextLabel>
          <ClassInfoTextValue>
            우리은행 1002-151-887345 이정수
          </ClassInfoTextValue>
        </ClassInfoTextBox>
        <ClassInfoTextBox>
          <ClassCheckbox
            type="checkbox"
            id="check"
            name="reservationCheck"
            onChange={handleChange}
            checked={reservationCheck}
            ref={reservationCheckRef}
          />
          <ClassCheckLable htmlFor="check">
            위 내용을 모두 확인하였습니다.
          </ClassCheckLable>
        </ClassInfoTextBox>
      </ClassInfoBox>
      <ClassInfoInputBox>
        <ClassInfoTextBox>
          <ClassInfoLabel htmlFor="name">이름</ClassInfoLabel>
          <ClassInfoInput
            id="name"
            name="name"
            type="text"
            onChange={handleChange}
            value={name}
            ref={nameRef}
          />
        </ClassInfoTextBox>
        <ClassInfoTextBox>
          <ClassInfoLabel htmlFor="phone">전화번호</ClassInfoLabel>
          <ClassInfoInput
            id="phone"
            name="phone"
            type="text"
            onChange={handleChange}
            value={phone}
            ref={phoneRef}
          />
        </ClassInfoTextBox>
        <ClassInfoTextBox>
          <ClassInfoLabel htmlFor="headCount">인원수</ClassInfoLabel>
          <ClassInfoInput
            id="headCount"
            name="headCount"
            type="text"
            onChange={handleChange}
            value={headCount}
            ref={headCountRef}
          />
        </ClassInfoTextBox>
        <ClassInfoTextBox>
          <ClassInfoLabel htmlFor="age">체험자 나이</ClassInfoLabel>
          <ClassInfoInput
            id="age"
            name="age"
            type="text"
            onChange={handleChange}
            value={age}
            ref={ageRef}
          />
        </ClassInfoTextBox>
        <ClassInfoTextBox>
          <ClassInfoLabel htmlFor="classRequest">요청사항</ClassInfoLabel>
          <ClassInfoInput
            id="classRequest"
            name="classRequest"
            type="text"
            onChange={handleChange}
            value={classRequest}
            ref={classRequestRef}
          />
        </ClassInfoTextBox>
        <ClassInfoDescBox>
          <ClassInfoDesc>
            원데이클래스 참여가능여부 확인되면 핸드폰으로 개별 연락드립니다.
          </ClassInfoDesc>
        </ClassInfoDescBox>
        <ReserveButton type="submit" color={'black'} link={false}>
          예약하기
        </ReserveButton>
      </ClassInfoInputBox>
    </ClassInfoForm>
  );
};

export default ReservationForm;
