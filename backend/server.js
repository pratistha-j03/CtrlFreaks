import dotenv from "dotenv";
import express from "express";
import connectDB from "./utils/connectDB.js";
import cors from "cors";

dotenv.config();
const app=express();

app.use(cors({
    origin:"http://localhost:5173",
    methods:["POST","PUT","DELETE","PATCH"],
    credentials:true
}));

connectDB();

const PORT=process.env.PORT;

app.listen(PORT,()=>{
    console.log("App is running on PORT : ",PORT);
})
