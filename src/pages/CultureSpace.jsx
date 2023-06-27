import { useEffect, useState } from 'react';
import styled from 'styled-components';
import CarouselWrapper from 'components/Common/Carousel/CarouselWrapper';
import ReserveButton from 'components/Common/Button/ReserveButton';
import ExhibitionCard from 'components/Common/Card/ExhibitionCard';
import useLoading from 'hooks/useLoading';
import BannerSkeleton from 'components/Common/Skeleton/BannerSkeleton';
import { getData } from 'apis/api';

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

const CultureSpaceBanner = styled.div`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${({ url }) => url && url});
  background-position: center;
`;

const CultureSpaceMenuBox = styled.figure`
  padding-right: 100px;

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

  const CultureBanner = ({ url }) => {
    return (
      <CultureSpaceBannerBox>
        <CultureSpaceBanner url={url} />
      </CultureSpaceBannerBox>
    );
  };

  const CultureShop = ({ exhibitions, setCurrentId }) => {
    return (
      <CultureSpaceShopBox>
        <CultureSpaceShopName>지난전시</CultureSpaceShopName>
        <Linebar />
        <ExhibitionCard items={exhibitions} setCurrentId={setCurrentId} />
      </CultureSpaceShopBox>
    );
  };

  useEffect(() => {
    const currentCultureData = culture.filter((item) => item.id === currentId);
    setCurrentCulture(currentCultureData);

    const otherCultureData = culture.filter((item) => item.slug === 'BCG_1');

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
          {currentCulture.map((item, index) => (
            <div key={index}>
              {isCultureLoading ? (
                <BannerSkeleton />
              ) : (
                <CultureBanner url={item.image_url} />
              )}
              <CultureSpaceMenuBox>
                <CultureSpaceName>{item.title}</CultureSpaceName>
                <Linebar />
                <CultureDescBox>
                  <CultureSpaceDesc>
                    갑빠오 스튜디오는 일상적이고 사적인 경험을 토대로 다양한
                    아트웍을 선보이고 있습니다. 온전히 &quot;나&quot;로 존재할
                    수 있는 자유와 치유의방, 우리는 모두 별것 아니지만,
                    도움이되는 것들 덕분에 살아갈 수 있습니다.
                  </CultureSpaceDesc>
                  <ReserveButtonBox>
                    <ReserveButton>예약하기</ReserveButton>
                  </ReserveButtonBox>
                </CultureDescBox>
              </CultureSpaceMenuBox>
              <CarouselWrapper
                slides={item.images}
                width={'450px'}
                height={'450px'}
                padding={'20px'}
                mobilewidth={'270px'}
                mobileheight={'270px'}
              />
            </div>
          ))}
          {navMenu === '반창고' && (
            <CultureShop
              exhibitions={otherCulture}
              setCurrentId={setCurrentId}
            />
          )}
        </CultureSpaceBox>
      </CultureSpaceWrapper>
    </CultureSpaceContainer>
  );
};

export default CultureSpace;
