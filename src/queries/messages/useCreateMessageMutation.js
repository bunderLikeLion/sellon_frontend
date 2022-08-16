import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import errorMsgHandler from 'utils/errorMsgHandler';
import { queryClient } from 'index';
import messagesRelatedAPI from 'apis/messagesRelatedAPI';
import messages from 'constants/messages';

const useCreateMessageMutation = () => {
  return useMutation(
    (payload) => {
      return messagesRelatedAPI.postMessage(payload);
    },
    {
      onSuccess: () => {
        toast.dismiss();
        toast.success(messages.message.create.success);
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
