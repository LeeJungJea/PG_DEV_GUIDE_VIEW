import React from 'react';

const StatusDoc: React.FC = () => {
  return (
    <div className="max-w-5xl">
      {/* Hero Header Section */}
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <span className="px-2 py-1 rounded bg-secondary-container/10 text-secondary text-xs font-bold tracking-widest uppercase">Get</span>
          <span className="text-sm text-zinc-400 font-mono">/v1/payments/status/{"{tid}"}</span>
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-on-surface mb-6 font-headline">결제 상태 조회</h1>
        <p className="text-lg text-zinc-600 max-w-3xl leading-relaxed">
          발급된 거래 고유 번호(TID)를 기반으로 해당 결제의 현재 상태를 조회합니다. <br />
          성공 여부, 취소 여부 및 상세 결제 내역을 실시간으로 확인할 수 있는 인터페이스를 제공합니다.
        </p>
      </section>

      {/* Bento Grid Layout for API Specs */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Request Parameters Module */}
        <div className="xl:col-span-2 space-y-8">
          <div className="bg-surface-container-lowest rounded-xl p-8 shadow-[0_12px_32px_-4px_rgba(27,28,28,0.06)] border border-zinc-100">
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-primary">input</span>
              <h3 className="text-xl font-bold font-headline text-on-surface">요청 파라미터</h3>
            </div>
            <div className="overflow-hidden">
              <table className="w-full text-left">
                <thead className="text-xs font-bold text-zinc-400 uppercase tracking-wider border-b border-zinc-100">
                  <tr>
                    <th className="pb-4">파라미터명</th>
                    <th className="pb-4">타입</th>
                    <th className="pb-4">필수여부</th>
                    <th className="pb-4">설명</th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-zinc-50">
                  <tr>
                    <td className="py-5 font-mono text-primary font-semibold">tid</td>
                    <td className="py-5 text-zinc-500">String(30)</td>
                    <td className="py-5"><span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded uppercase">Required</span></td>
                    <td className="py-5 text-zinc-600">결제 시 발급된 거래 고유 번호</td>
                  </tr>
                  <tr>
                    <td className="py-5 font-mono text-primary font-semibold">mid</td>
                    <td className="py-5 text-zinc-500">String(10)</td>
                    <td className="py-5"><span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded uppercase">Required</span></td>
                    <td className="py-5 text-zinc-600">가맹점 식별 코드</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Status Code Definition Module */}
          <div className="bg-surface-container-lowest rounded-xl p-8 shadow-[0_12px_32px_-4px_rgba(27,28,28,0.06)] border border-zinc-100">
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-secondary">checklist_rtl</span>
              <h3 className="text-xl font-bold font-headline text-on-surface">응답 상태 코드 정의</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-zinc-50 hover:bg-primary/5 transition-colors group">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-secondary font-bold text-lg shadow-sm">200</div>
                <div>
                  <p className="font-bold text-zinc-900">SUCCESS</p>
                  <p className="text-xs text-zinc-500">조회에 성공하였으며 정상 거래입니다.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-lg bg-zinc-50">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-zinc-400 font-bold text-lg shadow-sm">201</div>
                <div>
                  <p className="font-bold text-zinc-900">PENDING</p>
                  <p className="text-xs text-zinc-500">결제가 현재 진행 중입니다.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-lg bg-zinc-50">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-error font-bold text-lg shadow-sm">404</div>
                <div>
                  <p className="font-bold text-zinc-900">NOT FOUND</p>
                  <p className="text-xs text-zinc-500">해당 TID로 조회되는 결제 정보가 없습니다.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-lg bg-zinc-50">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-error font-bold text-lg shadow-sm">500</div>
                <div>
                  <p className="font-bold text-zinc-900">SERVER ERROR</p>
                  <p className="text-xs text-zinc-500">시스템 내부 오류가 발생했습니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Code Example & Response Canvas */}
        <div className="space-y-8">
          <div className="bg-inverse-surface p-6 rounded-xl shadow-2xl relative">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-bold text-zinc-500 tracking-widest uppercase">Response Example</span>
              <button className="text-zinc-400 hover:text-white transition-colors">
                <span className="material-symbols-outlined text-sm">content_copy</span>
              </button>
            </div>
            <pre className="text-xs font-mono leading-relaxed overflow-x-auto text-zinc-300">
{`{
  "status": "SUCCESS",
  "tid": "CJ202410270001",
  "amount": 45000,
  "paid_at": "2024-10-27T14:30:05",
  "method": "CARD",
  "card_info": {
    "issuer": "CJ_CARD",
    "number": "4518-****-****-1234",
    "quota": 0
  },
  "receipt_url": "https://pg.cj.net/r/..."
}`}
            </pre>
          </div>
          {/* Informational Card */}
          <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
            <div className="flex gap-4 items-start">
              <span className="material-symbols-outlined text-primary shrink-0">lightbulb</span>
              <div>
                <h4 className="font-bold text-on-surface mb-2">상태 자동 갱신 알림</h4>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  상태 조회 API 대신 실시간 알림을 원하시면 <b>Webhook</b> 설정을 이용해 보세요. 가맹점 서버로 즉각적인 상태 변경 노티를 전송합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusDoc;
