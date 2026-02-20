import React from 'react';
import { Search, Bell } from 'lucide-react';

const DealerHeader = ({ shopId, shopName, dealerName, searchTerm, setSearchTerm }) => {
  return (
    <header className="h-16 bg-white border-b px-8 flex items-center justify-between sticky top-0 z-20">
      {/* Shop Info */}
      <div className="flex flex-col">
        <h1 className="text-lg font-bold text-slate-800 leading-tight">Dealer Dashboard</h1>
        <div className="flex items-center gap-2">
          <span className="text-[10px] bg-emerald-100 text-emerald-700 font-bold px-1.5 py-0.5 rounded uppercase">
            {shopId}
          </span>
          <p className="text-xs text-slate-500 font-medium">
            {shopName} Junction Shop
          </p>
        </div>
      </div>

      {/* Actions & Profile */}
      <div className="flex items-center gap-6">
        {/* Search Bar Linked to State */}
        <div className="relative group">
          <Search 
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors" 
            size={18} 
          />
          <input 
            type="text" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search transactions or citizens..." 
            className="pl-10 pr-4 py-2 bg-slate-100 border-none rounded-lg text-sm w-64 focus:ring-2 focus:ring-emerald-500 outline-none transition-all focus:bg-white focus:shadow-sm"
          />
        </div>

        {/* Notifications */}
        <div className="relative cursor-pointer hover:bg-slate-50 p-2 rounded-full transition-all">
          <Bell size={22} className="text-slate-600" />
          <span className="absolute top-1.5 right-1.5 bg-rose-500 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center border-2 border-white font-black">
            2
          </span>
        </div>

        {/* Profile Section */}
        <div className="flex items-center gap-3 border-l pl-6">
          <div className="text-right hidden lg:block">
            <p className="text-sm font-bold text-slate-800 leading-none mb-1">
              {dealerName}
            </p>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
              License #1092-A
            </p>
          </div>
          <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-black shadow-md shadow-emerald-200 transform hover:rotate-3 transition-transform cursor-pointer">
            {dealerName?.charAt(0) || 'D'}
          </div>
        </div>
      </div>
    </header>
  );
};

export default DealerHeader;