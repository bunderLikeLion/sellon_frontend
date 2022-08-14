import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import errorMsgHandler from 'utils/errorMsgHandler';
import { queryClient } from 'index';
import auctionRelatedAPI from 'apis/auctionRelatedAPI';
import { useNavigate } from 'react-router-dom';

const useDeleteAuctionMutation = (auctionId) => {
  const navigate = useNavigate();
  return useMutation(
    (itemIdObj) => {
      toast.loading('경매 삭제 시도 중입니다....');
      return auctionRelatedAPI.deleteAuction(auctionId, itemIdObj);
    },
    {
      onSuccess: () => {
        toast.dismiss();
        toast.success('경매 삭제 시도 성공했습니다 👍');
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
