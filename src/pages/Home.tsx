import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6 tracking-widest uppercase">
              Next Generation Payments
            </span>
            <h1 className="text-4xl md:text-[54px] font-extrabold tracking-tight text-on-surface leading-[1.2] mb-8 max-w-[640px]">
              CJ PG로 결제 연동을<br />
              <span className="text-primary-container whitespace-nowrap">더 빠르고 안정적으로</span>
            </h1>
            <p className="text-lg text-on-surface-variant leading-relaxed mb-10 max-w-xl">
              강력한 API, 철저한 샌드박스 테스트 환경, 그리고 실시간 기술 지원까지.
              개발자를 위한 최적의 결제 인프라를 지금 경험하세요.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => navigate('/api/payment')}
                className="bg-primary-container text-on-primary-container px-8 py-4 rounded-xl text-lg font-bold shadow-lg hover:opacity-90 transition-all flex items-center gap-2"
              >
                API 시작하기
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <button 
                onClick={() => navigate('/playground')}
                className="bg-surface-container-highest text-on-surface px-8 py-4 rounded-xl text-lg font-bold hover:bg-surface-container-high transition-all flex items-center gap-2"
              >
                API 테스트
                <span className="material-symbols-outlined">terminal</span>
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]"></div>
            <div className="relative bg-inverse-surface rounded-2xl shadow-2xl p-6 border border-white/10 overflow-hidden transform lg:rotate-2">
              <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-zinc-500 text-xs font-mono uppercase tracking-widest">payment_request.js</span>
              </div>
              <pre className="font-mono text-sm leading-relaxed overflow-x-auto no-scrollbar text-zinc-300">
                <span className="text-tertiary-fixed-dim">const</span> <span className="text-secondary-fixed-dim">cjpg</span> = <span className="text-secondary-fixed-dim">require</span>(<span className="text-tertiary-fixed">'@cjone/pg-sdk'</span>);{'\n\n'}
                <span className="text-zinc-500">// Initialize client</span>{'\n'}
                <span className="text-tertiary-fixed-dim">const</span> client = <span className="text-secondary-fixed-dim">new</span> <span className="text-secondary-fixed-dim">cjpg.Client</span>({'{'}{'\n'}
                {'  '}apiKey: <span className="text-tertiary-fixed">'cj_live_51M...'</span>,{'\n'}
                {'  '}secret: <span className="text-tertiary-fixed">'sk_test_4e...'</span>{'\n'}
                {'}'});{'\n\n'}
                <span className="text-tertiary-fixed-dim">async function</span> <span className="text-secondary-fixed-dim">createPayment</span>() {'{'}{'\n'}
                {'  '}<span className="text-tertiary-fixed-dim">const</span> session = <span className="text-tertiary-fixed-dim">await</span> client.payments.<span className="text-secondary-fixed-dim">create</span>({'{'}{'\n'}
                {'    '}amount: <span className="text-secondary-fixed-dim">50000</span>,{'\n'}
                {'    '}currency: <span className="text-tertiary-fixed">'KRW'</span>,{'\n'}
                {'    '}orderId: <span className="text-tertiary-fixed">'ORDER_2024_001'</span>,{'\n'}
                {'    '}callbackUrl: <span className="text-tertiary-fixed">'https://your-site.com/done'</span>{'\n'}
                {'  '}{'}'});{'\n'}
                {'  '}{'\n'}
                {'  '}<span className="text-secondary-fixed-dim">console</span>.<span className="text-secondary-fixed-dim">log</span>(<span className="text-tertiary-fixed">'Payment Session ID:'</span>, session.id);{'\n'}
                {'}'}
              </pre>
              <div className="absolute bottom-4 right-4 bg-primary-container/20 text-primary-container px-3 py-1 rounded text-[10px] font-bold tracking-tighter uppercase">Ready to Deploy</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-4 text-on-surface">개발자가 필요로 하는 모든 기능</h2>
              <p className="text-on-surface-variant max-w-xl">단 몇 줄의 코드로 복잡한 결제 프로세스를 완벽하게 제어하세요.</p>
            </div>
            <button 
              onClick={() => navigate('/api/payment')}
              className="text-primary font-bold flex items-center gap-1 hover:underline bg-transparent border-none cursor-pointer"
            >
              전체 API 명세서 보기 <span className="material-symbols-outlined text-sm">open_in_new</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div 
              onClick={() => navigate('/api/payment')}
              className="md:col-span-2 bg-surface-container-lowest p-8 rounded-2xl hover:bg-primary/5 transition-colors group cursor-pointer border border-transparent hover:border-primary/10"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="p-3 bg-secondary/10 rounded-xl text-secondary">
                  <span className="material-symbols-outlined text-3xl">payments</span>
                </div>
                <span className="text-[10px] font-bold text-zinc-400 tracking-[0.2em] uppercase">Core API</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-on-surface">결제 API</h3>
              <p className="text-on-surface-variant mb-6 max-w-md">신용카드, 간편결제, 계좌이체 등 대한민국 모든 결제 수단을 단일 인터페이스로 통합 제공합니다.</p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-surface-container text-xs font-semibold rounded-md">JS SDK</span>
                <span className="px-3 py-1 bg-surface-container text-xs font-semibold rounded-md">REST API</span>
                <span className="px-3 py-1 bg-surface-container text-xs font-semibold rounded-md">Webhooks</span>
              </div>
            </div>
            <div 
              onClick={() => navigate('/api/cancel')}
              className="bg-surface-container-lowest p-8 rounded-2xl hover:bg-primary/5 transition-colors group cursor-pointer border border-transparent hover:border-primary/10"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="p-3 bg-error/10 rounded-xl text-error">
                  <span className="material-symbols-outlined text-3xl">history_toggle_off</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-on-surface">취소 API</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">부분 취소, 전액 취소, 당일 취소 등 유연한 환불 정책을 코드 한 줄로 처리할 수 있습니다.</p>
            </div>
            <div 
              onClick={() => navigate('/api/status')}
              className="bg-surface-container-lowest p-8 rounded-2xl hover:bg-primary/5 transition-colors group cursor-pointer border border-transparent hover:border-primary/10"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="p-3 bg-tertiary/10 rounded-xl text-tertiary">
                  <span className="material-symbols-outlined text-3xl">manage_search</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-on-surface">상태조회</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">실시간 결제 상태 트래킹을 통해 누락 없는 데이터 동기화를 보장합니다.</p>
            </div>
            <div 
              onClick={() => navigate('/playground')}
              className="md:col-span-2 bg-surface-container-lowest p-8 rounded-2xl hover:bg-primary/5 transition-colors group cursor-pointer border border-transparent hover:border-primary/10"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary w-fit mb-6">
                    <span className="material-symbols-outlined text-3xl">biotech</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-on-surface">테스트 도구 (Sandbox)</h3>
                  <p className="text-on-surface-variant">가상 데이터를 활용하여 실제 결제와 동일한 플로우를 무제한으로 테스트하고 검증하세요.</p>
                </div>
                <div className="flex-1 w-full">
                  <div className="aspect-video bg-zinc-900 rounded-xl shadow-lg border border-zinc-200/20 flex items-center justify-center overflow-hidden">
                     <span className="text-zinc-600 font-mono text-xs">Sandbox Environment Illustration</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
