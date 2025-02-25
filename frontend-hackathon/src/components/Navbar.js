import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaSeedling, FaBug, FaChartLine, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { GiPlantRoots } from 'react-icons/gi';
import './Navbar.css';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const location = useLocation();
  const { logout } = useAuth();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  const handleLogout = () => {
    logout();
    // Navigation will be handled by ProtectedRoute
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
        <button onClick={handleLogout} className="nav-link">
          <FaSignOutAlt /> Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar; 