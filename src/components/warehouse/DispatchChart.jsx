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

export default function DispatchChart({ data }) {
  // Logic: Identify today for a highlight effect (Friday based on system time)
  const currentDay = "Fri";

  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm transition-all hover:shadow-md">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="font-black text-gray-800 text-sm tracking-tight uppercase">Dispatch Volume</h3>
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-0.5">MT / Daily Performance</p>
        </div>
        <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
      </div>

      <div className="h-48 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 0, right: 0, left: -25, bottom: 0 }}>
            {/* Clean grid lines */}
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
              dataKey="value" 
              radius={[6, 6, 0, 0]} 
              barSize={24} 
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.day === currentDay ? '#0d9488' : '#e2e8f0'} 
                  className="transition-all duration-300 hover:fill-teal-400"
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-50 flex justify-between items-center">
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Efficiency Rate</span>
        <span className="text-xs font-black text-teal-600">+12.5%</span>
      </div>
    </div>
  );
}