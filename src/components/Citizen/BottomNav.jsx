import React from 'react';
import { Home, Map, ShoppingCart, User } from 'lucide-react';

const BottomNav = ({ active, setView }) => {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'shops', icon: Map, label: 'Shops' },
    { id: 'orders', icon: ShoppingCart, label: 'Orders' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 px-6 py-3 flex justify-between items-center z-50 rounded-t-[30px] shadow-[0_-10px_30px_-15px_rgba(0,0,0,0.1)] xl:hidden">
      {navItems.map((item) => {
        const isActive = active === item.id;
        const Icon = item.icon;

        return (
          <button
            key={item.id}
            onClick={() => setView(item.id)}
            className={`flex flex-col items-center gap-1 transition-all duration-300 outline-none ${
              isActive ? 'text-emerald-500 transform -translate-y-1' : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            <div className={`p-2 rounded-xl transition-colors ${isActive ? 'bg-emerald-50' : 'bg-transparent'}`}>
              <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
            </div>
            
            <span className={`text-[10px] font-bold uppercase tracking-widest transition-opacity duration-300 ${
              isActive ? 'opacity-100' : 'opacity-0'
            }`}>
              {item.label}
            </span>

            {/* Subtle Active Indicator Dot */}
            {isActive && (
              <div className="w-1 h-1 bg-emerald-500 rounded-full mt-0.5" />
            )}
          </button>
        );
      })}
    </nav>
  );
};

export default BottomNav;