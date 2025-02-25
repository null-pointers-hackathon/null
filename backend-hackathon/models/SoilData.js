const mongoose = require("mongoose");

const soilDataSchema = new mongoose.Schema({
  fieldId: {
    type: String,
    required: true,
  },
  temperature: {
    type: Number,
    required: true,
  },
  moisture: {
    type: Number,
    required: true,
  },
  pH: {
    type: Number,
    required: true,
  },
  nitrogen: {
    type: Number,
    required: true,
  },
  phosphorus: {
    type: Number,
    required: true,
  },
  potassium: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("SoilData", soilDataSchema);
