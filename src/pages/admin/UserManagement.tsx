import React, { useState } from 'react';

interface Member {
  id: string;
  name: string;
  initial: string;
  email: string;
  status: '활성' | '정지';
  role: string;
  lastLogin: string;
}

const UserManagement: React.FC = () => {
  const [members] = useState<Member[]>([
    { id: '1', name: '김철수', initial: 'K', email: 'chulsoo.kim@cj.net', status: '활성', role: '시스템 관리자', lastLogin: '2024-03-27 14:30' },
    { id: '2', name: '이영희', initial: 'L', email: 'yh.lee@cj.net', status: '활성', role: '운영자', lastLogin: '2024-03-27 11:20' },
    { id: '3', name: '박지민', initial: 'P', email: 'jimin.park@cj.net', status: '정지', role: '공통 관리자', lastLogin: '2024-03-20 09:15' },
    { id: '4', name: '최동현', initial: 'C', email: 'dh.choi@cj.net', status: '활성', role: '운영자', lastLogin: '2024-03-26 16:40' },
  ]);

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-black text-zinc-900 mb-2">사용자 관리</h1>
          <p className="text-sm text-zinc-500 font-medium">시스템에 등록된 관리자 계정을 관리합니다.</p>
        </div>
        <button className="bg-zinc-900 text-white px-5 py-2.5 rounded-2xl text-sm font-black shadow-lg hover:bg-black transition-all active:scale-95 flex items-center gap-2">
          <span className="material-symbols-outlined text-lg">person_add</span>
          사용자 추가
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {members.map((member) => (
          <div key={member.id} className="bg-white p-8 rounded-[32px] border border-zinc-100 shadow-sm hover:shadow-xl hover:shadow-zinc-200/50 transition-all group">
            <div className="flex justify-between items-start mb-6">
              <div className="w-14 h-14 bg-zinc-50 rounded-2xl flex items-center justify-center text-xl font-black text-zinc-400 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                {member.initial}
              </div>
              <span className={`text-[10px] font-black px-2 py-1 rounded-lg uppercase tracking-wider ${
                member.status === '활성' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}>
                {member.status}
              </span>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-black text-zinc-900 mb-1">{member.name}</h3>
              <p className="text-xs text-zinc-400 font-medium truncate">{member.email}</p>
            </div>

            <div className="space-y-3 pt-6 border-t border-zinc-50">
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-zinc-400 font-bold uppercase">권한</span>
                <span className="text-[11px] font-black text-zinc-900">{member.role}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-zinc-400 font-bold uppercase">최근 접속</span>
                <span className="text-[11px] font-medium text-zinc-500">{member.lastLogin.split(' ')[0]}</span>
              </div>
            </div>

            <div className="flex gap-3 pt-6">
              <button className="flex-1 py-3 text-xs font-bold text-zinc-500 bg-zinc-50 rounded-xl hover:bg-zinc-100 transition-colors">수정</button>
              <button className="w-12 py-3 flex items-center justify-center bg-zinc-50 text-zinc-400 rounded-xl hover:text-red-500 transition-colors">
                <span className="material-symbols-outlined text-lg">delete</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserManagement;
