const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/soil-data", require("./routes/soilData"));

// Remove these routes for now until we create them
// app.use("/api/crops", require("./routes/crops"));
// app.use("/api/pests", require("./routes/pests"));

// Health check route
app.get("/health", (req, res) => {
  const dbState = mongoose.connection.readyState;
  res.json({
    status: "ok",
    dbState: dbState === 1 ? "connected" : "disconnected",
  });
});

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
