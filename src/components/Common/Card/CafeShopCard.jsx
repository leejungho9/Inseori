import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import bean1 from 'assets/images/cafe/bean1.png';
import bean2 from 'assets/images/cafe/bean2.png';
import bean3 from 'assets/images/cafe/bean3.png';
import bean4 from 'assets/images/cafe/bean4.png';
import shop1 from 'assets/images/cafe/shop1.png';
import shop2 from 'assets/images/cafe/shop2.png';
import shop3 from 'assets/images/cafe/shop3.png';
import shop4 from 'assets/images/cafe//shop4.png';

const CafeShopWrapper = styled.section`
  width: 100%;
  display: grid;
  row-gap: 60px;
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

const CafeShopCardBox = styled.article``;

const CafeShopCardLink = styled(Link)``;

const CafeImageBox = styled.figure`
  cursor: pointer;
`;

const CafeShopImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CafeShopName = styled.span`
  font-family: 'PretendardSemiBold';
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.07em;
  margin-top: 30px;
  margin-bottom: 25px;
  display: block;
`;

const CafeShopBottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CafeShopInfo = styled.span`
  font-family: 'PretendardRegular';
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.07em;
`;

const CafeShopPrice = styled.span`
  font-family: 'PretendardSemiBold';
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.07em;
`;

const CafeShopCard = () => {
  return (
    <CafeShopWrapper>
      <CafeShopCardBox>
        <CafeShopCardLink to="/cafe/1">
          <CafeImageBox>
            <CafeShopImage src={bean1} alt="원두이미지" />
          </CafeImageBox>
          <CafeShopName>원두이름</CafeShopName>
          <CafeShopBottom>
            <CafeShopInfo>1 kg / 16잔</CafeShopInfo>
            <CafeShopPrice>45,500원</CafeShopPrice>
          </CafeShopBottom>
        </CafeShopCardLink>
      </CafeShopCardBox>
      <CafeShopCardBox>
        <CafeShopCardLink to="/cafe/1">
          <CafeImageBox>
            <CafeShopImage src={bean4} alt="원두이미지" />
          </CafeImageBox>
          <CafeShopName>원두이름</CafeShopName>
          <CafeShopBottom>
            <CafeShopInfo>1 kg / 16잔</CafeShopInfo>
            <CafeShopPrice>45,500원</CafeShopPrice>
          </CafeShopBottom>
        </CafeShopCardLink>
      </CafeShopCardBox>
      <CafeShopCardBox>
        <CafeShopCardLink to="/cafe/1">
          <CafeImageBox>
            <CafeShopImage src={bean2} alt="원두이미지" />
          </CafeImageBox>
          <CafeShopName>원두이름</CafeShopName>
          <CafeShopBottom>
            <CafeShopInfo>1 kg / 16잔</CafeShopInfo>
            <CafeShopPrice>45,500원</CafeShopPrice>
          </CafeShopBottom>
        </CafeShopCardLink>
      </CafeShopCardBox>
      <CafeShopCardBox>
        <CafeShopCardLink to="/cafe/1">
          <CafeImageBox>
            <CafeShopImage src={bean3} alt="원두이미지" />
          </CafeImageBox>
          <CafeShopName>원두이름</CafeShopName>
          <CafeShopBottom>
            <CafeShopInfo>1 kg / 16잔</CafeShopInfo>
            <CafeShopPrice>45,500원</CafeShopPrice>
          </CafeShopBottom>
        </CafeShopCardLink>
      </CafeShopCardBox>
      <CafeShopCardBox>
        <CafeShopCardLink to="/cafe/1">
          <CafeImageBox>
            <CafeShopImage src={shop4} alt="원두이미지" />
          </CafeImageBox>
          <CafeShopName>원두이름</CafeShopName>
          <CafeShopBottom>
            <CafeShopInfo>1 kg / 16잔</CafeShopInfo>
            <CafeShopPrice>45,500원</CafeShopPrice>
          </CafeShopBottom>
        </CafeShopCardLink>
      </CafeShopCardBox>
      <CafeShopCardBox>
        <CafeShopCardLink to="/cafe/1">
          <CafeImageBox>
            <CafeShopImage src={shop1} alt="상품이미지" />
          </CafeImageBox>
          <CafeShopName>원두이름</CafeShopName>
          <CafeShopBottom>
            <CafeShopInfo>1 kg / 16잔</CafeShopInfo>
            <CafeShopPrice>45,500원</CafeShopPrice>
          </CafeShopBottom>
        </CafeShopCardLink>
      </CafeShopCardBox>
      <CafeShopCardBox>
        <CafeShopCardLink to="/cafe/1">
          <CafeImageBox>
            <CafeShopImage src={shop2} alt="상품이미지" />
          </CafeImageBox>
          <CafeShopName>원두이름</CafeShopName>
          <CafeShopBottom>
            <CafeShopInfo>1 kg / 16잔</CafeShopInfo>
            <CafeShopPrice>45,500원</CafeShopPrice>
          </CafeShopBottom>
        </CafeShopCardLink>
      </CafeShopCardBox>
      <CafeShopCardBox>
        <CafeShopCardLink to="/cafe/1">
          <CafeImageBox>
            <CafeShopImage src={shop3} alt="상품이미지" />
          </CafeImageBox>
          <CafeShopName>원두이름</CafeShopName>
          <CafeShopBottom>
            <CafeShopInfo>1 kg / 16잔</CafeShopInfo>
            <CafeShopPrice>45,500원</CafeShopPrice>
          </CafeShopBottom>
        </CafeShopCardLink>
      </CafeShopCardBox>
      <CafeShopCardBox>
        <CafeShopCardLink to="/cafe/1">
          <CafeImageBox>
            <CafeShopImage src={shop4} alt="상품이미지" />
          </CafeImageBox>
          <CafeShopName>원두이름</CafeShopName>
          <CafeShopBottom>
            <CafeShopInfo>1 kg / 16잔</CafeShopInfo>
            <CafeShopPrice>45,500원</CafeShopPrice>
          </CafeShopBottom>
        </CafeShopCardLink>
      </CafeShopCardBox>
      <CafeShopCardBox>
        <CafeShopCardLink to="/cafe/1">
          <CafeImageBox>
            <CafeShopImage src={shop1} alt="상품이미지" />
          </CafeImageBox>
          <CafeShopName>원두이름</CafeShopName>
          <CafeShopBottom>
            <CafeShopInfo>1 kg / 16잔</CafeShopInfo>
            <CafeShopPrice>45,500원</CafeShopPrice>
          </CafeShopBottom>
        </CafeShopCardLink>
      </CafeShopCardBox>
      <CafeShopCardBox>
        <CafeShopCardLink to="/cafe/1">
          <CafeImageBox>
            <CafeShopImage src={shop2} alt="상품이미지" />
          </CafeImageBox>
          <CafeShopName>원두이름</CafeShopName>
          <CafeShopBottom>
            <CafeShopInfo>1 kg / 16잔</CafeShopInfo>
            <CafeShopPrice>45,500원</CafeShopPrice>
          </CafeShopBottom>
        </CafeShopCardLink>
      </CafeShopCardBox>
    </CafeShopWrapper>
  );
};

export default CafeShopCard;
