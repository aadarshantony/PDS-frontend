import React from 'react';
import * as Icons from 'lucide-react';

const StatCard = ({ item }) => {
  const Icon = Icons[item.icon] || Icons.Activity;
  const isWarning = item.label.toLowerCase().includes('low') || item.label.toLowerCase().includes('alert');
  
  return (
    <div className={`p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative overflow-hidden ${
      item.color === 'bg-teal-600' 
        ? 'bg-teal-600 border-teal-700 text-white shadow-lg shadow-teal-600/20' 
        : isWarning 
          ? 'bg-rose-50 border-rose-100' 
          : 'bg-white border-slate-100 shadow-sm'
    }`}>
      <div className="flex justify-between items-start relative z-10">
        <div>
          <p className={`text-[10px] font-black uppercase tracking-widest mb-1 ${
            item.color === 'bg-teal-600' ? 'text-teal-100' : 'text-slate-400'
          }`}>
            {item.label}
          </p>
          
          <h3 className={`text-3xl font-black tracking-tight ${
            item.color === 'bg-teal-600' 
              ? 'text-white' 
              : isWarning ? 'text-rose-700' : 'text-slate-800'
          }`}>
            {item.value}
          </h3>
          
          <p className={`text-[11px] font-bold mt-1 ${
            item.color === 'bg-teal-600' 
              ? 'text-teal-100/80' 
              : isWarning ? 'text-rose-500' : 'text-slate-500'
          }`}>
            {item.sub}
          </p>

          {item.trend && (
            <div className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-black mt-3 ${
              item.color === 'bg-teal-600' ? 'bg-white/20 text-white' : 'bg-emerald-100 text-emerald-700'
            }`}>
              {item.trend}
            </div>
          )}
        </div>

        <div className={`p-3 rounded-xl ${
          item.color === 'bg-teal-600' 
            ? 'bg-white/10 text-white shadow-inner' 
            : isWarning ? 'bg-rose-100 text-rose-600' : 'bg-slate-50 text-slate-400'
        }`}>
          <Icon size={22} strokeWidth={2.5} />
        </div>
      </div>
      
      {item.color === 'bg-teal-600' && (
        <div className="absolute -right-4 -bottom-4 opacity-10 rotate-12">
          <Icon size={100} />
        </div>
      )}
    </div>
  );
};

export default function StatGrid({ data }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {data.map((s, i) => <StatCard key={i} item={s} />)}
    </div>
  );
}