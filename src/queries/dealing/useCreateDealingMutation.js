import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import errorMsgHandler from 'utils/errorMsgHandler';
import { queryClient } from 'index';
import { useNavigate } from 'react-router-dom';
import dealingsRelatedAPI from '../../apis/dealingsRelatedAPI';

const useCreateDealingMutation = () => {
  const navigate = useNavigate();
  return useMutation(
    (payload) => {
      toast.loading('경매 체결 시도 중입니다....');
      return dealingsRelatedAPI.postDealing(payload);
    },
    {
      onSuccess: () => {
        toast.dismiss();
        toast.success('경매 체결 처리 성공했습니다 👍');
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

export default useCreateDealingMutation;
