import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

// Mock data representing the daily volume shown in your screenshot
const data = [
  { day: 'Mon', volume: 42 },
  { day: 'Tue', volume: 58 },
  { day: 'Wed', volume: 35 },
  { day: 'Thu', volume: 68 },
  { day: 'Fri', volume: 72 },
  { day: 'Sat', volume: 90 },
  { day: 'Sun', volume: 22 },
];

const TransactionChart = () => {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm h-full">
      <div className="flex justify-between items-center mb-8">
        <h3 className="font-bold text-slate-800">Daily Transaction Volume (This Week)</h3>
        <select className="text-xs font-bold text-slate-400 bg-slate-50 border-none rounded-md px-2 py-1 outline-none cursor-pointer">
          <option>Weekly</option>
          <option>Monthly</option>
        </select>
      </div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
            {/* Grid lines only on the Y axis for that clean PDS look */}
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            
            <XAxis 
              dataKey="day" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 500 }} 
              dy={10} 
            />
            
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94a3b8', fontSize: 12 }} 
            />

            <Tooltip 
              cursor={{ fill: '#f8fafc' }}
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
            />

            <Bar 
              dataKey="volume" 
              fill="#10b981" 
              radius={[4, 4, 0, 0]} 
              barSize={35} 
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TransactionChart;