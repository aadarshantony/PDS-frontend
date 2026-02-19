import React from 'react';
import DealerSidebar from '../components/rationshop/DealerSidebar';
import DealerHeader from '../components/rationshop/DealerHeader';
import DealerStatsGrid from '../components/rationshop/DealerStatsGrid';
import TransactionChart from '../components/rationshop/TransactionChart';
import LowStockCard from '../components/rationshop/LowStockCard';

const RationShopDealer = () => {
  return (
    <div className="flex min-h-screen bg-slate-50 font-sans antialiased">
      <DealerSidebar />

      <main className="ml-64 flex-1 flex flex-col">
        <DealerHeader shopId="#A-14" shopName="Rajiv Nagar" dealerName="Vikram Nair" />

        <div className="p-8 space-y-8">
          {/* Dashboard Tabs */}
          <div className="flex gap-8 border-b text-sm font-semibold text-slate-400">
            <button className="text-emerald-600 border-b-2 border-emerald-600 pb-3">Dashboard</button>
            <button className="pb-3 hover:text-slate-600">Inventory</button>
            <button className="pb-3 hover:text-slate-600">Incoming</button>
            <button className="pb-3 hover:text-slate-600">Sales</button>
          </div>

          <DealerStatsGrid />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <TransactionChart />
            </div>
            <LowStockCard />
          </div>
        </div>
      </main>
    </div>
  );
};

export default RationShopDealer;