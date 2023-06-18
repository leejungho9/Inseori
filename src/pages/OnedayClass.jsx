import OnedayClassCardList from 'components/Common/CardList/OnedayCalssCardList';
import React from 'react';
import styled from 'styled-components';

const OnedayCalssContainer = styled.main`
  overflow: hidden;
`;
const OnedayCalssWrapper = styled.figure`
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
const OnedayCalssTitle = styled.h1`
  display: none;

  @media screen and (max-width: 991px) {
    font-family: 'PretendardSemiBold';
    font-size: var(--text-size-22);
    margin: 30px 25px;
    display: inline-block;
  }
`;

const OnedayCalss = () => {
  return (
    <OnedayCalssContainer>
      <OnedayCalssWrapper>
        <OnedayCalssTitle>원데이클래스</OnedayCalssTitle>
        <OnedayClassCardList />
      </OnedayCalssWrapper>
    </OnedayCalssContainer>
  );
};

export default OnedayCalss;
