import { config } from "dotenv";
import jwt from "jsonwebtoken";

config({ path: process.env });

// Generate JWT token
export const generateToken = (user) => {
  const tokenData = {
    id: user._id,
    username: user.username,
    email: user.email,
  };

  
  return jwt.sign(tokenData, process.env.JWT_SECRET_KEY, {
    expiresIn: "1h",
  });
};
