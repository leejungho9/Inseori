import React from 'react';
import styled from 'styled-components';
import insta from '../../assets/images/insta.png';
import kakao from '../../assets/images/kakao.png';
import { useLocation } from 'react-router-dom';

const NavContainer = styled.nav``;
const NavBox = styled.div``;
const Navul = styled.ul``;
const Navli = styled.li``;
const MainMenu = styled.span`
  font-size: var(--text-size-18);
  font-weight: bold;
  color: #515151;
  padding-left: 28px;
`;
const MainMenuA = styled.a`
  font-size: var(--text-size-18);
  font-weight: bold;
  padding-left: 28px;
  color: ${({ active }) => (active ? 'var(--text-point-color)' : '#515151')};
`;
const MenuLinebar = styled.div`
  width: 100%;
  margin: 19px 0;
  height: 1px;
  background-color: #d8d8d8;
`;
const NavSubul = styled.ul`
  padding-left: 28px;
  font-size: var(--text-size-16);

  li:last-child {
    padding-bottom: 38px;
  }
`;
const NavSubli = styled.li`
  padding-bottom: 15px;
`;

const Nava = styled.a`
  cursor: pointer;
  color: ${({ active }) => (active ? 'var(--text-point-color)' : '#515151')};
`;

const IconNavol = styled.ol`
  padding-left: 28px;
  padding-top: 21px;
  display: flex;
`;
const IconNavli = styled.li`
  margin-right: 35px;
`;

const SocialIcon = styled.img`
  width: 23px;
  height: 23px;
  cursor: pointer;
`;

function MobileNav() {
  const { pathname } = useLocation();

  return (
    <NavContainer>
      <NavBox>
        <Navul>
          <Navli>
            <MainMenu>스테이</MainMenu>
            <MenuLinebar />
            <NavSubul>
              <NavSubli>
                <Nava href="/RoomA" active={pathname === '/RoomA'}>
                  홰경당
                </Nava>
              </NavSubli>
              <NavSubli>
                <Nava href="/RoomA" active={pathname === '/RoomB'}>
                  예린의집
                </Nava>
              </NavSubli>
              <NavSubli>
                <Nava href="/RoomA" active={pathname === '/RoomC'}>
                  다경당
                </Nava>
              </NavSubli>
            </NavSubul>
          </Navli>
          <Navli>
            <MainMenuA href="/OneDayClass" active={pathname === '/OneDayClass'}>
              원데이클래스
            </MainMenuA>
            <MenuLinebar />
          </Navli>
          <Navli>
            <MainMenuA>카페</MainMenuA>
            <MenuLinebar />
          </Navli>
          <Navli>
            <MainMenuA>아트샵</MainMenuA>
            <MenuLinebar />
          </Navli>
          <Navli>
            <MainMenuA>문화공간</MainMenuA>
            <MenuLinebar />
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

export default MobileNav;
