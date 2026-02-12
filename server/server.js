import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import authRoutes from "./routes/Auth/auth.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;


// adding cors
const corsOptions = {
   origin : process.env.CLIENT_URL,
    // origin : "http://localhost:5173/",
    method : ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders : ["Content-Type", "Authorization"]
}
app.use(express.json());
 app.use(cors(corsOptions));

// app.use(express.urlencoded({ extended: true }));

// db connection
mongoose.connect(MONGO_URL)
    .then(() => console.log("MongoDB connected successfully"))
    .catch((err) => console.error("MongoDB connection error:", err));

// global error handler
app.use((err , req,res, next) =>{
    console.log(err.stack);
    res.status(500).json({
        success  : false,
        message : "something went wrong."
    })
})

// routes config
app.use("/auth" , authRoutes)



app.listen(PORT, () =>{
    console.log(`app run on ${PORT}`);
    
})