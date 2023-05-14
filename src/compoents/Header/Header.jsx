import React from 'react';
import styled from 'styled-components';
import { LineFlex } from '../../styles/GlobalStyle';
import logo from '../../assets/images/logo.png';
import reserLogo from '../../assets/images/reserLogo.png';
const HeaderContainer = styled.header`
  height: 150px;
`;

const HeaderWrapper = styled.div`
  height: 100%;
  box-sizing: border-box;
  ${LineFlex}
  justify-content: space-between;
  margin: 0 100px;
`;

const Logo = styled.img``;
const ReserLogo = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 10px;
`;

// ! 나중에 Link로 교체
const ReserveButton = styled.div`
  font-size: 15px;
  ${LineFlex}
  cursor: pointer;
`;

const ReserSpan = styled.span``;

function Header() {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Logo src={logo} alt=" 임시로고" />
        <ReserveButton>
          <ReserLogo src={reserLogo} alt="예약로고" />
          <ReserSpan>실시간 예약</ReserSpan>
        </ReserveButton>
      </HeaderWrapper>
    </HeaderContainer>
  );
}

export default Header;
