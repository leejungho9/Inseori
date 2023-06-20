import React from 'react';
import styled from 'styled-components';
import SkeletonItem from './SkeletonItem';

const SkeletonBannerWrapper = styled(SkeletonItem)`
  padding-top: 50px;
  height: calc(100vh - 277px);
  @media screen and (max-width: 991px) {
    padding-top: 40px;
    li button:before {
      font-size: 10px;
    }
  }
`;

const BannerSkeleton = () => {
  return <SkeletonBannerWrapper></SkeletonBannerWrapper>;
};

export default BannerSkeleton;
