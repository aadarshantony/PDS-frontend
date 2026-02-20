import React, { useState } from "react";
import { X, Truck, Package, MapPin } from "lucide-react";
// Import mock data to populate the dealer dropdown
import { rationShops, inventory } from "../../data/mockData";

export default function ShipmentModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 text-xs font-bold bg-teal-600 text-white rounded-xl shadow-lg shadow-teal-600/20 hover:bg-teal-700 transition-all flex items-center gap-2"
      >
        + New Shipment
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-[32px] w-full max-w-md shadow-2xl overflow-hidden border border-slate-100 animate-in fade-in zoom-in duration-200">
            {/* Modal Header */}
            <div className="bg-slate-50 px-8 py-6 border-b flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-teal-100 text-teal-600 rounded-lg">
                  <Truck size={20} />
                </div>
                <h2 className="text-xl font-black text-slate-800 tracking-tight">Dispatch Stock</h2>
              </div>
              <button 
                onClick={() => setOpen(false)} 
                className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-400"
              >
                <X size={20} />
              </button>
            </div>

            {/* Form Content */}
            <div className="p-8 space-y-6">
              {/* Select Commodity */}
              <div>
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block">Select Item</label>
                <div className="relative">
                  <Package className="absolute left-3 top-3 text-slate-400" size={18} />
                  <select className="w-full pl-10 pr-4 py-3 bg-slate-50 border-none rounded-2xl text-sm font-bold text-slate-700 outline-none focus:ring-2 focus:ring-teal-500 transition-all appearance-none cursor-pointer">
                    {inventory.map(item => (
                      <option key={item.id}>{item.item} ({item.stock} {item.unit} available)</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Select Destination Shop */}
              <div>
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block">Destination Dealer</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 text-slate-400" size={18} />
                  <select className="w-full pl-10 pr-4 py-3 bg-slate-50 border-none rounded-2xl text-sm font-bold text-slate-700 outline-none focus:ring-2 focus:ring-teal-500 transition-all appearance-none cursor-pointer">
                    {rationShops.map(shop => (
                      <option key={shop.id}>{shop.dealer} - {shop.location}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Quantity Input */}
              <div>
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block">Dispatch Quantity (kg)</label>
                <input
                  type="number"
                  placeholder="e.g. 500"
                  className="w-full px-4 py-3 bg-slate-50 border-none rounded-2xl text-sm font-bold text-slate-700 outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                />
              </div>

              {/* Submit Button */}
              <button
                onClick={() => {
                  alert("Shipment Dispatched Successfully! Tracking ID: TRK-8829");
                  setOpen(false);
                }}
                className="w-full py-4 bg-slate-900 hover:bg-black text-white rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-xl shadow-slate-200 active:scale-[0.98]"
              >
                Confirm Dispatch
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}