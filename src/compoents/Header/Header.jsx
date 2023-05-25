import React, { forwardRef } from 'react';
import styled from 'styled-components';
import reserLogo from '../../assets/images/reserLogo.png';
import Nav from '../Nav/Nav';
import logo from '../../assets/images/logo.png';
import ham from '../../assets/images/ham.png';
import { Link } from 'react-router-dom';
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

const NavWrapper = styled.div`
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

const ReserveButtonBox = styled.div`
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

  a {
    float: right;
    margin-top: 62px;
    margin-right: 100px;
    display: flex;
  }

  @media screen and (max-width: 991px) {
    display: none;
  }
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
const LogoImgBox = styled.div`
  width: 234px;
  height: 150px;
  display: flex;
  align-items: center;
  cursor: pointer;
  z-index: 30;
  position: relative;
  @media screen and (max-width: 991px) {
    width: 185px;
    height: 70px;
    padding-left: 50px;
  }
  @media screen and (max-width: 500px) {
    padding-left: 20px;
    width: 150px;
  }
`;
const Logo = styled.img`
  width: 100%;
  height: auto;
`;

// ! 반응형 스타일
const HamButtonBox = styled.div`
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
const HamImageBox = styled(Link)`
  display: none;

  @media screen and (max-width: 991px) {
    width: 24px;
    position: absolute;
    top: 27px;
    right: 50px;
    z-index: 6;
    display: block;
  }
  @media screen and (max-width: 500px) {
    right: 20px;
  }
`;
const HamImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  cursor: pointer;
`;

const Header = forwardRef(
  ({ topHeaderVisible, leftNavFixed, footerOffsetProps }, refs) => {
    const { headerRef, topHeaderRef } = refs;
    return (
      <HeaderContainer
        ref={headerRef}
        leftNavFixed={leftNavFixed}
        footerOffsetProps={footerOffsetProps}
      >
        <NavWrapper>
          <LogoImgBox>
            <a href="/">
              <Logo src={logo} alt=" 임시로고" />
            </a>
          </LogoImgBox>
          <HamButtonBox topHeaderVisible={topHeaderVisible} ref={topHeaderRef}>
            <HamImageBox to="/RoomA">
              <HamImage src={ham} alt="햄버거 이미지" />
            </HamImageBox>
          </HamButtonBox>
          <Nav />
        </NavWrapper>
        <ReserveButtonBox
          topHeaderVisible={topHeaderVisible}
          ref={topHeaderRef}
        >
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
  },
);

// * displayName 설정
Header.displayName = 'Header';
export default Header;
