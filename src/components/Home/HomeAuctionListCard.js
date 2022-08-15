import timeLimitHandler from 'utils/timeLimitHandler';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../../states';
import AuctionListItem from 'components/Shared/AuctionListItem';

const HomeAuctionListCard = ({ isFinished, auctionData }) => {
  const user = useRecoilValue(userAtom);

  return (
    <AuctionListItem
      id={auctionData?.id}
      user={user}
      owner_id={auctionData?.owner?.id}
      product_id={auctionData?.product?.id}
      title={auctionData?.title}
      thumbnailUrl={auctionData?.product?.thumbnail?.file}
      participantCount={auctionData?.product_groups_count}
      period={timeLimitHandler(auctionData?.end_at)}
      isFinished={isFinished}
    />
  );
};

export default HomeAuctionListCard;
