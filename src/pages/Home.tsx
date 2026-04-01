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
              CJ PGë¡?ê²°ì œ ?°ë™??br />
              <span className="text-primary-container whitespace-nowrap">??ë¹ ë¥´ê³??ˆì •?ìœ¼ë¡?/span>
            </h1>
            <p className="text-lg text-on-surface-variant leading-relaxed mb-10 max-w-xl">
              ê°•ë ¥??API, ì² ì????Œë“œë°•ìŠ¤ ?ŒìŠ¤???˜ê²½, ê·¸ë¦¬ê³??¤ì‹œê°?ê¸°ìˆ  ì§€?ê¹Œì§€.
              ê°œë°œ?ë? ?„í•œ ìµœì ??ê²°ì œ ?¸í”„?¼ë? ì§€ê¸?ê²½í—˜?˜ì„¸??
            </p>
            <div className="flex flex-wrap gap-4">
<<<<<<< HEAD
              <button className="bg-primary-container text-on-primary-container px-8 py-4 rounded-xl text-lg font-bold shadow-lg hover:opacity-90 transition-all flex items-center gap-2">
                API ?œì‘?˜ê¸°
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <button className="bg-surface-container-highest text-on-surface px-8 py-4 rounded-xl text-lg font-bold hover:bg-surface-container-high transition-all flex items-center gap-2">
                API ?ŒìŠ¤??
=======
              <button 
                onClick={() => navigate('/api/payment')}
                className="bg-primary-container text-on-primary-container px-8 py-4 rounded-xl text-lg font-bold shadow-lg hover:opacity-90 transition-all flex items-center gap-2"
              >
                API ì‹œì‘í•˜ê¸°
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <button 
                onClick={() => navigate('/playground')}
                className="bg-surface-container-highest text-on-surface px-8 py-4 rounded-xl text-lg font-bold hover:bg-surface-container-high transition-all flex items-center gap-2"
              >
                API í…ŒìŠ¤íŠ¸
>>>>>>> 6d56124182bb8ae4c5247dbb08b4b43dcd1055a6
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
              <h2 className="text-3xl font-bold tracking-tight mb-4 text-on-surface">ê°œë°œ?ê? ?„ìš”ë¡??˜ëŠ” ëª¨ë“  ê¸°ëŠ¥</h2>
              <p className="text-on-surface-variant max-w-xl">??ëª?ì¤„ì˜ ì½”ë“œë¡?ë³µì¡??ê²°ì œ ?„ë¡œ?¸ìŠ¤ë¥??„ë²½?˜ê²Œ ?œì–´?˜ì„¸??</p>
            </div>
<<<<<<< HEAD
            <a className="text-primary font-bold flex items-center gap-1 hover:underline" href="#">
              ?„ì²´ API ëª…ì„¸??ë³´ê¸° <span className="material-symbols-outlined text-sm">open_in_new</span>
            </a>
=======
            <button 
              onClick={() => navigate('/api/payment')}
              className="text-primary font-bold flex items-center gap-1 hover:underline bg-transparent border-none cursor-pointer"
            >
              ì „ì²´ API ëª…ì„¸ì„œ ë³´ê¸° <span className="material-symbols-outlined text-sm">open_in_new</span>
            </button>
>>>>>>> 6d56124182bb8ae4c5247dbb08b4b43dcd1055a6
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
              <h3 className="text-2xl font-bold mb-3 text-on-surface">ê²°ì œ API</h3>
              <p className="text-on-surface-variant mb-6 max-w-md">? ìš©ì¹´ë“œ, ê°„í¸ê²°ì œ, ê³„ì¢Œ?´ì²´ ???€?œë?êµ?ëª¨ë“  ê²°ì œ ?˜ë‹¨???¨ì¼ ?¸í„°?˜ì´?¤ë¡œ ?µí•© ?œê³µ?©ë‹ˆ??</p>
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
              <h3 className="text-xl font-bold mb-3 text-on-surface">ì·¨ì†Œ API</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">ë¶€ë¶?ì·¨ì†Œ, ?„ì•¡ ì·¨ì†Œ, ?¹ì¼ ì·¨ì†Œ ??? ì—°???˜ë¶ˆ ?•ì±…??ì½”ë“œ ??ì¤„ë¡œ ì²˜ë¦¬?????ˆìŠµ?ˆë‹¤.</p>
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
              <h3 className="text-xl font-bold mb-3 text-on-surface">?íƒœì¡°íšŒ</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">?¤ì‹œê°?ê²°ì œ ?íƒœ ?¸ë˜?¹ì„ ?µí•´ ?„ë½ ?†ëŠ” ?°ì´???™ê¸°?”ë? ë³´ì¥?©ë‹ˆ??</p>
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
                  <h3 className="text-2xl font-bold mb-3 text-on-surface">?ŒìŠ¤???„êµ¬ (Sandbox)</h3>
                  <p className="text-on-surface-variant">ê°€???°ì´?°ë? ?œìš©?˜ì—¬ ?¤ì œ ê²°ì œ?€ ?™ì¼???Œë¡œ?°ë? ë¬´ì œ?œìœ¼ë¡??ŒìŠ¤?¸í•˜ê³?ê²€ì¦í•˜?¸ìš”.</p>
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
<<<<<<< HEAD

      {/* CTA Section */}
      <section className="py-24 bg-primary-container relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        </div>
        <div className="max-w-screen-xl mx-auto px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-on-primary-container mb-8">ì§€ê¸?ë°”ë¡œ ê²°ì œ ?°ë™???œì‘?˜ì„¸??/h2>
          <p className="text-on-primary-container/80 text-xl mb-12 max-w-2xl mx-auto">ê°„ë‹¨??ê°€?…ë§Œ?¼ë¡œ API ?¤ë? ë°œê¸‰ë°›ê³ , ?Œë“œë°•ìŠ¤ ?˜ê²½?ì„œ ì¦‰ì‹œ ?ŒìŠ¤?¸í•  ???ˆìŠµ?ˆë‹¤.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-primary px-10 py-4 rounded-xl text-lg font-bold shadow-xl hover:bg-surface-container-lowest transition-all scale-100 hover:scale-105 active:scale-95">?€?œë³´??ë°”ë¡œê°€ê¸?/button>
            <button className="bg-primary/20 backdrop-blur-md text-on-primary-container border border-white/20 px-10 py-4 rounded-xl text-lg font-bold hover:bg-primary/30 transition-all">?°ë™ ë¬¸ì˜?˜ê¸°</button>
          </div>
        </div>
      </section>
=======
>>>>>>> 6d56124182bb8ae4c5247dbb08b4b43dcd1055a6
    </div>
  );
};

export default Home;
