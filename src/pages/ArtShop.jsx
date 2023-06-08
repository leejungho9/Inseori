import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GoSearch } from 'react-icons/go';
import styled from 'styled-components';
import oneday1 from 'assets/images/OneDayClass/oneday1.jpg';
import Searchbar from 'components/Common/Searchbar/Searchbar';

const ArtShopContainer = styled.main`
  overflow: hidden;
`;
const ArtShopWrapper = styled.figure`
  float: right;
  width: calc(100% - 435px);
  position: relative;
  margin-top: 150px;
  padding-bottom: 130px;

  @media screen and (max-width: 991px) {
    width: 100%;
    margin-top: 70px;
    padding-bottom: 75px;
  }
`;
const MobileTitle = styled.h1`
  display: none;

  @media screen and (max-width: 991px) {
    font-size: 22px;
    font-weight: bold;
    margin: 28px 25px;
    display: inline-block;
  }
`;

const ArtShopContentWrapper = styled.section`
  width: 100%;
  padding-top: 100px;
  padding-right: 100px;
  display: grid;
  row-gap: 120px;
  column-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  @media screen and (max-width: 1440px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 991px) {
    padding: 0 20px;
    row-gap: 70px;
    column-gap: 15px;
    grid-template-columns: repeat(2, 1fr);
  }
`;
const ArtShopContentBox = styled(Link)``;
const ArtShopImageBox = styled.div`
  position: relative;
  cursor: pointer;
`;
const ArtShopImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;
const ArtShopInfoBox = styled.div`
  padding: 0 10px;
`;
const ArtShopInfoHead = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
  padding-bottom: 40px;
  font-weight: bold;

  @media screen and (max-width: 500px) {
    padding-bottom: 20px;
  }
`;
const ArtShopTitleBox = styled.div``;
const ArtShopInfoTitle = styled.h2`
  color: var(--dark);
  font-size: var(--text-size-15);
`;
const ArtShopInfoBody = styled.div`
  padding: 5px 0;
  line-height: 1.5;
  padding-bottom: 30px;
  color: var(--gray);
  font-size: var(--text-size-15);
  @media screen and (max-width: 500px) {
    font-size: var(--text-size-14);
    padding-bottom: 25px;
  }
`;
const ArtShopDateBox = styled.div``;
const ArtShopDate = styled.h2`
  @media screen and (max-width: 500px) {
    span {
      display: none;
    }
  }
`;

const ArtShopPersonnelBox = styled.div`
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
const ArtShopPersonnel = styled.h2``;

const ArtShopInfoFoot = styled.div``;
const ArtShopPriceBox = styled.div``;
const ArtShopPrice = styled.h2`
  font-size: var(--text-size-15);
  font-weight: bold;
`;

//! Nav
const ArtShopNav = styled.div`
  height: 52px;
  margin-right: 100px;
  display: flex;
  justify-content: space-between;
`;
const ArtShopNavUl = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
`;
const ArtShopNavLi = styled.li`
  font-size: var(--text-size-18);
`;

const ArtShopNavLink = styled(Link)`
  margin-right: 40px;
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  cursor: pointer;
`;

const ArtShopSearchBox = styled.div`
  position: relative;
  width: 330px;
`;
const SearchIcon = styled(GoSearch)`
  position: absolute;
  right: 25px;
  top: 15px;
  font-size: 20px;
  cursor: pointer;
