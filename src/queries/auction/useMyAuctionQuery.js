import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import errorMsgHandler from 'utils/errorMsgHandler';
import auctionRelatedAPI from 'apis/auctionRelatedAPI';

const useMyAuctionQuery = (pageNum, perPage) => {
  return useQuery(
    ['MyAuctionList', pageNum, perPage],
    () => auctionRelatedAPI.getMyAuctionList(pageNum, perPage),
    {
      onError: (res) => {
        toast.dismiss();
        toast.error(errorMsgHandler(res));
      },
      staleTime: 1000 * 60 * 3,
    }
  );
};

export default useMyAuctionQuery;
