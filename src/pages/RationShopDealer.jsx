import React, { useState } from 'react';
import DealerSidebar from '../components/rationshop/DealerSidebar';
import DealerHeader from '../components/rationshop/DealerHeader';
import DealerStatsGrid from '../components/rationshop/DealerStatsGrid';
import TransactionChart from '../components/rationshop/TransactionChart';
import LowStockCard from '../components/rationshop/LowStockCard';

// Data - Ensure this imports from your consolidated mock file
import { inventory, rationShops } from '../data/mockData';

const RationShopDealer = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');
  
  // Simulation: Grab the specific shop data for this dealer
  // In our mock data, shop ARD-104 is the primary one
  const currentShop = rationShops[0]; 

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans antialiased">
      <DealerSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="ml-64 flex-1 flex flex-col h-screen overflow-y-auto">
        <DealerHeader 
          shopId={currentShop.id} 
          shopName={currentShop.location} 
          dealerName={currentShop.dealer} 
        />

        <div className="p-8 space-y-8">
          {/* Dashboard Tabs */}
          <div className="flex gap-8 border-b text-sm font-semibold text-slate-400">
            {['Dashboard', 'Inventory', 'Incoming', 'Sales'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 transition-all ${
                  activeTab === tab 
                    ? 'text-emerald-600 border-b-2 border-emerald-600' 
                    : 'hover:text-slate-600'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {activeTab === 'Dashboard' ? (
            <>
              <DealerStatsGrid />

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <TransactionChart />
                </div>
                {/* Passes inventory to show items that are 'Low Stock' */}
                <LowStockCard items={inventory.filter(i => i.status === 'Low Stock' || i.status === 'Critical')} />
              </div>
            </>
          ) : (
            <div className="bg-white rounded-2xl border p-12 text-center border-dashed border-slate-300">
              <h3 className="text-slate-500 font-bold uppercase tracking-widest">{activeTab} Module Active</h3>
              <p className="text-slate-400 text-sm mt-2">Mock data stream synced for {currentShop.location}</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default RationShopDealer;