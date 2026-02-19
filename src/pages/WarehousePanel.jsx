import React from 'react';
import StatGrid from '../components/warehouse/StatGrid';
import InventoryList from '../components/warehouse/InventoryList';
import DispatchChart from '../components/warehouse/DispatchChart';
import { stats, inventory, chartData } from '../data/mockData';
// Added AlertTriangle to the imports
import { Bell, Search, User, AlertTriangle } from 'lucide-react';

export default function WarehousePanel() {
  return (
    <div className="flex-1 bg-gray-50 min-h-screen p-8">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-xl font-bold text-gray-800">Warehouse Panel</h1>
          <p className="text-sm text-gray-500">Central Warehouse, Bangalore</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            <input className="pl-10 pr-4 py-2 border rounded-lg w-64 bg-white focus:outline-none focus:ring-1 focus:ring-teal-500" placeholder="Search..." />
          </div>
          <div className="relative p-2 bg-white rounded-full border cursor-pointer hover:bg-gray-50 transition-colors">
            <Bell size={20} className="text-gray-600" />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] px-1 rounded-full border-2 border-white">3</span>
          </div>
          <div className="flex items-center gap-2 border-l pl-4">
            <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
              S
            </div>
            <span className="text-sm font-medium text-gray-700">Suresh Anand</span>
          </div>
        </div>
      </header>

      <StatGrid data={stats} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Inventory Column */}
        <div className="lg:col-span-2">
          <InventoryList items={inventory} />
        </div>

        {/* Sidebar Column: Chart & Alerts */}
        <div className="space-y-6">
          <DispatchChart data={chartData} />
          
          {/* Stock Alerts Card */}
          <div className="bg-red-50/50 p-6 rounded-xl border border-red-100 shadow-sm">
            <h3 className="font-bold text-red-800 text-sm mb-4 flex items-center gap-2">
              {/* Replaced emoji with AlertTriangle icon */}
              <AlertTriangle size={18} className="text-red-600" /> 
              Stock Alerts
            </h3>
            <div className="space-y-3">
              {[
                { name: 'Rice', status: 'LOW STOCK' },
                { name: 'Sugar', status: 'CRITICAL' },
                { name: 'Salt', status: 'LOW STOCK' }
              ].map((item) => (
                <div key={item.name} className="flex justify-between items-center text-sm">
                  <span className="text-gray-700 font-medium">{item.name}</span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                    item.status === 'CRITICAL' 
                      ? 'bg-red-100 text-red-600' 
                      : 'bg-orange-100 text-orange-600'
                  }`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}