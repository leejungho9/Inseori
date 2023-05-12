import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/logo.png';
import { LineFlex } from '../../styles/GlobalStyle';
const FooterContainer = styled.footer`
  height: 180px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;
const FooterWrapper = styled.div`
  width: 1480px;
  height: 100%;
  box-sizing: border-box;
  ${LineFlex}
  margin: 0 auto;
  padding: 60px 0;
`;
const Logo = styled.img`
  width: 90px;
`;
const FooterLogoBox = styled.div`
  height: 60px;
`;

const LogoImageBox = styled.div``;
const Telh1 = styled.h1`
  font-size: 15px;
`;

const FooterTextBox = styled.div`
  height: 60px;
  line-height: 1.7;
  flex-grow: 1;
  padding: 0 100px;
`;
const AddressText = styled.address`
  font-size: 12px;
`;

const FooterCuratedBox = styled.div`
  height: 60px;
  display: flex;
  align-items: flex-end;
`;
const CuratedText = styled.address`
  font-size: 14px;
`;
function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLogoBox>
          <LogoImageBox>
            <Logo src={logo} alt=" 임시로고" />
            <Telh1>1661-6948</Telh1>
          </LogoImageBox>
        </FooterLogoBox>
        <FooterTextBox>
          <AddressText>
            (주)아트앤라이프 경기도 파주시 광인사길 9-7 (문발동) 대표이사 :
            박소연
          </AddressText>
          <AddressText>
            E-mail : master@artnedition.com 개인정보관리책임자 :
            이동훈/사업자등록번호 : 798-88-00750
          </AddressText>
          <AddressText>
            통신판매업신고번호 : 2018-경기파주-0016 호스팅:AWS @ARTN LIFE, All
            right reserved.
          </AddressText>
        </FooterTextBox>
        <FooterCuratedBox>
          <CuratedText>Curated by ArtN Edition</CuratedText>
        </FooterCuratedBox>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
