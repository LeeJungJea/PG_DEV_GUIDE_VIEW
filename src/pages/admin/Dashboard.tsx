import React from 'react';

const Dashboard: React.FC = () => {
  const stats = [
    { label: '당월 총 거래액', value: '₩1,240,500,000', trend: '+12.5%', icon: 'payments', color: 'text-primary' },
    { label: '활성 개발자 수', value: '1,280', trend: '+3.2%', icon: 'group', color: 'text-secondary' },
    { label: '결제 성공률', value: '99.8%', trend: '+0.1%', icon: 'check_circle', color: 'text-green-500' },
    { label: '평균 응답 속도', value: '124ms', trend: '-12ms', icon: 'speed', color: 'text-orange-500' },
  ];

  const recentActivities = [
    { id: 1, type: 'ALERT', title: '토스페이 정기 점검 알림', time: '10분 전', status: 'Notice' },
    { id: 2, type: 'USER', title: '신규 파트너사 (주)CJ ENM 등록 완료', time: '1시간 전', status: 'Success' },
    { id: 3, type: 'ERROR', title: '카카오페이 타임아웃 발생 (상세코드: K001)', time: '3시간 전', status: 'Warning' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-black text-zinc-900 border-l-4 border-primary pl-4">Admin Dashboard</h1>
          <p className="text-zinc-500 mt-1 pl-4">시스템의 실시간 상태 및 주요 지표를 모니터링합니다.</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-white border border-zinc-200 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-zinc-50 transition-colors shadow-sm">
            <span className="material-symbols-outlined text-sm">download</span>
            리포트 다운로드
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 transition-all hover:shadow-md hover:-translate-y-1">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-xl bg-zinc-50 ${stat.color}`}>
                <span className="material-symbols-outlined">{stat.icon}</span>
              </div>
              <span className={`text-xs font-bold px-2 py-1 rounded bg-zinc-50 ${stat.trend.startsWith('+') ? 'text-green-600' : 'text-primary'}`}>
                {stat.trend}
              </span>
            </div>
            <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-1">{stat.label}</p>
            <h3 className="text-2xl font-black text-zinc-900">{stat.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Chart Area (Mock) */}
        <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-zinc-100">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-lg font-bold text-zinc-900 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">analytics</span>
              시간대별 거래 트렌드
            </h3>
            <select className="text-xs font-bold bg-zinc-50 border-none rounded-lg px-3 py-2 outline-none">
              <option>최근 24시간</option>
              <option>지난 1주일</option>
            </select>
          </div>
          <div className="h-64 bg-zinc-50 rounded-xl border border-dashed border-zinc-200 flex items-center justify-center relative overflow-hidden">
             {/* Mock Chart SVG Overlay */}
             <svg className="absolute inset-0 w-full h-full p-4" preserveAspectRatio="none">
               <path d="M0 80 Q 100 20, 200 60 T 400 40 T 600 80 T 800 20 T 1000 60" fill="none" stroke="rgba(229, 0, 79, 0.2)" strokeWidth="4" />
               <path d="M0 90 Q 100 40, 200 80 T 400 60 T 600 100 T 800 40 T 1000 80" fill="none" stroke="#e5004f" strokeWidth="2" strokeDasharray="4 4" />
             </svg>
             <span className="text-zinc-400 font-mono text-xs z-10 bg-white/80 px-3 py-1 rounded-full shadow-sm">Real-time Visualization Data Processing...</span>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100">
          <h3 className="text-lg font-bold text-zinc-900 mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary">notifications_active</span>
            최근 활동 내역
          </h3>
          <div className="space-y-6">
            {recentActivities.map((act) => (
              <div key={act.id} className="flex gap-4 relative">
                <div className="shrink-0 z-10">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    act.type === 'ERROR' ? 'bg-primary' : act.type === 'USER' ? 'bg-secondary' : 'bg-zinc-400'
                  }`} />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-bold text-zinc-800 leading-tight">{act.title}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">{act.time}</span>
                    <span className="text-[10px] font-black italic text-primary/60">{act.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 py-3 text-xs font-black text-zinc-500 uppercase tracking-widest hover:text-primary transition-colors border-t border-zinc-50">
            전체 활동 보기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
