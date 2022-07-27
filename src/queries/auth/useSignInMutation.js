import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import userRelatedAPI from 'apis/userRelatedAPI';
import { useNavigate } from 'react-router-dom';
import errorMsgHandler from '../../utils/errorMsgHandler';

const useSignInMutation = () => {
  const navigate = useNavigate();

  return useMutation(
    (payload) => {
      toast.loading('회원가입 처리중...');
      return userRelatedAPI.postSignup(payload);
    },
    {
      onSuccess: () => {
        toast.dismiss();
        toast.success('회원가입 성공 👍');
        navigate('/login');
      },
      onError: (res) => {
        toast.dismiss();
        toast.error(errorMsgHandler(res.response.data));
      },
    }
  );
};

export default useSignInMutation;
