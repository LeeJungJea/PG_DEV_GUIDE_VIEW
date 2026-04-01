import React from 'react';
import { useAuthStore } from '../hooks/useAuth';

const Support: React.FC = () => {
  const { user, setLoginOpen } = useAuthStore();

  const inquiries = [
    { id: 1, category: '기술 문의', title: 'API 연동 시 401 에러가 발생합니다.', status: '답변완료', date: '2024-03-27' },
    { id: 2, category: '계정 문의', title: '관리자 계정 비밀번호 초기화 요청', status: '검토중', date: '2024-03-26' },
    { id: 3, category: '결제 문의', title: '부분 취소 API 응답 필드 확인', status: '답변완료', date: '2024-03-25' },
  ];

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-160px)] p-8">
        <div className="w-24 h-24 bg-zinc-50 dark:bg-zinc-900 rounded-full flex items-center justify-center mb-8 border border-zinc-100 dark:border-zinc-800 shadow-sm animate-pulse">
           <span className="material-symbols-outlined text-4xl text-zinc-300">lock</span>
        </div>
        <h2 className="text-2xl font-black text-zinc-900 dark:text-white mb-3">로그인이 필요한 서비스입니다</h2>
        <p className="text-zinc-500 dark:text-zinc-400 text-center max-w-sm mb-10 leading-relaxed font-medium">
          지원 센터와 1:1 기술 문의를 이용하시려면<br />
          먼저 로그인해 주세요.
        </p>
        <button
          onClick={() => setLoginOpen(true)}
          className="bg-primary text-white px-10 py-4 rounded-2xl text-base font-black shadow-xl shadow-primary/20 hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all"
        >
          로그인하러 가기
        </button>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-12">
        <h1 className="text-3xl font-black text-zinc-900 dark:text-white mb-4">Support Center</h1>
        <p className="text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed">
          CJ PG 연동 중 발생하는 기술적인 이슈나 궁금한 점을 해결해 드립니다.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Column: My Inquiries */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white dark:bg-zinc-950 rounded-[32px] border border-zinc-100 dark:border-zinc-900 p-8 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-black text-zinc-900 dark:text-white flex items-center gap-2">
                내 문의 내역
                <span className="bg-primary/10 text-primary text-[11px] px-2 py-1 rounded-lg font-bold">{inquiries.length}</span>
              </h3>
            </div>
            
            <div className="space-y-4">
              {inquiries.map((inquiry) => (
                <div key={inquiry.id} className="group p-5 rounded-2xl border border-zinc-50 dark:border-zinc-900 hover:border-primary/20 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/50 transition-all cursor-pointer">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">{inquiry.category}</span>
                    <span className={`text-[11px] font-bold px-2 py-1 rounded-lg ${
                      inquiry.status === '답변완료' 
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                        : 'bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400'
                    }`}>
                      {inquiry.status}
                    </span>
                  </div>
                  <h4 className="font-bold text-zinc-800 dark:text-zinc-200 mb-2 group-hover:text-primary transition-colors">{inquiry.title}</h4>
                  <p className="text-[11px] text-zinc-400 font-medium">{inquiry.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Inquiry Form */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-zinc-900 to-black rounded-[32px] p-8 text-white shadow-xl relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "24px 24px" }}></div>
            
            <div className="relative z-10">
              <h3 className="text-xl font-black mb-4">1:1 기술 문의</h3>
              <p className="text-white/60 text-xs font-medium leading-relaxed mb-8">
                전문 엔지니어가 24시간 이내에 직접 답변해 드립니다.
              </p>
              
              <form className="space-y-6">
                <div>
                  <label className="text-[10px] font-bold text-white/50 uppercase tracking-widest block mb-2 px-1">카테고리</label>
                  <select className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-white/30 transition-all">
                    <option>카테고리를 선택하세요</option>
                    <option>기술 문의</option>
                    <option>결제 문의</option>
                    <option>계정/보안 문의</option>
                  </select>
                </div>
                
                <div>
                  <label className="text-[10px] font-bold text-white/50 uppercase tracking-widest block mb-2 px-1">문의 내용</label>
                  <textarea 
                    className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-white/30 transition-all h-32 resize-none"
                    placeholder="상세한 문의 내용을 입력해 주세요."
                  ></textarea>
                </div>
                
                <button className="w-full bg-white text-zinc-900 py-4 rounded-xl text-sm font-black hover:bg-zinc-100 active:scale-95 transition-all">
                  문의 등록하기
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
