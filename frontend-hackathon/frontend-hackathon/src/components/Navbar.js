import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaSeedling, FaBug, FaChartLine, FaCog } from 'react-icons/fa';
import { GiPlantRoots } from 'react-icons/gi';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>SmartSoil</h1>
      </div>
      <div className="nav-links">
        <Link to="/" className={`nav-link ${isActive('/')}`}>
          <FaHome /> Dashboard
        </Link>
        <Link to="/soil-health" className={`nav-link ${isActive('/soil-health')}`}>
          <GiPlantRoots /> Soil Health
        </Link>
        <Link to="/crop-recommendations" className={`nav-link ${isActive('/crop-recommendations')}`}>
          <FaSeedling /> Crop Recommendations
        </Link>
        <Link to="/pest-prediction" className={`nav-link ${isActive('/pest-prediction')}`}>
          <FaBug /> Pest Prediction
        </Link>
        <Link to="/analytics" className={`nav-link ${isActive('/analytics')}`}>
          <FaChartLine /> Analytics
        </Link>
        <Link to="/settings" className={`nav-link ${isActive('/settings')}`}>
          <FaCog /> Settings
        </Link>
      </div>
    </nav>
  );
}

export default Navbar; 