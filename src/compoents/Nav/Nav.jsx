import styled from 'styled-components';
import insta from '../../assets/images/insta.png';
import kakao from '../../assets/images/kakao.png';

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const NavContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
`;

const NavBox = styled.nav`
  position: absolute;
  top: 40%;
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
  width: 100%;
  bottom: 25%;
  position: absolute;
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
  const [mainMenu, setMainMenu] = useState();
  const [subMenu, setsubMenu] = useState('');

  const showSubMenu = (menu) => {
    setMainMenu(menu);
  };

  useEffect(() => {
    const closeSubMenu = () => {
      const subMenuEls = document.querySelectorAll('.sub-menu');
      subMenuEls.forEach((subMenuEl) => {
        subMenuEl.style.height = 0;
        subMenuEl.style.visibility = 'hidden';
        subMenuEl.style.opacity = '0';
      });
    };

    if (mainMenu) {
      closeSubMenu();

      const subMenuEl = document.querySelector('.' + mainMenu);
      subMenuEl.style.height = subMenuEl.dataset.height + 'px';
      subMenuEl.style.visibility = 'visible';
      subMenuEl.style.opacity = '100';
    } else {
      closeSubMenu();
    }
  }, [mainMenu]);

  return (
    <NavContainer>
      <NavBox>
        <Navul>
          <Navli>
            <MainMenu onMouseEnter={() => showSubMenu('stay')}>스테이</MainMenu>
            <NavSubul className="sub-menu stay" data-height="105">
              <NavSubli>
                <Link
                  to="/RoomA"
                  onClick={() => {
                    setsubMenu('RoomA');
                  }}
                  className={subMenu === 'RoomA' ? 'active' : ''}
                >
                  홰경당
                </Link>
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
            <MainMenu>원데이클래스</MainMenu>
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
      </NavBox>

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
    </NavContainer>
  );
}

export default Nav;
