import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import userRelatedAPI from '../../apis/userRelatedAPI';
import { useNavigate } from 'react-router-dom';
import errorMsgHandler from '../../utils/errorMsgHandler';

const useLoginMutation = () => {
  const navigate = useNavigate();

  return useMutation(
    (payload) => {
      toast.loading('로그인 시도중...');
      return userRelatedAPI.postLogin(payload);
    },
    {
      onSuccess: (res) => {
        toast.dismiss();
        toast.success('로그인 성공 👍');
        localStorage.setItem('user_info', JSON.stringify(res?.user));
        localStorage.setItem('access_token', res?.access_token);
        navigate('/');
      },
      onError: (res) => {
        toast.dismiss();
        toast.error(errorMsgHandler(res.response.data));
      },
    }
  );
};

export default useLoginMutation;
