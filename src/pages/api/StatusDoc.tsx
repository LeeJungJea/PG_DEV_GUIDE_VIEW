import React from 'react';

const StatusDoc: React.FC = () => {
  return (
    <div className="max-w-4xl">
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 bg-zinc-100 text-zinc-500 font-bold rounded text-xs tracking-widest uppercase">GET</span>
          <code className="text-sm font-medium text-zinc-400">/v1/payments/status/{'{paymentId}'}</code>
        </div>
        <h1 className="text-4xl font-black text-zinc-900 mb-6 tracking-tight font-headline">결제 상태 조회</h1>
        <p className="text-lg text-zinc-600 leading-relaxed font-medium">
          특정 결제 건의 현재 상태를 실시간으로 조회합니다. 승인, 취소, 환불 등 모든 상태 변화를 확인할 수 있습니다.
        </p>
      </header>
    </div>
  );
};

export default StatusDoc;
