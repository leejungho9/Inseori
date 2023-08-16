import React, { useRef, useState } from 'react';
import { Form } from 'react-router-dom';
import { postData } from 'apis/api';
import useModal from 'hooks/useModal';
import styled from 'styled-components';
import reservationValidate from 'utils/reservationValidate';
import ReserveButton from '../Button/ReserveButton';
import Modal from '../Modal/Modal';
import ReservationModal from '../Modal/ReservationModal';

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
    font-size: var(--text-size-15);
  }
`;
const ReservationForm = ({ detail }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [people, setPeople] = useState('');
  const [requirement, setrequirement] = useState('');
  const [reservationCheck, setReservationCheck] = useState(false);

  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const ageRef = useRef(null);
  const peopleRef = useRef(null);
  const requirementRef = useRef(null);
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
    if (detail.is_soldout) {
      showCheckModal();
      changeCheckContent('예약이 마감됐습니다.');
      return;
    }

    validateReservationForm();
  };

  //! close callback : input focus()
  const closeCallBack = (ref) => {
    ref.current.focus();
  };

  const validateReservationForm = async () => {
    const { errorData, errorMessage, successMessage } = reservationValidate(
      name,
      phone,
      age,
      people,
      requirement,
      reservationCheck,
      detail,
    );

    if (!successMessage) {
      showErrorModal();
      changeErrorContent(errorMessage);
      switch (errorData) {
        case 'name':
          setFocusRef(nameRef);
          break;
        case 'phone':
          setFocusRef(phoneRef);
          break;
        case 'people':
          setFocusRef(peopleRef);
          break;
        case 'age':
          setFocusRef(ageRef);
          break;
        case 'requirement':
          setFocusRef(requirementRef);
          requirementRef.current.selectionStart =
            requirementRef.current.selectionEnd =
              requirementRef.current.value.length;
          break;
        case 'reservationCheck':
          setFocusRef(reservationCheckRef);
          break;
        default:
          break;
      }
    }

    const data = {
      lesson: detail.id,
      name,
      phone,
      age,
      people,
      requirement,
    };

    let modalContent;

    if (successMessage) {
      try {
        const response = await postData('lesson/resercve/create/', data);
        if (response.status === 201) {
          resetInput();
          modalContent = successMessage;
        }
      } catch (error) {
        modalContent =
          '예약 요청 중 오류가 발생했습니다.  \n 다시 시도해주세요.';
      }

      if (modalContent) {
        showCheckModal();
        changeCheckContent(modalContent);
      }
    }
  };

  const resetInput = () => {
    setName('');
    setPhone('');
    setAge('');
    setPeople('');
    setrequirement('');
    setReservationCheck(false);
  };

  const handleInputChange = (event) => {
    const { name, value, checked } = event.target;

    switch (name) {
      case 'name':
        setName(value.replace(/[^ㄱ-ㅎ가-힣a-zA-Z]/g, ''));
        break;

      case 'phone':
        setPhone(value.replace(/[^0-9]/g, ''));
        break;

      case 'people':
        if (value.length <= 2) {
          setPeople(value.replace(/[^0-9]/g, ''));
        }
        break;

      case 'age':
        setAge(value.replace(/[^0-9,]/g, ''));
        break;

      case 'requirement':
        setrequirement(value);
        break;

      case 'reservationCheck':
        setReservationCheck(checked);
        break;

      default:
        break;
    }
  };

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
            <ClassInfoTextValue>{detail.d_day}</ClassInfoTextValue>
          </ClassInfoTextBox>
          <ClassInfoTextBox>
            <ClassInfoTextLabel>시간</ClassInfoTextLabel>
            <ClassInfoTextValue>{detail.duration}</ClassInfoTextValue>
          </ClassInfoTextBox>
          <ClassInfoTextBox>
            <ClassInfoTextLabel>예약마감</ClassInfoTextLabel>
            <ClassInfoTextValue> {detail.l_day}</ClassInfoTextValue>
          </ClassInfoTextBox>
          <ClassInfoTextBox>
            <ClassInfoTextLabel>수강인원</ClassInfoTextLabel>
            <ClassInfoTextValue>{detail.people}</ClassInfoTextValue>
          </ClassInfoTextBox>
          <ClassInfoTextBox>
            <ClassInfoTextLabel>수강료</ClassInfoTextLabel>
            <ClassInfoTextValue>
              {Number(detail.price).toLocaleString()} 원 (1인)
            </ClassInfoTextValue>
          </ClassInfoTextBox>

          <ClassInfoTextBox>
            <ClassCheckbox
              type="checkbox"
              id="check"
              name="reservationCheck"
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
              value={phone}
              ref={phoneRef}
            />
          </ClassInfoTextBox>
          <ClassInfoTextBox>
            <ClassInfoLabel htmlFor="people">인원수</ClassInfoLabel>
            <ClassInfoInput
              id="people"
              name="people"
              type="text"
              onChange={handleInputChange}
              value={people}
              ref={peopleRef}
            />
          </ClassInfoTextBox>
          <ClassInfoTextBox>
            <ClassInfoLabel htmlFor="age">체험자 나이</ClassInfoLabel>
            <ClassInfoInput
              id="age"
              name="age"
              type="text"
              onChange={handleInputChange}
              value={age}
              ref={ageRef}
              placeholder="여러 명의 경우, 전부 기입해주세요. 예) 15,16,20"
            />
          </ClassInfoTextBox>
          <ClassInfoTextBox>
            <ClassInfoLabel htmlFor="requirement">요청사항</ClassInfoLabel>
            <ClassInfoInput
              id="requirement"
              name="requirement"
              type="text"
              onChange={handleInputChange}
              value={requirement}
              ref={requirementRef}
            />
          </ClassInfoTextBox>
          <ClassInfoDescBox>
            <ClassInfoDesc>
              원데이클래스 참여가능여부가 확인되면 핸드폰으로 개별 연락드립니다.
            </ClassInfoDesc>
          </ClassInfoDescBox>
          <ReserveButton
            type={'submit'}
            color={'black'}
            link={false}
            disabled={detail.is_soldout}
          >
            {detail.is_soldout ? '예약마감' : '예약하기'}
          </ReserveButton>
        </ClassInfoInputBox>
      </ClassInfoForm>
    </>
  );
};

export default ReservationForm;
