import React, { useState } from 'react';
import CardSkeleton from '../Skeleton/CardSkeleton';
import onedayClassData from 'data/onedayClassData';
import OnedayClassCard from '../Card/OnedayClassCard';

const OnedayClassCardList = () => {
  const [loading] = useState(false);
  return (
    <>
      {loading ? (
        <CardSkeleton length={6} />
      ) : (
        <OnedayClassCard items={onedayClassData} />
      )}
    </>
  );
};

export default OnedayClassCardList;
