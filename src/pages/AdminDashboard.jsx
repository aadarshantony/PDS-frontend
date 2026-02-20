import React, { useState } from 'react';
import Sidebar from '../components/admin/Sidebar';
import AdminHeader from '../components/admin/AdminHeader';
import AdminStatCard from '../components/admin/AdminStatCard';
import TrendChart from '../components/admin/TrendChart';
import CommoditySplit from '../components/admin/CommoditySplit';
import { statsData, rationShops } from '../data/mockData'; 

const AdminDashboard = () => {
  // --- STATE MANAGEMENT ---
  const [shops, setShops] = useState(rationShops);
  const [activeTab, setActiveTab] = useState('Overview');
  const [searchTerm, setSearchTerm] = useState("");

  // --- LOGIC: Filter shops based on search input ---
  const filteredShops = shops.filter(shop => 
    shop.dealer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    shop.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    shop.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* 1. Sidebar: Pass state to highlight active menu item */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1">
        {/* 2. Header: Pass search state and setter */}
        <AdminHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        
        <div className="p-8">
            {/* Tabs Row */}
            <div className="flex gap-8 border-b mb-8 text-sm font-medium text-gray-500">
                {['Overview', 'Shipments', 'Complaints', 'Ration Shops'].map(tab => (
                  <button 
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-2 transition-all ${
                      activeTab === tab 
                      ? 'text-teal-600 border-b-2 border-teal-600' 
                      : 'hover:text-slate-800'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
            </div>

            {/* --- OVERVIEW TAB --- */}
            {activeTab === 'Overview' && (
              <>
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {statsData.map((stat, i) => (
                      <AdminStatCard key={i} data={stat} />
                    ))}
                </div>

                {/* Charts Row */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    <div className="lg:col-span-2">
                        <TrendChart />
                    </div>
                    <div className="bg-white p-6 rounded-xl border shadow-sm">
                        <CommoditySplit />
                    </div>
                </div>

                {/* Quick Shop Directory: Reacts to Search */}
                <div className="bg-white p-6 rounded-xl border shadow-sm">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h4 className="font-bold text-slate-800">Ration Shop Directory</h4>
                      <p className="text-xs text-slate-400">Showing {filteredShops.length} results</p>
                    </div>
                    <button className="text-xs bg-teal-50 text-teal-600 px-3 py-1.5 rounded-lg font-bold hover:bg-teal-100 transition-colors">
                      Export Report
                    </button>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-slate-50 text-slate-500 uppercase text-[10px] font-bold tracking-wider">
                        <tr>
                          <th className="p-4">Shop ID</th>
                          <th className="p-4">Dealer Name</th>
                          <th className="p-4">Location</th>
                          <th className="p-4 text-center">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {filteredShops.length > 0 ? (
                          filteredShops.map(shop => (
                            <tr key={shop.id} className="hover:bg-slate-50/50 transition-colors">
                              <td className="p-4 font-mono text-xs text-slate-600">{shop.id}</td>
                              <td className="p-4 font-semibold text-slate-700">{shop.dealer}</td>
                              <td className="p-4 text-slate-500">{shop.location}</td>
                              <td className="p-4 text-center">
                                <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                                  shop.status === 'Active' 
                                  ? 'bg-emerald-100 text-emerald-700' 
                                  : 'bg-rose-100 text-rose-700'
                                }`}>
                                  {shop.status}
                                </span>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="4" className="p-10 text-center text-slate-400 italic">
                              No shops found matching "{searchTerm}"
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            )}

            {/* --- PLACEHOLDERS FOR OTHER TABS --- */}
            {activeTab !== 'Overview' && (
              <div className="flex flex-col items-center justify-center h-64 bg-white rounded-xl border border-dashed border-slate-300">
                <p className="text-slate-400 font-medium">{activeTab} module is initializing...</p>
                <p className="text-xs text-slate-300 mt-1">Mock data stream active</p>
              </div>
            )}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;