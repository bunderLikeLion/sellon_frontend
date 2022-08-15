import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import errorMsgHandler from 'utils/errorMsgHandler';
import { queryClient } from 'index';
import messagesRelatedAPI from 'apis/messagesRelatedAPI';

const useCreateMessageMutation = () => {
  return useMutation(
    (payload) => {
      toast.loading('메세지 전송 시도 중입니다....');
      return messagesRelatedAPI.postMessage(payload);
    },
    {
      onSuccess: () => {
        toast.dismiss();
        toast.success('메세지 전송 성공했습니다 👍');
        return queryClient.invalidateQueries(['messages']);
      },
      onError: (res) => {
        toast.dismiss();
        toast.error(errorMsgHandler(res));
      },
    }
  );
};

export default useCreateMessageMutation;
