const mongoose = require("mongoose");

const connectDB = async (url) => {
  try {
    await mongoose.connect(url);
    console.log("✅ Connected to MongoDB (task-manager)");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    process.exit(1); // stop the app if DB fails to connect
  }
};

module.exports = connectDB;
