import styled from 'styled-components';
import instagram from 'assets/images/common/insta.png';
import kakao from 'assets/images/common/kakao.png';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const NavContainer = styled.nav`
  position: absolute;
  top: 0;
  height: 100%;
  // * 100% - 헤더왼쪽 여백
  width: calc(100% - 100px);
  @media screen and (max-width: 991px) {
    display: none;
  }
`;

const NavBox = styled.section`
  position: absolute;
  top: 42%;
  transform: translateY(-50%);
  height: 230px;
`;

const Navul = styled.ul``;

const NavLi = styled.li`
  font-size: var(--text-size-18);
  transition: 0.6s;
  margin-bottom: 35px;

  @media screen and (max-width: 1440px) {
    margin-bottom: 30px;
  }
`;
const MainMenu = styled.span`
  font-family: 'PretendardSemiBold';
  font-size: var(--text-size-18);
  color: var(--gray);
  font-weight: bold;
  cursor: pointer;
`;

const MainMenuLink = styled.a`
  font-family: 'PretendardSemiBold';
  font-size: var(--text-size-18);
  font-weight: bold;
  color: ${({ active }) =>
    active ? 'var(--text-point-color)' : 'var(--gray)'};

  &:hover {
    color: var(--text-point-color);
  }
`;

const NavSubUl = styled.ul`
  height: 0;
  overflow: hidden;
  transition: all 0.6s;
  visibility: hidden;
  visibility: ${({ subMenuVisible }) =>
    subMenuVisible ? 'visible' : 'hidden'};
  height: ${({ subMenuVisible }) => (subMenuVisible ? '105px' : '0')};
`;

const NavSubLi = styled.li`
  font-size: var(--text-size-14);
  padding-top: 15px;

  &:first-child {
    padding-top: 30px;
  }
`;

const NavLink = styled(Link)`
  cursor: pointer;
  color: ${({ active }) => (active ? 'var(--text-point-color)' : '#515151')};
  &:hover {
    color: var(--text-point-color);
    font-weight: 600;
  }
`;

const SocialNavOl = styled.ol`
  padding-top: 50px;
  li:first-child {
    padding-bottom: 30px;
  }
`;

const SocialNavLi = styled.li``;

const SocialLink = styled.a``;

const SocialIcon = styled.img`
  width: 26px;
  height: 26px;
  cursor: pointer;

  @media screen and (max-width: 1440px) {
    width: 22px;
    height: 22px;
  }
`;

function Nav() {
  const [subMenuVisible, setSubMenuVisible] = useState(false);
  const { pathname } = useLocation();
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
          <NavLi onMouseLeave={closeSubMenu}>
            <MainMenu onMouseEnter={showSubMenu}>스테이</MainMenu>
            <NavSubUl subMenuVisible={subMenuVisible}>
              <NavSubLi>
                <NavLink to="/roomA" active={pathname === '/roomA'}>
                  홰경당
                </NavLink>
              </NavSubLi>
              <NavSubLi>
                {/** 임시로 roomA 에 연결**/}
                <NavLink to="/roomB" active={pathname === '/roomB'}>
                  예린의 집
                </NavLink>
              </NavSubLi>
              <NavSubLi>
                {/** 임시로 roomA 에 연결**/}
                <NavLink to="/roomC" active={pathname === '/roomC'}>
                  다경당
                </NavLink>
              </NavSubLi>
            </NavSubUl>
          </NavLi>
          <NavLi>
            <MainMenuLink
              href="/onedayclass"
              active={pathname === '/onedayclass'}
            >
              원데이클래스
            </MainMenuLink>
          </NavLi>
          <NavLi>
            <MainMenuLink href="/artshop" active={pathname === '/artshop'}>
              아트샵
            </MainMenuLink>
          </NavLi>
          <NavLi>
            <MainMenuLink href="/cafe" active={pathname === '/cafe'}>
              카페
            </MainMenuLink>
          </NavLi>
          <NavLi>
            <MainMenuLink className="mainMenu">문화공간</MainMenuLink>
          </NavLi>
        </Navul>
        <SocialNavOl>
          <SocialNavLi>
            <SocialLink
              target="_blank"
              href="https://www.instagram.com/inseori01/"
              rel="noreferrer"
            >
              <SocialIcon src={instagram} alt="인스타그램 아이콘" />
            </SocialLink>
          </SocialNavLi>

          <SocialNavLi>
            <SocialLink
              target="_blank"
              href="https://pf.kakao.com/_xnhxhrxj"
              rel="noreferrer"
            >
              <SocialIcon src={kakao} alt="카카오 아이콘" />
            </SocialLink>
          </SocialNavLi>
        </SocialNavOl>
      </NavBox>
    </NavContainer>
  );
}

export default Nav;
