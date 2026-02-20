import React from 'react';
import { MapPin, Clock, Info } from 'lucide-react';

const ShopStatus = ({ shopName, distance, status, timings, stock }) => (
  <section className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm">
    <div className="flex flex-col lg:flex-row justify-between gap-8">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest">
          <MapPin size={12} /> Nearest Ration Shop
        </div>
        <h2 className="text-2xl font-black text-slate-800">{shopName}</h2>
        <div className="flex gap-6 text-sm">
          <div className="flex items-center gap-2 text-slate-500 font-medium">
            <Clock size={18} className="text-emerald-500" /> {timings}
          </div>
          <div className={`font-bold ${status === 'Open Now' ? 'text-emerald-500' : 'text-rose-500'}`}>
            ● {status}
          </div>
        </div>
      </div>

      <div className="flex-grow grid grid-cols-3 gap-4">
        {Object.entries(stock).map(([item, qty]) => (
          <div key={item} className="bg-slate-50 p-4 rounded-[24px] border border-slate-100 text-center">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{item}</p>
            <p className="text-xl font-black text-slate-800">{qty}kg</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ShopStatus;