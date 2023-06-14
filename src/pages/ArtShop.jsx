import React from 'react';
import styled from 'styled-components';
import ArtShopNav from 'components/Layout/Nav/ArtShopNav';
import ArtShopCard from 'components/Common/Card/ArtShopCard';

const ArtShopContainer = styled.main`
  overflow: hidden;
`;

const ArtShopWrapper = styled.section`
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

const ArtShopTitle = styled.h1`
  display: none;

  @media screen and (max-width: 991px) {
    font-family: 'PretendardSemiBold';
    font-size: var(--text-size-22);
    font-weight: bold;
    margin: 30px 25px;
    display: inline-block;
  }
`;

const ArtShop = () => {
  return (
    <ArtShopContainer>
      <ArtShopWrapper>
        <ArtShopTitle>아트샵</ArtShopTitle>
        <ArtShopNav />
        <ArtShopCard />
      </ArtShopWrapper>
    </ArtShopContainer>
  );
};

export default ArtShop;
