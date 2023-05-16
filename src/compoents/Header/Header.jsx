import React from 'react';
import styled from 'styled-components';
import reserLogo from '../../assets/images/reserLogo.png';
import Nav from '../Nav/Nav';
import { Link } from 'react-router-dom';
const HeaderContainer = styled.header`
  width: 100%;
  height: 100%;
  z-index: 30;
`;

const NavWrapper = styled.div`
  position: ${(props) => (props.fixed ? 'fixed' : 'absolute')};
  width: 435px;
  height: 790px;
  padding-left: 100px;
  z-index: 15;
  top: 0;
`;

// ! 나중에 Link로 교체
const ReserveButton = styled(Link)`
  position: absolute;
  top: 0;
  width: 100%;
  height: 150px;
  background-color: white;
  overflow: hidden;
  z-index: 14;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const ReserveLogo = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 10px;
  cursor: pointer;
`;

const ReserveSpan = styled.span`
  cursor: pointer;
  font-size: 14px;
  float: right;
  margin-right: 100px;
`;

function Header() {
  return (
    <HeaderContainer>
      <NavWrapper className="header">
        <Nav />
      </NavWrapper>
      <ReserveButton to="https://booking.naver.com/booking/3/bizes/802107">
        <ReserveLogo src={reserLogo} alt="예약로고" />
        <ReserveSpan>실시간 예약</ReserveSpan>
      </ReserveButton>
    </HeaderContainer>
  );
}

export default Header;
