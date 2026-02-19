import React from 'react';
import * as Icons from 'lucide-react';

const StatCard = ({ item }) => {
  const Icon = Icons[item.icon];
  return (
    <div className={`p-6 rounded-xl border border-gray-100 shadow-sm ${item.color || 'bg-white'}`}>
      <div className="flex justify-between items-start">
        <div>
          {/* Changed text color to a darker shade for the "Low Stock Items" card */}
          <p className={`text-sm ${item.color ? 'text-gray-500' : 'text-gray-500'}`}>{item.label}</p>
          <h3 className={`text-2xl font-bold mt-1 ${item.label === 'Low Stock Items' ? 'text-red-900' : 'text-gray-900'}`}>{item.value}</h3>
          
          <p className={`text-xs mt-1 ${item.color ? 'text-teal-900' : 'text-gray-800'}`}>
            {item.label === 'Low Stock Items' ? 'Alerts' : item.sub}
          </p>
          {item.trend && <p className="text-xs text-green-600 mt-2 font-medium">{item.trend}</p>}
        </div>
        <div className={`p-2 rounded-lg ${item.color ? 'bg-white/20' : 'bg-gray-50'}`}>
          <Icon size={20} className={item.color ? 'text-white' : 'text-gray-600'} />
        </div>
      </div>
    </div>
  );
};

export default function StatGrid({ data }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      {data.map((s, i) => <StatCard key={i} item={s} />)}
    </div>
  );
}