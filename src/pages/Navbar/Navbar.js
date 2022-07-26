import { useRecoilState } from 'recoil';
import { userAtom } from '../../states';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [user, setUser] = useRecoilState(userAtom);
  const navigate = useNavigate();

  const logout = async () => {
    await setUser(null);
    await localStorage.clear();
    navigate('/');
  };

  return (
    <div>
      <div>Nav</div>
      <Link to="/">
        <button>Home</button>
      </Link>
      {user && (
        <>
          <div>Welcome {user.username}!</div>
          <button onClick={logout}>Logout</button>
        </>
      )}
      {!user && (
        <>
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/register">
            <button>Signup</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Navbar;
