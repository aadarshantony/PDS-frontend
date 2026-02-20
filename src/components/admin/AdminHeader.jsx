import React from 'react';
import { Search, Bell, ChevronDown } from 'lucide-react';

const AdminHeader = ({ searchTerm, setSearchTerm }) => (
  <header className="h-16 bg-white border-b flex items-center justify-between px-8">
    <div>
      <h1 className="text-lg font-bold text-slate-800">Admin Dashboard</h1>
      <p className="text-xs text-slate-400">State Overview • Feb 2026</p>
    </div>

    <div className="flex items-center gap-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
        <input 
          type="text" 
          placeholder="Search shops or locations..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-slate-100 border-none rounded-md py-1.5 pl-10 pr-4 text-sm w-64 focus:ring-1 focus:ring-teal-500"
        />
      </div>
      
      <div className="relative cursor-pointer">
        <Bell size={20} className="text-slate-500" />
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center border-2 border-white">7</span>
      </div>

      <div className="flex items-center gap-3 border-l pl-6">
        <div className="h-8 w-8 bg-teal-100 rounded-full flex items-center justify-center text-teal-700 font-bold text-xs">P</div>
        <div className="text-left">
            <span className="text-sm font-medium block leading-none">Priya Rajan IAS</span>
            <span className="text-[10px] text-slate-400">Chief Secretary</span>
        </div>
        <ChevronDown size={14} className="text-slate-400" />
      </div>
    </div>
  </header>
);

export default AdminHeader;