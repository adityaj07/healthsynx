import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
import { connectDB } from "../database/dbConfig.js";

//connect to DB
connectDB()


//signup
export const signup = async (req, res) => { 
    try {
        const {username, email, password} = req.body;
        console.log(req.body);

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword
        })

        const savedUser = await newUser.save();
        res.status(201).json({message: "User created successfully", savedUser})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

//login
export const login = async (req, res)=>{
    try {
        const {email, password} = req.body;

        //check if user exists in db
        const user = await User.findOne({email: email}).exec();
        if(!user) return res.status(400).json({message: "User does not exist"});

        //check if password is correct
        const validPassword = await bcrypt.compare(password, user.password);
        if(!validPassword) return res.status(400).json({message: "Invalid credentials"});

        //create token data
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        }

        //create token
        const token = jwt.sign(tokenData, process.env.JWT_SECRET_KEY, {
            expiresIn:"1h",
        })

        //setting cookies
        const response = res.status(200).json({
            message: "Login Successful"
        })

        return response.cookies.set("token", token, {
            httpOnly: true
        })

    } catch (error) {
        res.status(500).json({error: error.message});
    }
}