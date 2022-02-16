import {atom} from 'recoil';

export interface User {
  id: number;
  username: string;
  displayname: string;
}

interface AuthState {
  user: User | null;
}

export const authState = atom<AuthState>({
  key: 'authState',
  default: {
    user: null,
  },
});
