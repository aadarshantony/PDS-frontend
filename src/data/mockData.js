// --- ADMIN DASHBOARD DATA (As you provided) ---
export const statsData = [
  { label: 'Total Warehouses', value: '24', sub: '8 states covered', trend: '+ 2% new this month', color: 'bg-white' },
  { label: 'Active Ration Shops', value: '1,847', sub: '93% operational', trend: '', color: 'bg-teal-600', dark: true },
  { label: 'Shipments Today', value: '63', sub: '18 in transit', trend: '↑ 12% vs yesterday', color: 'bg-white' },
  { label: 'Alerts Active', value: '7', sub: '2 critical', trend: '', color: 'bg-red-50', alert: true },
];

export const trendData = [
  { name: 'Sep', Wheat: 4200, Rice: 3000, Sugar: 800 },
  { name: 'Oct', Wheat: 3800, Rice: 2900, Sugar: 820 },
  { name: 'Nov', Wheat: 4500, Rice: 3500, Sugar: 900 },
  { name: 'Dec', Wheat: 5000, Rice: 3800, Sugar: 1000 },
  { name: 'Jan', Wheat: 4800, Rice: 3600, Sugar: 950 },
  { name: 'Feb', Wheat: 4900, Rice: 3700, Sugar: 980 },
];

export const commodityData = [
  { name: 'Wheat', value: 38, fill: '#f59e0b' },
  { name: 'Rice', value: 31, fill: '#14b8a6' },
  { name: 'Sugar', value: 16, fill: '#a855f7' },
  { name: 'Pulses', value: 10, fill: '#3b82f6' },
  { name: 'Oil', value: 5, fill: '#ef4444' },
];

// --- WAREHOUSE & SHOP INVENTORY (High Volume) ---
export const inventory = [
  { id: "INV-001", item: "Matta Rice", stock: 12500, unit: "kg", warehouse: "Kochi-HQ", status: "Available" },
  { id: "INV-002", item: "Sona Masuri", stock: 8400, unit: "kg", warehouse: "Kochi-HQ", status: "Available" },
  { id: "INV-003", item: "Sugar (Fine)", stock: 450, unit: "kg", warehouse: "Aluva-W1", status: "Low Stock" },
  { id: "INV-004", item: "Whole Wheat", stock: 9200, unit: "kg", warehouse: "Kochi-HQ", status: "Available" },
  { id: "INV-005", item: "Palm Oil", stock: 0, unit: "Ltrs", warehouse: "Aluva-W1", status: "Out of Stock" },
  { id: "INV-006", item: "Kerosene", stock: 1200, unit: "Ltrs", warehouse: "Piravom-W2", status: "Available" },
  { id: "INV-007", item: "Moong Dal", stock: 320, unit: "kg", warehouse: "Piravom-W2", status: "Low Stock" },
  { id: "INV-008", item: "Atta", stock: 4100, unit: "kg", warehouse: "Kochi-HQ", status: "Available" },
];

// --- RATION SHOP LISTING ---
export const rationShops = [
  { id: "ARD-104", dealer: "Suresh Kumar", location: "Pampakuda", license: "L-9921", status: "Active" },
  { id: "ARD-215", dealer: "Anwar Ali", location: "Muvattupuzha", license: "L-4410", status: "Active" },
  { id: "ARD-088", dealer: "Mary Joseph", location: "Piravom", license: "L-1102", status: "Inactive" },
  { id: "ARD-312", dealer: "Biju P.K.", location: "Koothattukulam", license: "L-8831", status: "Active" },
  { id: "ARD-441", dealer: "Ravi Shankar", location: "Ernakulam South", license: "L-2219", status: "Active" },
];

// --- CITIZEN DATA ---
export const citizens = [
  { id: "1610-9901-2231", name: "Adarsh Antony", type: "Priority", members: 4, monthlyQuota: "25kg", balance: "₹45" },
  { id: "1610-1120-4452", name: "Rahul Nair", type: "Non-Priority", members: 2, monthlyQuota: "12kg", balance: "₹120" },
  { id: "1610-8831-5541", name: "Meera Krishnan", type: "AAY", members: 5, monthlyQuota: "35kg", balance: "₹0" },
];