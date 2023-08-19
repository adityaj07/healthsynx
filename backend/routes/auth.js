import express from "express";
import {getAuthenticatedUser,signup, login, logout}  from "../controllers/auth.js";
const router = express.Router();

router.get("/", getAuthenticatedUser);
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

export default router;