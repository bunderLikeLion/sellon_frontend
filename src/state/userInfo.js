import { atom } from 'recoil';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

const userAtom = atom({
  key: 'user',
  default: cookies.get('user'),
});

export { userAtom };
