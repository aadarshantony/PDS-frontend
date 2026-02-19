import React from 'react';
import Sidebar from '../components/admin/Sidebar';
import AdminHeader from '../components/admin/AdminHeader';
import AdminStatCard from '../components/admin/AdminStatCard';
import TrendChart from '../components/admin/TrendChart';
import CommoditySplit from '../components/admin/CommoditySplit';
import { statsData } from '../data/adminMockData';

const AdminDashboard = () => {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      <main className="flex-1">
        <AdminHeader />
        <div className="p-8">
            {/* Tabs Row */}
            <div className="flex gap-8 border-b mb-8 text-sm font-medium text-gray-500">
                <button className="text-teal-600 border-b-2 border-teal-600 pb-2">Overview</button>
                <button className="pb-2">Shipments</button>
                <button className="pb-2">Complaints</button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {statsData.map((stat, i) => <AdminStatCard key={i} data={stat} />)}
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <TrendChart />
                </div>
                <div className="bg-white p-6 rounded-xl border">
                    <h4 className="font-bold mb-4">Commodity Split</h4>
                    {/* Simplified Donut Placeholder */}
                    <div className="h-64 flex items-center justify-center border-4 border-teal-500 rounded-full w-64 mx-auto border-t-orange-400 border-l-purple-400">
                        <span className="text-xl font-bold">Stock %</span>
                    </div>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;