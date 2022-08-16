import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import errorMsgHandler from 'utils/errorMsgHandler';
import { queryClient } from 'index';
import auctionRelatedAPI from 'apis/auctionRelatedAPI';
import { useNavigate } from 'react-router-dom';
import messages from 'constants/messages';

const useDeleteAuctionMutation = (auctionId) => {
  const navigate = useNavigate();
  return useMutation(
    (itemIdObj) => {
      return auctionRelatedAPI.deleteAuction(auctionId, itemIdObj);
    },
    {
      onSuccess: () => {
        toast.dismiss();
        toast.success(messages.auction.destroy.success);
        queryClient.invalidateQueries(['auctionList']).then(() => {
          navigate('/auction');
        });
      },
      onError: (res) => {
        toast.dismiss();
        toast.error(errorMsgHandler(res));
      },
    }
  );
};

export default useDeleteAuctionMutation;
