import { TabBar } from 'components/MyPage';
import WrapContainer from 'layouts/WrapContainer';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MyPage = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user_info'));

  useEffect(() => {
    if (!user) navigate('/');
  }, [user]);

  return (
    <WrapContainer>
      <h1>마이페이지</h1>
      <p>안녕하세요 {user.username}님!</p>
      <TabBar />
    </WrapContainer>
  );
};

export default MyPage;
