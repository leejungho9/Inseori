import React from 'react';
import styled from 'styled-components';
import SkeletonItem from './SkeletonItem';

const LargeBannerWrapper = styled(SkeletonItem)`
  padding-top: 50px;
  height: calc(100vh - 277px);

  @media screen and (max-width: 1440px) {
    height: '540px';
  }
  @media screen and (max-width: 991px) {
    height: '480px';
    padding-top: 40px;
    li button:before {
      font-size: 10px;
    }
  }
  @media screen and (max-width: 500px) {
    height: '550px';
  }
`;

const SmallBannerWrapper = styled(SkeletonItem)`
  width: 100%;
  height: 35vh;
  float: left;
`;

const BannerSkeleton = ({ size }) => {
  return (
    <>
      {size === 'large' && <LargeBannerWrapper />}
      {size === 'small' && <SmallBannerWrapper />}
    </>
  );
};

export default BannerSkeleton;
