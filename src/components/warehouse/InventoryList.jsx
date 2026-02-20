import React from 'react';
import { QrCode, Plus, Send, MoreVertical } from 'lucide-react';

export default function InventoryList({ items }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm h-full flex flex-col">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h3 className="font-black text-gray-800 text-lg tracking-tight">Live Inventory Stock</h3>
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Real-time Commodity Tracking</p>
        </div>
        <div className="flex gap-3">
           <button className="px-4 py-2 text-xs font-bold border-2 border-slate-100 rounded-xl flex items-center gap-2 hover:bg-slate-50 transition-colors">
             <QrCode size={16} /> Scan
           </button>
           <button className="px-4 py-2 text-xs font-bold bg-teal-600 text-white rounded-xl shadow-lg shadow-teal-600/20 hover:bg-teal-700 transition-all flex items-center gap-2">
             <Plus size={16} /> Add Stock
           </button>
        </div>
      </div>

      <div className="space-y-8 flex-1">
        {items.map((item) => {
          // Logic: Calculate percentage based on a 15,000kg warehouse capacity
          const percentage = Math.min((item.stock / 15000) * 100, 100);
          const isLow = item.status === 'Critical' || item.status === 'Low Stock';

          return (
            <div key={item.id} className="group">
              <div className="flex justify-between items-start mb-3">
                <div className="flex gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-black text-lg ${
                    isLow ? 'bg-rose-50 text-rose-600' : 'bg-teal-50 text-teal-600'
                  }`}>
                    {item.item.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-black text-slate-800">{item.item}</span>
                      <span className="text-[10px] font-bold text-slate-300 uppercase tracking-tighter">{item.id}</span>
                    </div>
                    <p className="text-xs font-bold text-slate-400">
                      {item.stock.toLocaleString()} / 15,000 {item.unit}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className={`text-[10px] font-black px-3 py-1 rounded-lg uppercase tracking-widest ${
                    isLow ? 'bg-rose-100 text-rose-600' : 'bg-emerald-100 text-emerald-600'
                  }`}>
                    {item.status}
                  </span>
                  <button className="p-2 text-slate-300 hover:text-slate-600 transition-colors">
                    <MoreVertical size={18} />
                  </button>
                </div>
              </div>

              <div className="relative pt-1">
                <div className="overflow-hidden h-2.5 text-xs flex rounded-full bg-slate-100">
                  <div 
                    style={{ width: `${percentage}%` }} 
                    className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center transition-all duration-1000 ${
                      isLow ? 'bg-rose-500' : 'bg-teal-500'
                    }`}
                  />
                </div>
              </div>

              <div className="flex justify-between items-center mt-3">
                <div className="flex gap-4">
                  {isLow && (
                    <p className="text-[10px] font-bold text-rose-500 flex items-center gap-1">
                      ⚠️ Stock falling below safety threshold
                    </p>
                  )}
                </div>
                <button className="flex items-center gap-1.5 text-[10px] font-black text-teal-600 uppercase tracking-widest hover:underline decoration-2 underline-offset-4">
                  <Send size={12} /> Dispatch to Dealer
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}