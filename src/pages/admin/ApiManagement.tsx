import React, { useState } from 'react';

interface ApiEndpoint {
  id: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  path: string;
  name: string;
  status: 'operational' | 'degraded' | 'maintenance' | 'deprecated';
  usage: string;
  latency: string;
}

const ApiManagement: React.FC = () => {
  const [endpoints] = useState<ApiEndpoint[]>([
    { id: '1', method: 'POST', path: '/v1/payments/request', name: '결제 요청', status: 'operational', usage: '94.2k', latency: '124ms' },
    { id: '2', method: 'POST', path: '/v1/payments/cancel', name: '결제 취소', status: 'operational', usage: '12.8k', latency: '156ms' },
    { id: '3', method: 'GET', path: '/v1/payments/status', name: '결제 상태 조회', status: 'operational', usage: '245.1k', latency: '42ms' },
    { id: '4', method: 'POST', path: '/v1/auth/token', name: '인증 토큰 발급', status: 'operational', usage: '89.4k', latency: '35ms' },
  ]);

  const getStatusColor = (status: ApiEndpoint['status']) => {
    switch (status) {
      case 'operational': return 'bg-green-100 text-green-700';
      case 'degraded': return 'bg-yellow-100 text-yellow-700';
      case 'maintenance': return 'bg-blue-100 text-blue-700';
      case 'deprecated': return 'bg-zinc-100 text-zinc-500';
      default: return 'bg-zinc-100 text-zinc-500';
    }
  };

  const getMethodColor = (method: ApiEndpoint['method']) => {
    switch (method) {
      case 'POST': return 'bg-blue-50 text-blue-600 border-blue-100';
      case 'GET': return 'bg-green-50 text-green-600 border-green-100';
      case 'DELETE': return 'bg-red-50 text-red-600 border-red-100';
      default: return 'bg-zinc-50 text-zinc-600 border-zinc-100';
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-black text-zinc-900 mb-2">API 관리</h1>
          <p className="text-sm text-zinc-500 font-medium">서비스 중인 API 엔드포인트의 상태와 성능을 모니터링합니다.</p>
        </div>
        <button className="bg-zinc-900 text-white px-5 py-2.5 rounded-2xl text-sm font-black shadow-lg hover:bg-black transition-all active:scale-95 flex items-center gap-2">
          <span className="material-symbols-outlined text-lg">add</span>
          새 엔드포인트
        </button>
      </div>

      <div className="bg-white rounded-[32px] border border-zinc-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-zinc-50/50 border-b border-zinc-50">
                <th className="px-8 py-5 text-[10px] font-black text-zinc-400 uppercase tracking-widest">Method</th>
                <th className="px-8 py-5 text-[10px] font-black text-zinc-400 uppercase tracking-widest">Endpoint</th>
                <th className="px-8 py-5 text-[10px] font-black text-zinc-400 uppercase tracking-widest">Status</th>
                <th className="px-8 py-5 text-[10px] font-black text-zinc-400 uppercase tracking-widest">Usage (24h)</th>
                <th className="px-8 py-5 text-[10px] font-black text-zinc-400 uppercase tracking-widest">Avg. Latency</th>
                <th className="px-8 py-5 text-right"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-50">
              {endpoints.map((api) => (
                <tr key={api.id} className="group hover:bg-zinc-50/30 transition-colors">
                  <td className="px-8 py-6">
                    <span className={`px-3 py-1 rounded-lg text-[10px] font-black border ${getMethodColor(api.method)}`}>
                      {api.method}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <p className="text-sm font-black text-zinc-900 mb-0.5">{api.name}</p>
                    <code className="text-[11px] text-zinc-400 font-mono">{api.path}</code>
                  </td>
                  <td className="px-8 py-6">
                    <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-black ${getStatusColor(api.status)}`}>
                      <span className="w-1 h-1 rounded-full bg-current"></span>
                      {api.status}
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <p className="text-sm font-black text-zinc-900">{api.usage}</p>
                  </td>
                  <td className="px-8 py-6">
                    <p className="text-sm font-black text-zinc-900">{api.latency}</p>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <button className="p-2 text-zinc-300 hover:text-zinc-600 transition-colors">
                      <span className="material-symbols-outlined">more_vert</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ApiManagement;
