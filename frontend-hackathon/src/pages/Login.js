import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaGoogle, FaApple, FaEnvelope, FaLock } from 'react-icons/fa';
import './Login.css';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    try {
      // Get users from localStorage
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find(u => 
        u.email === formData.email && u.password === formData.password
      );

      if (user) {
        // Login successful
        login(user);
        navigate('/');
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    }
  };

  const handleSocialLogin = (provider) => {
    console.log(`${provider} login clicked`);
    // Implement social login logic here
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <div className="logo">
          <h1>Crop<span>Intel</span></h1>
        </div>
        <h2>Welcome back!</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="input-icon">
              <FaEnvelope className="icon" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <div className="input-icon">
              <FaLock className="icon" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <button type="submit" className="submit-btn">
            Log in
          </button>

          <div className="divider">
            <span>Or</span>
          </div>

          <div className="social-login">
            <button
              type="button"
              className="google-btn"
              onClick={() => handleSocialLogin('Google')}
            >
              <FaGoogle />
            </button>
            <button
              type="button"
              className="apple-btn"
              onClick={() => handleSocialLogin('Apple')}
            >
              <FaApple />
            </button>
          </div>

          <p className="signup-link">
            You don't have an account? <a href="/signup">Sign up</a>
          </p>
        </form>
      </div>
      <div className="brand-logo">
        <img src="/leaf-logo.svg" alt="CropIntel Logo" />
      </div>
    </div>
  );
};

export default Login; 