import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import artshop1 from 'assets/images/artshop/artshop1.png';
import artshop2 from 'assets/images/artshop/artshop2.png';
import artshop3 from 'assets/images/artshop/artshop3.png';
import artshop4 from 'assets/images/artshop/artshop4.png';

const ArtShopCardWrapper = styled.section`
  width: 100%;
  padding-top: 30px;
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
    padding: 40px 20px 0px;
    row-gap: 75px;
    column-gap: 15px;
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 560px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const ArtShopCardBox = styled.article``;

const ArtShopCardLink = styled(Link)``;

const ArtShopImageBox = styled.figure`
  position: relative;
  cursor: pointer;
`;
const ArtShopImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;

  @media screen and (max-width: 991px) {
    border-radius: 15px;
  }
`;

const ArtInfoHead = styled.section`
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
  padding-bottom: 40px;
  font-weight: bold;

  @media screen and (max-width: 500px) {
    padding-bottom: 20px;
  }
`;

const ArtName = styled.h2`
  color: var(--dark);
  font-size: var(--text-size-15);
  font-family: 'PretendardSemiBold';
  letter-spacing: -0.07em;
`;

const ArtInfoBody = styled.section`
  padding-bottom: 5px;
  line-height: 1.5;
  color: var(--gray);
`;

const ArtAuthor = styled.span`
  font-family: 'PretendardRegular';
  font-size: var(--text-size-15);
  letter-spacing: -0.07em;

  @media screen and (max-width: 500px) {
    font-size: var(--text-size-14);
  }
`;

const ArtSize = styled.span`
  font-family: 'PretendardRegular';
  font-size: var(--text-size-15);
  letter-spacing: -0.07em;

  @media screen and (max-width: 500px) {
    font-size: var(--text-size-14);
  }
`;

const ArtInfoFoot = styled.section`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 991px) {
    flex-direction: column;
  }
`;

const ArtPrice = styled.span`
  font-size: var(--text-size-15);
  font-family: 'PretendardSemiBold';
  letter-spacing: -0.07em;

  @media screen and (max-width: 991px) {
    margin-top: 25px;
  }
`;
const ArtShopCard = () => {
  return (
    <ArtShopCardWrapper>
      <ArtShopCardBox>
        <ArtShopCardLink to="/ArtShop/1">
          <ArtShopImageBox>
            <ArtShopImage
              src={artshop1}
              alt="원데이클래스 이미지"
            ></ArtShopImage>
          </ArtShopImageBox>
        </ArtShopCardLink>
        <ArtInfoHead>
          <ArtName>Form-210503</ArtName>
        </ArtInfoHead>
        <ArtInfoBody>
          <ArtAuthor>데이비드 걸스타인</ArtAuthor>
        </ArtInfoBody>
        <ArtInfoFoot>
          <ArtSize>W 130.0 x H 130.0 cm </ArtSize>
          <ArtPrice>45,000원</ArtPrice>
        </ArtInfoFoot>
      </ArtShopCardBox>
      <ArtShopCardBox>
        <ArtShopCardLink to="/ArtShop/1">
          <ArtShopImageBox>
            <ArtShopImage
              src={artshop3}
              alt="원데이클래스 이미지"
            ></ArtShopImage>
          </ArtShopImageBox>
        </ArtShopCardLink>
        <ArtInfoHead>
          <ArtName>Form-210503</ArtName>
        </ArtInfoHead>
        <ArtInfoBody>
          <ArtAuthor>데이비드 걸스타인</ArtAuthor>
        </ArtInfoBody>
        <ArtInfoFoot>
          <ArtSize>W 130.0 x H 130.0 cm </ArtSize>
          <ArtPrice>45,000원</ArtPrice>
        </ArtInfoFoot>
      </ArtShopCardBox>
      <ArtShopCardBox>
        <ArtShopCardLink to="/ArtShop/1">
          <ArtShopImageBox>
            <ArtShopImage
              src={artshop4}
              alt="원데이클래스 이미지"
            ></ArtShopImage>
          </ArtShopImageBox>
        </ArtShopCardLink>
        <ArtInfoHead>
          <ArtName>Form-210503</ArtName>
        </ArtInfoHead>
        <ArtInfoBody>
          <ArtAuthor>데이비드 걸스타인</ArtAuthor>
        </ArtInfoBody>
        <ArtInfoFoot>
          <ArtSize>W 130.0 x H 130.0 cm </ArtSize>
          <ArtPrice>45,000원</ArtPrice>
        </ArtInfoFoot>
      </ArtShopCardBox>
      <ArtShopCardBox>
        <ArtShopCardLink to="/ArtShop/1">
          <ArtShopImageBox>
            <ArtShopImage
              src={artshop1}
              alt="원데이클래스 이미지"
            ></ArtShopImage>
          </ArtShopImageBox>
        </ArtShopCardLink>
        <ArtInfoHead>
          <ArtName>Form-210503</ArtName>
        </ArtInfoHead>
        <ArtInfoBody>
          <ArtAuthor>데이비드 걸스타인</ArtAuthor>
        </ArtInfoBody>
        <ArtInfoFoot>
          <ArtSize>W 130.0 x H 130.0 cm </ArtSize>
          <ArtPrice>45,000원</ArtPrice>
        </ArtInfoFoot>
      </ArtShopCardBox>
      <ArtShopCardBox>
        <ArtShopCardLink to="/ArtShop/1">
          <ArtShopImageBox>
            <ArtShopImage
              src={artshop2}
              alt="원데이클래스 이미지"
            ></ArtShopImage>
          </ArtShopImageBox>
        </ArtShopCardLink>
        <ArtInfoHead>
          <ArtName>Form-210503</ArtName>
        </ArtInfoHead>
        <ArtInfoBody>
          <ArtAuthor>데이비드 걸스타인</ArtAuthor>
        </ArtInfoBody>
        <ArtInfoFoot>
          <ArtSize>W 130.0 x H 130.0 cm </ArtSize>
          <ArtPrice>45,000원</ArtPrice>
        </ArtInfoFoot>
      </ArtShopCardBox>
      <ArtShopCardBox>
        <ArtShopCardLink to="/ArtShop/1">
          <ArtShopImageBox>
            <ArtShopImage
              src={artshop3}
              alt="원데이클래스 이미지"
            ></ArtShopImage>
          </ArtShopImageBox>
        </ArtShopCardLink>
        <ArtInfoHead>
          <ArtName>Form-210503</ArtName>
        </ArtInfoHead>
        <ArtInfoBody>
          <ArtAuthor>데이비드 걸스타인</ArtAuthor>
        </ArtInfoBody>
        <ArtInfoFoot>
          <ArtSize>W 130.0 x H 130.0 cm </ArtSize>
          <ArtPrice>45,000원</ArtPrice>
        </ArtInfoFoot>
      </ArtShopCardBox>
    </ArtShopCardWrapper>
  );
};

export default ArtShopCard;
