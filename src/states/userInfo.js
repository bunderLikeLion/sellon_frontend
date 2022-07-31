import { atom } from 'recoil';

const userAtom = atom({
  key: 'user',
  default: localStorage.getItem('user_info') || null,
});

export { userAtom };
