import styled from 'styled-components';

const ExhibitionCardWrapper = styled.section`
  width: 100%;
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
    padding: 8px 20px 0px;
  }
`;
const ExhibitionCardBox = styled.article``;

const ExhibitionShopImageWrapper = styled.figure`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 151.3%;
  overflow: hidden;
  cursor: pointer;
`;

const ExhibitionShopBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
`;
const ExhibitionShopImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ExhibitionInfoHead = styled.section`
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
  padding-bottom: 15px;
  font-weight: bold;

  @media screen and (max-width: 500px) {
    padding-bottom: 20px;
  }
`;

const ExhibitionDate = styled.h2`
  color: var(--dark);
  font-size: var(--text-size-15);
  font-family: 'PretendardSemiBold';
  line-height: 18px;
  letter-spacing: -0.07em;
`;

const ExhibitionInfoBody = styled.section`
  padding-bottom: 5px;
  line-height: 19px;
  color: var(--gray);
`;

const ExhibitionAuthor = styled.span`
  font-size: var(--text-size-15);
  font-family: 'PretendardRegular';
  letter-spacing: -0.07em;

  @media screen and (max-width: 500px) {
    font-size: var(--text-size-14);
  }
`;

const ExhibitionInfoFoot = styled.section`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 991px) {
    flex-direction: column;
  }
`;

const ExhibitionName = styled.span`
  font-size: var(--text-size-15);
  font-family: 'PretendardRegular';
  letter-spacing: -0.07em;

  @media screen and (max-width: 991px) {
    margin-top: 25px;
  }
`;
const ExhibitionCard = ({ items }) => {
  // const clickChangeList = (id) => {
  //   setCurrentId(id);
  // };

  return (
    <ExhibitionCardWrapper>
      {items &&
        items[0].images.map((item, index) => (
          <ExhibitionCardBox key={index}>
            <ExhibitionShopImageWrapper>
              <ExhibitionShopBox>
                <ExhibitionShopImage src={item.image_url} alt="전시이미지" />
              </ExhibitionShopBox>
            </ExhibitionShopImageWrapper>
            <ExhibitionInfoHead>
              <ExhibitionDate>
                {item.startDate} - {item.endDate}
              </ExhibitionDate>
            </ExhibitionInfoHead>
            <ExhibitionInfoBody>
              <ExhibitionAuthor>{item.author}</ExhibitionAuthor>
            </ExhibitionInfoBody>
            <ExhibitionInfoFoot>
              <ExhibitionName>{item.title}</ExhibitionName>
            </ExhibitionInfoFoot>
          </ExhibitionCardBox>
        ))}
    </ExhibitionCardWrapper>
  );
};

export default ExhibitionCard;
