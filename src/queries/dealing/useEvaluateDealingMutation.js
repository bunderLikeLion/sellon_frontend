import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import errorMsgHandler from 'utils/errorMsgHandler';
import { queryClient } from 'index';
import dealingsRelatedAPI from 'apis/dealingsRelatedAPI';
import messages from 'constants/messages';

const useEvaluateDealingMutation = () => {
  return useMutation(
    async (payload) => {
      return dealingsRelatedAPI.postDealingRating(payload);
    },
    {
      onSuccess: () => {
        toast.dismiss();
        toast.success(messages.evaluation.create.success);
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
