import React from 'react';
import { Warehouse, Store, Truck, AlertTriangle } from 'lucide-react';

const AdminStatCard = ({ data }) => {
  const isDark = data.dark;
  const isAlert = data.alert;

  // Map icons based on the label for a more realistic feel
  const getIcon = (label) => {
    if (label.includes('Warehouse')) return <Warehouse size={20} />;
    if (label.includes('Shops')) return <Store size={20} />;
    if (label.includes('Shipments')) return <Truck size={20} />;
    if (label.includes('Alerts')) return <AlertTriangle size={20} />;
    return <div className="w-5 h-5 border-2 border-current opacity-40 rounded" />;
  };

  return (
    <div className={`p-6 rounded-xl border transition-all hover:shadow-md ${
      isDark ? 'bg-teal-700 text-white border-teal-800' : 
      isAlert ? 'bg-red-50 text-red-900 border-red-100' : 
      'bg-white text-gray-800 border-slate-200'
    } shadow-sm flex justify-between`}>
      <div>
        <p className={`text-sm font-medium ${
          isDark ? 'text-teal-100' : 
          isAlert ? 'text-red-600' : 
          'text-gray-500'
        }`}>
          {data.label}
        </p>
        <h3 className="text-3xl font-bold mt-2">{data.value}</h3>
        <p className="text-xs mt-1 opacity-70">{data.sub}</p>
        
        {data.trend && (
          <p className={`text-xs mt-2 font-bold ${
            isDark ? 'text-teal-200' : 'text-emerald-600'
          }`}>
            {data.trend}
          </p>
        )}
      </div>

      <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${
        isDark ? 'bg-teal-600' : 
        isAlert ? 'bg-red-100 text-red-600' : 
        'bg-slate-100 text-slate-500'
      }`}>
         {getIcon(data.label)}
      </div>
    </div>
  );
};

export default AdminStatCard;