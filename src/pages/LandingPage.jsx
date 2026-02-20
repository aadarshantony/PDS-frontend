import React from 'react';
import { Shield, Users, Warehouse, Store, ArrowRight, Activity, Database, CheckCircle } from 'lucide-react';

const LandingPage = () => {
  const roles = [
    {
      title: "Public Admin",
      desc: "Oversee system-wide allocations, monitor shop performance, and manage policy settings.",
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      path: "/admin",
      color: "bg-blue-50"
    },
    {
      title: "Warehouse Manager",
      desc: "Manage bulk inventory, track incoming shipments, and dispatch stock to ration shops.",
      icon: <Warehouse className="w-6 h-6 text-emerald-600" />,
      path: "/warehouse",
      color: "bg-warehouse" // or bg-emerald-50
    },
    {
      title: "Ration Shop Dealer",
      desc: "Distribute essential commodities, verify citizen credentials, and update local stock.",
      icon: <Store className="w-6 h-6 text-orange-600" />,
      path: "/dealer",
      color: "bg-orange-50"
    },
    {
      title: "Citizen Portal",
      desc: "Check your monthly quota, view transaction history, and find nearby ration shops.",
      icon: <Users className="w-6 h-6 text-purple-600" />,
      path: "/citizen",
      color: "bg-purple-50"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 bg-white border-b border-slate-200">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-2 rounded-lg">
            <Database className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-800">
            PDS<span className="text-blue-600">Nirman</span>
          </span>
        </div>
        <div className="flex gap-4">
          <button className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600">Documentation</button>
          <button className="px-5 py-2 text-sm font-medium bg-slate-900 text-white rounded-full">Support</button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-7xl mx-auto px-8 pt-20 pb-16 text-center">
        <span className="px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
          Blockchain-Enabled Transparency
        </span>
        <h1 className="mt-6 text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
          The Future of <span className="text-blue-600">Public Distribution</span>
        </h1>
        <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          A decentralized, transparent, and efficient system designed to ensure essential commodities reach every citizen.
        </p>
      </header>

      {/* Role Selection Grid */}
      <main className="max-w-7xl mx-auto px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role) => (
            <div
              key={role.title}
              className="group p-8 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all cursor-pointer"
              onClick={() => window.location.href = role.path}
            >
              <div className={`w-14 h-14 ${role.color} rounded-2xl flex items-center justify-center mb-6`}>
                {role.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">{role.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                {role.desc}
              </p>
              <div className="flex items-center text-blue-600 text-sm font-bold">
                Enter Dashboard <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Status Bar */}
        <div className="mt-16 p-6 bg-slate-900 rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <p className="text-sm text-slate-400 font-medium">
              <span className="text-white">1,240+</span> Citizens currently active in the system
            </p>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm font-medium">
              <Activity className="w-4 h-4 text-emerald-400" />
              <span>Network Status: <span className="text-emerald-400">Optimal</span></span>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium">
              <CheckCircle className="w-4 h-4 text-blue-400" />
              <span>Version: 2.1.0-Stable</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;