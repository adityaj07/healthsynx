import { config } from "dotenv";
import express from "express";
const server = express();
import cors from "cors"; 
import cookieParser from "cookie-parser"
import authRouter from "./routes/auth.js";

config({ path: process.ENV })
// dotenv.config()
//bodyParser
server.use(express.json());
server.use(cors({
  credentials: true,
  origin: process.env.FRONTEND_URL,
}));
server.use(cookieParser());
server.use("/auth",authRouter)

// console.log(process.env.PORT)
  
server.listen(process.env.PORT, () => {
    console.log("Server Started on port "+process.env.PORT);
  })