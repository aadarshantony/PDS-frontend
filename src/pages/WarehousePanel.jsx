import React, { useState } from 'react';
import StatGrid from '../components/warehouse/StatGrid';
import InventoryList from '../components/warehouse/InventoryList';
import DispatchChart from '../components/warehouse/DispatchChart';
import { stats, inventory, chartData } from '../data/mockData';
import { Bell, Search, User, AlertTriangle, RefreshCw } from 'lucide-react';

export default function WarehousePanel() {
  const [searchTerm, setSearchTerm] = useState("");

  // Logic: Filter inventory based on search input
  const filteredInventory = inventory.filter(item => 
    item.item.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Logic: Grab Critical items for the Sidebar Alert Card
  const criticalItems = inventory.filter(i => i.status === 'Critical' || i.status === 'Low Stock');

  return (
    <div className="flex-1 bg-gray-50 min-h-screen p-8 overflow-y-auto h-screen">
      {/* Header */}
      <header className="flex justify-between items-center mb-8 sticky top-0 z-10 bg-gray-50/80 backdrop-blur-sm pb-4">
        <div>
          <h1 className="text-2xl font-black text-gray-800 tracking-tight">Warehouse Panel</h1>
          <p className="text-xs font-bold text-teal-600 uppercase tracking-widest">Central Warehouse, Bangalore</p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2.5 border-none rounded-xl w-72 bg-white shadow-sm focus:ring-2 focus:ring-teal-500 transition-all outline-none text-sm" 
              placeholder="Search SKU or Commodity..." 
            />
          </div>
          
          <div className="relative p-2.5 bg-white rounded-xl border border-gray-100 cursor-pointer hover:bg-gray-50 transition-all shadow-sm">
            <Bell size={20} className="text-gray-600" />
            <span className="absolute top-2 right-2 bg-red-500 text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full border-2 border-white font-bold">3</span>
          </div>

          <div className="flex items-center gap-3 border-l pl-4 ml-2">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-gray-800 leading-none">Suresh Anand</p>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">Inventory Head</p>
            </div>
            <div className="w-10 h-10 bg-teal-600 rounded-xl flex items-center justify-center text-white font-black shadow-lg shadow-teal-600/20">
              S
            </div>
          </div>
        </div>
      </header>

      <StatGrid data={stats} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        {/* Main Inventory Column */}
        <div className="lg:col-span-2">
          <InventoryList items={filteredInventory} />
        </div>

        {/* Sidebar Column: Chart & Alerts */}
        <div className="space-y-6">
          <DispatchChart data={chartData} />
          
          {/* Stock Alerts Card - Linked to Mock Data */}
          <div className="bg-white p-6 rounded-2xl border border-red-100 shadow-sm border-t-4 border-t-red-500">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-gray-800 text-sm flex items-center gap-2">
                <AlertTriangle size={18} className="text-red-600" /> 
                Live Stock Alerts
              </h3>
              <RefreshCw size={14} className="text-gray-400 cursor-pointer hover:rotate-180 transition-all" />
            </div>
            
            <div className="space-y-4">
              {criticalItems.slice(0, 4).map((item) => (
                <div key={item.id} className="group cursor-default">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-700 font-bold">{item.item}</span>
                    <span className={`px-2 py-0.5 rounded-md text-[9px] font-black tracking-widest ${
                      item.status === 'Critical' 
                        ? 'bg-red-100 text-red-600' 
                        : 'bg-orange-100 text-orange-600'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-1000 ${item.status === 'Critical' ? 'bg-red-500' : 'bg-orange-500'}`} 
                      style={{ width: `${(item.stock / 1000) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-6 py-3 bg-gray-900 text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-black transition-colors">
              Generate Procurement Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}