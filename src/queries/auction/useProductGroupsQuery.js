import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import errorMsgHandler from 'utils/errorMsgHandler';
import auctionRelatedAPI from 'apis/auctionRelatedAPI';

const useProductGroupsQuery = (relatedAuctionId) => {
  return useQuery(
    ['productGroups'],
    () => auctionRelatedAPI.getProductGroups(relatedAuctionId),
    {
      onError: (res) => {
        toast.dismiss();
        toast.error(errorMsgHandler(res));
      },
    }
  );
};

export default useProductGroupsQuery;
