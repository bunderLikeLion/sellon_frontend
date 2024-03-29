import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import errorMsgHandler from 'utils/errorMsgHandler';
import auctionRelatedAPI from 'apis/auctionRelatedAPI';

const useInterestedAuctionsQuery = (pageNum) => {
  return useQuery(
    ['interestedAuctionList', pageNum],
    () => auctionRelatedAPI.getInterestedAuctionLists(pageNum),
    {
      onError: (res) => {
        toast.dismiss();
        toast.error(errorMsgHandler(res));
      },
    }
  );
};

export default useInterestedAuctionsQuery;
