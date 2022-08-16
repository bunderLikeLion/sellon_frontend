import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import errorMsgHandler from 'utils/errorMsgHandler';
import auctionRelatedAPI from 'apis/auctionRelatedAPI';
import { useNavigate } from 'react-router-dom';
import messages from 'constants/messages';

const useCreateAuctionMutation = () => {
  const navigate = useNavigate();

  return useMutation(
    (payload) => {
      return auctionRelatedAPI.postAuction(payload);
    },
    {
      onSuccess: () => {
        toast.dismiss();
        toast.success(messages.auction.create.success);
        navigate('/auction');
      },
      onError: (res) => {
        toast.dismiss();
        toast.error(errorMsgHandler(res));
      },
    }
  );
};

export default useCreateAuctionMutation;
