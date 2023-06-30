import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ReservationForm from 'components/Common/Form/ReservationForm';
import { useParams } from 'react-router-dom';
import { getData } from 'apis/api';
import useLoading from 'hooks/useLoading';
import { RoundBanner } from 'components/Common/Carousel/Banner';

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
  margin-bottom: 30px;

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
  margin-top: 93px;
  img:first-child {
    margin-bottom: 20px;
  }
`;

const OnedayClassDetailDescBox = styled.article`
  padding: 40px 25px 0px;
  line-height: 32px;
  letter-spacing: -0.06em;
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

  const createHTML = () => {
    return { __html: detail.image_editor };
  };

  console.log(detail);

  return (
    <OnedayClassDetialContainer>
      <OnedayClassDetailWrapper>
        <OnedayClassDetailTitle>{detail.title}</OnedayClassDetailTitle>
        <ReservationWrapper>
          <RoundBanner loading={isClassDetailLoading} item={detail && detail} />
          <ReservationFormBox>
            <ReservationFormTitle>예약신청서</ReservationFormTitle>
            <Linebar />
            <ReservationForm detail={detail} />
          </ReservationFormBox>
        </ReservationWrapper>
        <OnedayClassDetailDescBox>
          {detail.image_editor !== '' && (
            <ReservationImageBox>
              <div dangerouslySetInnerHTML={createHTML()}></div>
            </ReservationImageBox>
          )}
          <OnedayClassDetailDesc>{detail.description}</OnedayClassDetailDesc>
        </OnedayClassDetailDescBox>
      </OnedayClassDetailWrapper>
    </OnedayClassDetialContainer>
  );
};

export default OnedayClassDetail;
