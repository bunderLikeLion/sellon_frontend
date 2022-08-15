import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import errorMsgHandler from 'utils/errorMsgHandler';
import { queryClient } from 'index';
import dealingsRelatedAPI from 'apis/dealingsRelatedAPI';

const useEndDealingMutation = () => {
  return useMutation(
    async (payload) => {
      toast.loading('거래 종료 시도 중입니다....');
      await dealingsRelatedAPI.postDealingRating(payload);
      return dealingsRelatedAPI.postCompleteDealing(payload?.dealing_id);
    },
    {
      onSuccess: () => {
        toast.dismiss();
        toast.success('거래 종료 처리 성공했습니다 👍');
        return queryClient.invalidateQueries(['dealings']);
      },
      onError: (res) => {
        toast.dismiss();
        toast.error(errorMsgHandler(res));
      },
    }
  );
};

export default useEndDealingMutation;
