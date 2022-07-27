import { userAtom } from 'states';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilValue } from 'recoil';
import { Link, useNavigate } from 'react-router-dom';
import registerValidation from 'validations/registerValidation';
import useSignInMutation from 'queries/auth/useSignInMutation';

const Register = () => {
  const navigate = useNavigate();
  const user = useRecoilValue(userAtom);

  useEffect(() => {
    // redirect to home if already logged in
    if (user) navigate('/');
  }, []);

  const { register, handleSubmit, formState } = useForm(registerValidation);

  const { errors, isSubmitting } = formState;

  const { mutate: signInMutate } = useSignInMutation();

  const submit = async (inputData) => {
    signInMutate(inputData);
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
      <p>계정이 이미 있으신가요??</p>
      <Link to="/login">
        <button>로그인 하러 가기</button>
      </Link>
    </div>
  );
};

export default Register;
