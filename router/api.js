import express from 'express';
import { Login, ProfileUpdate, Register, UserInfo } from '../services/userServices.js';
import AuthMiddleware from '../Middleware/AuthMiddleware.js';

const router = express.Router();
router.post("/register",Register)
router.post("/login",Login)
router.get("/user",AuthMiddleware,UserInfo)
router.post("/profile",AuthMiddleware,ProfileUpdate)

export default router;
