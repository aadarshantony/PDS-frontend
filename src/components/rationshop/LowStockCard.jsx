import React from 'react';
import { AlertTriangle, Send } from 'lucide-react';
// Import mock inventory
import { inventory } from '../../data/mockData';

const LowStockCard = () => {
  // Logic: Get items where status is 'Low Stock' or 'Critical'
  const lowStockItems = inventory.filter(
    item => item.status === 'Low Stock' || item.status === 'Critical'
  );

  return (
    <div className="bg-[#fff9f0] p-6 rounded-2xl border border-amber-100 flex flex-col shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2 text-amber-700 font-black text-xs uppercase tracking-widest">
          <AlertTriangle size={18} className="text-amber-600" /> 
          Low Stock Alert
        </div>
        <span className="bg-amber-200 text-amber-800 text-[10px] px-2 py-0.5 rounded-full font-bold">
          {lowStockItems.length} ITEMS
        </span>
      </div>

      <div className="space-y-6 flex-1">
        {lowStockItems.length > 0 ? (
          lowStockItems.map((item) => {
            // Calculate a mock percentage for the progress bar 
            // (Current Stock / a theoretical max of 1000 for demo purposes)
            const percentage = Math.min((item.stock / 1000) * 100, 100);
            
            return (
              <StockIndicator 
                key={item.id}
                label={item.item} 
                amount={`${item.stock} ${item.unit} left`} 
                percent={percentage} 
              />
            );
          })
        ) : (
          <p className="text-center text-slate-400 text-xs italic py-10">
            All stock levels are healthy.
          </p>
        )}
      </div>

      <button 
        onClick={() => alert("Restock request sent to Admin & Warehouse!")}
        className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold transition-all transform active:scale-95 flex items-center justify-center gap-2 mt-6 shadow-lg shadow-emerald-600/20"
      >
        <Send size={16} />
        Request Restock
      </button>
    </div>
  );
};

const StockIndicator = ({ label, amount, percent }) => (
  <div className="group">
    <div className="flex justify-between items-end mb-2">
      <span className="text-sm font-black text-slate-700">{label}</span>
      <span className="text-[10px] font-bold text-rose-600 uppercase">{amount}</span>
    </div>
    <div className="w-full h-2.5 bg-slate-200/50 rounded-full overflow-hidden">
      <div 
        className={`h-full transition-all duration-1000 ${percent < 10 ? 'bg-rose-600' : 'bg-amber-500'}`} 
        style={{ width: `${percent}%` }} 
      />
    </div>
  </div>
);

export default LowStockCard;