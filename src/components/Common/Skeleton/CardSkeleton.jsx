import React from 'react';
import styled from 'styled-components';
import SkeletonItem from './SkeletonItem';

const SkeletonCardWrapper = styled.section`
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

const SkeletonCardBox = styled.article``;

const SkeletonImageBoxWrapper = styled.figure`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 142.3%;
  border-radius: 10px;
  overflow: hidden;

  @media screen and (max-width: 991px) {
    border-radius: 15px;
  }
`;

const SkeletonImageBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const SkeletonImage = styled(SkeletonItem)`
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
`;

const SkeletonInfoHead = styled.section`
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
  padding-bottom: 40px;
  font-weight: bold;

  @media screen and (max-width: 500px) {
    padding-bottom: 20px;
  }
`;

const SkeletonName = styled(SkeletonItem)`
  background-color: #f2f2f2;
  width: 150px;
  height: 22px;
  border-radius: 5px;
  @media screen and (max-width: 500px) {
    width: 100px;
    height: 20px;
  }
`;

const SkeletonStatus = styled(SkeletonItem)`
  background-color: #f2f2f2;
  width: 70px;
  height: 22px;
  border-radius: 5px;
  @media screen and (max-width: 500px) {
    width: 70px;
    height: 20px;
  }
`;

const SkeletonInfoBody = styled.section`
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

const SkeletonDate = styled(SkeletonItem)`
  background-color: #f2f2f2;
  width: 200px;
  height: 22px;
  border-radius: 5px;
  @media screen and (max-width: 500px) {
    span {
      display: none;
    }
    width: 100px;
    height: 20px;
  }
`;

const SkeletonPersonnel = styled(SkeletonItem)`
  background-color: #f2f2f2;
  width: 70px;
  height: 22px;
  border-radius: 5px;
  margin-top: 2px;
  @media screen and (max-width: 500px) {
    height: 20px;
  }
`;

const SkeletonPrice = styled(SkeletonItem)`
  background-color: #f2f2f2;
  width: 70px;
  height: 22px;
  border-radius: 5px;
  @media screen and (max-width: 500px) {
    height: 20px;
  }
`;

const CardSkeleton = ({ length }) => {
  return (
    <SkeletonCardWrapper>
      {new Array(length).fill('').map((_, index) => (
        <SkeletonCardBox key={index}>
          <SkeletonImageBoxWrapper>
            <SkeletonImageBox>
              <SkeletonImage></SkeletonImage>
            </SkeletonImageBox>
          </SkeletonImageBoxWrapper>
          <SkeletonInfoHead>
            <SkeletonName></SkeletonName>
            <SkeletonStatus></SkeletonStatus>
          </SkeletonInfoHead>
          <SkeletonInfoBody>
            <SkeletonDate></SkeletonDate>
            <SkeletonPersonnel></SkeletonPersonnel>
          </SkeletonInfoBody>
          <SkeletonPrice></SkeletonPrice>
        </SkeletonCardBox>
      ))}
    </SkeletonCardWrapper>
  );
};

export default CardSkeleton;
