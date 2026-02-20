import React from 'react';
import { ShoppingCart, Users, Truck, AlertTriangle } from 'lucide-react';
// Import the actual mock data
import { inventory, citizens, transactions } from '../../data/mockData';

const DealerStatsGrid = () => {
  // 1. Calculate logic based on mock data
  const lowStockCount = inventory.filter(i => i.status === 'Low Stock' || i.status === 'Critical').length;
  const lowStockNames = inventory
    .filter(i => i.status === 'Low Stock' || i.status === 'Critical')
    .map(i => i.item)
    .join(', ');

  const bplCount = citizens.filter(c => c.cardType.includes('Priority') || c.cardType.includes('AAY')).length;
  const aplCount = citizens.filter(c => !c.cardType.includes('Priority') && !c.cardType.includes('AAY')).length;

  const stats = [
    { 
      label: "Today's Sales", 
      value: "₹4,820", 
      sub: `${transactions.length} transactions today`, 
      icon: <ShoppingCart size={20} />, 
      color: "text-slate-600" 
    },
    { 
      label: "Total Beneficiaries", 
      value: citizens.length.toString(), 
      sub: `BPL: ${bplCount} / APL: ${aplCount}`, 
      icon: <Users size={20} />, 
      theme: "dark" 
    },
    { 
      label: "Incoming (ETA)", 
      value: "2", 
      sub: "Next: Today 3:30 PM", 
      icon: <Truck size={20} />, 
      color: "text-slate-600" 
    },
    { 
      label: "Low Stock Items", 
      value: lowStockCount.toString(), 
      sub: lowStockCount > 0 ? lowStockNames : "All stocks normal", 
      icon: <AlertTriangle size={20} />, 
      color: "text-amber-600", 
      warning: lowStockCount > 0 
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((s, i) => (
        <div 
          key={i} 
          className={`p-6 rounded-2xl border transition-all hover:shadow-md ${
            s.theme === 'dark' 
              ? 'bg-emerald-700 text-white border-emerald-800 shadow-lg shadow-emerald-700/20' 
              : s.warning 
                ? 'bg-amber-50 border-amber-200 text-amber-900' 
                : 'bg-white text-slate-800 border-slate-200'
          }`}
        >
          <p className={`text-[10px] font-bold uppercase tracking-widest mb-2 ${
            s.theme === 'dark' ? 'text-emerald-100' : 'text-slate-400'
          }`}>
            {s.label}
          </p>
          <h2 className="text-3xl font-black mb-1 leading-none">{s.value}</h2>
          <p className={`text-[11px] font-bold ${
            s.theme === 'dark' ? 'text-emerald-200/70' : 'text-slate-400'
          }`}>
            {s.sub}
          </p>
          
          <div className={`absolute top-6 right-6 p-2 rounded-xl ${
            s.theme === 'dark' ? 'bg-white/10 text-white' : 'bg-slate-50 ' + s.color
          }`}>
            {s.icon}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DealerStatsGrid;