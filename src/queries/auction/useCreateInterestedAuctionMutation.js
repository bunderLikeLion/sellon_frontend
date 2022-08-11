import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import errorMsgHandler from 'utils/errorMsgHandler';
import { queryClient } from 'index';
import auctionRelatedAPI from 'apis/auctionRelatedAPI';

const useCreateInterestedAuctionMutation = () => {
  return useMutation(
    (auctionId) => {
      toast.loading('관심 경매 등록 시도 중입니다....');
      return auctionRelatedAPI.postInterestedAuction(auctionId);
    },
    {
      onSuccess: () => {
        toast.dismiss();
        toast.success('관심 경매 등록 성공했습니다 👍');
        return queryClient.invalidateQueries(['interestedAuctionList']);
      },
      onError: (res) => {
        toast.dismiss();
        toast.error(errorMsgHandler(res));
      },
    }
  );
};

export default useCreateInterestedAuctionMutation;
