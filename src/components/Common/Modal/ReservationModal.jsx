import React, { useCallback } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import styled from 'styled-components';

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
`;
const ModalWrapper = styled.div`
  width: 400px;
  height: 140px;
  border-radius: 10px;
  background-color: var(--white);
  z-index: 6;

  @media screen and (max-width: 500px) {
    width: 300px;
    height: 130px;
  }
`;

const ModalHead = styled.div`
  position: relative;
`;

const ModalCloaseButton = styled(IoCloseOutline)`
  font-size: 25px;
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
`;

const ModaBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100%);
  box-sizing: border-box;
`;

const ModalContent = styled.p`
  font-size: var(--text-size-15);
  color: (--dark);
  white-space: pre-line;
  text-align: center;
  line-height: 1.3;
`;

const ReservationModal = ({
  showModal,
  closeModal,
  closeCallBack,
  modalContent,
}) => {
  //! close callback 동작
  const onClickCloseButton = useCallback(() => {
    closeModal();
    if (closeCallBack) closeCallBack();
  }, [closeCallBack, closeModal]);

  return (
    showModal && (
      <>
        <Background />
        <ModalContainer>
          <ModalWrapper>
            <ModalHead>
              <ModalCloaseButton onClick={onClickCloseButton} />
            </ModalHead>
            <ModaBody>
              <ModalContent>{modalContent}</ModalContent>
            </ModaBody>
          </ModalWrapper>
        </ModalContainer>
      </>
    )
  );
};

export default ReservationModal;
