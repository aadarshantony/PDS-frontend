import React from 'react';

export default function InventoryList({ items }) {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 h-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-gray-800">Current Inventory</h3>
        <div className="flex gap-2">
           <button className="px-3 py-1 text-sm border rounded-md flex items-center gap-1">Scan QR</button>
           <button className="px-3 py-1 text-sm bg-teal-600 text-white rounded-md">+ New Shipment</button>
        </div>
      </div>
      <div className="space-y-8">
        {items.map((item, i) => (
          <div key={i}>
            <div className="flex justify-between mb-2">
              <span className="font-medium">{item.name} <span className="text-gray-400 text-sm ml-2">{item.current} / {item.total} kg</span></span>
              <span className={`text-xs px-2 py-1 rounded-full ${item.status === 'Normal' ? 'bg-teal-50 text-teal-600' : 'bg-red-50 text-red-600'}`}>
                {item.status}
              </span>
            </div>
            <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
              <div className={`${item.color} h-full`} style={{ width: `${(item.current/item.total)*100}%` }} />
            </div>
            {item.threshold && (
              <p className="text-xs text-red-500 mt-1">⚠️ Below reorder threshold ({item.threshold} kg)</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}