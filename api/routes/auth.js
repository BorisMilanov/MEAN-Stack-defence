import express from 'express';
import { register, login, registerAdmin } from '../controllers/auth.controller.js';
const router = express.Router();

router.post("/register-admin", registerAdmin);
router.post("/register", register);
router.post("/login", login);

export default router;