import Searchbar from 'components/Common/Searchbar/Searchbar';
import { useState } from 'react';
import { GoSearch } from 'react-icons/go';
import { Form, Link } from 'react-router-dom';
import styled from 'styled-components';

const ArtShopNavWrapper = styled.nav`
  margin-right: 100px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;

  @media screen and (max-width: 991px) {
    margin-right: 0px;
    padding: 0 25px;
  }
`;

const ArtShopNavUl = styled.ul`
  height: 100%;
  display: flex;
`;

const ArtShopNavLi = styled.li`
  font-size: var(--text-size-18);

  @media screen and (max-width: 1370px) {
    font-size: var(--text-size-15);
  }
  @media screen and (max-width: 991px) {
    font-size: var(--text-size-13);
  }
`;

const ArtShopNavLink = styled(Link)`
  margin-right: 40px;

  color: ${({ active }) =>
    active ? 'var(--text-point-color)' : 'var(--gray)'};

  cursor: pointer;

  @media screen and (max-width: 991px) {
    margin-right: 20px;
  }
`;

const ArtShopSearchForm = styled(Form)`
  position: relative;
  width: 330px;
  height: 52px;

  @media screen and (max-width: 1370px) {
    margin-top: 30px;
    width: 100%;
  }
`;
const SearchIcon = styled(GoSearch)`
  position: absolute;
  right: 25px;
  top: 15px;
  font-size: 20px;
  cursor: pointer;
`;

const ArtShopNav = () => {
  const [classNavMenu, setClassNavMenu] = useState('전체');

  const clickNavMenuHandle = (event) => {
    setClassNavMenu(event.target.innerText);
  };

  return (
    <ArtShopNavWrapper>
      <ArtShopNavUl>
        <ArtShopNavLi>
          <ArtShopNavLink
            onClick={clickNavMenuHandle}
            active={classNavMenu === '아트포스터'}
          >
            아트포스터
          </ArtShopNavLink>
        </ArtShopNavLi>
        <ArtShopNavLi>
          <ArtShopNavLink
            onClick={clickNavMenuHandle}
            active={classNavMenu === '에디션판화'}
          >
            에디션판화
          </ArtShopNavLink>
        </ArtShopNavLi>
        <ArtShopNavLi>
          <ArtShopNavLink
            onClick={clickNavMenuHandle}
            active={classNavMenu === '굿즈/오브제'}
          >
            굿즈/오브제
          </ArtShopNavLink>
        </ArtShopNavLi>
        <ArtShopNavLi>
          <ArtShopNavLink
            onClick={clickNavMenuHandle}
            active={classNavMenu === '기타'}
          >
            기타
          </ArtShopNavLink>
        </ArtShopNavLi>
        <ArtShopNavLi>
          <ArtShopNavLink
            onClick={clickNavMenuHandle}
            active={classNavMenu === '전체'}
          >
            전체
          </ArtShopNavLink>
        </ArtShopNavLi>
      </ArtShopNavUl>
      <ArtShopSearchForm>
        <SearchIcon />
        <Searchbar paddingRight={50} />
      </ArtShopSearchForm>
    </ArtShopNavWrapper>
  );
};

export default ArtShopNav;
