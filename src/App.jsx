import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CitizenPortal from './pages/CitizenPortal'; // Import the new page

// Remaining Placeholder Components
import AdminDashboard from './pages/AdminDashboard';
import RationShopDealer from './pages/RationShopDealer'
import WarehousePanel from './pages/WarehousePanel'

const WarehouseDash = () => <div className="p-20 text-center">Warehouse Management Content</div>;
const DealerDash = () => <div className="p-20 text-center">Ration Shop Dealer Content</div>;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;