import React from 'react';

const ApiManagement: React.FC = () => {
  const pgConfigs = [
    { provider: 'KakaoPay', status: 'Normal', env: 'Sandbox', lastUpdated: '2024-10-25', endpoints: 3 },
    { provider: 'TossPay', status: 'Stable', env: 'Active', lastUpdated: '2024-10-27', endpoints: 3 },
    { provider: 'NaverPay', status: 'Testing', env: 'Experimental', lastUpdated: '2024-10-20', endpoints: 0 },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-black text-zinc-900 border-l-4 border-primary pl-4">API & PG Management</h1>
        <p className="text-zinc-500 mt-1 pl-4">결제 연동 엔진 및 PG사별 API 상세 설정을 제어합니다.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* PG Provider Cards */}
        <section className="space-y-6">
          <h2 className="text-lg font-bold text-zinc-800 flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-primary">account_balance_wallet</span>
            PG 수단별 상태
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {pgConfigs.map((pg, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm flex justify-between items-center group hover:border-primary/20 transition-all">
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-xl bg-zinc-50 flex items-center justify-center font-black text-primary italic">
                    {pg.provider.substring(0, 1)}
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900">{pg.provider}</h4>
                    <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest leading-none">{pg.env} Environment</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-tighter ${
                    pg.status === 'Normal' || pg.status === 'Stable' ? 'bg-green-100 text-green-700' : 'bg-zinc-100 text-zinc-500'
                  }`}>
                    {pg.status}
                  </span>
                  <p className="text-[10px] text-zinc-400 mt-1 italic">Updated: {pg.lastUpdated}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Global API Settings */}
        <section className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm space-y-8">
          <h2 className="text-lg font-bold text-zinc-800 flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-secondary">tune</span>
            글로벌 API 보안 및 트래픽 설정
          </h2>
          
          <div className="space-y-6">
            <div className="flex justify-between items-start gap-4">
              <div>
                <h4 className="text-sm font-bold text-zinc-800">API Rate Limiting</h4>
                <p className="text-xs text-zinc-400 mt-1">계정당 초당 최대 요청 수를 제한합니다. (현재: 50 req/sec)</p>
              </div>
              <button className="px-3 py-1.5 bg-zinc-900 text-white rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-primary transition-colors shadow-lg">Modify</button>
            </div>
            
            <div className="flex justify-between items-start gap-4 pb-4 border-b border-zinc-50">
               <div>
                <h4 className="text-sm font-bold text-zinc-800">IP Whitelisting</h4>
                <p className="text-xs text-zinc-400 mt-1">특정 IP 대역에서만 API 접근이 가능하도록 화이트리스트를 사용합니다.</p>
              </div>
              <div className="flex items-center h-6">
                 <div className="w-10 h-5 bg-primary/20 rounded-full relative cursor-pointer shadow-inner">
                    <div className="w-4 h-4 bg-primary rounded-full absolute right-1 top-0.5 shadow-md"></div>
                 </div>
              </div>
            </div>

            <div className="space-y-4">
               <h4 className="text-sm font-bold text-zinc-800 italic">Core API Endpoint URLs</h4>
               <div className="space-y-2">
                  <div className="bg-zinc-50 p-3 rounded-lg flex justify-between items-center group">
                     <span className="text-xs font-mono text-zinc-500">POST https://api.cj-pg.com/v1/ready</span>
                     <span className="material-symbols-outlined text-zinc-300 text-sm group-hover:text-primary cursor-pointer">link</span>
                  </div>
                  <div className="bg-zinc-50 p-3 rounded-lg flex justify-between items-center group">
                     <span className="text-xs font-mono text-zinc-500">POST https://api.cj-pg.com/v1/cancel</span>
                     <span className="material-symbols-outlined text-zinc-300 text-sm group-hover:text-primary cursor-pointer">link</span>
                  </div>
               </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ApiManagement;
