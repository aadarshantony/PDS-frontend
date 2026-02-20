import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import CitizenPortal from './pages/CitizenPortal';
import RationShopDealer from './pages/RationShopDealer';
import WarehousePanel from './pages/WarehousePanel';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Set one of these as the default index so you see something! */}
        <Route index element={<WarehousePanel />} /> 
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/citizen" element={<CitizenPortal />} />
        <Route path="/dealer" element={<RationShopDealer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;