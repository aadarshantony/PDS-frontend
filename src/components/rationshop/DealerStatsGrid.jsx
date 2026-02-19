import React from 'react';
import { ShoppingCart, Users, Truck, AlertTriangle } from 'lucide-react';

const DealerStatsGrid = () => {
  const stats = [
    { label: "Today's Sales", value: "₹4,820", sub: "47 transactions", icon: <ShoppingCart />, color: "text-slate-600" },
    { label: "Customers Served", value: "47", sub: "BPL: 31 / APL: 16", icon: <Users />, theme: "dark" },
    { label: "Incoming (ETA)", value: "2", sub: "Next: Today 3:30 PM", icon: <Truck />, color: "text-slate-600" },
    { label: "Low Stock Items", value: "3", sub: "Rice, Sugar, Oil", icon: <AlertTriangle />, color: "text-amber-500", warning: true },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((s, i) => (
        <div key={i} className={`p-6 rounded-xl border relative ${s.theme === 'dark' ? 'bg-emerald-700 text-white border-emerald-800' : 'bg-white text-slate-800 border-slate-200'} ${s.warning ? 'bg-amber-50 border-amber-200' : ''}`}>
          <p className={`text-xs font-semibold mb-1 ${s.theme === 'dark' ? 'opacity-70' : 'text-slate-500'}`}>{s.label}</p>
          <h2 className="text-2xl font-black mb-1">{s.value}</h2>
          <p className={`text-[11px] font-medium ${s.theme === 'dark' ? 'opacity-70' : 'text-slate-400'}`}>{s.sub}</p>
          <div className={`absolute top-6 right-6 p-2 rounded-lg ${s.theme === 'dark' ? 'bg-white/10' : 'bg-slate-100'} ${s.color}`}>
            {s.icon}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DealerStatsGrid;