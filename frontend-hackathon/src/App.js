import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import SoilHealth from './pages/SoilHealth';
import CropRecommendations from './pages/CropRecommendations';
import PestPrediction from './pages/PestPrediction';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { useAuth } from './context/AuthContext';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

// Public Route Component (accessible only when not logged in)
const PublicRoute = ({ children }) => {
  const { user } = useAuth();
  if (user) {
    return <Navigate to="/" />;
  }
  return children;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/signup" element={
              <PublicRoute>
                <Signup />
              </PublicRoute>
            } />
            <Route path="/login" element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            } />
            <Route path="/*" element={
              <ProtectedRoute>
                <>
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
                </>
              </ProtectedRoute>
            } />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App; 