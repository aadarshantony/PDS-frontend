import React from 'react';
import { AlertCircle, ArrowRight, ShieldAlert, History } from 'lucide-react';
// Importing the central mock alerts
import { alerts } from "../../data/mockData";

export default function StockAlerts() {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col h-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-rose-100 text-rose-600 rounded-lg">
            <ShieldAlert size={20} />
          </div>
          <h2 className="text-lg font-black text-slate-800 tracking-tight">Active Alerts</h2>
        </div>
        <button className="text-[10px] font-black text-slate-400 hover:text-teal-600 transition-colors uppercase tracking-widest flex items-center gap-1">
          <History size={14} /> Clear All
        </button>
      </div>

      {/* Alert List */}
      <div className="space-y-4 flex-1">
        {alerts.length > 0 ? (
          alerts.map((alert) => (
            <div 
              key={alert.id} 
              className={`group p-4 rounded-xl border transition-all hover:shadow-md cursor-default ${
                alert.type === 'Critical' 
                  ? 'bg-rose-50 border-rose-100' 
                  : 'bg-amber-50 border-amber-100'
              }`}
            >
              <div className="flex items-start gap-3">
                <AlertCircle 
                  size={18} 
                  className={`mt-0.5 ${alert.type === 'Critical' ? 'text-rose-600' : 'text-amber-600'}`} 
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <p className={`text-xs font-black uppercase tracking-wider mb-1 ${
                      alert.type === 'Critical' ? 'text-rose-700' : 'text-amber-700'
                    }`}>
                      {alert.type} Error
                    </p>
                    <span className="text-[9px] font-bold text-slate-400">2m ago</span>
                  </div>
                  <p className="text-sm font-bold text-slate-700 leading-snug">
                    {alert.message}
                  </p>
                  
                  {/* Hover Action Link */}
                  <button className="mt-3 flex items-center gap-1 text-[10px] font-black text-slate-900 uppercase tracking-widest group-hover:gap-2 transition-all">
                    Resolve Issue <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-10 opacity-40">
            <ShieldAlert size={40} className="text-slate-300 mb-2" />
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">No active alerts</p>
          </div>
        )}
      </div>

      {/* Footer Summary */}
      <div className="mt-6 pt-4 border-t border-slate-50">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">
          System Status: <span className="text-rose-500 underline underline-offset-2 decoration-rose-200">Attention Required</span>
        </p>
      </div>
    </div>
  );
}