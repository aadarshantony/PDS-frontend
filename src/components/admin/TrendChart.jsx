import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { trendData } from '../../data/mockData'; // Ensure path matches consolidated file

const TrendChart = () => (
  <div className="bg-white p-6 rounded-xl border h-[400px] shadow-sm">
    <div className="flex justify-between items-center mb-6">
      <h4 className="font-bold text-slate-800">Stock Distribution Trend (tonnes)</h4>
      <div className="flex gap-4 text-xs font-medium text-slate-500">
        <span>Feb 2025 - Feb 2026</span>
      </div>
    </div>
    <ResponsiveContainer width="100%" height="90%">
      <LineChart data={trendData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
        <XAxis 
          dataKey="name" 
          axisLine={false} 
          tickLine={false} 
          tick={{fill: '#94a3b8', fontSize: 12}}
          dy={10}
        />
        <YAxis 
          axisLine={false} 
          tickLine={false} 
          tick={{fill: '#94a3b8', fontSize: 12}}
        />
        <Tooltip 
          contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
        />
        <Legend iconType="circle" verticalAlign="top" align="right" height={36}/>
        <Line type="monotone" dataKey="Wheat" stroke="#f59e0b" strokeWidth={3} dot={{r: 4, fill: '#f59e0b', strokeWidth: 2, stroke: '#fff'}} activeDot={{ r: 6 }} />
        <Line type="monotone" dataKey="Rice" stroke="#14b8a6" strokeWidth={3} dot={{r: 4, fill: '#14b8a6', strokeWidth: 2, stroke: '#fff'}} activeDot={{ r: 6 }} />
        <Line type="monotone" dataKey="Sugar" stroke="#ef4444" strokeWidth={3} dot={{r: 4, fill: '#ef4444', strokeWidth: 2, stroke: '#fff'}} activeDot={{ r: 6 }} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default TrendChart;