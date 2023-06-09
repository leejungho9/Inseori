import React, { forwardRef, useState } from 'react';
import styled from 'styled-components';
import reserveLogo from 'assets/images/reserLogo.png';
import logo from 'assets/images/logo.png';
import ham from 'assets/images/ham.png';
import Nav from 'components/Layout/Nav/Nav';
import MobileSidebar from '../MobileSidebar/MobileSidebar';

const HeaderContainer = styled.header`
  width: 100%;
  height: 100%;
  top: 0;
  position: fixed;
  z-index: 5;
  pointer-events: none;
  position: ${({ leftNavFixed }) => (leftNavFixed ? 'fixed' : 'absolute')};
  top: ${({ leftNavFixed, footerOffsetProps }) =>
    leftNavFixed && footerOffsetProps ? 0 : footerOffsetProps + 'px'};
`;

const NavWrapper = styled.section`
  width: 435px;
  height: 100%;
  box-sizing: border-box;
  padding-left: 100px;
  z-index: 15;
  position: relative;
  pointer-events: all;

  @media screen and (max-width: 991px) {
    padding-left: 0;
    width: 100%;
    height: 70px;
    padding-top: 0;
  }
`;

const LogoWrapper = styled.nav`
  width: 234px;
  height: 150px;
  display: flex;
  align-items: center;
  z-index: 30;
  position: relative;
  box-sizing: border-box;

  @media screen and (max-width: 991px) {
    width: 185px;
    height: 70px;
    padding-left: 25px;
  }
  @media screen and (max-width: 500px) {
    padding-left: 20px;
    width: 150px;
  }
`;

const LogoLink = styled.a`
  cursor: pointer;
`;

const Logo = styled.img`
  width: 100%;
  height: auto;
`;

const BurgerWrapper = styled.nav`
  display: none;
  @media screen and (max-width: 991px) {
    position: absolute;
    top: 0;
    width: 100%;
    opacity: 100;
    overflow: hidden;
    background-color: var(--white);
    z-index: 14;
    pointer-events: all;
    transition: 0.4s;
    height: ${({ topHeaderVisible }) => (topHeaderVisible ? '150px' : 0)};
    opacity: ${({ topHeaderVisible }) => (topHeaderVisible ? '100' : 0)};
    display: block;
    height: 70px;
  }
`;
const BurgerBox = styled.figure`
  display: none;

  @media screen and (max-width: 991px) {
    width: 24px;
    position: absolute;
    top: 27px;
    right: 25px;
    z-index: 6;
    display: block;
  }
  @media screen and (max-width: 500px) {
    right: 20px;
  }
`;
const BurgerImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  cursor: pointer;
`;

const ReserveButtonBox = styled.section`
  position: absolute;
  top: 0;
  width: 100%;
  height: 150px;
  opacity: 100;
  overflow: hidden;
  background-color: var(--white);
  z-index: 14;
  pointer-events: all;
  transition: 0.4s;
  height: ${({ topHeaderVisible }) => (topHeaderVisible ? '150px' : 0)};
  opacity: ${({ topHeaderVisible }) => (topHeaderVisible ? '100' : 0)};

  @media screen and (max-width: 991px) {
    display: none;
  }
`;

const ReserveButton = styled.a`
  float: right;
  margin-top: 62px;
  margin-right: 100px;
  display: flex;
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
`;

const Header = forwardRef(
  ({ topHeaderVisible, leftNavFixed, footerOffsetProps }, refs) => {
    const { headerRef, topHeaderRef } = refs;
    const [showSidebar, setShowSidebar] = useState(false);
    const windowWidth = window.innerWidth;
    return (
      <HeaderContainer
        ref={headerRef}
        leftNavFixed={leftNavFixed}
        footerOffsetProps={footerOffsetProps}
      >
        <NavWrapper>
          <LogoWrapper>
            <LogoLink href="/">
              <Logo src={logo} alt="logo" />
            </LogoLink>
          </LogoWrapper>
          <BurgerWrapper topHeaderVisible={topHeaderVisible} ref={topHeaderRef}>
            <BurgerBox>
              <BurgerImg
                src={ham}
                alt="햄버거 이미지"
                onClick={() => setShowSidebar(!showSidebar)}
              />
            </BurgerBox>
          </BurgerWrapper>
          <Nav />
        </NavWrapper>

        {windowWidth < 991 && (
          <MobileSidebar
            setShowSidebar={setShowSidebar}
            showSidebar={showSidebar}
          />
        )}

        <ReserveButtonBox
          topHeaderVisible={topHeaderVisible}
          ref={topHeaderRef}
        >
          <ReserveButton
            target="_blank"
            href="https://booking.naver.com/booking/3/bizes/802107"
            rel="noreferrer"
          >
            <ReserveLogo src={reserveLogo} alt="예약 로고" />
            <ReserveSpan>실시간 예약</ReserveSpan>
          </ReserveButton>
        </ReserveButtonBox>
      </HeaderContainer>
    );
  },
);

// * displayName 설정
Header.displayName = 'Header';
export default Header;
