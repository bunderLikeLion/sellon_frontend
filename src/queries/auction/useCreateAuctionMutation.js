import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import errorMsgHandler from 'utils/errorMsgHandler';
import auctionRelatedAPI from 'apis/auctionRelatedAPI';
import { useNavigate } from 'react-router-dom';

const useCreateAuctionMutation = () => {
  const navigate = useNavigate();

  return useMutation(
    (payload) => {
      toast.loading('경매 생성 시도 중입니다....');
      return auctionRelatedAPI.postAuction(payload);
    },
    {
      onSuccess: () => {
        toast.dismiss();
        toast.success('경매 생성 성공했습니다 👍');
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
