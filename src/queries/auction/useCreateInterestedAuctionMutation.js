import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import errorMsgHandler from 'utils/errorMsgHandler';
import { queryClient } from 'index';
import auctionRelatedAPI from 'apis/auctionRelatedAPI';
import messages from 'constants/messages';

const useCreateInterestedAuctionMutation = () => {
  return useMutation(
    (auctionId) => {
      return auctionRelatedAPI.postInterestedAuction(auctionId);
    },
    {
      onSuccess: () => {
        toast.dismiss();
        toast.success(messages.interestedAuction.create.success);
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

export default useCreateInterestedAuctionMutation;
