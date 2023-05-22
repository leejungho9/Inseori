import styled from 'styled-components';
import insta from '../../assets/images/insta.png';
import kakao from '../../assets/images/kakao.png';

import { Link } from 'react-router-dom';
import { useState } from 'react';

const NavContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
`;

const NavBox = styled.nav`
  position: absolute;
  top: 42%;
  transform: translateY(-50%);
  height: 230px;
`;

const Navul = styled.ul``;
const Navli = styled.li`
  font-size: var(--text-size-18);
  transition: 0.6s;
  margin-bottom: 30px;

  a {
    cursor: pointer;
  }
  a:hover {
    color: var(--text-point-color);
    font-weight: 600;
  }

  @media screen and (max-width: 1440px) {
    margin-bottom: 30px;
  }
`;

const IconNavol = styled.ol`
  padding-top: 50px;
  li:first-child {
    padding-bottom: 30px;
  }
`;
const IconNavli = styled.li``;

const SocialIcon = styled.img`
  width: 26px;
  height: 26px;
  cursor: pointer;

  @media screen and (max-width: 1440px) {
    width: 22px;
    height: 22px;
  }
`;
const NavSubul = styled.ul`
  height: 0;
  overflow: hidden;
  transition: all 0.6s;
  visibility: hidden;
  opacity: 0;

  visibility: ${({ subMenuVisible }) =>
    subMenuVisible ? 'visible' : 'hidden'};
  opacity: ${({ subMenuVisible }) => (subMenuVisible ? '100' : '0')};
  height: ${({ subMenuVisible }) => (subMenuVisible ? '105px' : '0')};
  li {
    padding-top: 15px;
  }
  li:first-child {
    padding-top: 30px;
  }
`;

const NavSubli = styled.li`
  font-size: var(--text-size-14);
  .active {
    color: var(--text-point-color);
  }
`;

const MainMenu = styled.a``;

function Nav() {
  const [subMenuVisible, setSubMenuVisible] = useState(false);

  const showSubMenu = () => {
    setSubMenuVisible(true);
  };

  const closeSubMenu = () => {
    setSubMenuVisible(false);
  };

  return (
    <NavContainer>
      <NavBox>
        <Navul>
          <Navli onMouseLeave={closeSubMenu}>
            <MainMenu onMouseEnter={showSubMenu}>스테이</MainMenu>
            <NavSubul subMenuVisible={subMenuVisible}>
              <NavSubli>
                <Link to="/roomA">홰경당</Link>
              </NavSubli>
              <NavSubli>
                <a>예린의 집</a>
              </NavSubli>
              <NavSubli>
                <a>다경당</a>
              </NavSubli>
            </NavSubul>
          </Navli>
          <Navli>
            <MainMenu>
              <Link to="/OneDayClass">원데이클래스</Link>
            </MainMenu>
            <NavSubul className="mainMenu"></NavSubul>
          </Navli>
          <Navli>
            <MainMenu className="mainMenu">아트샵</MainMenu>
          </Navli>
          <Navli>
            <MainMenu className="mainMenu">카페</MainMenu>
          </Navli>
          <Navli>
            <MainMenu className="mainMenu">문화공간</MainMenu>
          </Navli>
        </Navul>

        <IconNavol>
          <IconNavli>
            <a
              target="_blank"
              href="https://www.instagram.com/inseori01/"
              rel="noreferrer"
            >
              <SocialIcon src={insta} alt="인스타그램 아이콘" />
            </a>
          </IconNavli>

          <IconNavli>
            <a
              target="_blank"
              href="https://pf.kakao.com/_xnhxhrxj"
              rel="noreferrer"
            >
              <SocialIcon src={kakao} alt="카카오 아이콘" />
            </a>
          </IconNavli>
        </IconNavol>
      </NavBox>
    </NavContainer>
  );
}

export default Nav;
