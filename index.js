import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import route from './routes/noteRoutes.js'; // Import the routes
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

app.use(bodyParser.json());

const PORT = process.env.PORT || 500;
const MONGOURL = process.env.MONGO_URL;

// Use the note routes
app.use('/api', route);

// Connect to the MongoDB database
mongoose.connect(MONGOURL)
  .then(() => {
    console.log("Database connected successfully");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
