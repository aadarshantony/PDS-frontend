import React from 'react';

const AdminStatCard = ({ data }) => {
  const isDark = data.dark;
  return (
    <div className={`p-6 rounded-xl border ${isDark ? 'bg-teal-700 text-white' : 'bg-white text-gray-800'} shadow-sm flex justify-between`}>
      <div>
        <p className={`text-sm font-medium ${isDark ? 'text-teal-100' : 'text-gray-500'}`}>{data.label}</p>
        <h3 className="text-3xl font-bold mt-2">{data.value}</h3>
        <p className="text-xs mt-1 opacity-70">{data.sub}</p>
        {data.trend && <p className="text-xs mt-2 text-green-500 font-bold">{data.trend}</p>}
      </div>
      <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${isDark ? 'bg-teal-600' : 'bg-gray-100'}`}>
         {/* Icon placeholder - adjust based on type */}
         <div className="w-5 h-5 border-2 border-current opacity-40 rounded" />
      </div>
    </div>
  );
};
export default AdminStatCard;