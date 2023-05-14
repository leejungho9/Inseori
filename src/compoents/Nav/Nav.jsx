import React from 'react';
import styled from 'styled-components';
import insta from '../../assets/images/insta.png';
import kakao from '../../assets/images/kakao.png';

const NavContainer = styled.div`
  width: 500px;
  padding-top: 150px;
  padding-left: 100px;
`;
const Navul = styled.ul``;
const Navli = styled.li`
  margin-bottom: 35px;
  font-size: 15px;

  a {
    cursor: pointer;
  }
  a:hover {
    color: #e40177;
    font-weight: 600;
  }
`;

const IconNavul = styled.ul`
  margin-top: 45px;
`;
const IconNavli = styled.li`
  margin-bottom: 35px;
`;

const SocialIcon = styled.img`
  width: 26px;
  height: 26px;
  cursor: pointer;
`;
function Nav() {
  return (
    <NavContainer>
      <Navul>
        <Navli>
          <a>스테이</a>
        </Navli>
        <Navli>
          <a>원데이클래스</a>
        </Navli>
        <Navli>
          <a>아트샵</a>
        </Navli>
        <Navli>
          <a>카페</a>
        </Navli>
        <Navli>
          <a>문화공간</a>
        </Navli>
      </Navul>
      <IconNavul>
        <IconNavli>
          <SocialIcon src={insta} alt="인스타그램 아이콘" />
        </IconNavli>
        <IconNavli>
          <SocialIcon src={kakao} alt="카카오 아이콘" />
        </IconNavli>
      </IconNavul>
    </NavContainer>
  );
}

export default Nav;
