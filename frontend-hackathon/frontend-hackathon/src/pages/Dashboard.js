import React from 'react';
import { FaThermometer, FaTint, FaVial, FaExclamationCircle, FaLeaf } from 'react-icons/fa';
import Calendar from '../components/Calendar';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-main">
        <header className="dashboard-header">
          <h1>Farm Dashboard</h1>
          <div className="weather-widget">
            <h3>Current Weather</h3>
            <p>25°C | Partly Cloudy</p>
          </div>
        </header>

        <div className="dashboard-grid">
          <div className="dashboard-card soil-health">
            <h2>Soil Health Overview</h2>
            <div className="metrics">
              <div className="metric">
                <FaThermometer />
                <span>Temperature</span>
                <h3>24°C</h3>
              </div>
              <div className="metric">
                <FaTint />
                <span>Moisture</span>
                <h3>65%</h3>
              </div>
              <div className="metric">
                <FaVial />
                <span>pH Level</span>
                <h3>6.5</h3>
              </div>
            </div>
          </div>

          <div className="dashboard-card recommendations">
            <h2>Current Recommendations</h2>
            <ul>
              <li>Optimal time to plant wheat in Field A</li>
              <li>Increase irrigation in Field B</li>
              <li>Monitor nitrogen levels in Field C</li>
            </ul>
          </div>

          <div className="dashboard-card alerts">
            <h2>Active Alerts</h2>
            <div className="alert-list">
              <div className="alert warning">
                <span className="alert-icon">⚠️</span>
                <div className="alert-content">
                  <h4>Low Moisture Level</h4>
                  <p>Field B requires immediate irrigation</p>
                </div>
              </div>
              <div className="alert info">
                <span className="alert-icon">ℹ️</span>
                <div className="alert-content">
                  <h4>Optimal Planting Conditions</h4>
                  <p>Perfect conditions for corn in Field A</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-sidebar">
        <Calendar />
        
        <div className="tasks-section">
          <h2>Today</h2>
          <div className="task-list">
            <div className="task-item warning">
              <FaExclamationCircle className="task-icon" />
              <div className="task-content">
                <h3>You have to add the Corn Earworm Insecticides</h3>
              </div>
            </div>
            <div className="task-item">
              <FaLeaf className="task-icon" />
              <div className="task-content">
                <h3>Harvesting</h3>
                <p>Wheat field</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard; 