`;
const ArtShop = () => {
  const [classNavMenu, setClassNavMenu] = useState('전체');

  const clickNavMenuHandle = (event) => {
    setClassNavMenu(event.target.innerText);
  };

  return (
    <ArtShopContainer>
      <ArtShopWrapper>
        <MobileTitle>아트샵</MobileTitle>
        <ArtShopNav>
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
          <ArtShopSearchBox>
            <SearchIcon />
            <Searchbar paddingRight={50} />
          </ArtShopSearchBox>
        </ArtShopNav>
        <ArtShopContentWrapper>
          {/* ! 반복 시작 */}
          <ArtShopContentBox to="/ArtShop/1">
            <ArtShopImageBox>
              <ArtShopImage
                src={oneday1}
                alt="원데이클래스 이미지"
              ></ArtShopImage>
            </ArtShopImageBox>
            <ArtShopInfoBox>
              <ArtShopInfoHead>
                <ArtShopTitleBox>
                  <ArtShopInfoTitle>라탄조명 클래스</ArtShopInfoTitle>
                </ArtShopTitleBox>
              </ArtShopInfoHead>
              <ArtShopInfoBody>
                <ArtShopDateBox>
                  <ArtShopDate>
                    2023.5.13(토) <span>/</span> 11:00~13:00
                  </ArtShopDate>
                </ArtShopDateBox>
                <ArtShopPersonnelBox>
                  <ArtShopPersonnel>인원 4-8명</ArtShopPersonnel>
                </ArtShopPersonnelBox>
              </ArtShopInfoBody>
              <ArtShopInfoFoot>
                <ArtShopPriceBox>
                  <ArtShopPrice>45,000</ArtShopPrice>
                </ArtShopPriceBox>
              </ArtShopInfoFoot>
            </ArtShopInfoBox>
          </ArtShopContentBox>
          {/* ! 반복 끝 */}
          {/* ! 반복 시작 */}
          <ArtShopContentBox to="/ArtShop/1">
            <ArtShopImageBox>
              <ArtShopImage
                src={oneday1}
                alt="원데이클래스 이미지"
              ></ArtShopImage>
            </ArtShopImageBox>
            <ArtShopInfoBox>
              <ArtShopInfoHead>
                <ArtShopTitleBox>
                  <ArtShopInfoTitle>라탄조명 클래스</ArtShopInfoTitle>
                </ArtShopTitleBox>
              </ArtShopInfoHead>
              <ArtShopInfoBody>
                <ArtShopDateBox>
                  <ArtShopDate>
                    2023.5.13(토) <span>/</span> 11:00~13:00
                  </ArtShopDate>
                </ArtShopDateBox>
                <ArtShopPersonnelBox>
                  <ArtShopPersonnel>인원 4-8명</ArtShopPersonnel>
                </ArtShopPersonnelBox>
              </ArtShopInfoBody>
              <ArtShopInfoFoot>
                <ArtShopPriceBox>
                  <ArtShopPrice>45,000</ArtShopPrice>
                </ArtShopPriceBox>
              </ArtShopInfoFoot>
            </ArtShopInfoBox>
          </ArtShopContentBox>
          {/* ! 반복 끝 */}
          {/* ! 반복 시작 */}
          <ArtShopContentBox to="/ArtShop/1">
            <ArtShopImageBox>
              <ArtShopImage
                src={oneday1}
                alt="원데이클래스 이미지"
              ></ArtShopImage>
            </ArtShopImageBox>
            <ArtShopInfoBox>
              <ArtShopInfoHead>
                <ArtShopTitleBox>
                  <ArtShopInfoTitle>라탄조명 클래스</ArtShopInfoTitle>
                </ArtShopTitleBox>
              </ArtShopInfoHead>
              <ArtShopInfoBody>
                <ArtShopDateBox>
                  <ArtShopDate>
                    2023.5.13(토) <span>/</span> 11:00~13:00
                  </ArtShopDate>
                </ArtShopDateBox>
                <ArtShopPersonnelBox>
                  <ArtShopPersonnel>인원 4-8명</ArtShopPersonnel>
                </ArtShopPersonnelBox>
              </ArtShopInfoBody>
              <ArtShopInfoFoot>
                <ArtShopPriceBox>
                  <ArtShopPrice>45,000</ArtShopPrice>
                </ArtShopPriceBox>
              </ArtShopInfoFoot>
            </ArtShopInfoBox>
          </ArtShopContentBox>
          {/* ! 반복 끝 */}
          {/* ! 반복 시작 */}
          <ArtShopContentBox to="/ArtShop/1">
            <ArtShopImageBox>
              <ArtShopImage
                src={oneday1}
                alt="원데이클래스 이미지"
              ></ArtShopImage>
            </ArtShopImageBox>
            <ArtShopInfoBox>
              <ArtShopInfoHead>
                <ArtShopTitleBox>
                  <ArtShopInfoTitle>라탄조명 클래스</ArtShopInfoTitle>
                </ArtShopTitleBox>
              </ArtShopInfoHead>
              <ArtShopInfoBody>
                <ArtShopDateBox>
                  <ArtShopDate>
                    2023.5.13(토) <span>/</span> 11:00~13:00
                  </ArtShopDate>
                </ArtShopDateBox>
                <ArtShopPersonnelBox>
                  <ArtShopPersonnel>인원 4-8명</ArtShopPersonnel>
                </ArtShopPersonnelBox>
              </ArtShopInfoBody>
              <ArtShopInfoFoot>
                <ArtShopPriceBox>
                  <ArtShopPrice>45,000</ArtShopPrice>
                </ArtShopPriceBox>
              </ArtShopInfoFoot>
            </ArtShopInfoBox>
          </ArtShopContentBox>
          {/* ! 반복 끝 */}
          {/* ! 반복 시작 */}
          <ArtShopContentBox to="/ArtShop/1">
            <ArtShopImageBox>
              <ArtShopImage
                src={oneday1}
                alt="원데이클래스 이미지"
              ></ArtShopImage>
            </ArtShopImageBox>
            <ArtShopInfoBox>
              <ArtShopInfoHead>
                <ArtShopTitleBox>
                  <ArtShopInfoTitle>라탄조명 클래스</ArtShopInfoTitle>
                </ArtShopTitleBox>
              </ArtShopInfoHead>
              <ArtShopInfoBody>
                <ArtShopDateBox>
                  <ArtShopDate>
                    2023.5.13(토) <span>/</span> 11:00~13:00
                  </ArtShopDate>
                </ArtShopDateBox>
                <ArtShopPersonnelBox>
                  <ArtShopPersonnel>인원 4-8명</ArtShopPersonnel>
                </ArtShopPersonnelBox>
              </ArtShopInfoBody>
              <ArtShopInfoFoot>
                <ArtShopPriceBox>
                  <ArtShopPrice>45,000</ArtShopPrice>
                </ArtShopPriceBox>
              </ArtShopInfoFoot>
            </ArtShopInfoBox>
          </ArtShopContentBox>
          {/* ! 반복 끝 */}
        </ArtShopContentWrapper>
      </ArtShopWrapper>
    </ArtShopContainer>
  );
};

export default ArtShop;
