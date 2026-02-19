import { stats } from "../../data/mockData";

export default function StatGrid() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {stats.map((stat, i) => (
        <div key={i} className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">{stat.label}</p>
          <h2 className="text-2xl font-bold">{stat.value}</h2>
        </div>
      ))}
    </div>
  );
}
