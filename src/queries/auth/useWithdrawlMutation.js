import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import userRelatedAPI from 'apis/userRelatedAPI';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { userAtom } from 'states';

const useWithdrawlMutation = () => {
  const navigate = useNavigate();
  const setUser = useSetRecoilState(userAtom);

  return useMutation(
    () => {
      return userRelatedAPI.deleteWithdrawl();
    },
    {
      onSuccess: async () => {
        toast.dismiss();
        toast.success('회원탈퇴 성공 !');
        await localStorage.clear();
        await setUser(null);
        navigate('/');
      },
      onError: (res) => {
        toast.dismiss();
        toast.error('회원탈퇴를 성공적으로 수행하지 못했습니다.');
      },
    }
  );
};

export default useWithdrawlMutation;
