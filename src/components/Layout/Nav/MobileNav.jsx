import styled from 'styled-components';
import instagram from 'assets/images/common/insta.png';
import kakao from 'assets/images/common/kakao.png';
import { useLocation } from 'react-router-dom';

const NavContainer = styled.nav`
  margin-top: 50px;
`;

const NavBox = styled.section``;

const NavUl = styled.ul``;

const NavLi = styled.li``;

const MainMenuLink = styled.a`
  font-family: 'PretendardSemiBold';
  font-size: var(--text-size-20);
  font-weight: bold;
  padding-left: 21px;
  color: ${({ active }) =>
    active ? 'var(--text-point-color)' : 'var(--gray)'};
`;

const Linebar = styled.hr`
  width: 100%;
  margin: 19px 0;
  height: 1px;
  background-color: #e4e4e4;
  border: none;
`;

const NavSubUl = styled.ul`
  padding-left: 20px;
  font-size: var(--text-size-16);
  li:last-child {
    padding-bottom: 38px;
  }
`;

const NavSubLi = styled.li`
  padding-bottom: 15px;
`;

const NavLink = styled.a`
  cursor: pointer;
  color: ${({ active }) => (active ? 'var(--text-point-color)' : '#515151')};
`;

const SocialNavOl = styled.ol`
  padding-left: 20px;
  padding-top: 21px;
  display: flex;
`;

const SocialNavLi = styled.li`
  margin-right: 35px;
`;

const SocialLink = styled.a``;

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
        <NavUl>
          <NavLi>
            <MainMenuLink href="/stay/room/1">스테이</MainMenuLink>
            <Linebar />
            <NavSubUl>
              <NavSubLi>
                <NavLink
                  href="/stay/room/1"
                  active={pathname === '/stay/room/1'}
                >
                  홰경당
                </NavLink>
              </NavSubLi>
              <NavSubLi>
                <NavLink
                  href="/stay/room/2"
                  active={pathname === '/stay/room/2'}
                >
                  예린의집
                </NavLink>
              </NavSubLi>
              <NavSubLi>
                <NavLink
                  href="/stay/room/3"
                  active={pathname === '/stay/room/3'}
                >
                  다경당
                </NavLink>
              </NavSubLi>
            </NavSubUl>
          </NavLi>
          <NavLi>
            <MainMenuLink href="/lesson" active={pathname === '/lesson'}>
              원데이클래스
            </MainMenuLink>
            <Linebar />
          </NavLi>
          <NavLi>
            <MainMenuLink href="/shop" active={pathname === '/shop'}>
              아트샵
            </MainMenuLink>
            <Linebar />
          </NavLi>
          <NavLi>
            <MainMenuLink href="/cafe" active={pathname === '/cafe'}>
              카페
            </MainMenuLink>
            <Linebar />
          </NavLi>
          <NavLi>
            <MainMenuLink href="/culture" active={pathname === '/culture'}>
              문화공간
            </MainMenuLink>
            <Linebar />
          </NavLi>
        </NavUl>

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

export default MobileNav;
