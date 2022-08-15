import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import errorMsgHandler from 'utils/errorMsgHandler';
import messagesRelatedAPI from 'apis/messagesRelatedAPI';

const useMessagesQuery = (dealingId) => {
  return useQuery(
    ['messages', dealingId],
    () => messagesRelatedAPI.getMessages(dealingId),
    {
      refetchInterval: 1000 * 3,
      enabled: !!dealingId,
      onError: (res) => {
        toast.dismiss();
        toast.error(errorMsgHandler(res));
      },
    }
  );
};

export default useMessagesQuery;
