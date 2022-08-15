import AuctionListItem from 'components/Shared/AuctionListItem';
import timeLimitHandler from 'utils/timeLimitHandler';
import dateFormatter from 'utils/dateFormatter';

const InterestedAuctionListCard = ({ isFinished, data }) => {
  return (
    <AuctionListItem
      title={data?.title}
      thumbnailUrl={data?.product?.thumbnail?.file}
      participantCount={data?.product_groups_count}
      period={timeLimitHandler(data?.end_at)}
      startAt={dateFormatter(data?.created_at)}
      isFinished={isFinished}
      linkTo={`/auction/${data.id}`}
      linkCondition={!isFinished}
      displayInterestedBtn={true}
      isInterested={data?.is_interested || false}
    />
  );
};

export default InterestedAuctionListCard;
