import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import errorMsgHandler from 'utils/errorMsgHandler';
import auctionRelatedAPI from 'apis/auctionRelatedAPI';
import queryKeys from 'utils/queryKeys';

const useProductGroupsQuery = (relatedAuctionId, pageNum, perPage) => {
  return useQuery(
    [queryKeys.productGroups(relatedAuctionId), pageNum, perPage],
    () =>
      auctionRelatedAPI.getProductGroups(
        relatedAuctionId,
        null,
        pageNum,
        perPage
      ),
    {
      onError: (res) => {
        toast.dismiss();
        toast.error(errorMsgHandler(res));
      },
    }
  );
};

export default useProductGroupsQuery;
