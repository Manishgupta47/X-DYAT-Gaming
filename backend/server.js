import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import cors from "cors";
import path from 'path';
import { fileURLToPath } from 'url'; // Import fileURLToPath

// Initialize dotenv to access environment variables
dotenv.config();

// Initialize express app
const app = express();

// Convert import.meta.url to __dirname equivalent
const __filename = fileURLToPath(import.meta.url); // Get the filename path
const __dirname = path.dirname(__filename); // Get the directory path

// Enable CORS for the frontend
app.use(
  cors({
    origin: "http://localhost:5173",  // Update this URL based on your frontend's URL
    credentials: true,
  })
);

// Connect to MongoDB
connectDB();


app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Use the routes
app.use('/', authRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
