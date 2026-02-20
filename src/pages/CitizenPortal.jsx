import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Store, ClipboardList, Bell, LogOut } from 'lucide-react';

// Components
import UserHeader from '../components/Citizen/UserHeader';
import QuotaCard from '../components/Citizen/QuotaCard';
import ShopStatus from '../components/Citizen/ShopStatus';
import UsageTracker from '../components/Citizen/UsageTracker';

// Data - Pulling from your consolidated mock file
import { citizens, rationShops } from '../data/mockData';

const CitizenPortal = () => {
  const navigate = useNavigate();
  
  // Simulation: We treat the first person in our mockData as the "Logged In" user
  const user = citizens[0]; 
  const nearbyShop = rationShops[0];

  return (
    <div className="flex min-h-screen bg-[#f8fafc]">
      {/* 1. Permanent Desktop Sidebar */}
      <aside className="w-72 bg-[#0b1120] text-slate-400 flex flex-col hidden xl:flex sticky top-0 h-screen">
        <div className="p-8">
          <div className="flex items-center gap-3 text-white mb-10">
            <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center font-black">PDS</div>
            <span className="text-xl font-bold tracking-tight">Citizen Portal</span>
          </div>
          
          <nav className="space-y-2">
            <SidebarLink Icon={Home} label="Dashboard" active />
            <SidebarLink Icon={Store} label="Nearby Shops" />
            <SidebarLink Icon={ClipboardList} label="Order History" />
            <SidebarLink Icon={Bell} label="Alerts" count={2} />
          </nav>
        </div>

        <div className="mt-auto p-8">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-3 text-slate-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest"
          >
            <LogOut size={18} /> Switch Role
          </button>
        </div>
      </aside>

      {/* 2. Main Wide Content Area */}
      <div className="flex-grow flex flex-col h-screen overflow-y-auto">
        <UserHeader 
          name={user.name} 
          cardId={user.id} 
          category={user.cardType} 
          familyCount={user.members} 
        />

        <main className="p-10 max-w-[1400px] mx-auto w-full space-y-8">
          {/* Top Row: Important Stats - Dynamic from mockData */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <QuotaCard 
                item="Rice" 
                amount={`${user.monthlyQuota.rice} kg`} 
                color="orange" 
            />
            <QuotaCard 
                item="Wheat" 
                amount={`${user.monthlyQuota.wheat} kg`} 
                color="green" 
            />
          </div>

          {/* Middle Row: Shop Details - Connected to nearest shop in mockData */}
          <ShopStatus 
            shopName={`${nearbyShop.dealer}'s PDS Shop`}
            distance="0.3 km"
            status={nearbyShop.status === "Active" ? "Open Now" : "Closed"}
            timings="9 AM - 5 PM"
            stock={{ 
                rice: 520, 
                wheat: 300, 
                sugar: 45 
            }}
          />

          {/* Bottom Row: Detailed Consumption - Calculated from mock quota */}
          <UsageTracker 
            resetDate="1 March 2026"
            data={[
              { label: 'Rice', used: 12, total: user.monthlyQuota.rice, unit: 'kg' },
              { label: 'Wheat', used: 3, total: user.monthlyQuota.wheat, unit: 'kg' },
              { label: 'Sugar', used: 0.5, total: user.monthlyQuota.sugar, unit: 'kg' },
            ]}
          />
        </main>
      </div>
    </div>
  );
};

// Internal Sidebar Link Helper
const SidebarLink = ({ Icon, label, active, count }) => (
  <button className={`w-full flex items-center justify-between px-4 py-3.5 rounded-2xl transition-all ${
    active 
    ? 'bg-emerald-500 text-white font-bold shadow-lg shadow-emerald-500/20' 
    : 'hover:bg-white/5 text-slate-400'
  }`}>
    <div className="flex items-center gap-3">
      <Icon size={20} />
      <span>{label}</span>
    </div>
    {count && (
        <span className="bg-rose-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">
            {count}
        </span>
    )}
  </button>
);

export default CitizenPortal;