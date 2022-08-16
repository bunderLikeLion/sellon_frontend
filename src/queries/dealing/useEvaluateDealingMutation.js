import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import errorMsgHandler from 'utils/errorMsgHandler';
import { queryClient } from 'index';
import dealingsRelatedAPI from 'apis/dealingsRelatedAPI';

const useEvaluateDealingMutation = () => {
  return useMutation(
    async (payload) => {
      toast.loading('평가 등록 시도 중입니다....');
      return dealingsRelatedAPI.postDealingRating(payload);
    },
    {
      onSuccess: () => {
        toast.dismiss();
        toast.success('평가 등록 처리 성공했습니다 👍');
        return queryClient.invalidateQueries(['dealings']);
      },
      onError: (res) => {
        toast.dismiss();
        toast.error(errorMsgHandler(res));
      },
    }
  );
};

export default useEvaluateDealingMutation;
