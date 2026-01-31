// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import uploadRoutes from "./routes/upload.routes.js";
// import vehicleRoutes from "./routes/vehicleRoutes.js";


// dotenv.config(); // MUST be at the top

// import cloudinary from "./config/cloudinary.js";

// const app = express();
// app.use(cors());
// app.use(express.json());

// // console.log("CLOUD NAME:", process.env.CLOUDINARY_NAME);
// // console.log("API KEY:", process.env.CLOUDINARY_API_KEY);
// // console.log("API SECRET:", process.env.CLOUDINARY_API_SECRET);


// app.use("/api", uploadRoutes);
// app.use("/api", vehicleRoutes);  

// console.log("Cloudinary config loaded");

// app.listen(5000, () => {
//   console.log("Server running on port 5000");
// });


// server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

// Import routes
import uploadRoutes from "./routes/upload.routes.js";
import vehicleRoutes from "./routes/vehicleRoutes.js";

// Import Cloudinary config
import cloudinary from "./config/cloudinary.js";

// Load environment variables
dotenv.config(); // MUST be at the top

// Initialize Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // to parse JSON request bodies

// MongoDB connection
const DB_URL = process.env.MONGO_URI; // Add your MongoDB Atlas URI in .env
mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Routes
app.use("/api", uploadRoutes);
app.use("/api", vehicleRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Server is running ✅");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log("Cloudinary config loaded:", cloudinary.config());
});
