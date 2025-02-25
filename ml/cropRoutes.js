const express = require('express');
const router = express.Router();
const { predictCrop } = require('../services/cropPredictionService');

router.post('/predict-crop', async (req, res) => {
  try {
    const prediction = await predictCrop(req.body);
    res.json(prediction);
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
});

module.exports = router; 