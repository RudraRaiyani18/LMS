import express from 'express';
import {  registerUser , loginUser } from '../../controllers/Auth/auth.controller.js';
// import authenticate from '../../middleware/auth.middleware.js';

const router = express.Router();

// Register route
router.post('/register', registerUser);
router.post("/login", loginUser)
// router.get("/check-auth" , authenticate, (req, res) => {

//   const user = req.user; // Access the authenticated user from the request object

//   res.status(200).json({
//     success: true,
//     message: "User is authenticated",
//     data : {
//       user ,
//     },
//   });
//     //  res.json({ success: true, user: req.user });


// });



export default router;