// 담당자: 이정재
// SPA 전체에서 반복해서 보이는 공통 레이아웃 요소다.
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LoginDialog from './LoginDialog';
import { useAuthStore } from '../hooks/useAuth';

// React에서는 이런 공통 UI를 컴포넌트로 분리해, 경로가 바뀌어도 같은 구조를 재사용한다.
const Navbar: React.FC = () => {
  const location = useLocation();
  const { user, logout, isLoginOpen, setLoginOpen } = useAuthStore((state) => ({ 
    user: state.user, 
    logout: state.logout,
    isLoginOpen: state.isLoginOpen,
    setLoginOpen: state.setLoginOpen
  }));

  const navigate = useNavigate();

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const isAdminPath = location.pathname.startsWith('/admin');

  return (
    <nav className="bg-white dark:bg-zinc-950 sticky top-0 z-50 border-b border-zinc-100 dark:border-zinc-800">
      <div className="flex justify-between items-center h-16 px-8 w-full max-w-screen-2xl mx-auto gap-8">
        {/* Left: Logo & Main Links */}
        <div className="flex items-center gap-8 shrink-0">
          {isAdminPath ? (
            // 관리자 페이지에서는 일반 사용자용 이동 링크를 줄이고, 콘솔 성격의 로고만 보여 준다.
            <span className="text-xl font-black tracking-tight text-primary cursor-default">
              CJ PG Developer Center
            </span>
          ) : (
            <Link to="/" className="text-xl font-black tracking-tight text-primary hover:opacity-80 transition-opacity">
              CJ PG Developer Center
            </Link>
          )}
          
          {!isAdminPath && (
            <div className="hidden lg:flex gap-6">
              {/* React Router의 Link는 페이지 전체 새로고침 없이 경로만 바꾸는 SPA 방식에 맞다. */}
              <Link
                to="/api"
                className={`${
                  isActive('/api') ? 'text-primary font-bold' : 'text-zinc-500'
                } text-sm font-semibold transition-colors`}
              >
                API
              </Link>
              <Link
                to="/support"
                className={`${
                  isActive('/support') ? 'text-primary font-bold' : 'text-zinc-500'
                } text-sm font-semibold transition-colors`}
              >
                Support
              </Link>
            </div>
          )}
        </div>


        {/* Right: Admin Link & Auth */}
        <div className="flex items-center gap-4 shrink-0">
          {user ? (
            <div className="flex items-center gap-3">
              {!isAdminPath && user?.role !== 'ADMIN' && (
                <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-4 py-2 rounded-xl shadow-sm">
                  <span className="text-sm font-bold text-zinc-700 dark:text-zinc-300">{user.username}</span>
                </div>
              )}
              <button
                type="button"
                className="text-primary hover:text-primary/80 transition-colors text-sm font-black px-2 py-2"
                onClick={() => {
                  logout();
                  navigate('/');
                }}
              >
                로그아웃
              </button>
            </div>
          ) : (
            // 로그인 전에는 버튼 하나만 보여 주고, 모달은 별도의 컴포넌트로 띄운다.
            <button
              type="button"
              className="bg-primary text-white px-6 py-2.5 rounded-xl text-sm font-black shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 active:scale-95"
              onClick={() => setLoginOpen(true)}
            >
              로그인
            </button>
          )}
        </div>
      </div>
      <LoginDialog isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} />
    </nav>
  );
};

export default Navbar;
