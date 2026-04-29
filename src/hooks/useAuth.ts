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

// localStorage에 저장된 값을 읽어오면 새로고침 후에도 로그인 상태를 유지할 수 있다.
// ES5 시절처럼 전역 변수에 기대지 않고, Zustand store로 상태와 UI를 분리한다.
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
  // Zustand는 create 안에서 상태와 액션을 함께 정의한다.
  // 컴포넌트는 이 store를 구독해서 로그인 여부와 사용자 정보를 자동으로 반영한다.
  user: undefined,
  loading: false,
  error: undefined,
  isLoginOpen: false,
  ...getInitialState(),
  login: async (payload: LoginPayload) => {
    set({ loading: true, error: undefined });
    try {
      // 서버 응답에서 필요한 사용자 정보만 추려 store에 저장한다.
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
    // 로그아웃은 화면 상태와 저장된 토큰을 함께 지워야 새로고침 후에도 인증 정보가 남지 않는다.
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem('token');
    set({ user: undefined, error: undefined });
  },
  setLoginOpen: (open: boolean) => set({ isLoginOpen: open }),
}));
