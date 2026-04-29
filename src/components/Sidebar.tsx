// 담당자: 김준우
// API 문서와 관리자 메뉴를 함께 담는 좌측 네비게이션이다.
import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useAuthStore } from '../hooks/useAuth';
import { fetchPublicApiEntries } from '../api/docs';
import type { AdminApiEntry } from '../api/admin';
import { getApiDocSlug, getApiMenuIcon, sortApiEntries } from '../utils/apiDocs';

// Sidebar는 현재 경로가 /admin인지 /api 계열인지에 따라 메뉴가 달라지는 공통 내비게이션이다.
// React Router의 location 값을 보고, 같은 컴포넌트 안에서 일반 사용자 메뉴와 관리자 메뉴를 분기한다.
const Sidebar: React.FC = () => {
  const location = useLocation();
  const user = useAuthStore((state) => state.user);
  const isAdminPath = location.pathname.startsWith('/admin');
  const [apiMenuItems, setApiMenuItems] = useState<Array<{ name: string; icon: string; path: string }>>([
    { name: 'API 테스트', icon: 'biotech', path: '/playground' },
  ]);

  useEffect(() => {
    // 일반 사용자 영역에서는 API 목록을 서버에서 받아와 동적으로 메뉴를 구성한다.
    // useEffect는 렌더링 이후에 실행되므로, 데이터 패칭 같은 사이드 이펙트에 적합하다.
    if (isAdminPath) {
      return;
    }

    let mounted = true;

    fetchPublicApiEntries()
      .then((entries: AdminApiEntry[]) => {
        if (!mounted) {
          return;
        }

        const dynamicItems = sortApiEntries(entries).map((entry) => ({
          name: entry.name,
          icon: getApiMenuIcon(entry),
          path: `/api/${getApiDocSlug(entry)}`,
        }));

        setApiMenuItems([...dynamicItems, { name: 'API 테스트', icon: 'biotech', path: '/playground' }]);
      })
      .catch(() => {
        if (!mounted) {
          return;
        }

        setApiMenuItems([
          { name: '결제 요청', icon: 'payments', path: '/api/payment' },
          { name: '결제 취소', icon: 'history_toggle_off', path: '/api/cancel' },
          { name: '결제 상태 조회', icon: 'manage_search', path: '/api/status' },
          { name: 'API 테스트', icon: 'biotech', path: '/playground' },
        ]);
      });

    return () => {
      mounted = false;
    };
  }, [isAdminPath]);

  const adminMenuItems = [
    { name: '대시보드', icon: 'dashboard', path: '/admin/dashboard' },
    { name: '문의 관리', icon: 'chat_bubble', path: '/admin/support' },
    { name: '회원 관리', icon: 'group', path: '/admin/users' },
    { name: 'API 관리', icon: 'settings_ethernet', path: '/admin/api' },
  ];

  const menuItems = isAdminPath ? adminMenuItems : apiMenuItems;

  return (
    <aside className="sticky top-16 hidden h-[calc(100vh-64px)] w-60 flex-col border-r border-zinc-100 bg-white font-body text-sm md:flex">
      {isAdminPath ? (
        <div className="flex items-center gap-3 p-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-xl font-black text-white shadow-lg shadow-primary/20">
            C
          </div>
          <div>
            <h3 className="leading-none text-sm font-black text-zinc-900">Admin Console</h3>
            <p className="mt-1 text-[10px] font-bold text-zinc-400">시스템 관리자</p>
          </div>
        </div>
      ) : (
        <div className="p-6">
          <h3 className="text-lg font-black uppercase tracking-tighter text-zinc-900">API Reference</h3>
          <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">CJ PG Developer Portal</p>
        </div>
      )}

      <nav className="mt-2 flex-1 space-y-1 px-3">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 ${
                isActive ? 'bg-primary/5 font-bold text-primary' : 'text-zinc-500 hover:bg-zinc-50 hover:text-primary'
              }`
            }
          >
            <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
            <span className="tracking-tight">{item.name}</span>
          </NavLink>
        ))}
      </nav>

      {isAdminPath && (
        <div className="space-y-4 border-t border-zinc-50 p-4">
          <div className="flex items-center gap-3 rounded-2xl bg-zinc-50 p-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-200">
              <span className="material-symbols-outlined text-zinc-500">person</span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-black text-zinc-900">{user?.username ?? '관리자'}</p>
              <p className="truncate text-[10px] text-zinc-500">{user?.email ?? 'admin@cj.net'}</p>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
