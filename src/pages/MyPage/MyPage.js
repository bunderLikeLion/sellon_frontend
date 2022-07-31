import { ItemListCard, TabBar } from 'components/MyPage';
import WrapContainer from 'layouts/WrapContainer';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileBackground from 'components/MyPage/ProfileBackground/ProfileBackground';
import { useRecoilValue } from 'recoil';
import { userAtom } from 'states';

const MyPage = () => {
  const navigate = useNavigate();
  const user = useRecoilValue(userAtom);

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
