import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaGoogle, FaApple, FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import './Signup.css';
import { useAuth } from '../context/AuthContext';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
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

    // Simulate user registration
    try {
      // Store user in localStorage (in a real app, this would be a server call)
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      
      // Check if email already exists
      if (users.some(user => user.email === formData.email)) {
        setError('Email already registered');
        return;
      }

      // Add new user
      users.push(formData);
      localStorage.setItem('users', JSON.stringify(users));

      // Show success message and redirect
      alert('Registration successful! Please login.');
      navigate('/login');
    } catch (err) {
      setError('Registration failed. Please try again.');
    }
  };

  const handleSocialLogin = (provider) => {
    console.log(`${provider} login clicked`);
    // Implement social login logic here
  };

  return (
    <div className="signup-container">
      <div className="signup-form-container">
        <div className="logo">
          <h1>Crop<span>Intel</span></h1>
        </div>
        <h2>Your farming journey starts here!</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="input-icon">
              <FaUser className="icon" />
              <input
                type="text"
                name="fullName"
                placeholder="Full name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

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
            Sign up
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

          <p className="login-link">
            Already have an account? <a href="/login">Login here</a>
          </p>
        </form>
      </div>
      <div className="brand-logo">
        <img src="/leaf-logo.svg" alt="CropIntel Logo" />
      </div>
    </div>
  );
};

export default Signup; 