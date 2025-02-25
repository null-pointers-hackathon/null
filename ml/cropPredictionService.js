const axios = require('axios');

const FLASK_API_URL = process.env.FLASK_API_URL || 'http://localhost:5001';

const predictCrop = async (soilData) => {
  try {
    const response = await axios.post(`${FLASK_API_URL}/api/v1/predict`, soilData);
    return response.data;
  } catch (error) {
    console.error('Error predicting crop:', error);
    throw error;
  }
};

module.exports = {
  predictCrop
}; 