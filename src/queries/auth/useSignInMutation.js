import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import userRelatedAPI from 'apis/userRelatedAPI';
import { useNavigate } from 'react-router-dom';
import errorMsgHandler from 'utils/errorMsgHandler';
import messages from 'constants/messages';

const useSignInMutation = () => {
  const navigate = useNavigate();

  return useMutation(
    (payload) => {
      return userRelatedAPI.postSignup(payload);
    },
    {
      onSuccess: () => {
        toast.dismiss();
        toast.success(messages.user.signup.success);
        navigate('/login');
      },
      onError: (res) => {
        toast.dismiss();
        toast.error(errorMsgHandler(res));
      },
    }
  );
};

export default useSignInMutation;
