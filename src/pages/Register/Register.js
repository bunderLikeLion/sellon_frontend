import { userAtom } from 'state';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import registerValidation from 'validations/registerValidation';
import userRelatedAPI from '../../apis/userRelatedAPI';

const Register = () => {
  const navigate = useNavigate();
  const user = useRecoilValue(userAtom);

  useEffect(() => {
    // redirect to home if already logged in
    if (user) navigate('/');
  }, []);

  const { register, handleSubmit, formState } = useForm(registerValidation);

  const { errors, isSubmitting } = formState;
  const { mutate } = useMutation(
    (payload) => {
      toast.loading('회원가입 처리중...');
      return userRelatedAPI.postSignup(payload);
    },
    {
      onSuccess: () => {
        toast.dismiss();
        toast.success('회원가입 성공 👍');
        navigate('/');
      },
      onError: (res) => {
        toast.dismiss();
        toast.error(res.message);
      },
    }
  );

  const submit = async (inputData) => {
    mutate(inputData);
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label>Username</label>
          <input type="text" {...register('username')} />
          <div>{errors.username?.message}</div>
        </div>
        <div>
          <label>Email</label>
          <input type="text" {...register('email')} />
          <div>{errors.username?.message}</div>
        </div>
        <div>
          <label>Password1</label>
          <input type="password" {...register('password1')} />
          <div>{errors.username?.message}</div>
        </div>
        <div>
          <label>Password2</label>
          <input type="password" {...register('password2')} />
          <div>{errors.password?.message}</div>
        </div>
        <button disabled={isSubmitting}>
          {isSubmitting && 'Submitting...'}
          Signup
        </button>
        {errors.apiError && <div>{errors.apiError?.message}</div>}
      </form>
    </div>
  );
};

export default Register;
