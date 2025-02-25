import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import SoilHealth from './pages/SoilHealth';
import CropRecommendations from './pages/CropRecommendations';
import PestPrediction from './pages/PestPrediction';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/soil-health" element={<SoilHealth />} />
            <Route path="/crop-recommendations" element={<CropRecommendations />} />
            <Route path="/pest-prediction" element={<PestPrediction />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App; 