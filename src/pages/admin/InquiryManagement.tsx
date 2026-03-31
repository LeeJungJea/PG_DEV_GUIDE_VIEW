import React, { useState } from 'react';

interface Inquiry {
  id: string;
  title: string;
  preview: string;
  author: string;
  authorId: string;
  date: string;
  status: '?‘ìˆ˜' | 'ì²˜ë¦¬ì¤? | '?µë??„ë£Œ';
  isNew?: boolean;
  category: string;
  detail: string;
  codeBlock?: string;
  attachment?: string;
}

const InquiryManagement: React.FC = () => {
  const inquiries: Inquiry[] = [
    {
      id: '#29405', title: 'ê²°ì œ ëª¨ë“ˆ ?°ë™ ì¤?403 ?ëŸ¬ ë°œìƒ ë¬¸ì˜',
      preview: 'API Keyë¥?ë°œê¸‰ë°›ì•„ ?˜ê²½ ë³€?˜ì— ?¤ì •?ˆìœ¼??ì§€?ì ??..',
      author: 'ê¹€ì² ìˆ˜', authorId: 'ks_kim', date: '2024.05.24 14:20', status: '?‘ìˆ˜', isNew: true,
      category: 'ê¸°ìˆ  ì§€??> API ?°ë™', detail: '?ˆë…•?˜ì„¸?? CJ PG ?°ë™??ì§„í–‰ ì¤‘ì¸ ê°œë°œ??ê¹€ì² ìˆ˜?…ë‹ˆ??\n?„ì¬ ê°€?´ë“œ ë¬¸ì„œ???°ë¼ API Keyë¥?ë°œê¸‰ë°›ê³  ?¤ë”??x-api-key ê°’ì„ ?¬í•¨?˜ì—¬ ?”ì²­??ë³´ë‚´ê³??ˆìŠµ?ˆë‹¤. ?˜ì?ë§?ë¡œì»¬ ?˜ê²½ê³??ŒìŠ¤???œë²„ ëª¨ë‘?ì„œ ì§€?ì ?¼ë¡œ 403 Forbidden ?ëŸ¬ê°€ ë°˜í™˜?˜ê³  ?ˆìŠµ?ˆë‹¤.\në°œê¸‰ë°›ì? ?¤ì˜ ê¶Œí•œ ?¤ì •?´ë‚˜ IP ?”ì´?¸ë¦¬?¤íŠ¸ ?±ë¡???„ìš”?œì? ?•ì¸ ë¶€?ë“œë¦½ë‹ˆ??',
      codeBlock: 'GET /v1/payments/status HTTP/1.1\nHost: api.cjonepg.co.kr\nX-API-KEY: CJ_*******************\n\n{ "error": "Forbidden", "code": 40301 }',
      attachment: 'error_log_screenshot.png (1.2MB)',
    },
    {
      id: '#29402', title: '?•ê¸° ê²°ì œ API ì·¨ì†Œ ë¡œì§ ë¬¸ì˜',
      preview: 'ë¶€ë¶?ì·¨ì†Œ ???”ì•¡ ê³„ì‚° ë°©ì‹??ë¬¸ì„œ?€ ?ì´??ê²ƒê°™?µë‹ˆ...',
      author: '?´ì˜??, authorId: 'y_lee_dev', date: '2024.05.24 11:05', status: 'ì²˜ë¦¬ì¤?,
      category: 'ê¸°ìˆ  ì§€??> ê²°ì œ', detail: '?•ê¸° ê²°ì œ ë¶€ë¶?ì·¨ì†Œ ???”ì•¡ ê³„ì‚° ë¡œì§??ê°€?´ë“œ ë¬¸ì„œ???¤ëª…ê³??¤ë¥´ê²??™ì‘?©ë‹ˆ??',
    },
    {
      id: '#29398', title: '?¬ì¸???ë¦½ ?•ì±… ?•ì¸ ?”ì²­',
      preview: 'CJ ONE ?¬ì¸???©ì‚° ??ìµœì†Œ ?¨ìœ„ê°€ ?´ë–»ê²??˜ëŠ”ì§€ ê¶ê¸ˆ...',
      author: 'ë°•ì?ë¯?, authorId: 'jimin_park', date: '2024.05.23 16:45', status: '?µë??„ë£Œ',
      category: '?•ì±… ë¬¸ì˜', detail: 'CJ ONE ?¬ì¸???©ì‚° ??ìµœì†Œ ?ë¦½ ?¨ìœ„?€ ë°˜ì˜¬ë¦??•ì±…??ê¶ê¸ˆ?©ë‹ˆ??',
    },
  ];

  const [selectedId, setSelectedId] = useState(inquiries[0].id);
  const [activeTab, setActiveTab] = useState('?„ì²´');
  const selected = inquiries.find((i) => i.id === selectedId) ?? inquiries[0];

  const tabs = ['?„ì²´', '?‘ìˆ˜', 'ì²˜ë¦¬ì¤?, '?µë??„ë£Œ'];

  const statusStyle = (s: string) => {
    if (s === '?‘ìˆ˜') return 'bg-primary/10 text-primary';
    if (s === 'ì²˜ë¦¬ì¤?) return 'bg-amber-50 text-amber-600';
    return 'bg-zinc-100 text-zinc-500';
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 bg-zinc-50/30 -m-8 p-8 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-black text-zinc-900 tracking-tight">ë¬¸ì˜ê´€ë¦?/h1>
          <p className="text-zinc-500 text-sm font-medium mt-1">?¬ìš©?ë“¤??ê¸°ìˆ  ì§€??ë°??œë¹„??ë¬¸ì˜ ?¬í•­??ê´€ë¦¬í•©?ˆë‹¤.</p>
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
            .filter((i) => activeTab === '?„ì²´' || i.status === activeTab)
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
                {selected.status === '?‘ìˆ˜' && (
                  <span className="text-[10px] font-black bg-red-500 text-white px-2.5 py-1 rounded-lg uppercase tracking-wider">Urgent</span>
                )}
                <h2 className="text-xl font-black text-zinc-900 leading-tight">{selected.title}</h2>
              </div>
              <button className="text-zinc-400 hover:text-zinc-600 transition-colors">
                <span className="material-symbols-outlined">more_vert</span>
              </button>
            </div>
            
            <div className="flex items-center gap-3 text-xs text-zinc-400 font-medium mb-8 flex-wrap">
              <span>ë¬¸ì˜ID: {selected.id}</span>
              <span>??/span>
              <span>ì¹´í…Œê³ ë¦¬: {selected.category}</span>
              <span>??/span>
              <span>?íƒœ: <span className={`font-bold ${selected.status === '?‘ìˆ˜' ? 'text-primary' : selected.status === 'ì²˜ë¦¬ì¤? ? 'text-amber-500' : 'text-zinc-500'}`}>{selected.status}</span></span>
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
                ?µë??‘ì„±
              </h3>
              <div className="flex items-center gap-2">
                <select className="text-xs font-bold bg-zinc-50 border border-zinc-200 rounded-xl px-3 py-2 outline-none">
                  <option>?œí”Œë¦?? íƒ: ê¸°ìˆ ì§€??ê¸°ë³¸</option>
                  <option>?œí”Œë¦?? íƒ: ?•ì±… ?ˆë‚´</option>
                  <option>?œí”Œë¦?? íƒ: ?ìŠ¤ì»¬ë ˆ?´ì…˜</option>
                </select>
                <button className="text-xs font-bold text-zinc-500 px-3 py-2 border border-zinc-200 rounded-xl hover:bg-zinc-50 transition-colors">ì´ˆê¸°??/button>
              </div>
            </div>
            <textarea
              className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl px-5 py-4 text-sm outline-none resize-y min-h-[140px] focus:ring-2 focus:ring-primary/10 transition-all placeholder:text-zinc-400"
              placeholder="?µë? ?´ìš©???…ë ¥?˜ì„¸??.."
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
                <button className="px-5 py-2.5 text-sm font-bold text-zinc-600 border border-zinc-200 rounded-xl hover:bg-zinc-50 transition-all">?„ì‹œ?€??/button>
                <button className="px-6 py-2.5 text-sm font-bold text-white bg-primary rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all active:scale-95">?µë? ë°œì†¡</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InquiryManagement;
