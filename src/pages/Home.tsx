// 담당자: 이정재
// 홈 화면의 랜딩 구조와 서비스 소개를 담는 페이지다.
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="animate-in fade-in duration-700 bg-gradient-to-b from-[#FFF0F7] via-white to-[#FAFAFA]">
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="z-10 animate-in slide-in-from-left-8 duration-700">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6 tracking-widest uppercase">
              Next Generation Payments
            </span>
            <h1 className="text-4xl md:text-[64px] font-black tracking-tight text-zinc-900 leading-[1.1] mb-8 max-w-[640px]">
              CJ PG로 결제 흐름을
              <br />
              <span className="text-primary whitespace-nowrap">더 빠르고 안정적으로</span>
            </h1>
            <p className="text-lg text-zinc-500 leading-relaxed mb-10 max-w-xl font-medium">
              강력한 API, 테스트와 동일한 샌드박스 환경, 그리고 실시간 기술 지원까지.
              <br />
              개발자를 위한 최적의 결제 플랫폼을 직접 경험해보세요.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate('/api')}
                className="bg-primary text-white px-8 py-4 rounded-xl text-lg font-black shadow-xl shadow-primary/20 hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 group"
              >
                API 시작하기
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
              <button
                onClick={() => navigate('/playground')}
                className="bg-zinc-100 text-zinc-900 px-8 py-4 rounded-xl text-lg font-black hover:bg-zinc-200 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                API 테스트
                <span className="material-symbols-outlined">terminal</span>
              </button>
            </div>
          </div>

          <div className="relative animate-in slide-in-from-right-8 duration-1000">
            <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]" />
            <div className="relative bg-white/70 backdrop-blur-xl rounded-[32px] shadow-[0_8px_32px_rgba(246,0,166,0.1)] p-8 border border-white overflow-hidden transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center gap-2 mb-6 border-b border-zinc-200 pb-6">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-4 text-zinc-500 text-xs font-mono uppercase tracking-[0.2em] font-medium">payment_request.js</span>
              </div>
              <pre className="font-mono text-sm leading-relaxed overflow-x-auto no-scrollbar text-zinc-700">
                <span className="text-primary font-bold">const</span> <span className="text-zinc-900">cjpg</span> ={' '}
                <span className="text-primary/70">require</span>(<span className="text-tertiary">'@cj/pg-sdk'</span>);
                <br />
                <br />
                <span className="text-zinc-400">// Initialize client</span>
                <br />
                <span className="text-primary font-bold">const</span> client = <span className="text-primary font-bold">new</span>{' '}
                <span className="text-zinc-900">cjpg.Client</span>({'{'}
                <br />
                &nbsp;&nbsp;apiKey: <span className="text-tertiary">'cj_live_51M...'</span>,
                <br />
                &nbsp;&nbsp;secret: <span className="text-tertiary">'sk_test_4e...'</span>
                <br />
                {'}'});
                <br />
                <br />
                <span className="text-primary font-bold">async function</span> <span className="text-primary/80">createPayment</span>() {'{'}
                <br />
                &nbsp;&nbsp;<span className="text-primary font-bold">const</span> session = <span className="text-primary font-bold">await</span>{' '}
                client.payments.<span className="text-primary/80">create</span>({'{'}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;amount: <span className="text-tertiary">50000</span>,
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;orderId: <span className="text-tertiary">'ORDER_2024_001'</span>
                <br />
                &nbsp;&nbsp;{'}'});
                <br />
                {'}'}
              </pre>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
