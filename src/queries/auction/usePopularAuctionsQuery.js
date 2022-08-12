import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import errorMsgHandler from 'utils/errorMsgHandler';
import auctionRelatedAPI from 'apis/auctionRelatedAPI';

const usePopularAuctionsQuery = () => {
  return useQuery(
    ['PopularAuctionList'],
    () => auctionRelatedAPI.getPopularAuctions(),
    {
      onError: (res) => {
        toast.dismiss();
        toast.error(errorMsgHandler(res));
      },
    }
  );
};

export default usePopularAuctionsQuery;
