import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import oneday1 from 'assets/images/onedayclass/oneday1.jpg';
import oneday2 from 'assets/images/onedayclass/oneday2.jpg';
import oneday3 from 'assets/images/onedayclass/oneday3.jpg';

const OnedayClassCardWrapper = styled.section`
  width: 100%;
  padding-right: 100px;
  display: grid;
  row-gap: 120px;
  column-gap: 20px;
  grid-template-columns: repeat(4, 1fr);

  @media screen and (max-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 991px) {
    padding: 0 20px;
    row-gap: 75px;
    column-gap: 15px;
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 560px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const OnedayClassCardBox = styled.article``;

const OnedayClassCardLink = styled(Link)``;

const OnedayClassImageBox = styled.figure`
  position: relative;
  cursor: pointer;
`;

const OnedayClassImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;

  @media screen and (max-width: 991px) {
    border-radius: 15px;
  }
`;

const OnedayClassInfoHead = styled.section`
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
  padding-bottom: 40px;
  font-weight: bold;

  @media screen and (max-width: 500px) {
    padding-bottom: 20px;
  }
`;

const OnedayClassName = styled.h2`
  color: var(--dark);
  font-size: var(--text-size-15);
  font-family: 'PretendardSemiBold';
`;

const OnedayClassInfoBody = styled.section`
  padding-bottom: 30px;
  line-height: 1.5;
  color: var(--gray);
  font-size: var(--text-size-15);
  font-family: 'PretendardRegular';
  letter-spacing: -0.07em;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 500px) {
    font-size: var(--text-size-14);
    padding-bottom: 25px;
  }
`;

const OnedayClassDate = styled.span`
  @media screen and (max-width: 500px) {
    span {
      display: none;
    }
  }
`;

const OnedayClassPersonnel = styled.span`
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const OnedayClassInfoFoot = styled.section``;

const OnedayClassPrice = styled.span`
  font-family: 'PretendardSemiBold';
  font-size: var(--text-size-15);
  font-weight: bold;
`;

const Break = styled.br`
  display: none;
  @media screen and (max-width: 500px) {
    display: block;
  }
