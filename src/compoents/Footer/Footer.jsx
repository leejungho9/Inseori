import React, { forwardRef } from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/footerimage.png';
import map from '../../assets/images/map.png';
import insta from '../../assets/images/insta.png';
import kakao from '../../assets/images/kakao.png';
import { LineFlex } from '../../styles/GlobalStyle';
const FooterContainer = styled.footer`
  width: 100%;
  z-index: 20;
  position: relative;
  background-color: var(--light-gray);
`;
const FooterWrapper = styled.div`
  height: 100%;
  box-sizing: border-box;
  ${LineFlex}
  justify-content: space-between;
  padding: 75px 100px;
`;

const LogoImageBox = styled.div`
  width: 173px;
  height: 45px;
`;

const Logo = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;
const Tel = styled.h1`
  font-size: var(--text-size-20);
  color: var(--dark);
  font-weight: bold;
  margin-bottom: 5px;
`;

const FooterTextBox = styled.div`
  line-height: 1.7;

  div:last-child {
    margin-bottom: 5px;
  }
`;

const AddressTextBox = styled.div`
  display: flex;
  address:nth-child(2) {
    margin-left: 10px;
  }
`;
const AddressText = styled.address`
  font-size: var(--text-size-12);
  color: var(--gray);
`;

const FooterCompannyBox = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
`;

const FooterCommpanyText = styled.span`
  font-size: var(--text-size-15);
  padding: 0 20px;
  color: var(--dark);
  cursor: pointer;
`;

const FooterIconBox = styled.div`
  display: flex;
  div:nth-child(2) {
    margin: 0 45px;
  }
`;
const SocialIconBox = styled.div`
  cursor: pointer;
  width: 26px;
  height: 26px;
`;
const SocialIcon = styled.img`
  width: 100%;
  height: auto;
`;

const Footer = forwardRef((props, footerRef) => {
  return (
    <FooterContainer ref={footerRef}>
      <FooterWrapper>
        <LogoImageBox>
          <Logo src={logo} alt=" 임시로고" />
        </LogoImageBox>
        <FooterTextBox>
          <Tel>061-761-6701</Tel>
          <AddressTextBox>
            <AddressText>
              (주)아트앤라이프 전라남도 광양시 광양읍 남문길 65
            </AddressText>
            <AddressText>사업자 등록번호 : 798-88-00750</AddressText>
          </AddressTextBox>
          <AddressTextBox>
            <AddressText>통신판매업신고번호 : 2018-경기파주-0016</AddressText>
            <AddressText>인서리공원 대표이사 : 박소연</AddressText>
          </AddressTextBox>
        </FooterTextBox>
        <FooterCompannyBox>
          <FooterCommpanyText>입점문의 </FooterCommpanyText> |
          <FooterCommpanyText>회사소개</FooterCommpanyText>
        </FooterCompannyBox>
        <FooterIconBox>
          <SocialIconBox>
            <a
              target="_blank"
              href="http://kko.to/YAAtXaebeH/"
              rel="noreferrer"
            >
              <SocialIcon src={map}></SocialIcon>
            </a>
          </SocialIconBox>

          <SocialIconBox>
            <a
              target="_blank"
              href="https://www.instagram.com/inseori01/"
              rel="noreferrer"
            >
              <SocialIcon src={insta}></SocialIcon>
            </a>
          </SocialIconBox>
          <SocialIconBox>
            <a
              target="_blank"
              href="https://pf.kakao.com/_xnhxhrxj"
              rel="noreferrer"
            >
              <SocialIcon src={kakao}></SocialIcon>
            </a>
          </SocialIconBox>
        </FooterIconBox>
      </FooterWrapper>
    </FooterContainer>
  );
});

// * displayName 설정
Footer.displayName = 'Footer';
export default Footer;
