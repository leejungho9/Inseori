import styled from 'styled-components';
import insta from '../../assets/images/insta.png';
import kakao from '../../assets/images/kakao.png';

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const NavContainer = styled.div`
  position: absolute;
  top: 150;
  height: 100%;
  // ! 전체에서 왼쪽 여백
  width: calc(100% - 100px);
`;

const NavBox = styled.nav`
  position: absolute;
  top: 10%;
  height: 220px;
`;

const Navul = styled.ul`
  /* padding-top: 150px; */
`;
const Navli = styled.li`
  font-size: 15px;
  transition: 0.6s;
  margin-bottom: 35px;

  a {
    cursor: pointer;
  }
  a:hover {
    color: #e40177;
    font-weight: 600;
  }
`;

const IconNavol = styled.ol`
  width: 100%;
  bottom: 220px;
  position: absolute;
  li:first-child {
    padding-bottom: 35px;
  }
`;
const IconNavli = styled.li``;

const SocialIcon = styled.img`
  width: 26px;
  height: 26px;
  cursor: pointer;
`;
const NavSubul = styled.ul`
  height: 0;
  overflow: hidden;
  transition: all 0.6s;

  li:first-child {
    padding-top: 20px;
  }
  li:last-child {
    padding-bottom: 35px;
  }
`;

const NavSubli = styled.li`
  margin-top: 15px;

  a {
    font-size: 13px;
  }
  .active {
    color: #e40177;
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
        subMenuEl.style.overflow = 'hidden';
        subMenuEl.style.opacity = '0';
      });
    };

    if (mainMenu) {
      closeSubMenu();

      const subMenuEl = document.querySelector('.' + mainMenu);
      console.log(subMenuEl);
      subMenuEl.style.height = '120px';
      subMenuEl.style.ope = 'visible';
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
            <NavSubul className="sub-menu stay">
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
            <MainMenu onMouseEnter={() => showSubMenu('class')}>
              원데이클래스
            </MainMenu>
            <NavSubul className="sub-menu class">
              <NavSubli>
                <Link to="/RoomA">임시</Link>
              </NavSubli>
              <NavSubli>
                <a>임시 </a>
              </NavSubli>
            </NavSubul>
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
