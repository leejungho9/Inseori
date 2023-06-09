import React from 'react';
import styled from 'styled-components';
import { AiOutlineRight } from 'react-icons/ai';
import reserveLogo from 'assets/images/reserLogo.png';
import MobileNav from 'components/Layout/Nav/MobileNav';

const SidebarWrapper = styled.aside`
  width: 100%;
  height: 100%;
  top: 0;
  position: fixed;
  background-color: var(--white);
  z-index: 100;
  transition: all 0.8s ease 0s;
  pointer-events: ${({ showSidebar }) => (showSidebar ? 'all' : 'none')};
  right: ${({ showSidebar }) => (showSidebar ? '0px' : '-1000px')};
  visibility: ${({ showSidebar }) => (showSidebar ? 'visible' : 'hidden')};
  padding: 25px 15px;
`;

const CloseIconBox = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 40px;

  @media screen and (max-width: 991px) {
    padding-right: 5px;
  }
`;

const CloseIcon = styled(AiOutlineRight)`
  font-size: 25px;
  cursor: pointer;
  color: var(--gray);
`;

const ReserveButton = styled.a`
  display: flex;
  align-items: center;
  margin-left: 20px;
  width: 130px;
`;

const ReserveLogo = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 15px;
  cursor: pointer;
`;

const ReserveSpan = styled.span`
  font-family: 'PretendardSemiBold';
  font-size: var(--text-size-20);
  color: var(--gray);
  font-weight: bold;
  cursor: pointer;
`;

function MobileSidebar({ setShowSidebar, showSidebar }) {
  return (
    <SidebarWrapper showSidebar={showSidebar}>
      <CloseIconBox>
        <CloseIcon onClick={() => setShowSidebar(!showSidebar)} />
      </CloseIconBox>
      <ReserveButton
        target="_blank"
        href="https://booking.naver.com/booking/3/bizes/802107"
        rel="noreferrer"
      >
        <ReserveLogo src={reserveLogo} alt="예약 로고" />
        <ReserveSpan>실시간 예약</ReserveSpan>
      </ReserveButton>

      <MobileNav />
    </SidebarWrapper>
  );
}

export default MobileSidebar;
