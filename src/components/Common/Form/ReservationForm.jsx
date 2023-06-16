import React, { useRef, useState } from 'react';
import { Form } from 'react-router-dom';
import styled from 'styled-components';
import reservationValidate from 'utils/reservationValidate';
import ReserveButton from '../Button/ReserveButton';
import useModal from 'hooks/useModal';
import ReservationModal from '../Modal/ReservationModal';
import Modal from '../Modal/Modal';

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
    margin-right: 25px;
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
  font-family: 'PretendardRegular';
  letter-spacing: -0.07em;
  @media screen and (max-width: 500px) {
    font-size: var(--text-size-14);
  }
`;
const ReservationForm = ({ item }) => {
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
  const [focusRef, setFocusRef] = useState(null);
  const [
    errorModalOpen,
    showErrorModal,
    closeErrorModal,
    modalErrorContent,
    changeErrorContent,
  ] = useModal();

  const [
    checkModalOpen,
    showCheckModal,
    closeCheckModal,
    modalCheckContent,
    changeCheckContent,
  ] = useModal();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item.status === 'soldout') {
      showCheckModal();
      changeCheckContent('예약이 마감됐습니다.');
      return;
    }
    if (item.book) {
      showCheckModal();
      changeCheckContent('이미 예약이 완료되었습니다. \n 문의 : 061-761-6701');
      return;
    }
    validateReservationForm();
  };

  //! close callback : input focus()
  const closeCallBack = (ref) => {
    ref.current.focus();
  };

  const validateReservationForm = () => {
    const { errorData, errorMessage, successMessage } = reservationValidate(
      name,
      phone,
      age,
      headCount,
      classRequest,
      reservationCheck,
      item,
    );

    if (!successMessage) {
      if (errorData === 'name') {
        showErrorModal();
        changeErrorContent(errorMessage);
        setFocusRef(nameRef);
        return;
      }
      if (errorData === 'phone') {
        showErrorModal();
        changeErrorContent(errorMessage);
        setFocusRef(phoneRef);
        return;
      }
      if (errorData === 'headCount') {
        showErrorModal();
        changeErrorContent(errorMessage);
        setFocusRef(headCountRef);

        return;
      }
      if (errorData === 'age') {
        showErrorModal();
        changeErrorContent(errorMessage);
        setFocusRef(ageRef);
        return;
      }
      if (errorData === 'classRequest') {
        showErrorModal();
        changeErrorContent(errorMessage);
        setFocusRef(classRequestRef);
        classRequestRef.current.selectionStart =
          classRequestRef.current.selectionEnd =
            classRequestRef.current.value.length;
        return;
      }
      if (errorData === 'reservationCheck') {
        showErrorModal();
        changeErrorContent(errorMessage);
        setFocusRef(reservationCheckRef);
        return;
      }
    }

    if (successMessage) {
      showErrorModal();
      changeErrorContent(successMessage);
    }
  };

  const handleChange = (event) => {
    const { name, value, checked } = event.target;

    if (name === 'name') {
      const nameRegex = /[^ㄱ-ㅎ가-힣a-zA-Z]/g;
      const nameValue = value.replace(nameRegex, '');
      setName(nameValue);
      return;
    }
    if (name === 'phone') {
      const phoneRegex = /[^0-9]/g;
      const phoneValue = value.replace(phoneRegex, '');
      setPhone(phoneValue);
      return;
    }
    if (name === 'headCount') {
      if (value.length <= 2) {
        const headCountRegex = /[^0-9]/g;
        const headCountValue = value.replace(headCountRegex, '');
        setHeadCount(headCountValue);
      }
      return;
    }
    if (name === 'age') {
      const ageCountRegex = /[^0-9,]/g;
      const ageCountValue = value.replace(ageCountRegex, '');
      setAge(ageCountValue);

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
  console.log(item);
  return (
    <>
      <Modal
        showModal={checkModalOpen}
        closeModal={closeCheckModal}
        modalContent={modalCheckContent}
      />
      <ReservationModal
        showModal={errorModalOpen}
        closeModal={closeErrorModal}
        closeCallBack={() => {
          closeCallBack(focusRef);
        }}
        modalContent={modalErrorContent}
      />
      <ClassInfoForm method="post" onSubmit={handleSubmit}>
        <ClassInfoBox>
          <ClassInfoTextBox>
            <ClassInfoTextLabel>날짜</ClassInfoTextLabel>
            <ClassInfoTextValue>{item.startDate}</ClassInfoTextValue>
          </ClassInfoTextBox>
          <ClassInfoTextBox>
            <ClassInfoTextLabel>시간</ClassInfoTextLabel>
            <ClassInfoTextValue>
              {item.startHour} ~ {item.endHour}
            </ClassInfoTextValue>
          </ClassInfoTextBox>
          <ClassInfoTextBox>
            <ClassInfoTextLabel>예약마감</ClassInfoTextLabel>
            <ClassInfoTextValue>{item.endDate}</ClassInfoTextValue>
          </ClassInfoTextBox>
          <ClassInfoTextBox>
            <ClassInfoTextLabel>수강료</ClassInfoTextLabel>
            <ClassInfoTextValue>{item.price} 원</ClassInfoTextValue>
          </ClassInfoTextBox>
          <ClassInfoTextBox>
            <ClassInfoTextLabel>입금계좌</ClassInfoTextLabel>
            <ClassInfoTextValue>
              우리은행 1002-151-887345 이정수
            </ClassInfoTextValue>
          </ClassInfoTextBox>
          <ClassInfoTextBox>
            {item.book === true ? (
              <ClassCheckbox
                type="checkbox"
                id="check"
                name="reservationCheck"
                onChange={handleChange}
                checked={item.book}
                ref={reservationCheckRef}
              />
            ) : (
              <ClassCheckbox
                type="checkbox"
                id="check"
                name="reservationCheck"
                onChange={handleChange}
                checked={reservationCheck}
                ref={reservationCheckRef}
              />
            )}
            <ClassCheckLable htmlFor="check">
              위 내용을 모두 확인하였습니다.
            </ClassCheckLable>
          </ClassInfoTextBox>
        </ClassInfoBox>
        <ClassInfoInputBox>
          <ClassInfoTextBox>
            <ClassInfoLabel htmlFor="name">이름</ClassInfoLabel>
            {item.book === true ? (
              <ClassInfoInput readOnly value="이정호" />
            ) : (
              <ClassInfoInput
                id="name"
                name="name"
                type="text"
                onChange={handleChange}
                value={name}
                ref={nameRef}
              />
            )}
          </ClassInfoTextBox>
          <ClassInfoTextBox>
            <ClassInfoLabel htmlFor="phone">전화번호</ClassInfoLabel>
            {item.book === true ? (
              <ClassInfoInput readOnly value={'010-2222-2222'} />
            ) : (
              <ClassInfoInput
                id="phone"
                name="phone"
                type="text"
                onChange={handleChange}
                value={phone}
                ref={phoneRef}
              />
            )}
          </ClassInfoTextBox>
          <ClassInfoTextBox>
            <ClassInfoLabel htmlFor="headCount">인원수</ClassInfoLabel>
            {item.book === true ? (
              <ClassInfoInput readOnly value={4} />
            ) : (
              <ClassInfoInput
                id="headCount"
                name="headCount"
                type="text"
                onChange={handleChange}
                value={headCount}
                ref={headCountRef}
              />
            )}
          </ClassInfoTextBox>
          <ClassInfoTextBox>
            <ClassInfoLabel htmlFor="age">체험자 나이</ClassInfoLabel>
            {item.book === true ? (
              <ClassInfoInput readOnly value={'22,20,23'} />
            ) : (
              <ClassInfoInput
                id="age"
                name="age"
                type="text"
                onChange={handleChange}
                value={age}
                ref={ageRef}
                placeholder="여러 명의 경우, 전부 기입해주세요. 예) 15,16,20"
              />
            )}
          </ClassInfoTextBox>
          <ClassInfoTextBox>
            <ClassInfoLabel htmlFor="classRequest">요청사항</ClassInfoLabel>
            {item.book === true ? (
              <ClassInfoInput
                readOnly
                value={
                  '4살 애기도 같이 가는데, 참여는 안하고 옆에 있기만 할거에요 '
                }
              />
            ) : (
              <ClassInfoInput
                id="classRequest"
                name="classRequest"
                type="text"
                onChange={handleChange}
                value={classRequest}
                ref={classRequestRef}
              />
            )}
          </ClassInfoTextBox>
          <ClassInfoDescBox>
            <ClassInfoDesc>
              원데이클래스 참여가능여부 확인되면 핸드폰으로 개별 연락드립니다.
            </ClassInfoDesc>
          </ClassInfoDescBox>
          <ReserveButton
            type={'submit'}
            color={'black'}
            link={false}
            disabled={item.status === 'soldout' || item.book}
          >
            {item.status === 'soldout'
              ? '예약마감'
              : item.book
              ? '예약완료'
              : '예약하기'}
          </ReserveButton>
        </ClassInfoInputBox>
      </ClassInfoForm>
    </>
  );
};

export default ReservationForm;
