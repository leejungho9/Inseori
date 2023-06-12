import React, { forwardRef } from 'react';
import styled from 'styled-components';
import logo from 'assets/images/common/footerimage.png';
import map from 'assets/images/common/map.png';
import insta from 'assets/images/common/insta.png';
import kakao from 'assets/images/common/kakao.png';
import { LineFlex } from '../../../styles/GlobalStyle';

const FooterContainer = styled.footer`
  width: 100%;
  z-index: 20;
  background-color: var(--light-gray);
`;
const FooterWrapper = styled.div`
  height: 100%;
  box-sizing: border-box;
  ${LineFlex}
  justify-content: space-between;
  padding: 75px 100px;

  @media screen and (max-width: 991px) {
    padding: 50px;
    height: 380px;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const LogoImageBox = styled.div`
  width: 173px;
  height: 45px;
  @media screen and (max-width: 991px) {
    display: none;
  }
`;

const Logo = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const TelBox = styled.div``;
const TelText = styled.span`
  display: none;
  @media screen and (max-width: 991px) {
    font-size: var(--text-size-25);
    display: block;
    font-weight: bold;
    letter-spacing: 1.3px;
  }
  //! 임시
  @media screen and (max-width: 500px) {
    font-size: var(--text-size-20);
  }
`;
const Tel = styled.h1`
  font-size: var(--text-size-20);
  color: var(--dark);
  font-weight: bold;
  margin-bottom: 5px;
  @media screen and (max-width: 991px) {
    font-weight: normal;
    letter-spacing: -1px;
  }

  //! 임시
  @media screen and (max-width: 500px) {
    font-size: var(--text-size-18);
    margin-bottom: 25px;
  }
`;

const FooterTextBox = styled.div`
  line-height: 1.7;

  div:last-child {
    margin-bottom: 5px;
  }
  @media screen and (max-width: 991px) {
    display: flex;
    width: 100%;
  }
  //! 임시
  @media screen and (max-width: 500px) {
    display: block;
    text-align: center;
  }
`;

const AddressTextBox = styled.div`
  @media screen and (max-width: 991px) {
    position: absolute;
    right: 50px;
  }
  //! 임시

  @media screen and (max-width: 500px) {
    position: static;
    right: 0;
  }
`;

const TextBox = styled.div`
  display: flex;
  address:nth-child(2) {
    margin-left: 10px;
  }
  @media screen and (max-width: 991px) {
    display: block;
    address:nth-child(2) {
      margin-left: 0;
    }
  }
`;
const AddressText = styled.address`
  font-size: var(--text-size-12);
  color: var(--gray);
  @media screen and (max-width: 991px) {
    font-size: var(--text-size-12);
  }
  //! 임시

  @media screen and (max-width: 500px) {
    font-size: var(--text-size-11);
  }
`;

const FooterCompannyBox = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  @media screen and (max-width: 991px) {
    display: none;
  }
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
  @media screen and (max-width: 991px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  //! 임시

  @media screen and (max-width: 500px) {
    justify-content: center;
  }
`;
const SocialIconBox = styled.div`
  display: flex;
`;
const IconBox = styled.div`
  cursor: pointer;
  width: 26px;
  height: 26px;
`;
const SocialIcon = styled.img`
  width: 100%;
  height: auto;
`;
const CuratedText = styled.span`
  display: none;
  @media screen and (max-width: 991px) {
    display: block;
    font-size: var(--text-size-15);
    color: var(--gray);
    display: block;
    margin-right: 90px;
  }

  //! 임시
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const Footer = forwardRef((props, footerRef) => {
  return (
    <FooterContainer ref={footerRef}>
      <FooterWrapper>
        <LogoImageBox>
          <Logo src={logo} alt=" 임시로고" />
        </LogoImageBox>
        <FooterTextBox>
          <TelBox>
            <TelText>인서리공원</TelText>
            <Tel>061-761-6701</Tel>
          </TelBox>
          <AddressTextBox>
            <TextBox>
              <AddressText>
                (주)아트앤라이프 전라남도 광양시 광양읍 남문길 65
              </AddressText>
              <AddressText>사업자 등록번호 : 798-88-00750</AddressText>
            </TextBox>
            <TextBox>
              <AddressText>통신판매업신고번호 : 2018-경기파주-0016</AddressText>
              <AddressText>인서리공원 대표이사 : 박소연</AddressText>
            </TextBox>
          </AddressTextBox>
        </FooterTextBox>
        <FooterCompannyBox>
          <FooterCommpanyText>입점문의 </FooterCommpanyText> |
          <FooterCommpanyText>회사소개</FooterCommpanyText>
        </FooterCompannyBox>
        <FooterIconBox>
          <SocialIconBox>
            <IconBox>
              <a
                target="_blank"
                href="https://map.kakao.com/?itemId=386938052"
                rel="noreferrer"
              >
                <SocialIcon src={map}></SocialIcon>
              </a>
            </IconBox>
            <IconBox>
              <a
                target="_blank"
                href="https://www.instagram.com/inseori01/"
                rel="noreferrer"
              >
                <SocialIcon src={insta}></SocialIcon>
              </a>
            </IconBox>
            <IconBox>
              <a
                target="_blank"
                href="https://pf.kakao.com/_xnhxhrxj"
                rel="noreferrer"
              >
                <SocialIcon src={kakao}></SocialIcon>
              </a>
            </IconBox>
          </SocialIconBox>
          <CuratedText>Curated by artnedition</CuratedText>
        </FooterIconBox>
      </FooterWrapper>
    </FooterContainer>
  );
});

// * displayName 설정
Footer.displayName = 'Footer';
export default Footer;
