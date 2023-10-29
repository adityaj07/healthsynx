import { config } from "dotenv";
import express from "express";
const server = express();
import cors from "cors"; 
import cookieParser from "cookie-parser"
import authRouter from "./routes/auth.js";
import exerciseRoutes from './routes/exerciseRoutes.js';
// import calorieTracker from './routes/calorieTracker.js';
// import goalRouter from "./routes/goal.js";

config({ path: process.ENV })
// dotenv.config()
//bodyParser
server.use(express.json());
server.use(cors({
  credentials: true,
  origin: process.env.FRONTEND_URL,
}));
server.use(cookieParser());
server.use("/auth",authRouter);
server.use('/api/exercises', exerciseRoutes);
// server.use('/api/calorieTracker', calorieTracker);
// server.use("/goals",goalRouter);

// console.log(process.env.PORT)
  
server.listen(process.env.PORT, () => {
    console.log("Server Started on port " + process.env.PORT);
  })