import React, { useState } from 'react';

interface Inquiry {
  id: string;
  title: string;
  preview: string;
  author: string;
  authorId: string;
  date: string;
  status: '?�수' | '처리�? | '?��??�료';
  isNew?: boolean;
  category: string;
  detail: string;
  codeBlock?: string;
  attachment?: string;
}

const InquiryManagement: React.FC = () => {
  const inquiries: Inquiry[] = [
    {
<<<<<<< HEAD
      id: '#29405', title: '결제 모듈 ?�동 �?403 ?�러 발생 문의',
      preview: 'API Key�?발급받아 ?�경 변?�에 ?�정?�으??지?�적??..',
      author: '김철수', authorId: 'ks_kim', date: '2024.05.24 14:20', status: '?�수', isNew: true,
      category: '기술 지??> API ?�동', detail: '?�녕?�세?? CJ PG ?�동??진행 중인 개발??김철수?�니??\n?�재 가?�드 문서???�라 API Key�?발급받고 ?�더??x-api-key 값을 ?�함?�여 ?�청??보내�??�습?�다. ?��?�?로컬 ?�경�??�스???�버 모두?�서 지?�적?�로 403 Forbidden ?�러가 반환?�고 ?�습?�다.\n발급받�? ?�의 권한 ?�정?�나 IP ?�이?�리?�트 ?�록???�요?��? ?�인 부?�드립니??',
=======
      id: '#29405', title: '결제 모듈 연동 중 403 에러 발생 문의',
      preview: 'API Key를 발급받아 환경 변수에 설정했으나 지속적으...',
      author: '김철수', authorId: 'ks_kim', date: '2024.05.24 14:20', status: '접수', isNew: true,
      category: '기술 지원 > API 연동', detail: '안녕하세요. CJ PG 연동을 진행 중인 개발자 김철수입니다.\n현재 가이드 문서에 따라 API Key를 발급받고 헤더에 x-api-key 값을 포함하여 요청을 보내고 있습니다. 하지만 로컬 환경과 테스트 서버 모두에서 지속적으로 403 Forbidden 에러가 반환되고 있습니다.\n발급받은 키의 권한 설정이나 IP 화이트리스트 등록이 필요한지 확인 부탁드립니다.',
>>>>>>> 6d56124182bb8ae4c5247dbb08b4b43dcd1055a6
      codeBlock: 'GET /v1/payments/status HTTP/1.1\nHost: api.cjonepg.co.kr\nX-API-KEY: CJ_*******************\n\n{ "error": "Forbidden", "code": 40301 }',
      attachment: 'error_log_screenshot.png (1.2MB)',
    },
    {
      id: '#29402', title: '?�기 결제 API 취소 로직 문의',
      preview: '부�?취소 ???�액 계산 방식??문서?� ?�이??것같?�니...',
      author: '?�영??, authorId: 'y_lee_dev', date: '2024.05.24 11:05', status: '처리�?,
      category: '기술 지??> 결제', detail: '?�기 결제 부�?취소 ???�액 계산 로직??가?�드 문서???�명�??�르�??�작?�니??',
    },
    {
      id: '#29398', title: '?�인???�립 ?�책 ?�인 ?�청',
      preview: 'CJ ONE ?�인???�산 ??최소 ?�위가 ?�떻�??�는지 궁금...',
      author: '박�?�?, authorId: 'jimin_park', date: '2024.05.23 16:45', status: '?��??�료',
      category: '?�책 문의', detail: 'CJ ONE ?�인???�산 ??최소 ?�립 ?�위?� 반올�??�책??궁금?�니??',
    },
  ];

  const [selectedId, setSelectedId] = useState(inquiries[0].id);
  const [activeTab, setActiveTab] = useState('?�체');
  const selected = inquiries.find((i) => i.id === selectedId) ?? inquiries[0];

  const tabs = ['?�체', '?�수', '처리�?, '?��??�료'];

  const statusStyle = (s: string) => {
    if (s === '?�수') return 'bg-primary/10 text-primary';
    if (s === '처리�?) return 'bg-amber-50 text-amber-600';
    return 'bg-zinc-100 text-zinc-500';
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 bg-zinc-50/30 -m-8 p-8 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-black text-zinc-900 tracking-tight">문의관�?/h1>
          <p className="text-zinc-500 text-sm font-medium mt-1">?�용?�들??기술 지??�??�비??문의 ?�항??관리합?�다.</p>
        </div>
        <div className="flex gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === tab
                  ? 'bg-zinc-900 text-white shadow-lg'
                  : 'bg-white text-zinc-500 border border-zinc-200 hover:border-zinc-400'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Left: Inquiry List */}
        <div className="lg:col-span-2 space-y-3">
          {inquiries
            .filter((i) => activeTab === '?�체' || i.status === activeTab)
            .map((inq) => (
            <div
              key={inq.id}
              onClick={() => setSelectedId(inq.id)}
              className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                selectedId === inq.id
                  ? 'bg-white border-primary/20 shadow-lg shadow-primary/5'
                  : 'bg-white border-zinc-100 hover:border-zinc-300 hover:shadow-sm'
              }`}
            >
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                  {inq.isNew && (
                    <span className="text-[10px] font-black bg-primary text-white px-2 py-0.5 rounded-md uppercase">New</span>
                  )}
                  {!inq.isNew && (
                    <span className="text-xs font-bold text-zinc-400">{inq.id}</span>
                  )}
                </div>
                <span className="text-[11px] text-zinc-400 font-medium">{inq.date}</span>
              </div>
              <h4 className="font-bold text-zinc-900 text-sm mb-1.5 leading-snug">{inq.title}</h4>
              <p className="text-xs text-zinc-400 mb-4 line-clamp-1">{inq.preview}</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-zinc-200 flex items-center justify-center">
                    <span className="text-[10px] font-black text-zinc-500">{inq.author[0]}</span>
                  </div>
                  <span className="text-xs font-medium text-zinc-600">{inq.author}({inq.authorId})</span>
                </div>
                <span className={`text-[10px] font-bold px-2.5 py-1 rounded-lg ${statusStyle(inq.status)}`}>
                  {inq.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Detail & Reply Panel */}
        <div className="lg:col-span-3 space-y-5">
          {/* Detail Card */}
          <div className="bg-white p-8 rounded-[28px] border border-zinc-100 shadow-sm">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                {selected.status === '?�수' && (
                  <span className="text-[10px] font-black bg-red-500 text-white px-2.5 py-1 rounded-lg uppercase tracking-wider">Urgent</span>
                )}
                <h2 className="text-xl font-black text-zinc-900 leading-tight">{selected.title}</h2>
              </div>
              <button className="text-zinc-400 hover:text-zinc-600 transition-colors">
                <span className="material-symbols-outlined">more_vert</span>
              </button>
            </div>
            
            <div className="flex items-center gap-3 text-xs text-zinc-400 font-medium mb-8 flex-wrap">
              <span>문의ID: {selected.id}</span>
              <span>??/span>
              <span>카테고리: {selected.category}</span>
              <span>??/span>
              <span>?�태: <span className={`font-bold ${selected.status === '?�수' ? 'text-primary' : selected.status === '처리�? ? 'text-amber-500' : 'text-zinc-500'}`}>{selected.status}</span></span>
            </div>

            <div className="text-sm text-zinc-700 leading-relaxed whitespace-pre-line mb-6">
              {selected.detail.split('x-api-key').map((part, idx, arr) =>
                idx < arr.length - 1 ? (
                  <React.Fragment key={idx}>{part}<code className="bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded font-mono text-xs font-bold">x-api-key</code></React.Fragment>
                ) : (
                  <React.Fragment key={idx}>{part}</React.Fragment>
                )
              )}
            </div>

            {selected.codeBlock && (
              <div className="bg-zinc-900 text-zinc-100 rounded-2xl p-5 mb-6 font-mono text-xs leading-relaxed overflow-x-auto">
                <pre>{selected.codeBlock}</pre>
              </div>
            )}

            {selected.attachment && (
              <div className="flex items-center gap-2 text-xs text-zinc-500 mb-2">
                <span className="material-symbols-outlined text-sm">attach_file</span>
                <span className="text-primary font-medium underline cursor-pointer">{selected.attachment}</span>
              </div>
            )}
          </div>

          {/* Reply Card */}
          <div className="bg-white p-8 rounded-[28px] border border-zinc-100 shadow-sm">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-base font-black text-zinc-900 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-lg">edit_note</span>
                ?��??�성
              </h3>
              <div className="flex items-center gap-2">
                <select className="text-xs font-bold bg-zinc-50 border border-zinc-200 rounded-xl px-3 py-2 outline-none">
                  <option>?�플�??�택: 기술지??기본</option>
                  <option>?�플�??�택: ?�책 ?�내</option>
                  <option>?�플�??�택: ?�스컬레?�션</option>
                </select>
                <button className="text-xs font-bold text-zinc-500 px-3 py-2 border border-zinc-200 rounded-xl hover:bg-zinc-50 transition-colors">초기??/button>
              </div>
            </div>
            <textarea
              className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl px-5 py-4 text-sm outline-none resize-y min-h-[140px] focus:ring-2 focus:ring-primary/10 transition-all placeholder:text-zinc-400"
              placeholder="?��? ?�용???�력?�세??.."
            />
            <div className="flex items-center justify-between mt-4">
              <div className="flex gap-2">
                <button className="p-2 text-zinc-400 hover:text-zinc-600 transition-colors rounded-lg hover:bg-zinc-50">
                  <span className="material-symbols-outlined text-lg">image</span>
                </button>
                <button className="p-2 text-zinc-400 hover:text-zinc-600 transition-colors rounded-lg hover:bg-zinc-50">
                  <span className="material-symbols-outlined text-lg">link</span>
                </button>
              </div>
              <div className="flex gap-2">
                <button className="px-5 py-2.5 text-sm font-bold text-zinc-600 border border-zinc-200 rounded-xl hover:bg-zinc-50 transition-all">?�시?�??/button>
                <button className="px-6 py-2.5 text-sm font-bold text-white bg-primary rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all active:scale-95">?��? 발송</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InquiryManagement;
