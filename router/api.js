import express from 'express';
import { login, ProfileUpdate, register, UserInfo,logout } from '../services/userServices.js';
import AuthMiddleware from '../Middleware/AuthMiddleware.js';

const router = express.Router();
router.post("/register",register)
router.post("/login",login)
router.get("/user",AuthMiddleware,UserInfo)
router.get("/delete",AuthMiddleware,logout)
router.post("/profile",AuthMiddleware,ProfileUpdate)

export default router;
