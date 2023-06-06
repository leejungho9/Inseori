import React from 'react';
import styled from 'styled-components';
import reserLogo from '../../assets/images/reserLogo.png';
import { IoMdClose } from 'react-icons/io';
import MobileNav from '../Nav/MobileNav';

const SidebarWrapper = styled.div`
  width: 100%;
  background-color: #f6f6f6;
  position: fixed;
  top: 0;
  z-index: 100;
  transition: all 0.8s ease 0s;
  pointer-events: ${({ showSidebar }) => (showSidebar ? 'all' : 'none')};
  right: ${({ showSidebar }) => (showSidebar ? '0px' : '-1000px')};
  visibility: ${({ showSidebar }) => (showSidebar ? 'visible' : 'hidden')};
`;

const SidebarContainer = styled.div`
  height: 100%;
  padding-top: 25px;
  padding-left: 35px;
  padding-bottom: 25px;
`;
const CloseIconBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 80px;
  @media screen and (max-width: 991px) {
    padding-right: 50px;
  }
  @media screen and (max-width: 500px) {
    padding-right: 20px;
  }
`;
const CloseIcon = styled(IoMdClose)`
  font-size: 25px;
  cursor: pointer;
`;
const ReserveLink = styled.a`
  display: flex;
  padding-left: 28px;
`;
const ReserveLogo = styled.img`
  width: 22px;
  height: 22px;
  margin-right: 15px;
  cursor: pointer;
`;

const ReserveSpan = styled.span`
  cursor: pointer;
  font-size: var(--text-size-18);
  font-weight: bold;
  color: #515151;
`;

const MobileNavWrapper = styled.div`
  margin-top: 70px;
`;

function MobileSidebar({ setShowSidebar, showSidebar }) {
  return (
    <SidebarWrapper showSidebar={showSidebar}>
      <SidebarContainer>
        <CloseIconBox>
          <CloseIcon onClick={() => setShowSidebar(!showSidebar)} />
        </CloseIconBox>
        <ReserveLink
          target="_blank"
          href="https://booking.naver.com/booking/3/bizes/802107"
          rel="noreferrer"
        >
          <ReserveLogo src={reserLogo} alt="예약로고" />
          <ReserveSpan>실시간 예약</ReserveSpan>
        </ReserveLink>
        <MobileNavWrapper>
          <MobileNav />
        </MobileNavWrapper>
      </SidebarContainer>
    </SidebarWrapper>
  );
}

export default MobileSidebar;
