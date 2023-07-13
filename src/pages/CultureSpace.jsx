import { useEffect, useState } from 'react';
import styled from 'styled-components';
import CarouselWrapper from 'components/Common/Carousel/CarouselWrapper';
import ReserveButton from 'components/Common/Button/ReserveButton';
import ExhibitionCard from 'components/Common/Card/ExhibitionCard';
import useLoading from 'hooks/useLoading';
import { getData } from 'apis/api';
import { Banner } from 'components/Common/Carousel/Banner';

const CultureSpaceContainer = styled.main`
  overflow: hidden;
`;
const CultureSpaceWrapper = styled.section`
  float: right;
  //! 전체너비 - 네브바 너비
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

const CultureSpaceBox = styled.article``;

const CultureNavBox = styled.nav`
  width: 100%;
  display: flex;
  margin-bottom: 20px;
  span {
    font-family: 'PretendardBold';
    font-size: var(--text-size-18);
    padding: 0 10px;
  }

  span:last-child {
    display: none;
  }

  @media screen and (max-width: 991px) {
    margin: 28px 25px;
  }

  @media screen and (max-width: 500px) {
    font-family: 'PretendardSemiBold';
    font-size: var(--text-size-22);
    line-height: 27px;
    letter-spacing: -0.07em;
  }
`;

const CultureNavMenu = styled.h1`
  font-size: var(--text-size-18);
  font-family: 'PretendardSemiBold';
  color: ${({ active }) => active && 'var(--text-point-color)'};
  cursor: pointer;
`;

const CultureSpaceBannerBox = styled.figure`
  height: 35vh;
  padding-right: 100px;

  @media screen and (max-width: 991px) {
    width: 100%;
    padding-right: 0;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 240px;
  }
`;

const CultureSpaceMenuBox = styled.figure`
  padding-right: 100px;
  min-height: 270px;

  @media screen and (max-width: 991px) {
    padding-right: 0px;
  }
`;

const CultureSpaceName = styled.figcaption`
  font-size: var(--text-size-18);
  font-family: 'PretendardSemiBold';
  margin-top: 30px;

  @media screen and (max-width: 991px) {
    margin: 50px 35px 17px;
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

const CultureDescBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;

  @media screen and (max-width: 991px) {
    flex-direction: column;
    margin-bottom: 75px;
  }
`;

const CultureSpaceDesc = styled.p`
  width: 512px;
  font-size: 16px;
  line-height: 234.5%;
  letter-spacing: -0.07em;
  font-size: var(--text-size-16);
  font-family: 'PretendardRegular';
  @media screen and (max-width: 991px) {
    margin-bottom: 50px;
    padding: 0 35px;
    width: 100%;
    line-height: 29px;
    text-align: justify;
    letter-spacing: -0.095em;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const ReserveButtonBox = styled.div`
  margin-top: 25px;
  width: 400px;
  height: 40px;

  @media screen and (max-width: 991px) {
    margin-top: 0px;
    width: 100%;
    padding: 0 35px;
  }
`;

const CultureSpace = () => {
  const [navMenu, setNavMenu] = useState('갑빠오의 집');
  const [currentId, setCurrentId] = useState(1);

  const [currentCulture, setCurrentCulture] = useState([]);
  const [otherCulture, setOtherCulture] = useState([]);
  const [culture, setCulture] = useState([]);

  const fetchCultureInfo = async () => {
    const response = await getData('culture/spaces/');
    setCulture(response);
  };
  const [getCulture, isCultureLoading] = useLoading(fetchCultureInfo);

  useEffect(() => {
    getCulture();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChangeMenu = (name) => {
    setNavMenu(name);
    if (name === '갑빠오의 집') {
      setCurrentId(1);
      return;
    }

    if (name === '반창고') {
      setCurrentId(2);
      return;
    }
  };

  const CultureNav = () => {
    return (
      <CultureNavBox>
        <CultureNavMenu
          onClick={() => handleChangeMenu('갑빠오의 집')}
          active={navMenu === '갑빠오의 집'}
        >
          갑빠오의 집
        </CultureNavMenu>
        <span>/</span>
        <CultureNavMenu
          onClick={() => handleChangeMenu('반창고')}
          active={navMenu === '반창고'}
        >
          반창고
        </CultureNavMenu>
      </CultureNavBox>
    );
  };

  useEffect(() => {
    const currentCultureData = culture.filter((item) => item.id === currentId);
    setCurrentCulture(currentCultureData);
    const otherCultureData = culture.filter(
      (item) => item.division === 'BCG' && item.id !== currentId,
    );

    setOtherCulture(otherCultureData);
  }, [culture, currentId]);

  useEffect(() => {
    scrollTo(0, 0);
  }, [currentId]);

  return (
    <CultureSpaceContainer>
      <CultureSpaceWrapper>
        <CultureSpaceBox>
          <CultureNav />
          <CultureSpaceBannerBox>
            <Banner
              loading={isCultureLoading}
              item={currentCulture && currentCulture}
            />
          </CultureSpaceBannerBox>
          <CultureSpaceMenuBox>
            {currentCulture &&
              currentCulture.map((item, index) => (
                <div key={index}>
                  <CultureSpaceName>{item.title}</CultureSpaceName>
                  <Linebar />
                  <CultureDescBox>
                    <CultureSpaceDesc>{item.description}</CultureSpaceDesc>
                    <ReserveButtonBox>
                      <ReserveButton>
                        {item.division === 'BCG' ? '작품보기' : '예약하기'}
                      </ReserveButton>
                    </ReserveButtonBox>
                  </CultureDescBox>
                </div>
              ))}
          </CultureSpaceMenuBox>
          <CarouselWrapper
            slides={currentCulture[0] && currentCulture[0].images}
            width={'450px'}
            height={'450px'}
            padding={'20px'}
            mobilewidth={'270px'}
            mobileheight={'270px'}
            loading={isCultureLoading}
          />
          {navMenu === '반창고' && (
            <ExhibitionCard items={otherCulture} setCurrentId={setCurrentId} />
          )}
        </CultureSpaceBox>
      </CultureSpaceWrapper>
    </CultureSpaceContainer>
  );
};

export default CultureSpace;
