import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import errorMsgHandler from 'utils/errorMsgHandler';
import { queryClient } from 'index';
import { useNavigate } from 'react-router-dom';
import dealingsRelatedAPI from '../../apis/dealingsRelatedAPI';
import messages from 'constants/messages';

const useCreateDealingMutation = () => {
  const navigate = useNavigate();
  return useMutation(
    (payload) => {
      return dealingsRelatedAPI.postDealing(payload);
    },
    {
      onSuccess: () => {
        toast.dismiss();
        toast.success(messages.dealing.create.success);
        queryClient.invalidateQueries(['auctionList']).then(() => {
          navigate('/mypage', { state: { tabNum: '5' } });
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