`;

const OnedayClassCard = () => {
  return (
    <OnedayClassCardWrapper>
      <OnedayClassCardBox>
        <OnedayClassCardLink to="/onedayClass/1">
          <OnedayClassImageBox>
            <OnedayClassImage
              src={oneday1}
              alt="원데이클래스 이미지"
            ></OnedayClassImage>
          </OnedayClassImageBox>
        </OnedayClassCardLink>
        <OnedayClassInfoHead>
          <OnedayClassName>라탄조명 클래스</OnedayClassName>
        </OnedayClassInfoHead>
        <OnedayClassInfoBody>
          <OnedayClassDate>
            2023.5.13(토) <span>/</span>
            <Break /> 11:00~13:00
          </OnedayClassDate>
          <OnedayClassPersonnel>인원 4-8명</OnedayClassPersonnel>
        </OnedayClassInfoBody>
        <OnedayClassInfoFoot>
          <OnedayClassPrice>45,000원</OnedayClassPrice>
        </OnedayClassInfoFoot>
      </OnedayClassCardBox>
      <OnedayClassCardBox>
        <OnedayClassCardLink to="/onedayClass/1">
          <OnedayClassImageBox>
            <OnedayClassImage
              src={oneday3}
              alt="원데이클래스 이미지"
            ></OnedayClassImage>
          </OnedayClassImageBox>
        </OnedayClassCardLink>
        <OnedayClassInfoHead>
          <OnedayClassName>라탄조명 클래스</OnedayClassName>
        </OnedayClassInfoHead>
        <OnedayClassInfoBody>
          <OnedayClassDate>
            2023.5.13(토) <span>/</span>
            <Break /> 11:00~13:00
          </OnedayClassDate>
          <OnedayClassPersonnel>인원 4-8명</OnedayClassPersonnel>
        </OnedayClassInfoBody>
        <OnedayClassInfoFoot>
          <OnedayClassPrice>45,000원</OnedayClassPrice>
        </OnedayClassInfoFoot>
      </OnedayClassCardBox>
      <OnedayClassCardBox>
        <OnedayClassCardLink to="/onedayClass/1">
          <OnedayClassImageBox>
            <OnedayClassImage
              src={oneday2}
              alt="원데이클래스 이미지"
            ></OnedayClassImage>
          </OnedayClassImageBox>
        </OnedayClassCardLink>
        <OnedayClassInfoHead>
          <OnedayClassName>라탄조명 클래스</OnedayClassName>
        </OnedayClassInfoHead>
        <OnedayClassInfoBody>
          <OnedayClassDate>
            2023.5.13(토) <span>/</span>
            <Break /> 11:00~13:00
          </OnedayClassDate>
          <OnedayClassPersonnel>인원 4-8명</OnedayClassPersonnel>
        </OnedayClassInfoBody>
        <OnedayClassInfoFoot>
          <OnedayClassPrice>45,000원</OnedayClassPrice>
        </OnedayClassInfoFoot>
      </OnedayClassCardBox>
      <OnedayClassCardBox>
        <OnedayClassCardLink to="/onedayClass/1">
          <OnedayClassImageBox>
            <OnedayClassImage
              src={oneday1}
              alt="원데이클래스 이미지"
            ></OnedayClassImage>
          </OnedayClassImageBox>
        </OnedayClassCardLink>
        <OnedayClassInfoHead>
          <OnedayClassName>라탄조명 클래스</OnedayClassName>
        </OnedayClassInfoHead>
        <OnedayClassInfoBody>
          <OnedayClassDate>
            2023.5.13(토) <span>/</span>
            <Break /> 11:00~13:00
          </OnedayClassDate>
          <OnedayClassPersonnel>인원 4-8명</OnedayClassPersonnel>
        </OnedayClassInfoBody>
        <OnedayClassInfoFoot>
          <OnedayClassPrice>45,000원</OnedayClassPrice>
        </OnedayClassInfoFoot>
      </OnedayClassCardBox>
      <OnedayClassCardBox>
        <OnedayClassCardLink to="/onedayClass/1">
          <OnedayClassImageBox>
            <OnedayClassImage
              src={oneday1}
              alt="원데이클래스 이미지"
            ></OnedayClassImage>
          </OnedayClassImageBox>
        </OnedayClassCardLink>
        <OnedayClassInfoHead>
          <OnedayClassName>라탄조명 클래스</OnedayClassName>
        </OnedayClassInfoHead>
        <OnedayClassInfoBody>
          <OnedayClassDate>
            2023.5.13(토) <span>/</span>
            <Break /> 11:00~13:00
          </OnedayClassDate>
          <OnedayClassPersonnel>인원 4-8명</OnedayClassPersonnel>
        </OnedayClassInfoBody>
        <OnedayClassInfoFoot>
          <OnedayClassPrice>45,000원</OnedayClassPrice>
        </OnedayClassInfoFoot>
      </OnedayClassCardBox>
      <OnedayClassCardBox>
        <OnedayClassCardLink to="/onedayClass/1">
          <OnedayClassImageBox>
            <OnedayClassImage
              src={oneday3}
              alt="원데이클래스 이미지"
            ></OnedayClassImage>
          </OnedayClassImageBox>
        </OnedayClassCardLink>
        <OnedayClassInfoHead>
          <OnedayClassName>라탄조명 클래스</OnedayClassName>
        </OnedayClassInfoHead>
        <OnedayClassInfoBody>
          <OnedayClassDate>
            2023.5.13(토) <span>/</span>
            <Break /> 11:00~13:00
          </OnedayClassDate>
          <OnedayClassPersonnel>인원 4-8명</OnedayClassPersonnel>
        </OnedayClassInfoBody>
        <OnedayClassInfoFoot>
          <OnedayClassPrice>45,000원</OnedayClassPrice>
        </OnedayClassInfoFoot>
      </OnedayClassCardBox>
      <OnedayClassCardBox>
        <OnedayClassCardLink to="/onedayClass/1">
          <OnedayClassImageBox>
            <OnedayClassImage
              src={oneday1}
              alt="원데이클래스 이미지"
            ></OnedayClassImage>
          </OnedayClassImageBox>
        </OnedayClassCardLink>
        <OnedayClassInfoHead>
          <OnedayClassName>라탄조명 클래스</OnedayClassName>
        </OnedayClassInfoHead>
        <OnedayClassInfoBody>
          <OnedayClassDate>
            2023.5.13(토) <span>/</span>
            <Break /> 11:00~13:00
          </OnedayClassDate>
          <OnedayClassPersonnel>인원 4-8명</OnedayClassPersonnel>
        </OnedayClassInfoBody>
        <OnedayClassInfoFoot>
          <OnedayClassPrice>45,000원</OnedayClassPrice>
        </OnedayClassInfoFoot>
      </OnedayClassCardBox>
      <OnedayClassCardBox>
        <OnedayClassCardLink to="/onedayClass/1">
          <OnedayClassImageBox>
            <OnedayClassImage
              src={oneday2}
              alt="원데이클래스 이미지"
            ></OnedayClassImage>
          </OnedayClassImageBox>
        </OnedayClassCardLink>
        <OnedayClassInfoHead>
          <OnedayClassName>라탄조명 클래스</OnedayClassName>
        </OnedayClassInfoHead>
        <OnedayClassInfoBody>
          <OnedayClassDate>
            2023.5.13(토) <span>/</span>
            <Break /> 11:00~13:00
          </OnedayClassDate>
          <OnedayClassPersonnel>인원 4-8명</OnedayClassPersonnel>
        </OnedayClassInfoBody>
        <OnedayClassInfoFoot>
          <OnedayClassPrice>45,000원</OnedayClassPrice>
        </OnedayClassInfoFoot>
      </OnedayClassCardBox>
    </OnedayClassCardWrapper>
  );
};

export default OnedayClassCard;
