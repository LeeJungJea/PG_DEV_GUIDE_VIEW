import React, { useState } from 'react';

interface Member {
  id: string;
  name: string;
  initial: string;
  email: string;
  status: '?œì„±' | '?•ì?';
  role: string;
  phone?: string;
  roles?: { name: string; desc: string; active: boolean }[];
  activityLog?: { title: string; date: string }[];
}

const UserManagement: React.FC = () => {
  const members: Member[] = [
    { id: 'u1', name: 'ê¹€ì² ìˆ˜', initial: 'ê¹€', email: 'chulsoo.kim@gmail.com', status: '?œì„±', role: 'Standard User', phone: '010-9876-5432',
      roles: [{ name: 'API Developer', desc: 'API Key ?ì„± ë°?ë¬¸ì„œ ?‘ê·¼ ê¶Œí•œ', active: true }, { name: 'Billing Manager', desc: 'ê²°ì œ ?´ì—­ ì¡°íšŒ ë°?ê²°ì œ ?˜ë‹¨ ê´€ë¦?, active: false }],
      activityLog: [{ title: 'ë¡œê·¸??, date: '2024.05.21 09:30' }]
    },
    { id: 'u2', name: '?´ì˜??, initial: '??, email: 'young.lee@cj.net', status: '?•ì?', role: 'Merchant Admin', phone: '010-5555-1234',
      roles: [{ name: 'API Developer', desc: 'API Key ?ì„± ë°?ë¬¸ì„œ ?‘ê·¼ ê¶Œí•œ', active: false }, { name: 'Billing Manager', desc: 'ê²°ì œ ?´ì—­ ì¡°íšŒ ë°?ê²°ì œ ?˜ë‹¨ ê´€ë¦?, active: true }],
      activityLog: [{ title: 'ê³„ì • ?•ì?', date: '2024.05.19 14:00' }]
    },
    { id: 'u3', name: 'ë°•ì???, initial: '', email: 'jisung.park@dev.io', status: '?œì„±', role: 'Developer', phone: '010-1234-5678',
      roles: [{ name: 'API Developer', desc: 'API Key ?ì„± ë°?ë¬¸ì„œ ?‘ê·¼ ê¶Œí•œ', active: true }, { name: 'Billing Manager', desc: 'ê²°ì œ ?´ì—­ ì¡°íšŒ ë°?ê²°ì œ ?˜ë‹¨ ê´€ë¦?, active: false }],
      activityLog: [{ title: 'ë¹„ë?ë²ˆí˜¸ ë³€ê²?, date: '2024.05.20 10:15' }]
    },
    { id: 'u4', name: 'ìµœìœ ë¦?, initial: 'ìµ?, email: 'yuri.choi@company.com', status: '?œì„±', role: 'Standard User', phone: '010-7777-8888',
      roles: [{ name: 'API Developer', desc: 'API Key ?ì„± ë°?ë¬¸ì„œ ?‘ê·¼ ê¶Œí•œ', active: false }, { name: 'Billing Manager', desc: 'ê²°ì œ ?´ì—­ ì¡°íšŒ ë°?ê²°ì œ ?˜ë‹¨ ê´€ë¦?, active: false }],
      activityLog: [{ title: 'ê°€???„ë£Œ', date: '2024.05.18 16:20' }]
    },
  ];

  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('?„ì²´');
  const [checkedIds, setCheckedIds] = useState<string[]>(['u3']);

  const selected = members.find((m) => m.id === selectedId);

  const toggleCheck = (id: string) => {
    setCheckedIds((prev) => prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]);
  };

  const tabs = [
    { label: '?„ì²´', count: '1,240' },
    { label: '?œì„±', count: '1,100' },
    { label: 'ë¹„í™œ??, count: '140' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 bg-zinc-50/30 -m-8 p-8 min-h-screen">
      {/* Header with breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-zinc-400">
        <span className="text-2xl font-black text-zinc-900">?Œì›ê´€ë¦?/span>
        <span className="mx-2">|</span>
        <span>?¬ìš©??/span>
        <span>??/span>
        <span className="font-medium text-zinc-600">?„ì²´ ?Œì› ë¦¬ìŠ¤??/span>
      </div>

      {/* Tabs & Sort */}
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(tab.label)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === tab.label
                  ? 'bg-white text-primary border-2 border-primary shadow-sm'
                  : 'bg-white text-zinc-500 border border-zinc-200 hover:border-zinc-400'
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 bg-white border border-zinc-200 rounded-xl px-3 py-2">
          <span className="text-xs font-bold text-zinc-500">ê°€?…ì¼ ??/span>
          <span className="material-symbols-outlined text-xs text-zinc-400">expand_more</span>
        </div>
      </div>

      {/* Table + Detail Drawer */}
      <div className="flex gap-6">
        {/* Table */}
        <div className={`bg-white rounded-2xl border border-zinc-100 shadow-sm overflow-hidden transition-all ${selected ? 'flex-1' : 'w-full'}`}>
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-zinc-100">
                <th className="px-5 py-4 w-10">
                  <div className="w-4 h-4 border-2 border-zinc-300 rounded" />
                </th>
                <th className="px-4 py-4 text-[11px] font-bold text-zinc-400 uppercase tracking-wider">?Œì›?•ë³´</th>
                <th className="px-4 py-4 text-[11px] font-bold text-zinc-400 uppercase tracking-wider">?íƒœ</th>
                <th className="px-4 py-4 text-[11px] font-bold text-zinc-400 uppercase tracking-wider">ê¶Œí•œ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-50">
              {members.map((m) => (
                <tr
                  key={m.id}
                  className={`cursor-pointer transition-all ${
                    selectedId === m.id ? 'bg-primary/5' : 'hover:bg-zinc-50/50'
                  }`}
                  onClick={() => setSelectedId(m.id === selectedId ? null : m.id)}
                >
                  <td className="px-5 py-5" onClick={(e) => { e.stopPropagation(); toggleCheck(m.id); }}>
                    <div className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-all ${
                      checkedIds.includes(m.id) ? 'bg-primary border-primary' : 'border-zinc-300'
                    }`}>
                      {checkedIds.includes(m.id) && <span className="text-white text-[10px]">??/span>}
                    </div>
                  </td>
                  <td className="px-4 py-5">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-black ${
                        checkedIds.includes(m.id) ? 'bg-primary text-white' : 'bg-zinc-200 text-zinc-600'
                      }`}>
                        {m.initial || m.name[0]}
                      </div>
                      <div>
                        <p className={`text-sm font-bold leading-none mb-0.5 ${checkedIds.includes(m.id) ? 'text-primary' : 'text-zinc-900'}`}>{m.name}</p>
                        <p className={`text-xs ${checkedIds.includes(m.id) ? 'text-primary/70' : 'text-zinc-400'}`}>{m.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-5">
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-lg ${
                      m.status === '?œì„±' ? 'bg-blue-50 text-blue-600' : 'bg-red-50 text-red-500'
                    }`}>
                      {m.status}
                    </span>
                  </td>
                  <td className="px-4 py-5 text-sm text-zinc-600 font-medium">{m.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="p-5 border-t border-zinc-50 text-xs text-zinc-400 font-medium">
            ì´?1,240ëª?ì¤?1-20 ?œì‹œ
          </div>
        </div>

        {/* Detail Sidebar */}
        {selected && (
          <div className="w-[360px] shrink-0 bg-white rounded-2xl border border-zinc-100 shadow-sm p-8 space-y-6 animate-in slide-in-from-right-4 duration-300">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-black text-zinc-900">?Œì› ?ì„¸ ?•ë³´</h3>
              <button onClick={() => setSelectedId(null)} className="text-zinc-400 hover:text-zinc-600 transition-colors">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <p className="text-xs text-zinc-400 -mt-4">?Œì› ?•ë³´ë¥??˜ì •?˜ê³  ê¶Œí•œ??ê´€ë¦¬í•©?ˆë‹¤.</p>

            {/* Profile */}
            <div className="flex flex-col items-center py-4">
              <div className="w-20 h-20 rounded-full bg-zinc-200 flex items-center justify-center mb-3 relative">
                <span className="material-symbols-outlined text-3xl text-zinc-400">person</span>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-xs">photo_camera</span>
                </div>
              </div>
              <h4 className="text-lg font-black text-zinc-900">{selected.name}</h4>
              <p className="text-xs text-zinc-400 mb-2">{selected.email}</p>
              <div className="flex gap-2">
                <span className="text-[10px] font-bold bg-zinc-100 text-zinc-600 px-2 py-0.5 rounded">{selected.role}</span>
                <span className="text-[10px] font-bold bg-green-50 text-green-600 px-2 py-0.5 rounded">Email Verified</span>
              </div>
            </div>

            {/* Basic Info */}
            <div className="space-y-4">
              <h5 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">ê¸°ë³¸ ?•ë³´</h5>
              <div className="space-y-1">
                <label className="text-xs font-bold text-zinc-600">?±ëª…</label>
                <input className="w-full bg-zinc-50 rounded-xl px-4 py-2.5 text-sm outline-none" defaultValue={selected.name} />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-zinc-600">?°ë½ì²?/label>
                <input className="w-full bg-zinc-50 rounded-xl px-4 py-2.5 text-sm outline-none" defaultValue={selected.phone} />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-zinc-600">?íƒœ ?¤ì •</label>
                <select className="w-full bg-zinc-50 rounded-xl px-4 py-2.5 text-sm outline-none appearance-none">
                  <option>?•ìƒ (?œì„±)</option>
                  <option>?•ì?</option>
                  <option>?ˆí‡´</option>
                </select>
              </div>
            </div>

            {/* Role Management */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <h5 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">ê¶Œí•œ ë°?Role ê´€ë¦?/h5>
                <button className="text-[11px] font-bold text-primary">??•  ì¶”ê?</button>
              </div>
              {selected.roles?.map((r, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-zinc-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-zinc-200 flex items-center justify-center">
                      <span className="material-symbols-outlined text-sm text-zinc-500">{r.active ? 'code' : 'payments'}</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-zinc-900">{r.name}</p>
                      <p className="text-[10px] text-zinc-400">{r.desc}</p>
                    </div>
                  </div>
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center ${r.active ? 'bg-primary' : 'border-2 border-zinc-300'}`}>
                    {r.active && <span className="text-white text-[10px]">??/span>}
                  </div>
                </div>
              ))}
            </div>

            {/* Activity Log */}
            <div className="space-y-3">
              <h5 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">ìµœê·¼ ?œë™ ë¡œê·¸</h5>
              {selected.activityLog?.map((log, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <div>
                    <p className="text-xs font-bold text-zinc-700">{log.title}</p>
                    <p className="text-[10px] text-zinc-400">{log.date}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-2">
              <button className="flex-1 py-3 text-sm font-bold text-zinc-600 border border-zinc-200 rounded-xl hover:bg-zinc-50 transition-all">ë³€ê²?ì·¨ì†Œ</button>
              <button className="flex-1 py-3 text-sm font-bold text-white bg-primary rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all active:scale-95">?€?¥í•˜ê¸?/button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserManagement;
