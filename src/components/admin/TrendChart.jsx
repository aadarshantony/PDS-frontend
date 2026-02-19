import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { trendData } from '../../data/adminMockData';

const TrendChart = () => (
  <div className="bg-white p-6 rounded-xl border h-[400px]">
    <h4 className="font-bold mb-6">Stock Distribution Trend (tonnes)</h4>
    <ResponsiveContainer width="100%" height="90%">
      <LineChart data={trendData}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="Wheat" stroke="#f59e0b" strokeWidth={2} dot={{r: 4}} />
        <Line type="monotone" dataKey="Rice" stroke="#14b8a6" strokeWidth={2} dot={{r: 4}} />
        <Line type="monotone" dataKey="Sugar" stroke="#ef4444" strokeWidth={2} dot={{r: 4}} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);
export default TrendChart;