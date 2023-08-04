import OnedayClassCard from '../Card/OnedayClassCard';
import CardSkeleton from '../Skeleton/CardSkeleton';

const OnedayClassCardList = ({ loading, items }) => {
  return (
    <>
      {loading ? (
        <CardSkeleton length={6} />
      ) : (
        <OnedayClassCard items={items} />
      )}
    </>
  );
};

export default OnedayClassCardList;
