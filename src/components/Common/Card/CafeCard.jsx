import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import cafeData from 'data/cafeData';

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

  @media screen and (max-width: 500px) {
    font-size: var(--text-size-15);
  }
`;

const CafeShopBottom = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 991px) {
    flex-direction: column;
  }
`;

const CafeShopInfo = styled.span`
  font-family: 'PretendardRegular';
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.07em;
  @media screen and (max-width: 500px) {
    font-size: var(--text-size-14);
  }
`;

const CafeShopPrice = styled.span`
  font-family: 'PretendardSemiBold';
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.07em;

  @media screen and (max-width: 991px) {
    margin-top: 35px;
  }

  @media screen and (max-width: 500px) {
    font-size: var(--text-size-15);
  }
`;

const CafeShopCard = () => {
  return (
    <CafeShopWrapper>
      {cafeData.map((item) => (
        <CafeShopCardBox key={item.id}>
          <CafeShopCardLink to={`/cafe/${item.id}`} state={{ item }}>
            <CafeImageBox>
              <CafeShopImage src={item.url} alt="원두이미지" />
            </CafeImageBox>
            <CafeShopName>{item.name}</CafeShopName>
            <CafeShopBottom>
              <CafeShopInfo>
                {item.capacity} kg / {item.cupnote} 잔
              </CafeShopInfo>
              <CafeShopPrice>{item.price}원</CafeShopPrice>
            </CafeShopBottom>
          </CafeShopCardLink>
        </CafeShopCardBox>
      ))}
    </CafeShopWrapper>
  );
};

export default CafeShopCard;
