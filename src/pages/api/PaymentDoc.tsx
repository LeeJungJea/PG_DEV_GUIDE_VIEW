import React from 'react';

const PaymentDoc: React.FC = () => {
  return (
    <div className="max-w-5xl">
       {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded text-[10px] font-black tracking-widest uppercase">POST</span>
            <span className="text-zinc-400 text-sm font-medium">v2.4.0</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 font-headline leading-tight">결제하기</h1>
          <p className="text-lg text-zinc-500 max-w-2xl leading-relaxed font-medium">
            CJ PG의 통합 결제창을 호출하여 사용자의 결제를 진행합니다. 모든 결제 수단을 하나의 인터페이스로 제공합니다.
          </p>
        </div>
      </div>
      
      <div className="bg-zinc-50 border border-zinc-100 rounded-2xl p-6 mb-12 flex items-center gap-4">
        <span className="bg-zinc-800 text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-widest">URL</span>
        <code className="text-zinc-800 font-mono text-sm font-bold">https://api.cj-pg.com/v2/payments/request</code>
      </div>

      <section className="mb-16">
        <h2 className="text-2xl font-black mb-8 text-zinc-900 flex items-center gap-2">
          <span className="w-1.5 h-6 bg-primary rounded-full"></span>
          요청 파라미터
        </h2>
        <div className="overflow-hidden rounded-[24px] bg-white border border-zinc-100 shadow-sm leading-relaxed">
          <table className="w-full text-left text-sm border-collapse">
            <thead className="bg-zinc-50/50 text-zinc-400 font-bold uppercase text-[10px] tracking-widest">
              <tr>
                <th className="px-8 py-5">필드명</th>
                <th className="px-8 py-5">타입</th>
                <th className="px-8 py-5">설명</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-50">
              <tr>
                <td className="px-8 py-5 font-mono text-primary font-bold">amount</td>
                <td className="px-8 py-5 text-zinc-400">Number</td>
                <td className="px-8 py-5 text-zinc-600 font-medium">결제 총 금액</td>
              </tr>
              <tr>
                <td className="px-8 py-5 font-mono text-primary font-bold">orderId</td>
                <td className="px-8 py-5 text-zinc-400">String</td>
                <td className="px-8 py-5 text-zinc-600 font-medium">상점의 주문 번호</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default PaymentDoc;
