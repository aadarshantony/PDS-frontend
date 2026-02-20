import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LayoutDashboard, Package, Truck, ShoppingCart, Users, Bell, LogOut, ChevronLeft } from 'lucide-react';

const DealerSidebar = ({ activeTab, setActiveTab }) => {
  const navigate = useNavigate();

  const menuItems = [
    { icon: <LayoutDashboard size={20}/>, label: "Dashboard" },
    { icon: <Package size={20}/>, label: "Inventory" },
    { icon: <Truck size={20}/>, label: "Incoming" },
    { icon: <ShoppingCart size={20}/>, label: "Sales" },
    { icon: <Users size={20}/>, label: "Customers" },
    { icon: <Bell size={20}/>, label: "Alerts" },
  ];

  return (
    <aside className="w-64 bg-[#0b1b35] text-slate-400 flex flex-col fixed h-full z-30">
      <div className="p-6">
        <div className="flex items-center justify-between text-white mb-10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-emerald-500 rounded flex items-center justify-center font-bold text-white shadow-lg shadow-emerald-500/20">
              P
            </div>
            <span className="font-bold tracking-tight text-lg">PDS Track</span>
          </div>
          <ChevronLeft size={16} className="cursor-pointer text-slate-500 hover:text-white transition-colors" />
        </div>

        <nav className="space-y-1">
          {menuItems.map((item) => (
            <NavItem 
              key={item.label}
              icon={item.icon} 
              label={item.label} 
              active={activeTab === item.label}
              onClick={() => setActiveTab(item.label)}
            />
          ))}
        </nav>
      </div>

      <div className="mt-auto p-6 border-t border-slate-800">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-3 text-sm hover:text-white transition-colors group"
        >
          <LogOut size={18} className="group-hover:translate-x-1 transition-transform" />
          <span className="font-medium">Switch Role</span>
        </button>
      </div>
    </aside>
  );
};

const NavItem = ({ icon, label, active = false, onClick }) => (
  <div 
    onClick={onClick}
    className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 ${
      active 
      ? 'bg-emerald-500 text-white font-bold shadow-md shadow-emerald-500/10' 
      : 'hover:bg-white/5 hover:text-slate-200'
    }`}
  >
    <span className={active ? "text-white" : "text-emerald-500"}>{icon}</span>
    <span className="text-sm">{label}</span>
  </div>
);

export default DealerSidebar;