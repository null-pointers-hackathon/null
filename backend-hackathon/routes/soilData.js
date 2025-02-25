const express = require("express");
const router = express.Router();
const SoilData = require("../models/SoilData");

// Get all soil data
router.get("/", async (req, res) => {
  try {
    const soilData = await SoilData.find().sort({ timestamp: -1 });
    res.json(soilData);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Add new soil data
router.post("/", async (req, res) => {
  try {
    const newSoilData = new SoilData(req.body);
    const soilData = await newSoilData.save();
    res.json(soilData);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
