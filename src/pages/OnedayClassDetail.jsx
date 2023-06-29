import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ReservationForm from 'components/Common/Form/ReservationForm';
import onedayCalssImage1 from 'assets/images/onedayclass/detail/onedayClassImage1.png';
import onedayCalssImage2 from 'assets/images/onedayclass/detail/onedayClassImage2.png';
import { useParams } from 'react-router-dom';
import { getData } from 'apis/api';
import useLoading from 'hooks/useLoading';
import BannerSkeleton from 'components/Common/Skeleton/BannerSkeleton';

const OnedayClassDetialContainer = styled.main`
  overflow: hidden;
`;

const OnedayClassDetailWrapper = styled.section`
  float: right;
  //! 전체너비 - 네브바 너비
  width: calc(100% - 435px);
  position: relative;
  margin-top: 150px;
  padding-bottom: 130px;
  padding-right: 100px;

  @media screen and (max-width: 991px) {
    width: 100%;
    margin-top: 70px;
    padding-bottom: 75px;
    padding-right: 0;
  }
`;

const OnedayClassDetailTitle = styled.h1`
  font-family: 'PretendardSemiBold';
  font-size: var(--text-size-18);

  @media screen and (max-width: 991px) {
    margin: 30px 25px;
    font-size: var(--text-size-22);
  }
`;

const ReservationWrapper = styled.article`
  width: 100%;
  @media screen and (max-width: 991px) {
    padding: 0 25px;
  }
`;

const ReservationBanner = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 20px;
  margin-top: 30px;

  @media screen and (max-width: 991px) {
    width: 100%;
    height: 430px;
  }
`;

const ReservationFormBox = styled.div`
  margin: 45px 0px 0px;
`;

const ReservationFormTitle = styled.h2`
  font-family: 'PretendardSemiBold';
  font-size: var(--text-size-18);
  font-weight: bold;
`;

const Linebar = styled.hr`
  width: 100%;
  border: none;
  background-color: #d9d9d9;
  height: 1px;
  margin-top: 30px;
  margin-bottom: 30px;

  @media screen and (max-width: 991px) {
    margin-bottom: 45px;
  }
`;

const ReservationImageBox = styled.figure`
  width: 100%;
  display: none;
  margin-top: 93px;
  img:first-child {
    margin-bottom: 20px;
  }

  @media screen and (max-width: 500px) {
    display: block;
  }
`;

const ReservationImage = styled.img`
  width: 100%;
  height: 430px;
  object-fit: cover;

  @media screen and (max-width: 500px) {
    height: 300px;
  }
`;

const OnedayClassDetailDescBox = styled.article`
  padding: 40px 25px 0px;
  line-height: 32px;
  letter-spacing: -0.06em;
  display: none;
  @media screen and (max-width: 500px) {
    display: block;
  }
`;

const OnedayClassDetailDesc = styled.p`
  font-size: var(--text-size-16);
  font-family: PretendardRegular;
  line-height: 32px;
  letter-spacing: -0.06em;
`;

const OnedayClassDetail = () => {
  let { id } = useParams();
  const [detail, setDetail] = useState([]);

  const fetchClassDetail = async () => {
    const response = await getData(`lesson/lessons/${id}/`);
    setDetail(response);
  };

  const [getClassDetail, isClassDetailLoading] = useLoading(fetchClassDetail);
  useEffect(() => {
    getClassDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <OnedayClassDetialContainer>
      <OnedayClassDetailWrapper>
        <OnedayClassDetailTitle>{detail.title}</OnedayClassDetailTitle>
        <ReservationWrapper>
          {isClassDetailLoading ? (
            <BannerSkeleton />
          ) : (
            <picture>
              <source
                media="(max-width : 500px)"
                srcSet={
                  detail.image_m_url === 'no-image-error'
                    ? detail.banner_url
                    : detail.image_m_url
                }
              />
              <ReservationBanner
                src={detail.image_url}
                alt="원데이클래스 배너 이미지"
              />
            </picture>
          )}
          <ReservationFormBox>
            <ReservationFormTitle>예약신청서</ReservationFormTitle>
            <Linebar />
            <ReservationForm detail={detail} />
          </ReservationFormBox>
        </ReservationWrapper>
        <ReservationImageBox>
          <ReservationImage src={onedayCalssImage1} />
          <ReservationImage src={onedayCalssImage2} />
        </ReservationImageBox>
        <OnedayClassDetailDescBox>
          <OnedayClassDetailDesc>{detail.description}</OnedayClassDetailDesc>
        </OnedayClassDetailDescBox>
      </OnedayClassDetailWrapper>
    </OnedayClassDetialContainer>
  );
};

export default OnedayClassDetail;
