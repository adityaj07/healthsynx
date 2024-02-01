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
server.use(express.json());
server.use(cookieParser());
server.use("/auth",authRouter);
server.use('/api/exercises', exerciseRoutes);

  
server.listen(process.env.PORT, () => {
    console.log("Server Started on port " + process.env.PORT);
    // console.log(process.env.FRONTEND_URL)
  })