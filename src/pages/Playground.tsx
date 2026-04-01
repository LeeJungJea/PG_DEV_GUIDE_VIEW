import React, { useState } from 'react';

const Playground: React.FC = () => {
  const [method, setMethod] = useState('POST');
  const [endpoint, setEndpoint] = useState('/v2/payments/request');
  const [jsonBody, setJsonBody] = useState(JSON.stringify({
    "amount": 50000,
    "orderId": "MC42ODUyMTM2MjE1",
    "itemName": "CJ PG 테스트 결제",
    "userName": "박지민"
  }, null, 2));

  return (
    <div className="p-8 max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-12">
        <h1 className="text-3xl font-black text-zinc-900 dark:text-white mb-4">API Playground</h1>
        <p className="text-zinc-500 dark:text-zinc-400 font-medium tracking-tight">샌드박스 환경에서 CJ PG API를 직접 호출하고 결과를 확인해보세요.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[calc(100vh-280px)]">
        {/* Request Panel */}
        <div className="flex flex-col gap-6">
          <div className="bg-white dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-900 rounded-[32px] p-6 shadow-sm overflow-hidden flex-1 flex flex-col">
            <div className="flex items-center gap-3 mb-6 bg-zinc-50 dark:bg-zinc-900/50 p-2 rounded-2xl border border-zinc-100 dark:border-zinc-800">
              <select 
                value={method}
                onChange={(e) => setMethod(e.target.value)}
                className="bg-zinc-900 text-white text-[10px] font-black px-3 py-1.5 rounded-xl outline-none"
              >
                <option>POST</option>
                <option>GET</option>
              </select>
              <input 
                type="text" 
                value={endpoint}
                onChange={(e) => setEndpoint(e.target.value)}
                className="flex-1 bg-transparent text-sm font-mono text-zinc-600 dark:text-zinc-400 outline-none"
              />
            </div>
            
            <div className="flex-1 relative font-mono text-sm group">
              <div className="absolute top-4 right-4 text-[10px] font-bold text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity">JSON BODY</div>
              <textarea 
                value={jsonBody}
                onChange={(e) => setJsonBody(e.target.value)}
                className="w-full h-full bg-zinc-50 dark:bg-zinc-900/30 rounded-2xl p-6 outline-none focus:ring-2 ring-primary/10 transition-all resize-none no-scrollbar dark:text-zinc-300"
              />
            </div>

            <button className="mt-6 w-full bg-primary text-white py-4 rounded-2xl text-base font-black shadow-xl shadow-primary/20 hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
              API 호출하기
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
        </div>

        {/* Response Panel */}
        <div className="bg-zinc-900 rounded-[32px] p-8 text-white shadow-2xl relative overflow-hidden flex flex-col">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="flex items-center justify-between mb-8 relative z-10">
            <h3 className="text-xl font-black">Response</h3>
            <span className="bg-green-500/20 text-green-400 text-[10px] font-black px-2 py-1 rounded-lg uppercase tracking-widest">200 OK</span>
          </div>
          
          <div className="flex-1 bg-white/5 rounded-2xl p-6 font-mono text-sm leading-relaxed relative z-10 overflow-y-auto custom-scrollbar">
            <pre className="text-white/60">
              {`{\n  "status": "success",\n  "paymentId": "pay_20240327_a9x2",\n  "orderId": "MC42ODUyM...",\n  "amount": 50000,\n  "requestedAt": "2024-03-27T14:30:00Z"\n}`}
            </pre>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/5 relative z-10">
            <div className="flex items-center gap-4 text-white/40 text-[11px] font-bold">
               <div className="flex items-center gap-1.5">
                 <span className="w-2 h-2 rounded-full bg-green-500"></span>
                 Connected
               </div>
               <span>Time: 142ms</span>
               <span>Size: 1.2 KB</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playground;
