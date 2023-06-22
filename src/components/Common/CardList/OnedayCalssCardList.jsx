import CardSkeleton from '../Skeleton/CardSkeleton';
import OnedayClassCard from '../Card/OnedayClassCard';

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
