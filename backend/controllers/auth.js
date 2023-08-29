import bcrypt from "bcrypt";
import User from "../models/user.js";
import { config } from "dotenv";
import { generateToken } from "../utils/authUtils.js";
import { connectDB } from "../database/dbConfig.js";

//connecting the DB
connectDB();

config({ path: process.env });

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

    //Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //create a new user
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    const token = generateToken(newUser);
    delete newUser.passowrd;

    res.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'strict' });

    res.status(201).json({
      status: "success",
      message: "User registered successfully",
      user: newUser,
    });
  } catch (error) {
    res.status(500).json({ status: "error", message: "An error occurred" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists in db
    const user = await User.findOne({ email }).select("+username +email +password");
    console.log(user);
    if (!user) {
      return res.status(404).json({ message: "User does not exist" });
    }

    // Check if password is correct
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = generateToken(user);
    delete user.passowrd;

    res.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'strict' });
    res.json({ status: 'success', message: 'Login successful', user: user });
  } catch (error) {
    res.status(500).json({ status: "error", message: "An error occurred", error: error.message });
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

export const getAuthenticatedUser = async (req, res) => {
  try {
    const authenticatedUser = req.user;
    res.json({ status: 'success', data: authenticatedUser });
  } catch (error) {
    res.status(500).json({ status: "error", message: "An error occurred", error: error.message });
  }
 
}