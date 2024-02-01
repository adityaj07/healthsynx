import { config } from "dotenv";
import express from "express";
const server = express();
import cors from "cors"; 
import cookieParser from "cookie-parser"
import authRouter from "./routes/auth.js";
import exerciseRoutes from './routes/exerciseRoutes.js';
;

config({ path: process.env })

server.use(cors({
  credentials: true,
  origin: process.env.FRONTEND_URL,
  methods: ["POST", "GET"]
}));
// Add middleware to enable CORS
server.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', process.env.FRONTEND_URL);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
server.use(express.json());
server.use(cookieParser());
server.use("/auth",authRouter);
server.use('/api/exercises', exerciseRoutes);

 

server.listen(process.env.PORT, () => {
    console.log("Server Started on port " + process.env.PORT);
    // console.log(process.env.FRONTEND_URL)
  })