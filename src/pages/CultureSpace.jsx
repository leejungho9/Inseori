import React, { useState } from 'react';
import styled from 'styled-components';
// import Pagination from 'components/Common/Pagination/Pagination';
import CarouselWrapper from 'components/Common/Carousel/CarouselWrapper';
import cultureData from 'data/cultureData';
import ReserveButton from 'components/Common/Button/ReserveButton';
import ExhibitionCard from 'components/Common/Card/ExhibitionCard';

const CultureSpaceContainer = styled.main`
  overflow: hidden;
`;
const CultureSpaceWrapper = styled.section`
  float: right;
  //! 전체너비 - 네브바 너비
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

const CultureSpaceBox = styled.article``;

const CultureSpaceBannerBox = styled.figure`
  height: 300px;
  padding-right: 100px;

  @media screen and (max-width: 991px) {
    padding: 0 25px;
  }
  @media screen and (max-width: 500px) {
    height: 430px;
    height: 220px;
  }
`;

const CultureSpaceBanner = styled.div`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${({ url }) => url && url});
  background-position: center;
`;

const CultureSpaceMenuBox = styled.figure`
  padding-right: 100px;
`;

const CultureSpaceName = styled.figcaption`
  font-size: var(--text-size-18);
  font-family: 'PretendardBold';
  margin-top: 30px;

  @media screen and (max-width: 991px) {
    margin: 50px 25px 36px;
  }

  @media screen and (max-width: 500px) {
    font-size: var(--text-size-15);
  }
`;

const Linebar = styled.hr`
  width: 100%;
  height: 1px;
  background-color: #e4e4e4;
  border: none;
  margin: 20px 0px 30px 0px;
  display: block;
  @media screen and (max-width: 991px) {
    display: none;
  }
`;

const CultureDescBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 100px;
  margin-bottom: 50px;
`;

const CultureSpaceDesc = styled.p`
  width: 512px;
  font-size: 16px;
  line-height: 234.5%;
  letter-spacing: -0.07em;

  @media screen and (max-width: 991px) {
    margin-bottom: 45px;
    padding: 0 25px;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    line-height: 29px;
    text-align: justify;
    letter-spacing: -0.095em;
  }
`;

const ReserveButtonBox = styled.div`
  margin-top: 25px;
  width: 400px;
  height: 40px;
`;

const CultureSpaceShopBox = styled.figure`
  padding-right: 100px;

  @media screen and (max-width: 991px) {
    padding-right: 0px;
    padding-bottom: 75px;
  }
`;

const CultureSpaceShopName = styled.figcaption`
  font-size: var(--text-size-18);
  font-family: 'PretendardBold';
  margin-top: 60px;

  @media screen and (max-width: 991px) {
    margin: 50px 25px 0px;
  }

  @media screen and (max-width: 500px) {
    font-size: var(--text-size-15);
  }
`;

//! 사용여부 불확실
// const PaginationBox = styled.section`
//   display: flex;
//   justify-content: center;
// `;

const CultureNavBox = styled.nav`
  width: 100%;
  display: flex;
  margin-bottom: 20px;
  span {
    font-family: 'PretendardBold';
    font-size: var(--text-size-18);
    padding: 0 10px;
  }

  span:last-child {
    display: none;
  }
`;

const CultureNavMenu = styled.h1`
  font-size: 15px;
  font-size: var(--text-size-18);
  font-family: 'PretendardBold';
  color: ${({ active }) => active && 'var(--text-point-color)'};
  cursor: pointer;
`;

const CultureSpace = () => {
  const [navMenu, setNavMenu] = useState('갑빠오의 집');

  const CultureNav = () => {
    return (
      <CultureNavBox>
        {cultureData.map((item, index) => (
          <>
            <CultureNavMenu
              key={index}
              onClick={() => setNavMenu(item.name)}
              active={navMenu === item.name}
            >
              {item.name}
            </CultureNavMenu>
            <span>/</span>
          </>
        ))}
      </CultureNavBox>
    );
  };
  return (
    <CultureSpaceContainer>
      <CultureSpaceWrapper>
        <CultureSpaceBox>
          <CultureNav />
          {cultureData
            .filter((item) => navMenu === item.name)
            .map((item) => (
              <>
                <CultureSpaceBannerBox key={item.id}>
                  <CultureSpaceBanner url={item.banner} />
                </CultureSpaceBannerBox>
                <CultureSpaceMenuBox>
                  <CultureSpaceName>{item.title}</CultureSpaceName>
                  <Linebar />
                  <CultureDescBox>
                    <CultureSpaceDesc>{item.desc}</CultureSpaceDesc>
                    <ReserveButtonBox>
                      <ReserveButton>작품보기</ReserveButton>
                    </ReserveButtonBox>
                  </CultureDescBox>
                </CultureSpaceMenuBox>
                <CarouselWrapper
                  slides={item.gallery}
                  width={'450px'}
                  height={'450px'}
                  padding={'20px'}
                />
                {item.exhibition.length !== 0 && (
                  <CultureSpaceShopBox>
                    <CultureSpaceShopName>지난전시</CultureSpaceShopName>
                    <Linebar />
                    <ExhibitionCard items={item.exhibition} />
                  </CultureSpaceShopBox>
                )}
              </>
            ))}
        </CultureSpaceBox>
        {/* <PaginationBox>
          <Pagination />
        </PaginationBox> */}
      </CultureSpaceWrapper>
    </CultureSpaceContainer>
  );
};

export default CultureSpace;
