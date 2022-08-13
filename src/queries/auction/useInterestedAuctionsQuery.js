import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import errorMsgHandler from 'utils/errorMsgHandler';
import auctionRelatedAPI from 'apis/auctionRelatedAPI';

const useInterestedAuctionsQuery = () => {
  return useQuery(
    ['interestedAuctionList'],
    () => auctionRelatedAPI.getInterestedAuctionLists(),
    {
      onError: (res) => {
        toast.dismiss();
        toast.error(errorMsgHandler(res));
      },
    }
  );
};

export default useInterestedAuctionsQuery;
