import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import userRelatedAPI from 'apis/userRelatedAPI';
import { useNavigate } from 'react-router-dom';

const useWithdrawlMutation = () => {
  const navigate = useNavigate();

  return useMutation(
    () => {
      toast.loading('회원탈퇴 처리중...');
      return userRelatedAPI.deleteWithdrawl();
    },
    {
      onSuccess: () => {
        toast.dismiss();
        toast.success('회원탈퇴 성공 !');
        localStorage.clear();
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
