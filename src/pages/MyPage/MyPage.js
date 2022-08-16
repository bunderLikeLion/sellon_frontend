import { TabBar } from 'components/MyPage';
import WrapContainer from 'layouts/WrapContainer';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ProfileBackground from 'components/MyPage/ProfileBackground/ProfileBackground';
import { useRecoilValue } from 'recoil';
import { userAtom } from 'states';

const MyPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = useRecoilValue(userAtom);

  useEffect(() => {
    if (!user) navigate('/');
  }, [user]);

  return (
    <WrapContainer>
      <ProfileBackground />
      <TabBar location={location?.state?.tabNum} />
    </WrapContainer>
  );
};

export default MyPage;
