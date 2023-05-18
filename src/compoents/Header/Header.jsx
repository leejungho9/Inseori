import React from 'react';
import styled from 'styled-components';
import reserLogo from '../../assets/images/reserLogo.png';
import Nav from '../Nav/Nav';
import logo from '../../assets/images/logo.png';

const HeaderContainer = styled.header`
  width: 100%;
  height: 100%;
  top: 0;
  position: fixed;
`;

const NavWrapper = styled.div`
  width: 435px;
  height: 100%;
  box-sizing: border-box;
  padding-left: 100px;
  z-index: 15;
  position: relative;
`;

const ReserveButtonBox = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 150px;
  background-color: var(--white);
  z-index: 14;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const ReserveLogo = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 10px;
  cursor: pointer;
`;

const ReserveSpan = styled.span`
  cursor: pointer;
  font-size: var(--text-size-18);
  float: right;
  padding-right: 100px;
`;
const LogoImgBox = styled.div`
  width: 234px;
  height: 150px;
  display: flex;
  align-items: center;
  cursor: pointer;
  z-index: 30;
  position: relative;
`;
const Logo = styled.img`
  width: 100%;
  height: auto;
`;

function Header() {
  return (
    <HeaderContainer className="header">
      <NavWrapper>
        <LogoImgBox>
          <a href="/">
            <Logo src={logo} alt=" 임시로고" />
          </a>
        </LogoImgBox>
        <Nav />
      </NavWrapper>
      <ReserveButtonBox>
        <a
          target="_blank"
          href="https://booking.naver.com/booking/3/bizes/802107"
          rel="noreferrer"
        >
          <ReserveLogo src={reserLogo} alt="예약로고" />
          <ReserveSpan>실시간 예약</ReserveSpan>
        </a>
      </ReserveButtonBox>
    </HeaderContainer>
  );
}

export default Header;
