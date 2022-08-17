import timeLimitHandler from 'utils/timeLimitHandler';
import { useRecoilValue } from 'recoil';
import { userAtom } from 'states';
import AuctionListItem from 'components/Shared/AuctionListItem';
import dateFormatter from 'utils/dateFormatter';

const HomeAuctionListCard = ({ isFinished, auctionData, isInterested }) => {
  const user = useRecoilValue(userAtom);

  console.log(auctionData, 'asdasdsda');

  return (
    <AuctionListItem
      id={auctionData?.id}
      title={auctionData?.title}
      thumbnailUrl={auctionData?.product?.thumbnail?.file}
      participantCount={auctionData?.product_groups_count}
      period={timeLimitHandler(auctionData?.end_at)}
      startAt={dateFormatter(auctionData?.created_at)}
      isFinished={isFinished}
      linkTo={
        auctionData?.owner?.id === user?.id
          ? `/auctioneer/${auctionData?.id}/${auctionData?.product?.id}`
          : `/auction/${auctionData?.id}`
      }
      linkCondition={!isFinished}
      isInterested={isInterested}
      displayInterestedBtn={true}
      relatedUser={auctionData?.owner}
    />
  );
};

export default HomeAuctionListCard;
