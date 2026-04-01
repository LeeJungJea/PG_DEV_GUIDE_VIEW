import { create } from 'zustand';
import { login as loginRequest, LoginPayload } from '../api/auth';

interface User {
  username: string;
  email: string;
  role: string;
}

interface AuthState {
  user: User | undefined;
  loading: boolean;
  error: string | undefined;
  isLoginOpen: boolean;
  login: (payload: LoginPayload) => Promise<void>;
  logout: () => void;
  setLoginOpen: (open: boolean) => void;
}

const STORAGE_KEY = 'auth_state';

const getInitialState = (): Partial<AuthState> => {
  try {
    const persisted = localStorage.getItem(STORAGE_KEY);
    return persisted ? JSON.parse(persisted) : {};
  } catch {
    return {};
  }
};

const persistState = (state: Partial<AuthState>) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
};

export const useAuthStore = create<AuthState>((set) => ({
  user: undefined,
  loading: false,
  error: undefined,
  isLoginOpen: false,
  ...getInitialState(),
  login: async (payload: LoginPayload) => {
    set({ loading: true, error: undefined });
    try {
      const response = await loginRequest(payload);
      const user = {
        username: response.username,
        email: response.email,
        role: response.role,
      };
      set({ user, loading: false });
      persistState({ user });
      localStorage.setItem('token', response.accessToken);
    } catch (err: any) {
      const message = err.response?.data?.message || '로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요.';
      set({ error: message, loading: false });
      throw err;
    }
  },
  logout: () => {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem('token');
    set({ user: undefined, error: undefined });
  },
  setLoginOpen: (open: boolean) => set({ isLoginOpen: open }),
}));
