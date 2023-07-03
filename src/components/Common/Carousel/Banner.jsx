import React from 'react';
import styled from 'styled-components';
import BannerSkeleton from '../Skeleton/BannerSkeleton';

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Picture = styled.picture`
  display: block;
  height: 100%;
`;

const RoundImage = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 20px;

  @media screen and (max-width: 991px) {
    width: 100%;
    height: 430px;
  }
`;
export const Banner = ({ loading, item }) => {
  console.log(item[0]);
  return (
    <>
      {loading ? (
        <BannerSkeleton size={'small'} />
      ) : (
        item[0] && (
          <picture>
            <source
              media="(max-width : 500px)"
              srcSet={
                item[0].image_m_url === 'no-image-error'
                  ? item[0].image_url
                  : item[0].image_m_url
              }
            />
            <Image src={item[0].image_url} alt="배너 이미지" />
          </picture>
        )
      )}
    </>
  );
};

export const RoundBanner = ({ loading, item }) => {
  return (
    <>
      {loading ? (
        <BannerSkeleton size={'small and round'} />
      ) : (
        item && (
          <Picture>
            <source
              media="(max-width : 500px)"
              srcSet={
                item.image_m_url === 'no-image-error'
                  ? item.image_url
                  : item.image_m_url
              }
            />
            <RoundImage src={item && item.image_url} alt="배너 이미지" />
          </Picture>
        )
      )}
    </>
  );
};
