import React from 'react';
import { LayoutDashboard, Package, Truck, ShoppingCart, Users, Bell, LogOut, ChevronLeft } from 'lucide-react';

const DealerSidebar = () => (
  <aside className="w-64 bg-[#0b1b35] text-slate-400 flex flex-col fixed h-full">
    <div className="p-6">
      <div className="flex items-center justify-between text-white mb-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-emerald-500 rounded flex items-center justify-center font-bold text-white">P</div>
          <span className="font-bold tracking-tight">PDS Track</span>
        </div>
        <ChevronLeft size={16} className="cursor-pointer text-slate-500" />
      </div>
      <nav className="space-y-1">
        <NavItem icon={<LayoutDashboard size={20}/>} label="Dashboard" active />
        <NavItem icon={<Package size={20}/>} label="Inventory" />
        <NavItem icon={<Truck size={20}/>} label="Incoming" />
        <NavItem icon={<ShoppingCart size={20}/>} label="Sales" />
        <NavItem icon={<Users size={20}/>} label="Customers" />
        <NavItem icon={<Bell size={20}/>} label="Alerts" />
      </nav>
    </div>
    <div className="mt-auto p-6 border-t border-slate-800">
      <button className="flex items-center gap-3 text-sm hover:text-white transition-colors">
        <LogOut size={18} /> Switch Role
      </button>
    </div>
  </aside>
);

const NavItem = ({ icon, label, active = false }) => (
  <div className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-colors ${active ? 'bg-emerald-500 text-white font-bold' : 'hover:bg-white/5'}`}>
    {icon}
    <span className="text-sm">{label}</span>
  </div>
);

export default DealerSidebar;