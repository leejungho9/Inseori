import { Link } from 'react-router-dom';
import styled from 'styled-components';

const OnedayClassCardWrapper = styled.section`
  width: 100%;
  padding-right: 100px;
  display: grid;
  grid-gap: 120px 20px;
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

const OnedayClassCardContentWrapper = styled.article``;

const OnedayClassImageWrapper = styled.figure`
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

const OnedayClassCardLink = styled(Link)`
  display: block;
  height: 100%;
`;

const OnedayClassImageBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
`;

const OnedayClassImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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

const OnedayClassStatus = styled.h2`
  color: var(--text-point-color);
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

const OnedayClassCard = ({ items }) => {
  return (
    <OnedayClassCardWrapper>
      {items.map((item) => (
        <OnedayClassCardContentWrapper key={item.id}>
          <OnedayClassImageWrapper>
            <OnedayClassImageBox>
              <OnedayClassCardLink to={`/lesson/${item.id}`}>
                <OnedayClassImage
                  src={item.thumb_url}
                  alt="원데이클래스 이미지"
                ></OnedayClassImage>
              </OnedayClassCardLink>
            </OnedayClassImageBox>
          </OnedayClassImageWrapper>
          <OnedayClassInfoHead>
            <OnedayClassName>{item.title}</OnedayClassName>
            <OnedayClassStatus>
              {item.is_soldout && 'SOLD OUT'}
            </OnedayClassStatus>
          </OnedayClassInfoHead>
          <OnedayClassInfoBody>
            <OnedayClassDate>
              {item.d_day} <span>/</span> <Break />
              {item.duration}
            </OnedayClassDate>
            <OnedayClassPersonnel>인원 {item.people}</OnedayClassPersonnel>
          </OnedayClassInfoBody>
          <OnedayClassInfoFoot>
            <OnedayClassPrice>
              {Number(item.price).toLocaleString()}원
            </OnedayClassPrice>
          </OnedayClassInfoFoot>
        </OnedayClassCardContentWrapper>
      ))}
    </OnedayClassCardWrapper>
  );
};
export default OnedayClassCard;
