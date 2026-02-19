import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { commodityData } from '../../data/adminMockData';

const CommoditySplit = () => (
  <div className="bg-white p-6 rounded-xl border h-full">
    <h4 className="font-bold mb-4 text-slate-800 text-sm">Commodity Split</h4>
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={commodityData}
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
          >
            {commodityData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
    <div className="mt-4 space-y-2">
      {commodityData.map((item) => (
        <div key={item.name} className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.fill }} />
            <span className="text-slate-500">{item.name}</span>
          </div>
          <span className="font-bold">{item.value}%</span>
        </div>
      ))}
    </div>
  </div>
);

export default CommoditySplit;