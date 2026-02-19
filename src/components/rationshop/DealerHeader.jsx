import React from 'react';
import { Search, Bell } from 'lucide-react';

const DealerHeader = ({ shopId, shopName, dealerName }) => {
  return (
    <header className="h-16 bg-white border-b px-8 flex items-center justify-between sticky top-0 z-10">
      {/* Shop Info */}
      <div>
        <h1 className="text-lg font-bold text-slate-800">Dealer Dashboard</h1>
        <p className="text-xs text-slate-500">
          Shop {shopId}, {shopName}
        </p>
      </div>

      {/* Actions & Profile */}
      <div className="flex items-center gap-6">
        {/* Search Bar */}
        <div className="relative">
          <Search 
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" 
            size={18} 
          />
          <input 
            type="text" 
            placeholder="Search..." 
            className="pl-10 pr-4 py-2 bg-slate-100 border-none rounded-lg text-sm w-64 focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
          />
        </div>

        {/* Notifications */}
        <div className="relative cursor-pointer hover:opacity-80 transition-opacity">
          <Bell size={22} className="text-slate-600" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center border-2 border-white font-bold">
            2
          </span>
        </div>

        {/* Profile Section */}
        <div className="flex items-center gap-3 border-l pl-6">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-slate-800 leading-none mb-1">
              {dealerName}
            </p>
            <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
              Authorized Dealer
            </p>
          </div>
          <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold shadow-sm ring-2 ring-white">
            {dealerName?.charAt(0) || 'D'}
          </div>
        </div>
      </div>
    </header>
  );
};

export default DealerHeader;