import express from 'express';
import {  registerUser , loginUser } from '../../controllers/Auth/index.js';
import authenticate from '../../middleware/auth.middleware.js';

const router = express.Router();

// Register route
router.post('/register', registerUser);
router.post("/login", loginUser)
router.post("/check-auth" , authenticate, (req, res) => {
  res.status(200).json({
    success: true,
    message: "User is authenticated",
    user: req.user,
  });
});



export default router;