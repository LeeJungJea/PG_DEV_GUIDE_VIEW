import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useAuthStore } from '../hooks/useAuth';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const user = useAuthStore((state) => state.user);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const adminMenuItems = [
    { name: '대시보드', icon: 'dashboard', path: '/admin/dashboard' },
    { name: '문의 관리', icon: 'support_agent', path: '/admin/inquiries' },
    { name: '사용자 관리', icon: 'group', path: '/admin/users' },
    { name: 'API 관리', icon: 'api', path: '/admin/api' },
    { name: '시스템 설정', icon: 'settings', path: '/admin/settings' },
  ];

  const userMenuItems = [
    { name: '대시보드', icon: 'home', path: '/' },
    { name: 'API 시작하기', icon: 'bolt', path: '/api' },
    { name: '테스트 베드', icon: 'science', path: '/playground' },
    { name: '고객지원', icon: 'help', path: '/support' },
  ];

  const isAdminPath = location.pathname.startsWith('/admin');
  const menuItems = isAdminPath ? adminMenuItems : userMenuItems;

  return (
    <aside className="w-64 bg-white dark:bg-zinc-950 border-r border-zinc-100 dark:border-zinc-800 flex flex-col h-[calc(100vh-64px)] overflow-y-auto">
      <nav className="flex-1 px-3 space-y-1 mt-4">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive: isLinkActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold transition-all duration-200 group ${
                isLinkActive
                  ? 'text-primary bg-primary/5 shadow-sm'
                  : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 dark:hover:text-zinc-200 dark:hover:bg-zinc-900'
              }`
            }
          >
            <span className={`material-symbols-outlined text-[22px] transition-transform group-hover:scale-110 ${
              isActive(item.path) ? 'text-primary' : 'text-zinc-400 group-hover:text-zinc-600'
            }`}>
              {item.icon}
            </span>
            {item.name}
          </NavLink>
        ))}
      </nav>

      {/* User Info Section (Only for Admins) */}
      {isAdminPath && (
        <div className="p-4 border-t border-zinc-50 dark:border-zinc-900 mt-auto bg-zinc-50/50 dark:bg-zinc-900/50">
          <div className="flex items-center gap-3 px-2 py-3">
             <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-white font-bold text-lg shadow-sm">
                {user?.username?.charAt(0).toUpperCase() ?? 'A'}
             </div>
             <div className="flex-1 min-w-0">
               <p className="text-xs font-black text-zinc-900 dark:text-white truncate">{user?.username ?? '관리자'}님</p>
               <p className="text-[10px] text-zinc-400 truncate">{user?.email ?? 'admin@cj.net'}</p>
             </div>
          </div>
          <div className="px-2 pb-2">
             <div className="bg-primary/5 dark:bg-primary/10 rounded-xl p-3 border border-primary/10">
                <p className="text-[10px] font-bold text-primary mb-1 uppercase tracking-wider">접속 정보</p>
                <p className="text-[10px] text-zinc-500 leading-relaxed font-medium">최종 로그인: {new Date().toLocaleDateString()}</p>
                <p className="text-[10px] text-zinc-500 leading-relaxed font-medium">접속 IP: 127.0.0.1</p>
             </div>
          </div>
        </div>
      )}

      {/* Unified Bottom LNB for simple access */}
      {!isAdminPath && (
        <div className="p-4 border-t border-zinc-100 dark:border-zinc-900 bg-zinc-50/30 dark:bg-zinc-900/30">
          <div className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl shadow-sm mb-4">
             <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
             <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">System Operational</span>
          </div>
          <p className="px-3 text-[10px] text-zinc-400 leading-relaxed font-medium">
            24시간 실시간 모니터링 중입니다.<br />도움이 필요하시면 문의해 주세요.
          </p>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
