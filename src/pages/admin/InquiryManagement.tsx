import React from 'react';

const InquiryManagement: React.FC = () => {
  const inquiries = [
    { id: 1, title: '결제 취소 시 리다이렉트가 안되는 현상', author: '박민수 (삼성물산)', date: '2024-10-27', status: 'Waiting', category: 'Technical' },
    { id: 2, title: '샌드박스 환경에서 카드 결제 한도 문의', author: '이영희 (CJ 프레시웨이)', date: '2024-10-26', status: 'Replied', category: 'Policy' },
    { id: 3, title: 'API Key 노출에 따른 재발급 요청', author: '홍길동 (개인)', date: '2024-10-25', status: 'Closed', category: 'Security' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-black text-zinc-900 border-l-4 border-primary pl-4">Support & Inquiry</h1>
        <p className="text-zinc-500 mt-1 pl-4">개발자들의 기술 지원 요청 및 비즈니스 문의를 관리하고 답변합니다.</p>
      </div>

      <div className="bg-surface-container-low rounded-2xl p-8 border border-zinc-100 shadow-sm relative overflow-hidden bg-white">
        <div className="absolute top-0 right-0 p-8 opacity-10 grayscale scale-150 pointer-events-none">
          <span className="material-symbols-outlined text-[120px]">forum</span>
        </div>
        
        <div className="flex gap-4 items-center mb-8">
           <button className="px-5 py-2 bg-zinc-900 text-white rounded-full text-xs font-black uppercase tracking-widest shadow-xl">전체 내역</button>
           <button className="px-5 py-2 bg-white text-zinc-400 rounded-full text-xs font-black uppercase tracking-widest border border-zinc-200 hover:border-primary transition-colors">답변 대기 중</button>
           <button className="px-5 py-2 bg-white text-zinc-400 rounded-full text-xs font-black uppercase tracking-widest border border-zinc-200 hover:border-primary transition-colors">완료된 문의</button>
        </div>

        <div className="space-y-4">
          {inquiries.map((inq) => (
            <div key={inq.id} className="p-6 rounded-2xl border border-zinc-100 hover:border-primary/20 hover:shadow-lg transition-all flex justify-between items-center group cursor-pointer">
              <div className="flex gap-6 items-center">
                 <div className="text-center min-w-[60px] border-r border-zinc-50 pr-6">
                    <p className="text-lg font-black text-zinc-900 leading-none">{inq.date.split('-')[2]}</p>
                    <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest mt-1">{inq.date.split('-')[1]}월</p>
                 </div>
                 <div className="space-y-1">
                    <div className="flex items-center gap-3">
                       <span className="text-[9px] font-black italic px-2 py-0.5 rounded bg-zinc-100 text-zinc-500 group-hover:bg-primary group-hover:text-white transition-colors">{inq.category}</span>
                       <h4 className="font-bold text-zinc-800">{inq.title}</h4>
                    </div>
                    <p className="text-xs text-zinc-400 font-medium">문의자: {inq.author}</p>
                 </div>
              </div>
              <div className="flex items-center gap-6">
                 <span className={`text-[10px] font-black uppercase tracking-widest ${
                   inq.status === 'Waiting' ? 'text-primary animate-pulse' : 'text-zinc-300'
                 }`}>
                   ● {inq.status}
                 </span>
                 <span className="material-symbols-outlined text-zinc-300 group-hover:text-primary transition-colors">arrow_forward_ios</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-zinc-50 rounded-xl border border-dashed border-zinc-200 text-center">
           <p className="text-sm font-bold text-zinc-400">새로운 문의가 접수되면 브라우저 푸시 알림이 발송됩니다.</p>
        </div>
      </div>
    </div>
  );
};

export default InquiryManagement;
