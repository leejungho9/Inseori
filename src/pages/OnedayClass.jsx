import OnedayClassCard from 'components/Common/Card/OnedayClassCard';
import React from 'react';
import styled from 'styled-components';

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
const Title = styled.h1`
  display: none;

  @media screen and (max-width: 991px) {
    font-family: 'PretendardBold';
    font-size: 22px;
    font-weight: bold;
    margin: 30px;
    display: inline-block;
  }
`;

const OnedayCalss = () => {
  return (
    <OneDayCalssContainer>
      <OneDayCalssWrapper>
        <Title>원데이클래스</Title>
        <OnedayClassCard />
      </OneDayCalssWrapper>
    </OneDayCalssContainer>
  );
};

export default OnedayCalss;
