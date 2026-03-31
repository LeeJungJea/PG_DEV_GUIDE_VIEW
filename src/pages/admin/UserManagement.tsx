import React, { useState } from 'react';

const UserManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const users = [
    { id: 'usr_1', name: '김철수', email: 'chulsoo@cj.net', company: '(주)CJ ENM', role: 'Developer', status: 'Active', joined: '2024-10-01' },
    { id: 'usr_2', name: '이영희', email: 'younghee@cj.net', company: 'CJ 프레시웨이', role: 'Manager', status: 'Pending', joined: '2024-10-15' },
    { id: 'usr_3', name: '박민수', email: 'minsoo@cj.net', company: 'CJ 올리브영', role: 'Developer', status: 'Active', joined: '2024-09-20' },
    { id: 'usr_4', name: '최지우', email: 'jiwoo@cj.net', company: '개인개발자', role: 'Developer', status: 'Suspended', joined: '2024-08-11' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-black text-zinc-900 border-l-4 border-primary pl-4">Member Management</h1>
          <p className="text-zinc-500 mt-1 pl-4">플랫폼을 이용하는 파트너사 및 개발자 계정을 관리합니다.</p>
        </div>
        <div className="flex gap-3">
          <div className="relative">
             <span className="material-symbols-outlined absolute left-3 top-2.5 text-zinc-400 text-[20px]">search</span>
             <input 
               type="text" 
               placeholder="이름, 이메일, 업체명 검색" 
               className="pl-10 pr-4 py-2 bg-white border border-zinc-200 rounded-lg text-sm w-64 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
             />
          </div>
          <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-[#b7003d] transition-all shadow-md">
            <span className="material-symbols-outlined text-sm">person_add</span>
            신규 계정 초대
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-zinc-100 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-zinc-50/50 border-b border-zinc-100">
              <th className="px-6 py-4 text-[10px] font-black text-zinc-400 uppercase tracking-widest">사용자 정보</th>
              <th className="px-6 py-4 text-[10px] font-black text-zinc-400 uppercase tracking-widest">소속 / 역할</th>
              <th className="px-6 py-4 text-[10px] font-black text-zinc-400 uppercase tracking-widest">상태</th>
              <th className="px-6 py-4 text-[10px] font-black text-zinc-400 uppercase tracking-widest">가입일</th>
              <th className="px-6 py-4 text-[10px] font-black text-zinc-400 uppercase tracking-widest text-right">관리</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-50 font-body">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-zinc-50/50 transition-colors group">
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 font-bold group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                      {user.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-zinc-900 leading-none mb-1">{user.name}</p>
                      <p className="text-xs text-zinc-400 underline underline-offset-2 decoration-zinc-200">{user.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <p className="text-sm font-bold text-zinc-700">{user.company}</p>
                  <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">{user.role}</p>
                </td>
                <td className="px-6 py-5">
                  <span className={`px-2 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter ${
                    user.status === 'Active' ? 'bg-green-100 text-green-700' : 
                    user.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-5 text-sm tabular-nums text-zinc-500 font-bold">
                  {user.joined}
                </td>
                <td className="px-6 py-5 text-right">
                  <button className="p-2 text-zinc-400 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-[20px]">settings</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <div className="p-6 bg-zinc-50/30 border-t border-zinc-100 flex justify-between items-center text-xs text-zinc-400 font-bold uppercase tracking-widest">
           <span>Total {users.length} users</span>
           <div className="flex gap-2">
              <button className="p-1 px-3 bg-white border border-zinc-200 rounded text-zinc-600 hover:border-primary transition-colors">Prev</button>
              <button className="p-1 px-3 bg-white border border-zinc-200 rounded text-zinc-600 hover:border-primary transition-colors">Next</button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
