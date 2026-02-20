import React from 'react';
import { Calendar } from 'lucide-react';

const UsageTracker = ({ resetDate, data }) => (
  <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm">
    <div className="flex justify-between items-center mb-8">
      <h3 className="text-xl font-black text-slate-800">Monthly Consumption</h3>
      <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
        <Calendar size={14} /> QUOTA RESETS ON: <span className="text-slate-800">{resetDate}</span>
      </div>
    </div>

    <div className="space-y-8">
      {data.map((item) => {
        const percentage = Math.min((item.used / item.total) * 100, 100);
        return (
          <div key={item.label} className="space-y-3">
            <div className="flex justify-between items-end">
              <div>
                <p className="text-lg font-black text-slate-800">{item.label}</p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  {item.used} {item.unit} used of {item.total} {item.unit}
                </p>
              </div>
              <p className="text-lg font-black text-emerald-500">{Math.round(percentage)}%</p>
            </div>
            <div className="h-4 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-emerald-500 rounded-full transition-all duration-1000" 
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default UsageTracker;