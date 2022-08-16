import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import userRelatedAPI from 'apis/userRelatedAPI';
import { useNavigate } from 'react-router-dom';
import errorMsgHandler from 'utils/errorMsgHandler';
import { useSetRecoilState } from 'recoil';
import { userAtom } from 'states';
import messages from 'constants/messages';

const useLoginMutation = () => {
  const navigate = useNavigate();
  const setUserInfo = useSetRecoilState(userAtom);

  return useMutation(
    (payload) => {
      return userRelatedAPI.postLogin(payload);
    },
    {
      onSuccess: (res) => {
        toast.dismiss();
        toast.success(messages.user.signin.success);
        localStorage.setItem('user_info', JSON.stringify(res?.user));
        setUserInfo(JSON.parse(localStorage.getItem('user_info')));
        localStorage.setItem('access_token', res?.access_token);
        navigate('/');
      },
      onError: (res) => {
        toast.dismiss();
        const detail = res.response.data.error.details;
        if (detail?.non_field_errors) {
          toast.error('아이디/비밀번호를 확인해주세요 😭');
        } else {
          toast.error('예기치 않은 오류가 발생했습니다. 😭');
        }
      },
    }
  );
};

export default useLoginMutation;
