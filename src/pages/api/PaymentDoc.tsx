import React from 'react';

const PaymentDoc: React.FC = () => {
  return (
    <div className="max-w-5xl">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="bg-secondary-container/10 text-secondary-container px-3 py-1 rounded text-[10px] font-bold tracking-widest uppercase">Payment API</span>
            <span className="text-zinc-400 text-sm">v2.4.0</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-on-surface font-headline leading-tight">결제하기</h1>
          <p className="text-lg text-zinc-600 max-w-2xl leading-relaxed">
            CJ PG의 통합 결제창을 호출하여 사용자의 결제를 진행합니다. 신용카드, 간편결제, 계좌이체 등 다양한 결제 수단을 하나의 인터페이스로 제공합니다.
          </p>
        </div>
        <button className="bg-primary text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 shadow-lg hover:bg-[#b7003d] transition-all scale-100 active:scale-95">
          <span className="material-symbols-outlined">play_circle</span>
          API 테스트에서 실행
        </button>
      </div>

      {/* API Definition Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-12">
          <div className="bg-surface-container-low rounded-xl p-6 flex items-center gap-4 border-none shadow-sm">
            <span className="bg-[#0058bc] text-white px-3 py-1 rounded text-xs font-bold">POST</span>
            <code className="text-zinc-800 font-mono text-sm">https://api.cjone-pg.com/v2/payments/request</code>
            <button className="ml-auto text-zinc-400 hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-lg">content_copy</span>
            </button>
          </div>
        </div>

        {/* Left Column: Params & Tables */}
        <div className="lg:col-span-7 space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-6 text-on-surface flex items-center gap-2">
              <span className="w-1.5 h-6 bg-primary rounded-full"></span>
              요청 파라미터
            </h2>
            <div className="overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm border border-zinc-100">
              <table className="w-full text-left text-sm border-collapse">
                <thead className="bg-surface-container text-zinc-600 font-semibold">
                  <tr>
                    <th className="px-6 py-4">파라미터</th>
                    <th className="px-6 py-4">타입</th>
                    <th className="px-6 py-4">설명</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  <tr>
                    <td className="px-6 py-4 font-mono text-primary font-semibold">mid</td>
                    <td className="px-6 py-4 text-zinc-400 italic">string</td>
                    <td className="px-6 py-4">상점 아이디 (Merchant ID) <span className="text-error text-[10px] font-bold ml-1 uppercase tracking-tighter">Required</span></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-mono text-primary font-semibold">orderId</td>
                    <td className="px-6 py-4 text-zinc-400 italic">string</td>
                    <td className="px-6 py-4">상점 주문번호 (Unique ID) <span className="text-error text-[10px] font-bold ml-1 uppercase tracking-tighter">Required</span></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-mono text-primary font-semibold">amount</td>
                    <td className="px-6 py-4 text-zinc-400 italic">number</td>
                    <td className="px-6 py-4">결제 금액 <span className="text-error text-[10px] font-bold ml-1 uppercase tracking-tighter">Required</span></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-mono text-primary font-semibold">goodsName</td>
                    <td className="px-6 py-4 text-zinc-400 italic">string</td>
                    <td className="px-6 py-4">상품명</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Error/FAQ Bento Cards */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="group p-6 bg-surface-container-low rounded-xl hover:bg-primary/5 transition-all cursor-pointer">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm mb-4 group-hover:bg-primary/10 transition-colors">
                <span className="material-symbols-outlined text-primary">error</span>
              </div>
              <h4 className="font-bold text-lg mb-2 text-on-surface">에러 코드 가이드</h4>
              <p className="text-sm text-zinc-500">결제 단계에서 발생할 수 있는 공통 에러 및 대응 방법을 확인하세요.</p>
            </div>
            <div className="group p-6 bg-surface-container-low rounded-xl hover:bg-secondary/5 transition-all cursor-pointer">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm mb-4 group-hover:bg-secondary/10 transition-colors">
                <span className="material-symbols-outlined text-secondary">help</span>
              </div>
              <h4 className="font-bold text-lg mb-2 text-on-surface">결제 FAQ</h4>
              <p className="text-sm text-zinc-500">결제 취소, 부분 취소, 할부 관련 자주 묻는 질문을 확인하세요.</p>
            </div>
          </section>
        </div>

        {/* Right Column: Code & JSON */}
        <div className="lg:col-span-5">
          <div className="sticky top-24 space-y-6">
            <div className="bg-inverse-surface rounded-xl overflow-hidden shadow-2xl">
              <div className="bg-[#3e3e3f] px-4 py-2 flex items-center justify-between">
                <span className="text-xs text-zinc-400 font-bold uppercase tracking-wider">Response JSON</span>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-600"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-600"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-600"></div>
                </div>
              </div>
              <pre className="p-6 text-sm font-mono leading-relaxed overflow-x-auto text-zinc-300">
                {`{
  "status": "success",
  "data": {
    "paymentKey": "pk_test_2983...X",
    "orderId": "a4-20231012-0001",
    "amount": 15000,
    "requestedAt": "2023-10-24T10:20:01",
    "approvedAt": "2023-10-24T10:20:05"
  }
}`}
              </pre>
            </div>
            <div className="p-6 bg-primary/5 rounded-xl border border-primary/10">
              <h4 className="text-sm font-bold text-primary flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-sm">info</span>
                보안 권장사항
              </h4>
              <p className="text-xs text-zinc-600 leading-normal">
                결제 요청 시 amount 값은 위변조 방지를 위해 서버 사이드에서 검증해야 합니다. 클라이언트에서 전달된 금액과 주문 정보를 대조하십시오.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDoc;
