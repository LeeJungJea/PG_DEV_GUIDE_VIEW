import React from 'react';

const CancelDoc: React.FC = () => {
  return (
    <div className="max-w-4xl">
      {/* Header Section */}
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 bg-primary/10 text-primary font-bold rounded text-xs tracking-widest uppercase">Post</span>
          <code className="text-sm font-medium text-zinc-500">/v1/payments/cancel</code>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface mb-6">취소하기</h1>
        <p className="text-lg text-zinc-600 leading-relaxed mb-8">
          승인된 결제 건을 취소하거나 환불 처리합니다. 부분 취소와 전체 취소를 모두 지원하며, 취소 사유와 함께 요청 시 즉시 처리됩니다.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 bg-surface-container-low rounded-xl">
            <span className="material-symbols-outlined text-primary mb-3">security</span>
            <h4 className="font-bold mb-1 text-on-surface">인증 방식</h4>
            <p className="text-sm text-zinc-500">API Key + Bearer Token</p>
          </div>
          <div className="p-6 bg-surface-container-low rounded-xl">
            <span className="material-symbols-outlined text-primary mb-3">speed</span>
            <h4 className="font-bold mb-1 text-on-surface">응답 속도</h4>
            <p className="text-sm text-zinc-500">평균 150ms 미만</p>
          </div>
          <div className="p-6 bg-surface-container-low rounded-xl">
            <span className="material-symbols-outlined text-primary mb-3">update</span>
            <h4 className="font-bold mb-1 text-on-surface">최신 버전</h4>
            <p className="text-sm text-zinc-500">v1.2.4 (2024.03)</p>
          </div>
        </div>
      </header>

      {/* Cancellation Scenarios */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-on-surface">취소 시나리오</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 bg-surface-container-lowest rounded-xl shadow-[0_12px_32px_-4px_rgba(27,28,28,0.06)] border border-zinc-100">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">full_stacked_bar_chart</span>
              </div>
              <h3 className="font-bold text-lg text-on-surface">전체 취소</h3>
            </div>
            <p className="text-zinc-600 text-sm leading-relaxed">결제된 총 금액을 한 번에 취소합니다. 취소 성공 시 해당 결제 건은 '취소됨' 상태로 변경되며 원 거래가 무효화됩니다.</p>
          </div>
          <div className="p-8 bg-surface-container-lowest rounded-xl shadow-[0_12px_32px_-4px_rgba(27,28,28,0.06)] border border-zinc-100">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">pie_chart</span>
              </div>
              <h3 className="font-bold text-lg text-on-surface">부분 취소</h3>
            </div>
            <p className="text-zinc-600 text-sm leading-relaxed">잔액 범위 내에서 원하는 금액만큼 여러 번 나누어 취소할 수 있습니다. 상품별 부분 반품 시 유용합니다.</p>
          </div>
        </div>
      </section>

      {/* Parameters Section */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-on-surface">요청 파라미터</h2>
          <span className="text-xs text-zinc-400 font-medium uppercase tracking-wider">JSON Body</span>
        </div>
        <div className="overflow-hidden rounded-xl bg-surface-container-lowest border border-zinc-100 shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-zinc-50 border-b border-zinc-100">
                <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider">필드명</th>
                <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider">타입</th>
                <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider">필수 여부</th>
                <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider">설명</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-50 text-sm">
              <tr>
                <td className="px-6 py-5 font-mono text-primary font-semibold">payment_id</td>
                <td className="px-6 py-5 text-zinc-600">String</td>
                <td className="px-6 py-5"><span className="px-2 py-1 bg-red-50 text-red-600 text-[10px] font-bold rounded uppercase">Required</span></td>
                <td className="px-6 py-5 text-zinc-600 italic">결제 승인 시 발급된 고유 거래 ID</td>
              </tr>
              <tr>
                <td className="px-6 py-5 font-mono text-primary font-semibold">cancel_amount</td>
                <td className="px-6 py-5 text-zinc-600">Number</td>
                <td className="px-6 py-5"><span className="px-2 py-1 bg-red-50 text-red-600 text-[10px] font-bold rounded uppercase">Required</span></td>
                <td className="px-6 py-5 text-zinc-600">취소 요청 금액 (미입력 시 전액 취소)</td>
              </tr>
              <tr>
                <td className="px-6 py-5 font-mono text-primary font-semibold">cancel_reason</td>
                <td className="px-6 py-5 text-zinc-600">String</td>
                <td className="px-6 py-5"><span className="px-2 py-1 bg-zinc-100 text-zinc-500 text-[10px] font-bold rounded uppercase">Optional</span></td>
                <td className="px-6 py-5 text-zinc-600">취소 사유 (최대 100자)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Code Samples & Response */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-on-surface">코드 샘플</h2>
          <div className="bg-inverse-surface rounded-xl overflow-hidden shadow-xl">
            <div className="flex items-center justify-between px-4 py-3 bg-zinc-800 border-b border-white/10">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/50"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/50"></span>
                <span className="w-3 h-3 rounded-full bg-green-500/50"></span>
              </div>
              <span className="text-[10px] text-zinc-400 font-mono uppercase">Curl</span>
            </div>
            <pre className="p-6 text-sm overflow-x-auto no-scrollbar text-zinc-300">
              <code>{`curl -X POST https://api.cjone.com/v1/payments/cancel \\
  -H "Authorization: Bearer {YOUR_TOKEN}" \\
  -H "Content-Type: application/json" \\
  -d '{
    "payment_id": "CJ_ORD_20241021_0001",
    "cancel_amount": 5000,
    "cancel_reason": "고객 변심에 의한 부분 반품"
  }'`}</code>
            </pre>
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-on-surface">응답 예시</h2>
          <div className="bg-inverse-surface rounded-xl overflow-hidden shadow-xl">
            <div className="flex items-center justify-between px-4 py-3 bg-zinc-800 border-b border-white/10">
              <span className="text-[10px] text-green-400 font-bold uppercase tracking-widest">200 OK</span>
              <span className="text-[10px] text-zinc-400 font-mono uppercase">Json</span>
            </div>
            <pre className="p-6 text-sm overflow-x-auto no-scrollbar text-zinc-300">
              <code>{`{
  "status": "SUCCESS",
  "data": {
    "cancel_id": "CXL_992122341",
    "payment_id": "CJ_ORD_20241021_0001",
    "cancelled_amount": 5000,
    "remained_amount": 12500,
    "status": "PARTIAL_CANCELLED",
    "created_at": "2024-10-21T15:30:00Z"
  }
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="p-8 bg-primary/5 rounded-2xl border border-primary/10">
        <div className="flex items-center gap-3 mb-4 text-primary">
          <span className="material-symbols-outlined">info</span>
          <h3 className="font-bold text-lg">주의사항</h3>
        </div>
        <ul className="space-y-3 text-zinc-600 text-sm leading-relaxed">
          <li className="flex gap-2">
            <span className="text-primary font-bold">01.</span>
            가상계좌 결제 건의 경우, 은행 서버 작업 시간(23:50 ~ 00:10)에는 실시간 환불이 지연될 수 있습니다.
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold">02.</span>
            카드 결제 취소는 카드사 정책에 따라 영업일 기준 3~5일이 소요될 수 있습니다.
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold">03.</span>
            이미 취소 완료된 건에 대해 중복 취소 요청 시 <code>ALREADY_CANCELLED</code> 에러가 반환됩니다.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default CancelDoc;
