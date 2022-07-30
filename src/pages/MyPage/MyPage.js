import { TabBar } from 'components/MyPage';
import WrapContainer from 'layouts/WrapContainer';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileBackground from 'components/MyPage/ProfileBackground/ProfileBackground';

const MyPage = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user_info'));

  useEffect(() => {
    if (!user) navigate('/');
  }, [user]);

  return (
    <WrapContainer>
      <ProfileBackground />
      <TabBar />
    </WrapContainer>
  );
};

export default MyPage;
