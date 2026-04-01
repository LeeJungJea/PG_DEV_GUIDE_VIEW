import React from 'react';

const Dashboard: React.FC = () => {
  const stats = [
    { label: '오늘 접수 문의', value: '142', change: '+12%', icon: 'inbox' },
    { label: '해결되지 않은 문의', value: '28', change: '-5%', icon: 'pending_actions' },
    { label: '평균 응답 속도', value: '42m', change: '-8%', icon: 'speed' },
    { label: '활성 사용자', value: '1,204', change: '+18%', icon: 'group' },
  ];

  const recentInquiries = [
    { id: '#29405', title: '결제 모듈 연동 중 401 에러', author: '김철수', status: '접수', time: '10분 전' },
    { id: '#29404', title: '부분 취소 API 응답 필드 문의', author: '이영희', status: '처리중', time: '2시간 전' },
    { id: '#29403', title: '비밀번호 초기화 요청', author: '박지민', status: '답변완료', time: '5시간 전' },
    { id: '#29402', title: 'SDK v2.4 업데이트 일정', author: '최동현', status: '접수', time: '1일 전' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-black text-zinc-900 mb-2">대시보드</h1>
          <p className="text-sm text-zinc-500 font-medium">관리자 전용 대시보드입니다. 시스템 현황을 한눈에 파악하세요.</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-[28px] border border-zinc-100 shadow-sm hover:shadow-xl hover:shadow-zinc-200/50 transition-all group">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-zinc-50 rounded-2xl text-zinc-400 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                <span className="material-symbols-outlined">{stat.icon}</span>
              </div>
              <span className={`text-xs font-bold ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-400'}`}>
                {stat.change}
              </span>
            </div>
            <p className="text-zinc-500 text-xs font-bold uppercase tracking-wider mb-1">{stat.label}</p>
            <h3 className="text-3xl font-black text-zinc-900">{stat.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Inquiries Table Section */}
        <div className="lg:col-span-2 bg-white p-8 rounded-[32px] border border-zinc-100 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-black text-zinc-900">최근 문의 내역</h3>
            <button className="text-xs font-bold text-primary hover:underline">전체보기</button>
          </div>
          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-zinc-50">
                <th className="pb-4 text-[10px] font-black text-zinc-400 uppercase tracking-widest">ID</th>
                <th className="pb-4 text-[10px] font-black text-zinc-400 uppercase tracking-widest">제목</th>
                <th className="pb-4 text-[10px] font-black text-zinc-400 uppercase tracking-widest">작성자</th>
                <th className="pb-4 text-[10px] font-black text-zinc-400 uppercase tracking-widest">상태</th>
                <th className="pb-4 text-[10px] font-black text-zinc-400 uppercase tracking-widest text-right">시간</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-50">
              {recentInquiries.map((q) => (
                <tr key={q.id} className="group hover:bg-zinc-50/50 transition-colors">
                  <td className="py-5 text-sm font-bold text-zinc-400">{q.id}</td>
                  <td className="py-5 text-sm font-bold text-zinc-900 group-hover:text-primary transition-colors">{q.title}</td>
                  <td className="py-5 text-sm font-medium text-zinc-600">{q.author}</td>
                  <td className="py-5">
                    <span className={`text-[10px] font-bold px-2 py-1 rounded-lg ${
                      q.status === '접수' ? 'bg-red-50 text-red-500' : 
                      q.status === '처리중' ? 'bg-yellow-50 text-yellow-600' :
                      'bg-green-50 text-green-600'
                    }`}>
                      {q.status}
                    </span>
                  </td>
                  <td className="py-5 text-sm font-bold text-zinc-400 text-right">{q.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Right Info Section / Chart Placeholder */}
        <div className="bg-zinc-900 p-8 rounded-[32px] text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10">
            <h3 className="text-xl font-black mb-8 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-primary rounded-full"></span>
              문의 분석
            </h3>
            <div className="aspect-square flex items-center justify-center relative">
               {/* Center Icon */}
               <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">전체 문의</p>
                  <p className="text-4xl font-black">1,842</p>
               </div>
               {/* Circular Chart Placeholder */}
               <svg className="w-full h-full -rotate-90">
                 <circle cx="50%" cy="50%" r="42%" className="stroke-white/5 fill-none stroke-[8px]" />
                 <circle cx="50%" cy="50%" r="42%" className="stroke-[#e5004f] fill-none stroke-[12px]" strokeDasharray="65 100" />
               </svg>
            </div>
            <div className="mt-8 space-y-4">
               <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-white/60">기술 문의</span>
                  <span className="text-sm font-black text-white">65%</span>
               </div>
               <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-white/60">일반 문의</span>
                  <span className="text-sm font-black text-white">25%</span>
               </div>
               <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-white/60">결제 장애</span>
                  <span className="text-sm font-black text-white">10%</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
