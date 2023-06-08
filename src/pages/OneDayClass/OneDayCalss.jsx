import React, { useState } from 'react';
import styled from 'styled-components';
import oneday1 from '../../assets/images/OneDayClass/oneday1.jpg';
import oneday2 from '../../assets/images/OneDayClass/oneday2.jpg';
import oneday3 from '../../assets/images/OneDayClass/oneday3.jpg';
import { Link } from 'react-router-dom';
import Searchbar from '../../compoents/Searchbar/Searchbar';
import { GoSearch } from 'react-icons/go';

const OneDayCalssContainer = styled.main`
  overflow: hidden;
`;
const OneDayCalssWrapper = styled.figure`
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

const OneDayCalssContentWrapper = styled.section`
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
const OneDayClassContentBox = styled(Link)``;
const OneDayClassImageBox = styled.div`
  position: relative;
  cursor: pointer;
`;
const OneDayClassImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;
const OneDayClassInfoBox = styled.div`
  padding: 0 10px;
`;
const OneDayClassInfoHead = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
  padding-bottom: 40px;
  font-weight: bold;

  @media screen and (max-width: 500px) {
    padding-bottom: 20px;
  }
`;
const OneDayClassTitleBox = styled.div``;
const OneDayClassInfoTitle = styled.h2`
  color: var(--dark);
  font-size: var(--text-size-15);
`;
const OneDayClassInfoBody = styled.div`
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
const OneDayClassDateBox = styled.div``;
const OneDayClassDate = styled.h2`
  @media screen and (max-width: 500px) {
    span {
      display: none;
    }
  }
`;

const OneDayClassPersonnelBox = styled.div`
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
const OneDayClassPersonnel = styled.h2``;

const OneDayClassInfoFoot = styled.div``;
const OneDayClassPriceBox = styled.div``;
const OneDayClassPrice = styled.h2`
  font-size: var(--text-size-15);
  font-weight: bold;
`;

//! Nav
const OneDayClassNav = styled.div`
  height: 52px;
  margin-right: 100px;
  display: flex;
  justify-content: space-between;
`;
const OneDayClassNavUl = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
`;
const OneDayClassNavLi = styled.li`
  font-size: var(--text-size-18);
`;

const OneDayClassNavLink = styled(Link)`
  margin-right: 40px;
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  cursor: pointer;
`;

