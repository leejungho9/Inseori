import { useEffect, useState } from 'react';
import styled from 'styled-components';
import CarouselWrapper from 'components/Common/Carousel/CarouselWrapper';
import ReserveButton from 'components/Common/Button/ReserveButton';
import ExhibitionCard from 'components/Common/Card/ExhibitionCard';
import useLoading from 'hooks/useLoading';
import { getData } from 'apis/api';
import { Banner } from 'components/Common/Carousel/Banner';
import { useNavigate } from 'react-router-dom';
import Modal from 'components/Common/Modal/Modal';
import useModal from 'hooks/useModal';

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
  const [navMenu, setNavMenu] = useState('KPO');
  const [currentId, setCurrentId] = useState(null);
  const [currentCulture, setCurrentCulture] = useState([]);
  const [otherCulture, setOtherCulture] = useState([]);
  const [culture, setCulture] = useState([]);
  const [
    modalState,
    modalOpen,
    modalClose,
    modalCheckContent,
    modalContentState,
  ] = useModal();
  const [mobile, setMobile] = useState(false);
  const navigate = useNavigate();

  const fetchCultureInfo = async () => {
    const response = await getData('culture/spaces/', navigate);
    setCulture(response);
  };
  const [getCulture, isCultureLoading] = useLoading(fetchCultureInfo);

  const handleShowModal = () => {
    modalOpen();
    modalContentState('전화문의 : 061-761-6701');
  };

  const handleChangeMenu = (name) => {
    setNavMenu(name);
  };

  const CultureNav = () => {
    return (
      <CultureNavBox>
        <CultureNavMenu
          onClick={() => handleChangeMenu('KPO')}
          active={navMenu === 'KPO'}
        >
          갑빠오의 집
        </CultureNavMenu>
        <span>/</span>
        <CultureNavMenu
          onClick={() => handleChangeMenu('BCG')}
          active={navMenu === 'BCG'}
        >
          반창고
        </CultureNavMenu>
      </CultureNavBox>
    );
  };

  useEffect(() => {
    if (navMenu === 'KPO') {
      const currentCultureData = culture.filter(
        (item) => item.division === 'KPO',
      );
      setCurrentCulture(currentCultureData);
    }

    if (navMenu === 'BCG') {
      const currentCultureData = culture.filter((item) => {
        if (currentId === null) {
          return item.division === 'BCG';
        } else if (currentId !== null) {
          return item.division === 'BCG' && currentId === item.id;
        }
      });

      setCurrentCulture([currentCultureData[0]]);
      setCurrentId(currentCultureData[0] && currentCultureData[0].id);

      const otherCultureData = culture.filter(
        (item) => item.division === 'BCG' && item.id !== currentId,
      );

      setOtherCulture(otherCultureData);
    }
  }, [culture, currentId, navMenu]);

  useEffect(() => {
    scrollTo(0, 0);
  }, [currentId]);

  useEffect(() => {
    getCulture();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (window.innerWidth < 500) {
      setMobile(true);
    }
  }, []);

  return (
    <>
      <Modal
        showModal={modalState}
        closeModal={modalClose}
        modalContent={modalCheckContent}
      />
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
                    <CultureSpaceName>{item && item.title}</CultureSpaceName>
                    <Linebar />
                    <CultureDescBox>
                      <CultureSpaceDesc>
                        {item && item.description}
                      </CultureSpaceDesc>
                      <ReserveButtonBox>
                        {mobile ? (
                          <ReserveButton link={true} href="tel:061-761-6701">
                            {item && item.division === 'BCG'
                              ? '작품보기'
                              : '예약하기'}
                          </ReserveButton>
                        ) : (
                          <ReserveButton link={false} onClick={handleShowModal}>
                            {item && item.division === 'BCG'
                              ? '작품보기'
                              : '예약하기'}
                          </ReserveButton>
                        )}
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
            {navMenu === 'BCG' && (
              <ExhibitionCard
                items={otherCulture}
                setCurrentId={setCurrentId}
                setCurrentCulture={setCurrentCulture}
              />
            )}
          </CultureSpaceBox>
        </CultureSpaceWrapper>
      </CultureSpaceContainer>
    </>
  );
};

export default CultureSpace;
