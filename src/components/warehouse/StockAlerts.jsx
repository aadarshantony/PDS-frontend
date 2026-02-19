import { alerts } from "../../data/mockData";

export default function StockAlerts() {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-4">Alerts</h2>

      {alerts.map((alert) => (
        <div key={alert.id} className="mb-2 text-red-600">
          ⚠ {alert.message}
        </div>
      ))}
    </div>
  );
}