const OneDayClassSearchBox = styled.div`
  position: relative;
  width: 428px;
`;
const SearchIcon = styled(GoSearch)`
  position: absolute;
  right: 25px;
  top: 15px;
  font-size: 20px;
  cursor: pointer;
`;
const OneDayCalss = () => {
  const [classNavMenu, setClassNavMenu] = useState('전체');

  const clickNavMenuHandle = (event) => {
    setClassNavMenu(event.target.innerText);
  };

  return (
    <OneDayCalssContainer>
      <OneDayCalssWrapper>
        <MobileTitle>원데이클래스</MobileTitle>
        <OneDayClassNav>
          <OneDayClassNavUl>
            <OneDayClassNavLi>
              <OneDayClassNavLink
                onClick={clickNavMenuHandle}
                active={classNavMenu === '아트포스터'}
              >
                아트포스터
              </OneDayClassNavLink>
            </OneDayClassNavLi>
            <OneDayClassNavLi>
              <OneDayClassNavLink
                onClick={clickNavMenuHandle}
                active={classNavMenu === '에디션판화'}
              >
                에디션판화
              </OneDayClassNavLink>
            </OneDayClassNavLi>
            <OneDayClassNavLi>
              <OneDayClassNavLink
                onClick={clickNavMenuHandle}
                active={classNavMenu === '굿즈/오브제'}
              >
                굿즈/오브제
              </OneDayClassNavLink>
            </OneDayClassNavLi>
            <OneDayClassNavLi>
              <OneDayClassNavLink
                onClick={clickNavMenuHandle}
                active={classNavMenu === '기타'}
              >
                기타
              </OneDayClassNavLink>
            </OneDayClassNavLi>
            <OneDayClassNavLi>
              <OneDayClassNavLink
                onClick={clickNavMenuHandle}
                active={classNavMenu === '전체'}
              >
                전체
              </OneDayClassNavLink>
            </OneDayClassNavLi>
          </OneDayClassNavUl>
          <OneDayClassSearchBox>
            <SearchIcon />
            <Searchbar paddingRight={50} />
          </OneDayClassSearchBox>
        </OneDayClassNav>
        <OneDayCalssContentWrapper>
          {/* ! 반복 시작 */}
          <OneDayClassContentBox to="/onedayclass/1">
            <OneDayClassImageBox>
              <OneDayClassImage
                src={oneday1}
                alt="원데이클래스 이미지"
              ></OneDayClassImage>
            </OneDayClassImageBox>
            <OneDayClassInfoBox>
              <OneDayClassInfoHead>
                <OneDayClassTitleBox>
                  <OneDayClassInfoTitle>라탄조명 클래스</OneDayClassInfoTitle>
                </OneDayClassTitleBox>
              </OneDayClassInfoHead>
              <OneDayClassInfoBody>
                <OneDayClassDateBox>
                  <OneDayClassDate>
                    2023.5.13(토) <span>/</span> 11:00~13:00
                  </OneDayClassDate>
                </OneDayClassDateBox>
                <OneDayClassPersonnelBox>
                  <OneDayClassPersonnel>인원 4-8명</OneDayClassPersonnel>
                </OneDayClassPersonnelBox>
              </OneDayClassInfoBody>
              <OneDayClassInfoFoot>
                <OneDayClassPriceBox>
                  <OneDayClassPrice>45,000</OneDayClassPrice>
                </OneDayClassPriceBox>
              </OneDayClassInfoFoot>
            </OneDayClassInfoBox>
          </OneDayClassContentBox>
          {/* ! 반복 끝 */}
          {/* ! 반복 시작 */}
          <OneDayClassContentBox to="/onedayclass/1">
            <OneDayClassImageBox>
              <OneDayClassImage
                src={oneday3}
                alt="원데이클래스 이미지"
              ></OneDayClassImage>
            </OneDayClassImageBox>
            <OneDayClassInfoBox>
              <OneDayClassInfoHead>
                <OneDayClassTitleBox>
                  <OneDayClassInfoTitle>라탄조명 클래스</OneDayClassInfoTitle>
                </OneDayClassTitleBox>
              </OneDayClassInfoHead>
              <OneDayClassInfoBody>
                <OneDayClassDateBox>
                  <OneDayClassDate>
                    2023.5.13(토) <span>/</span> 11:00~13:00
                  </OneDayClassDate>
                </OneDayClassDateBox>
                <OneDayClassPersonnelBox>
                  <OneDayClassPersonnel>인원 4-8명</OneDayClassPersonnel>
                </OneDayClassPersonnelBox>
              </OneDayClassInfoBody>
              <OneDayClassInfoFoot>
                <OneDayClassPriceBox>
                  <OneDayClassPrice>45,000</OneDayClassPrice>
                </OneDayClassPriceBox>
              </OneDayClassInfoFoot>
            </OneDayClassInfoBox>
          </OneDayClassContentBox>
          {/* ! 반복 끝 */}
          {/* ! 반복 시작 */}
          <OneDayClassContentBox to="/onedayclass/1">
            <OneDayClassImageBox>
              <OneDayClassImage
                src={oneday2}
                alt="원데이클래스 이미지"
              ></OneDayClassImage>
            </OneDayClassImageBox>
            <OneDayClassInfoBox>
              <OneDayClassInfoHead>
                <OneDayClassTitleBox>
                  <OneDayClassInfoTitle>라탄조명 클래스</OneDayClassInfoTitle>
                </OneDayClassTitleBox>
              </OneDayClassInfoHead>
              <OneDayClassInfoBody>
                <OneDayClassDateBox>
                  <OneDayClassDate>
                    2023.5.13(토) <span>/</span> 11:00~13:00
                  </OneDayClassDate>
                </OneDayClassDateBox>
                <OneDayClassPersonnelBox>
                  <OneDayClassPersonnel>인원 4-8명</OneDayClassPersonnel>
                </OneDayClassPersonnelBox>
              </OneDayClassInfoBody>
              <OneDayClassInfoFoot>
                <OneDayClassPriceBox>
                  <OneDayClassPrice>45,000</OneDayClassPrice>
                </OneDayClassPriceBox>
              </OneDayClassInfoFoot>
            </OneDayClassInfoBox>
          </OneDayClassContentBox>
          {/* ! 반복 끝 */}
          {/* ! 반복 시작 */}
          <OneDayClassContentBox to="/onedayclass/1">
            <OneDayClassImageBox>
              <OneDayClassImage
                src={oneday3}
                alt="원데이클래스 이미지"
              ></OneDayClassImage>
            </OneDayClassImageBox>
            <OneDayClassInfoBox>
              <OneDayClassInfoHead>
                <OneDayClassTitleBox>
                  <OneDayClassInfoTitle>라탄조명 클래스</OneDayClassInfoTitle>
                </OneDayClassTitleBox>
              </OneDayClassInfoHead>
              <OneDayClassInfoBody>
                <OneDayClassDateBox>
                  <OneDayClassDate>
                    2023.5.13(토) <span>/</span> 11:00~13:00
                  </OneDayClassDate>
                </OneDayClassDateBox>
                <OneDayClassPersonnelBox>
                  <OneDayClassPersonnel>인원 4-8명</OneDayClassPersonnel>
                </OneDayClassPersonnelBox>
              </OneDayClassInfoBody>
              <OneDayClassInfoFoot>
                <OneDayClassPriceBox>
                  <OneDayClassPrice>45,000</OneDayClassPrice>
                </OneDayClassPriceBox>
              </OneDayClassInfoFoot>
            </OneDayClassInfoBox>
          </OneDayClassContentBox>
          {/* ! 반복 끝 */}
          {/* ! 반복 시작 */}
          <OneDayClassContentBox to="/onedayclass/1">
            <OneDayClassImageBox>
              <OneDayClassImage
                src={oneday2}
                alt="원데이클래스 이미지"
              ></OneDayClassImage>
            </OneDayClassImageBox>
            <OneDayClassInfoBox>
              <OneDayClassInfoHead>
                <OneDayClassTitleBox>
                  <OneDayClassInfoTitle>라탄조명 클래스</OneDayClassInfoTitle>
                </OneDayClassTitleBox>
              </OneDayClassInfoHead>
              <OneDayClassInfoBody>
                <OneDayClassDateBox>
                  <OneDayClassDate>
                    2023.5.13(토) <span>/</span> 11:00~13:00
                  </OneDayClassDate>
                </OneDayClassDateBox>
                <OneDayClassPersonnelBox>
                  <OneDayClassPersonnel>인원 4-8명</OneDayClassPersonnel>
                </OneDayClassPersonnelBox>
              </OneDayClassInfoBody>
              <OneDayClassInfoFoot>
                <OneDayClassPriceBox>
                  <OneDayClassPrice>45,000</OneDayClassPrice>
                </OneDayClassPriceBox>
              </OneDayClassInfoFoot>
            </OneDayClassInfoBox>
          </OneDayClassContentBox>
          {/* ! 반복 끝 */}
          {/* ! 반복 시작 */}
          <OneDayClassContentBox to="/onedayclass/1">
            <OneDayClassImageBox>
              <OneDayClassImage
                src={oneday1}
                alt="원데이클래스 이미지"
              ></OneDayClassImage>
            </OneDayClassImageBox>
            <OneDayClassInfoBox>
              <OneDayClassInfoHead>
                <OneDayClassTitleBox>
                  <OneDayClassInfoTitle>라탄조명 클래스</OneDayClassInfoTitle>
                </OneDayClassTitleBox>
              </OneDayClassInfoHead>
              <OneDayClassInfoBody>
                <OneDayClassDateBox>
                  <OneDayClassDate>
                    2023.5.13(토) <span>/</span> 11:00~13:00
                  </OneDayClassDate>
                </OneDayClassDateBox>
                <OneDayClassPersonnelBox>
                  <OneDayClassPersonnel>인원 4-8명</OneDayClassPersonnel>
                </OneDayClassPersonnelBox>
              </OneDayClassInfoBody>
              <OneDayClassInfoFoot>
                <OneDayClassPriceBox>
                  <OneDayClassPrice>45,000</OneDayClassPrice>
                </OneDayClassPriceBox>
              </OneDayClassInfoFoot>
            </OneDayClassInfoBox>
          </OneDayClassContentBox>
          {/* ! 반복 끝 */}
        </OneDayCalssContentWrapper>
      </OneDayCalssWrapper>
    </OneDayCalssContainer>
  );
};

export default OneDayCalss;
