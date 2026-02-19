import React from 'react';
import { AlertTriangle } from 'lucide-react';

const LowStockCard = () => (
  <div className="bg-[#fff9f0] p-6 rounded-xl border border-amber-100 flex flex-col">
    <div className="flex items-center gap-2 text-amber-600 font-bold text-sm mb-6">
      <AlertTriangle size={18} /> Low Stock Alert
    </div>
    <div className="space-y-6 flex-1">
      <StockIndicator label="Rice" amount="80 kg left" percent={20} />
      <StockIndicator label="Sugar" amount="28 kg left" percent={19} />
    </div>
    <button className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold transition-colors mt-6">
      Request Restock
    </button>
  </div>
);

const StockIndicator = ({ label, amount, percent }) => (
  <div>
    <div className="flex justify-between items-end mb-2">
      <span className="text-sm font-bold text-slate-700">{label}</span>
      <span className="text-xs font-bold text-red-600">{amount}</span>
    </div>
    <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
      <div className="h-full bg-red-500" style={{ width: `${percent}%` }} />
    </div>
  </div>
);

export default LowStockCard;