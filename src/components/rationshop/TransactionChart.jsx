import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';

// Import from your consolidated mock data
import { transactions } from '../../data/mockData';

// Simulated aggregation of mock data volume
const data = [
  { day: 'Mon', volume: 42 },
  { day: 'Tue', volume: 58 },
  { day: 'Wed', volume: 35 },
  { day: 'Thu', volume: 68 },
  { day: 'Fri', volume: 72 }, // Today (Matches mock date Feb 20)
  { day: 'Sat', volume: 0 },
  { day: 'Sun', volume: 0 },
];

const TransactionChart = () => {
  // Logic: Highlight the bar if it's the current volume (Friday)
  const currentDay = "Fri";

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm h-full flex flex-col">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h3 className="font-black text-slate-800 tracking-tight">Daily Transaction Volume</h3>
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Current Week Performance</p>
        </div>
        <select className="text-[10px] font-black uppercase tracking-widest text-slate-500 bg-slate-100 border-none rounded-lg px-3 py-2 outline-none cursor-pointer hover:bg-slate-200 transition-colors">
          <option>Weekly View</option>
          <option>Monthly View</option>
        </select>
      </div>

      <div className="h-64 w-full mt-auto">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 0, right: 0, left: -25, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            
            <XAxis 
              dataKey="day" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 700 }} 
              dy={10} 
            />
            
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94a3b8', fontSize: 11 }} 
            />

            <Tooltip 
              cursor={{ fill: '#f8fafc' }}
              contentStyle={{ 
                borderRadius: '12px', 
                border: 'none', 
                boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                fontSize: '12px',
                fontWeight: 'bold'
              }}
            />

            <Bar 
              dataKey="volume" 
              radius={[6, 6, 0, 0]} 
              barSize={32} 
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.day === currentDay ? '#10b981' : '#e2e8f0'} 
                  className="transition-all duration-500 hover:fill-emerald-400"
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TransactionChart;