import React from 'react';
import styled from 'styled-components';
import oneday1 from '../../assets/images/OneDayClass/oneday1.jpg';
import oneday2 from '../../assets/images/OneDayClass/oneday2.jpg';
import oneday3 from '../../assets/images/OneDayClass/oneday3.jpg';
import { Flex } from '../../styles/GlobalStyle';

const OneDayCalssContainer = styled.main`
  /* position: relative; */
  overflow: hidden;
`;
const OneDayCalssWrapper = styled.figure`
  float: right;
  width: calc(100% - 435px);
  position: relative;
  margin-top: 150px;
  padding-bottom: 130px;
`;

const OneDayCalssContentWrapper = styled.section`
  width: 100%;
  padding-right: 100px;
  display: grid;
  row-gap: 120px;
  column-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  @media screen and (max-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
const OneDayClassContentBox = styled.div``;
const OneDayClassImageBox = styled.div`
  position: relative;
  cursor: pointer;
`;

const OneDayClassTextImage = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 50%;
  background-color: #212121;
  z-index: 9;
  border-radius: 10px;
  ${Flex}
`;

const OneDayClassText = styled.span`
  font-size: var(--text-size-25);
  color: var(--white);
  font-weight: bold;
  z-index: 10;
  letter-spacing: 1.5px;
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
  font-size: var(--text-size-15);
  font-weight: bold;
`;
const OneDayClassTitleBox = styled.div``;
const OneDayClassInfoTitle = styled.h2`
  color: var(--dark);
`;
const OneDayClassStatusBox = styled.div``;
const OneDayClassStatus = styled.h2`
  color: var(--text-point-color);
`;
const OneDayClassInfoBody = styled.div`
  padding: 5px 0;
  line-height: 1.5;
  padding-bottom: 30px;
  font-size: var(--text-size-15);
  color: var(--gray);
`;
const OneDayClassDateBox = styled.div``;
const OneDayClassDate = styled.h2``;
const OneDayClassPersonnelBox = styled.div``;
const OneDayClassPersonnel = styled.h2``;

const OneDayClassInfoFoot = styled.div``;
const OneDayClassPriceBox = styled.div``;
const OneDayClassPrice = styled.h2`
  font-size: var(--text-size-15);
  font-weight: bold;
`;

const OneDayCalss = () => {
  return (
    <OneDayCalssContainer>
      <OneDayCalssWrapper>
        <OneDayCalssContentWrapper>
          {/* ! 반복 시작 */}
          <OneDayClassContentBox>
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
                <OneDayClassStatusBox>
                  <OneDayClassStatus>모집중</OneDayClassStatus>
                </OneDayClassStatusBox>
              </OneDayClassInfoHead>
              <OneDayClassInfoBody>
                <OneDayClassDateBox>
                  <OneDayClassDate>2023.5.13(토) / 11:00~13:00</OneDayClassDate>
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
          <OneDayClassContentBox>
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
                <OneDayClassStatusBox>
                  <OneDayClassStatus>모집중</OneDayClassStatus>
                </OneDayClassStatusBox>
              </OneDayClassInfoHead>
              <OneDayClassInfoBody>
                <OneDayClassDateBox>
                  <OneDayClassDate>2023.5.13(토) / 11:00~13:00</OneDayClassDate>
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
          <OneDayClassContentBox>
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
                <OneDayClassStatusBox>
                  <OneDayClassStatus>모집중</OneDayClassStatus>
                </OneDayClassStatusBox>
              </OneDayClassInfoHead>
              <OneDayClassInfoBody>
                <OneDayClassDateBox>
                  <OneDayClassDate>2023.5.13(토) / 11:00~13:00</OneDayClassDate>
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
          <OneDayClassContentBox>
            <OneDayClassImageBox>
              <OneDayClassImage
                src={oneday1}
                alt="원데이클래스 이미지"
              ></OneDayClassImage>
              {/* class.status === 'comming soon' */}
              <OneDayClassTextImage>
                <OneDayClassText>Comming Soon</OneDayClassText>
              </OneDayClassTextImage>
            </OneDayClassImageBox>
            <OneDayClassInfoBox>
              <OneDayClassInfoHead>
                <OneDayClassTitleBox>
                  <OneDayClassInfoTitle>라탄조명 클래스</OneDayClassInfoTitle>
                </OneDayClassTitleBox>
                <OneDayClassStatusBox>
                  <OneDayClassStatus></OneDayClassStatus>
                </OneDayClassStatusBox>
              </OneDayClassInfoHead>
              <OneDayClassInfoBody>
                <OneDayClassDateBox>
                  <OneDayClassDate>2023.5.13(토) / 11:00~13:00</OneDayClassDate>
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
          <OneDayClassContentBox>
            <OneDayClassImageBox>
              <OneDayClassImage
                src={oneday2}
                alt="원데이클래스 이미지"
              ></OneDayClassImage>
              {/* ! Status close */}
              {/* class.status === 'clsoe' */}
              <OneDayClassTextImage>
                <OneDayClassText>Closed</OneDayClassText>
              </OneDayClassTextImage>
            </OneDayClassImageBox>
            <OneDayClassInfoBox>
              <OneDayClassInfoHead>
                <OneDayClassTitleBox>
                  <OneDayClassInfoTitle>라탄조명 클래스</OneDayClassInfoTitle>
                </OneDayClassTitleBox>
                <OneDayClassStatusBox>
                  <OneDayClassStatus></OneDayClassStatus>
                </OneDayClassStatusBox>
              </OneDayClassInfoHead>
              <OneDayClassInfoBody>
                <OneDayClassDateBox>
                  <OneDayClassDate>2023.5.13(토) / 11:00~13:00</OneDayClassDate>
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
