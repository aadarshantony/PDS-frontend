import React from 'react';
import { useNavigate } from 'react-router-dom'; // Add this for navigation
import { LayoutDashboard, Warehouse, Truck, ShoppingCart, BarChart3, MessageSquare, Bell, Users, LogOut } from 'lucide-react';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const navigate = useNavigate();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Overview' },
    { icon: Warehouse, label: 'Warehouses' },
    { icon: Truck, label: 'Shipments' },
    { icon: ShoppingCart, label: 'Ration Shops' },
    { icon: BarChart3, label: 'Analytics' },
    { icon: MessageSquare, label: 'Complaints' },
    { icon: Bell, label: 'Alerts' },
    { icon: Users, label: 'Users' },
  ];

  return (
    <aside className="w-64 bg-[#0f172a] text-slate-300 min-h-screen p-4 flex flex-col sticky top-0 h-screen">
      <div className="flex items-center gap-2 px-2 mb-8">
        <div className="bg-teal-500 p-1 rounded">
          <Warehouse size={20} className="text-white" />
        </div>
        <span className="font-bold text-white text-lg tracking-tight">PDS Track</span>
      </div>
      
      <nav className="flex-1 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.label}
            onClick={() => setActiveTab && setActiveTab(item.label)} // Connect to Dashboard state
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${
              activeTab === item.label 
                ? 'bg-teal-600/20 text-teal-400 border-l-4 border-teal-500' 
                : 'hover:bg-slate-800'
            }`}
          >
            <item.icon size={18} />
            {item.label}
          </button>
        ))}
      </nav>

      {/* Actual functional Logout/Switch button */}
      <button 
        onClick={() => navigate('/')} 
        className="flex items-center gap-3 px-3 py-4 text-sm hover:text-white border-t border-slate-800 transition-colors"
      >
        <LogOut size={18} />
        Switch Role
      </button>
    </aside>
  );
};

export default Sidebar;