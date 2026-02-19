import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CitizenPortal from './pages/CitizenPortal';
import AdminDashboard from './pages/AdminDashboard';
import RationShopDealer from './pages/RationShopDealer'
import WarehousePanel from './pages/WarehousePanel'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/warehouse" element={<WarehousePanel />} />
        <Route path="/dealer" element={<RationShopDealer />} />
        <Route path="/citizen" element={<CitizenPortal />} />
      </Routes>
    </Router>
  );
}

export default App;