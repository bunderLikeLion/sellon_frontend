import { TabBar } from 'components/MyPage';
import WrapContainer from 'layouts/WrapContainer';
import { useRecoilValue } from 'recoil';
import { userAtom } from 'states';

const MyPage = () => {
  const user = useRecoilValue(userAtom);

  return (
    <WrapContainer>
      <h1>마이페이지</h1>
      <p>안녕하세요 {user.username}님!</p>
      <TabBar />
    </WrapContainer>
  );
};

export default MyPage;
