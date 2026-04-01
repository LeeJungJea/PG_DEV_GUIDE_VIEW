import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useAuthStore } from '../hooks/useAuth';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const user = useAuthStore((state) => state.user);
  const isAdminPath = location.pathname.startsWith('/admin');

  const apiMenuItems = [
    { name: '결제?�기', icon: 'payments', path: '/api/payment' },
    { name: '취소?�기', icon: 'history_toggle_off', path: '/api/cancel' },
    { name: '결제?�태조회', icon: 'manage_search', path: '/api/status' },
    { name: 'API?�스??, icon: 'biotech', path: '/playground' },
  ];

  const adminMenuItems = [
    { name: '?�?�보??, icon: 'dashboard', path: '/admin/dashboard' },
    { name: '문의관�?, icon: 'chat_bubble', path: '/admin/support' },
    { name: '?�원관�?, icon: 'group', path: '/admin/users' },
    { name: 'API관�?, icon: 'settings_ethernet', path: '/admin/api' },
  ];

  const menuItems = isAdminPath ? adminMenuItems : apiMenuItems;

  return (
    <aside className="h-[calc(100vh-64px)] w-60 sticky top-16 hidden md:flex flex-col border-r border-zinc-100 bg-white dark:bg-zinc-950 font-body text-sm">
      {/* Admin Logo Area */}
      {isAdminPath && (
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-primary/20">
            C
          </div>
          <div>
            <h3 className="text-sm font-black text-zinc-900 dark:text-white leading-none">Admin Console</h3>
            <p className="text-[10px] text-zinc-400 font-bold mt-1">?�스??관리자</p>
          </div>
        </div>
      )}

      {!isAdminPath && (
        <div className="p-6">
          <h3 className="text-lg font-black text-zinc-900 dark:text-zinc-100 uppercase tracking-tighter">
            API Reference
          </h3>
          <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
            CJ PG Developer Portal
          </p>
        </div>
      )}

      <nav className="flex-1 px-3 space-y-1 mt-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 transition-all duration-200 rounded-xl ${
                isActive
                  ? 'text-primary bg-primary/5 font-bold'
                  : 'text-zinc-500 hover:text-primary hover:bg-zinc-50'
              }`
            }
          >
            <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
            <span className="tracking-tight">{item.name}</span>
          </NavLink>
        ))}
      </nav>

      {/* Profile / Bottom Area */}
      <div className="p-4 border-t border-zinc-50 space-y-4">
        {isAdminPath && (
          <div className="bg-zinc-50 dark:bg-zinc-900/50 p-3 rounded-2xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-zinc-200 overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-zinc-500">person</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-black text-zinc-900 dark:text-white truncate">{user?.username ?? '관리자'}??/p>
              <p className="text-[10px] text-zinc-500 truncate">{user?.email ?? 'admin@cjone.com'}</p>
            </div>
          </div>
<<<<<<< HEAD
        ) : (
          <p className="px-3 text-[10px] text-zinc-400 uppercase tracking-widest font-bold">
            Documentation
          </p>
        )}
        
        {/* Unified Bottom LNB for simple access */}
        {!isAdminPath && (
          <div className="grid grid-cols-2 gap-2 text-[10px] font-bold text-zinc-400 p-2">
            <span className="flex items-center gap-1"><span className="material-symbols-outlined text-xs">payments</span> 결제?�기</span>
            <span className="flex items-center gap-1"><span className="material-symbols-outlined text-xs">history</span> 취소?�기</span>
            <span className="flex items-center gap-1"><span className="material-symbols-outlined text-xs">search</span> ?�태조회</span>
            <span className="flex items-center gap-1"><span className="material-symbols-outlined text-xs">science</span> ?�스??/span>
          </div>
=======
>>>>>>> 6d56124182bb8ae4c5247dbb08b4b43dcd1055a6
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
