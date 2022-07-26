import { userAtom } from 'state';
import { useRecoilState } from 'recoil';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import userRelatedAPI from 'apis/userRelatedAPI';
import { useMutation } from '@tanstack/react-query';
import loginValidation from 'validations/loginValidation';
import toast from 'react-hot-toast';
import { useEffect } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userAtom);

  useEffect(() => {
    // redirect to home if already logged in
    if (user) navigate('/');
  }, []);

  const { register, handleSubmit, formState } = useForm(loginValidation);

  const { errors, isSubmitting } = formState;

  const { mutate } = useMutation(
    (payload) => {
      toast.loading('로그인 시도중...');
      return userRelatedAPI.postLogin(payload);
    },
    {
      onSuccess: (res) => {
        toast.dismiss();
        toast.success('로그인 성공 👍');
        localStorage.setItem('access_token', res?.access_token);
        setUser(res?.user);
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
      <h1>Login</h1>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label>Username</label>
          <input type="text" {...register('username')} />
          <div>{errors.username?.message}</div>
        </div>
        <div>
          <label>Password</label>
          <input type="password" {...register('password')} />
          <div>{errors.password?.message}</div>
        </div>
        <button disabled={isSubmitting}>
          {isSubmitting && 'Submitting...'}
          Login
        </button>
        {errors.apiError && <div>{errors.apiError?.message}</div>}
      </form>
    </div>
  );
};

export default Login;
