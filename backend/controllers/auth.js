import bcrypt from "bcrypt";
import User from "../models/user.js";
import jwt from "jsonwebtoken";
import { config } from "dotenv";

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

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      status: "success",
      message: "User registered successfully",
      user: newUser,
    });
  } catch (error) {
    res
      .status(500)
      .json({
        status: "error",
        message: "An error occurred",
        error: error.message,
      });
  }
};

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

    // Generate token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });
    res.json({
      status: "success",
      message: "Login successful",
      user: { username: user.username, email: user.email },
    });
  } catch (error) {
    res
      .status(500)
      .json({
        status: "error",
        message: "An error occurred",
        error: error.message,
      });
  }
};

export const logout = (req, res) => {
  try {
    // Clear the token cookie to log the user out
    res.clearCookie("token");
    res.status(200).json({ message: "Logout Successful" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
