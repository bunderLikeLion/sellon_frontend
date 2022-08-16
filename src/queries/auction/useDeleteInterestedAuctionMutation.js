import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import errorMsgHandler from 'utils/errorMsgHandler';
import { queryClient } from 'index';
import auctionRelatedAPI from 'apis/auctionRelatedAPI';

const useDeleteInterestedAuctionMutation = () => {
  return useMutation(
    (auctionId) => {
      toast.loading('관심 경매 해제 시도 중입니다....');
      return auctionRelatedAPI.deleteInterestedAuction(auctionId);
    },
    {
      onSuccess: () => {
        toast.dismiss();
        toast.success('관심 경매 해제 성공했습니다 👍');
        queryClient.invalidateQueries(['auctionInfo']).then(() => {
          queryClient.invalidateQueries(['interestedAuctionList']).then(() => {
            return queryClient.invalidateQueries(['auctionList']);
          });
        });
      },
      onError: (res) => {
        toast.dismiss();
        toast.error(errorMsgHandler(res));
      },
    }
  );
};

export default useDeleteInterestedAuctionMutation;
