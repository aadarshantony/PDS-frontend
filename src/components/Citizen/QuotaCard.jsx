import React from 'react';
import { UserCircle, CreditCard, Users } from 'lucide-react';

const UserHeader = ({ name, cardId, category, familyCount }) => (
  <header className="bg-white border-b border-slate-100 p-8 md:p-10">
    <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
      <div className="flex items-center gap-6">
        <div className="w-20 h-20 bg-emerald-100 rounded-[30px] flex items-center justify-center text-emerald-600">
          <UserCircle size={48} strokeWidth={1.5} />
        </div>
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Namaste, {name}</h1>
          <div className="flex flex-wrap gap-3 mt-2">
            <span className="flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold uppercase tracking-wider">
              <CreditCard size={14} /> {cardId}
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-wider">
              {category}
            </span>
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-3xl border border-slate-100">
        <div className="bg-white p-2 rounded-xl shadow-sm text-slate-400">
          <Users size={20} />
        </div>
        <div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Family Members</p>
          <p className="text-lg font-black text-slate-800">{familyCount} Registered</p>
        </div>
      </div>
    </div>
  </header>
);

export default UserHeader;