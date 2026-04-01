import React, { useState } from 'react';

interface Inquiry {
  id: string;
  title: string;
  preview: string;
  author: string;
  authorId: string;
  date: string;
  status: '접수' | '처리중' | '답변완료';
  category: string;
  content: string;
}

const InquiryManagement: React.FC = () => {
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);

  const inquiries: Inquiry[] = [
    {
      id: '#29405',
      title: '결제 모듈 연동 중 401 에러가 발생합니다.',
      preview: '안녕하세요, 이번에 CJ PG 결제 모듈을 연동하고 있는 개발자...',
      author: '김철수',
      authorId: 'chulsoo_kim',
      date: '2024-03-27 14:30',
      status: '접수',
      category: '기술 문의',
      content: '안녕하세요, 이번에 CJ PG 결제 모듈을 연동하고 있는 개발자입니다. 가이드 문서에 따라 API Key와 Secret을 발급받아 헤더에 포함했는데, 지속적으로 401 Unauthorized 에러가 발생하여 문의드립니다. 사용하고 있는 SDK 버전은 v2.4.0입니다.'
    },
    {
      id: '#29404',
      title: '부분 취소 API 응답 필드 관련 문의드립니다.',
      preview: '부분 취소 시 returnedAmount 필드가 가이드와 다르게...',
      author: '이영희',
      authorId: 'yh_lee_dev',
      date: '2024-03-27 11:20',
      status: '처리중',
      category: 'API 문의',
      content: '부분 취소 시 returnedAmount 필드가 가이드와 다르게 오고 있는 것 같습니다. 확인 부탁드립니다.'
    },
    {
      id: '#29403',
      title: '관리자 계정 비밀번호 초기화 요청',
      preview: '관리자 센터 비밀번호를 잊어버렸습니다.',
      author: '박지민',
      authorId: 'jimin_park',
      date: '2024-03-26 18:45',
      status: '답변완료',
      category: '계정 문의',
      content: '관리자 센터 비밀번호를 잊어버렸습니다. 초기화 링크를 이메일로 보내주실 수 있나요?'
    }
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-black text-zinc-900 mb-2">문의 관리</h1>
          <p className="text-sm text-zinc-500 font-medium">고객센터를 통해 접수된 기술 및 일반 문의 내역입니다.</p>
        </div>
        <div className="flex gap-3">
          <div className="bg-white border border-zinc-100 rounded-2xl px-4 py-2.5 flex items-center gap-2 shadow-sm">
             <span className="material-symbols-outlined text-zinc-400 text-lg">filter_alt</span>
             <span className="text-sm font-bold text-zinc-600">필터 적용됨</span>
          </div>
          <button className="bg-primary text-white px-5 py-2.5 rounded-2xl text-sm font-black shadow-lg shadow-primary/10 hover:bg-primary/90 transition-all active:scale-95">내보내기</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Left: Inquiry List */}
        <div className="lg:col-span-2 space-y-4 h-[calc(100vh-280px)] overflow-y-auto pr-2 custom-scrollbar">
          {inquiries.map((inquiry) => (
            <div 
              key={inquiry.id}
              onClick={() => setSelectedInquiry(inquiry)}
              className={`p-6 rounded-[28px] border transition-all cursor-pointer group hover:shadow-xl hover:shadow-zinc-200/50 ${
                selectedInquiry?.id === inquiry.id 
                  ? 'bg-zinc-900 border-zinc-900 text-white shadow-2xl' 
                  : 'bg-white border-zinc-100 hover:border-zinc-200'
              }`}
            >
              <div className="flex justify-between items-center mb-4">
                <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-lg ${
                  selectedInquiry?.id === inquiry.id ? 'bg-white/10 text-white' : 'bg-zinc-100 text-zinc-400'
                }`}>
                  {inquiry.id}
                </span>
                <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${
                  inquiry.status === '접수' ? 'bg-red-100 text-red-600' : 
                  inquiry.status === '처리중' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-green-100 text-green-700'
                }`}>
                  {inquiry.status}
                </span>
              </div>
              <h3 className="font-black text-lg mb-2 leading-tight group-hover:text-primary transition-colors">{inquiry.title}</h3>
              <p className={`text-xs mb-4 line-clamp-2 ${selectedInquiry?.id === inquiry.id ? 'text-white/60' : 'text-zinc-400'}`}>
                {inquiry.preview}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-current border-opacity-10">
                <div className="flex items-center gap-2">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black ${
                    selectedInquiry?.id === inquiry.id ? 'bg-white/20 text-white' : 'bg-zinc-100 text-zinc-900'
                  }`}>
                    {inquiry.author[0]}
                  </div>
                  <span className="text-[11px] font-bold">{inquiry.author}</span>
                </div>
                <span className="text-[11px] opacity-50 font-bold">{inquiry.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Detail & Reply Panel */}
        <div className="lg:col-span-3 space-y-6">
          {selectedInquiry ? (
            <>
              <div className="bg-white p-10 rounded-[32px] border border-zinc-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8 text-primary uppercase text-[10px] font-black tracking-widest">
                    <span className="material-symbols-outlined text-[18px]">verified_user</span>
                    {selectedInquiry.category}
                  </div>
                  <h2 className="text-3xl font-black text-zinc-900 mb-6">{selectedInquiry.title}</h2>
                  <div className="flex items-center gap-8 py-6 border-y border-zinc-50 mb-10">
                    <div>
                      <p className="text-[10px] text-zinc-400 font-bold uppercase mb-1">작성자</p>
                      <p className="text-sm font-black text-zinc-900">{selectedInquiry.author} ({selectedInquiry.authorId})</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-zinc-400 font-bold uppercase mb-1">작성 시간</p>
                      <p className="text-sm font-black text-zinc-900">{selectedInquiry.date}</p>
                    </div>
                  </div>
                  <div className="text-zinc-600 leading-[1.8] font-medium whitespace-pre-wrap">
                    {selectedInquiry.content}
                  </div>
                </div>
              </div>

              {/* Reply Card */}
              <div className="bg-zinc-900 p-8 rounded-[32px] text-white shadow-2xl relative group">
                <div className="flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-black flex items-center gap-3">
                      <span className="material-symbols-outlined text-[#e5004f]">reply</span>
                      답변 작성하기
                    </h3>
                  </div>
                  <textarea 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 text-sm outline-none focus:border-[#e5004f]/50 transition-all min-h-[160px] resize-none font-medium placeholder:text-white/20"
                    placeholder="신속하고 정확한 답변을 입력해주세요."
                  ></textarea>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                       <button className="p-2 text-zinc-400 hover:text-white transition-colors">
                         <span className="material-symbols-outlined text-xl">attach_file</span>
                       </button>
                       <button className="p-2 text-zinc-400 hover:text-white transition-colors">
                         <span className="material-symbols-outlined text-xl">image</span>
                       </button>
                    </div>
                    <div className="flex gap-4">
                       <button className="px-6 py-2.5 rounded-xl text-sm font-bold text-zinc-400 hover:text-white transition-all active:scale-95">취소</button>
                       <button className="bg-[#e5004f] px-6 py-2.5 rounded-xl text-sm font-black hover:bg-[#c90045] transition-all active:scale-95">답변 발송</button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="bg-zinc-50 border-2 border-dashed border-zinc-100 rounded-[40px] h-full min-h-[500px] flex flex-col items-center justify-center p-12 text-center text-zinc-400">
               <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                 <span className="material-symbols-outlined text-5xl">mark_as_unread</span>
               </div>
               <p className="text-lg font-black text-zinc-900 mb-2">문의 내역을 선택해주세요</p>
               <p className="text-sm font-medium">목록에서 상세 보기를 할 문의 내역을 선택하면<br />답변을 작성할 수 있습니다.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InquiryManagement;
