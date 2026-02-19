export const stats = [
  { label: 'Total Capacity', value: '20,500 kg', sub: 'Current warehouse', icon: 'Box' },
  { label: 'Utilization', value: '62%', sub: '12,780 kg in stock', icon: 'Database', color: 'bg-teal-600 text-white' },
  { label: 'Dispatched Today', value: '3,200 kg', sub: '4 shipments', icon: 'Truck', trend: '+8% vs yesterday' },
  { label: 'Low Stock Items', value: '3', sub: 'Needs reorder', icon: 'AlertTriangle', color: 'bg-orange-50' },
];

export const inventory = [
  { name: 'Wheat', current: 4800, total: 8000, status: 'Normal', color: 'bg-green-500' },
  { name: 'Rice', current: 1200, total: 6000, status: 'Low Stock', threshold: 1500, color: 'bg-red-500' },
  { name: 'Sugar', current: 380, total: 2000, status: 'Critical', threshold: 400, color: 'bg-red-600' },
  { name: 'Pulses', current: 900, total: 2500, status: 'Normal', color: 'bg-orange-400' },
];

export const chartData = [
  { day: 'Mon', value: 1200 }, { day: 'Tue', value: 1800 }, { day: 'Wed', value: 900 },
  { day: 'Thu', value: 2100 }, { day: 'Fri', value: 1650 }, { day: 'Sat', value: 800 }, { day: 'Sun', value: 400 },
];