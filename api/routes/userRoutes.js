import bcrypt from "bcrypt";
import User from "../models/User.js";
import express, { Router } from "express";
import {
  adminlogin,
  login,
  logout,
  register,
} from "../controllers/authController.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.post("/adminlogin", adminlogin);

export default router;
