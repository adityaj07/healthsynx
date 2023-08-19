import bcrypt from "bcrypt";
import User from "../models/user.js";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
import { generateToken } from "../utils/authUtils.js";
import { connectDB } from "../database/dbConfig.js";

//connect to db
connectDB();

config({ path: process.env });

export const getAuthenticatedUser = async (req, res) => {
  const token = req.cookies.token;

  try {
    if(!token){
      return res.status(404).json("User not found");
    }
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    // console.log(decodedToken)
    const authenticatedUserId = decodedToken.id;

    const user = await User.findById(authenticatedUserId).select("+email +username").exec();

    res.status(200).json({message: "User found!!", user})
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

// Signup
export const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if user with the same email or username already exists
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      if (existingUser.email === email) {
        return res.status(409).json({ message: "Email already exists" });
      } else {
        return res.status(409).json({ message: "Username not available" });
      }
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });


    const savedUser = await newUser.save();

    res.status(201).json({ message: "User created successfully"});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Login
export const login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Check if user exists in db
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: "User does not exist" });
      }
  
      // Check if password is correct
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
  
      // Create and sign the JWT token
      const token = generateToken(user);
  
      // Setting cookies
      res.cookie("token", token, {
        httpOnly: true,
      }); 
  
      res.status(200).json({ message: "Login Successful", token });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


//logout
export const logout = (req, res) => {
  try {
    // Clear the token cookie to log the user out
    res.clearCookie("token");
    res.status(200).json({ message: "Logout Successful" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
