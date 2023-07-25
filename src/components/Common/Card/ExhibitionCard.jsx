import styled from 'styled-components';

const CultureSpaceShopBox = styled.figure`
  padding-right: 100px;

  @media screen and (max-width: 991px) {
    padding-right: 0px;
    padding-bottom: 0px;
  }
`;

const CultureSpaceShopName = styled.figcaption`
  font-size: var(--text-size-18);
  font-family: 'PretendardBold';
  margin-top: 60px;

  @media screen and (max-width: 991px) {
    margin: 50px 25px 17px;
  }

  @media screen and (max-width: 500px) {
    font-size: var(--text-size-15);
  }
`;

const Linebar = styled.hr`
  width: 100%;
  height: 1px;
  background-color: #e4e4e4;
  border: none;
  margin: 30px 0px 30px 0px;
  display: block;

  @media screen and (max-width: 900px) {
    margin: 0px 100px 17px 0;
  }
`;

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
    padding-bottom: 25px;
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
  @media screen and (max-width: 500px) {
    margin-top: 0;
  }
`;
const ExhibitionCard = ({ items, setCurrentId }) => {
  const clickChangeList = (id) => {
    setCurrentId(id);
  };

  return (
    <CultureSpaceShopBox>
      <CultureSpaceShopName>전시</CultureSpaceShopName>
      <Linebar />
      <ExhibitionCardWrapper>
        {items &&
          items.map((item, index) => (
            <ExhibitionCardBox key={index}>
              <ExhibitionShopImageWrapper>
                <ExhibitionShopBox onClick={() => clickChangeList(item.id)}>
                  <ExhibitionShopImage src={item.thumb_url} alt="전시이미지" />
                </ExhibitionShopBox>
              </ExhibitionShopImageWrapper>
              <ExhibitionInfoHead>
                <ExhibitionDate>{item.s_date}</ExhibitionDate>
              </ExhibitionInfoHead>
              <ExhibitionInfoBody>
                <ExhibitionAuthor>{item.artist_name}</ExhibitionAuthor>
              </ExhibitionInfoBody>
              <ExhibitionInfoFoot>
                <ExhibitionName>{item.title}</ExhibitionName>
              </ExhibitionInfoFoot>
            </ExhibitionCardBox>
          ))}
      </ExhibitionCardWrapper>
    </CultureSpaceShopBox>
  );
};

export default ExhibitionCard;
