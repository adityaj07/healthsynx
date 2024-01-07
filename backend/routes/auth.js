import express from "express";
import {
  getAuthenticatedUser,
  signup,
  login,
  logout,
} from "../controllers/auth.js";
import { verifytoken } from "../middleware/auth.js";
const router = express.Router();

router.get("/", verifytoken, getAuthenticatedUser);
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

export default router;
