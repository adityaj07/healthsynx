import mongoose from "mongoose";
import { config } from "dotenv";
config({ path: process.ENV })

export async function connectDB(){
    try {
        const MONGO_URL = process.env.MONGO_URL; // Access the MONGO_URL environment variable
        if (!MONGO_URL) {
            throw new Error("MONGO_URL environment variable is not defined.");
        }

        await mongoose.connect(MONGO_URL);
        const connection = mongoose.connection;

        connection.on("connected",()=>{
            console.log("Mongodb connected succesfully");
        });

        connection.on("error",(err)=>{
            console.log("Mongodb connection error"+err);
            process.exit();
        });
    } catch (error) {
        console.log("Mongodb connection error" + error);
    }
}
