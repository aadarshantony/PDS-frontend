import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
// Update import to match your consolidated data file
import { commodityData } from '../../data/mockData'; 

const CommoditySplit = () => (
  <div className="bg-white p-6 rounded-xl border h-full flex flex-col">
    <h4 className="font-bold mb-4 text-slate-800 text-sm">Commodity Split</h4>
    <div className="h-64 relative">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={commodityData}
            innerRadius={65} // Slightly larger for cleaner look
            outerRadius={85}
            paddingAngle={8}
            dataKey="value"
            stroke="none" // Removes the thin white border for a flatter UI
          >
            {commodityData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
          />
        </PieChart>
      </ResponsiveContainer>
      
      {/* Central Label - Makes the donut look premium */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <span className="text-2xl font-bold text-slate-800">100%</span>
        <span className="text-[10px] text-slate-400 uppercase font-semibold">Allocated</span>
      </div>
    </div>

    <div className="mt-6 space-y-3">
      {commodityData.map((item) => (
        <div key={item.name} className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: item.fill }} />
            <span className="text-slate-600 font-medium">{item.name}</span>
          </div>
          <span className="font-bold text-slate-800">{item.value}%</span>
        </div>
      ))}
    </div>
  </div>
);

export default CommoditySplit;